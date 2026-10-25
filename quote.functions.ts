import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";
import type { Database } from "@/integrations/supabase/types";

const quoteSchema = z.object({
  name: z.string().trim().min(1, "Please tell us your name").max(100),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  service: z.string().trim().min(1, "Pick the kind of sign you need").max(80),
  details: z
    .string()
    .trim()
    .min(10, "Tell us a little more — at least a sentence.")
    .max(2000),
});

export type QuoteInput = z.input<typeof quoteSchema>;

export const submitQuoteRequest = createServerFn({ method: "POST" })
  .inputValidator((data) => quoteSchema.parse(data))
  .handler(async ({ data }) => {
    const key = process.env["SUPABASE_PUBLISHABLE_KEY"]!;
    const supabasePublic = createClient<Database>(
      process.env["SUPABASE_URL"]!,
      key,
      {
        auth: { persistSession: false },
        // Opaque sb_ keys aren't JWTs; send only apikey, not the default
        // Authorization bearer header.
        global: {
          fetch: (input, init) => {
            const h = new Headers(init?.headers);
            if (key.startsWith("sb_") && h.get("Authorization") === `Bearer ${key}`) {
              h.delete("Authorization");
            }
            h.set("apikey", key);
            return fetch(input, { ...init, headers: h });
          },
        },
      },
    );

    const { error } = await supabasePublic.from("quote_requests").insert({
      name: data.name,
      email: data.email,
      phone: data.phone || null,
      company: data.company || null,
      service: data.service,
      details: data.details,
    });

    if (error) {
      console.error("quote insert failed", error.message);
      throw new Error("We couldn't send your request. Please call us instead.");
    }

    return { ok: true as const };
  });
