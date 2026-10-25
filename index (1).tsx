import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import workChannel from "@/assets/work-channel-letters.jpg";
import workMonument from "@/assets/work-monument.jpg";
import workVan from "@/assets/work-van-wrap.jpg";
import { QuoteForm } from "@/components/quote-form";
import { services } from "@/lib/services";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Texan Signs — Houston's In-House Sign Shop Since 2000" },
      {
        name: "description",
        content:
          "Channel letters, monuments, pylons, LED and vehicle wraps — designed, permitted, fabricated and installed in West Houston.",
      },
      {
        property: "og:title",
        content: "Texan Signs — Houston's In-House Sign Shop",
      },
      {
        property: "og:description",
        content:
          "Custom commercial signage built under one roof in West Houston since 2000.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const steps = [
  [
    "Consult & Quote",
    "Send your logo and idea. Written quote in ~2 business days.",
  ],
  [
    "Design Approval",
    "We mock up your sign on a photo of your actual building.",
  ],
  [
    "Permit & Fabricate",
    "We pull permits while our shop builds your sign.",
  ],
  ["Install & Support", "Licensed crew installs — and we stand behind it."],
];

function Index() {
  return (
    <div className="min-h-screen">
      <div className="bg-primary py-2 text-center text-sm font-semibold tracking-wide text-primary-foreground">
        Serving Houston since 2000 · Call (713) 000-0000
      </div>
      <header className="sticky top-0 z-50 border-b bg-background shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/" className="font-display text-2xl">
            TEXAN<span className="text-primary">★</span>SIGNS
          </a>
          <nav className="hidden gap-8 font-semibold md:flex">
            <a href="#services" className="hover:text-primary">
              Services
            </a>
            <a href="#process" className="hover:text-primary">
              Process
            </a>
            <a href="#why" className="hover:text-primary">
              Why Us
            </a>
            <a href="#quote" className="hover:text-primary">
              Get a Quote
            </a>
          </nav>
          <a
            href="#quote"
            className="rounded-sm bg-primary px-5 py-2.5 font-bold uppercase tracking-wide text-primary-foreground hover:opacity-90"
          >
            Get a Quote
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden bg-ink text-ink-foreground">
        <img
          src={hero}
          alt="Illuminated storefront sign at dusk in Houston"
          width={1600}
          height={1008}
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6 py-28 md:py-40">
          <p className="mb-4 font-bold uppercase tracking-[0.3em] text-accent">
            Houston's Sign Shop
          </p>
          <h1 className="max-w-3xl text-5xl leading-[0.95] md:text-7xl">
            Signs that get you <span className="text-primary">noticed.</span>{" "}
            Built in-house.
          </h1>
          <p className="mt-6 max-w-xl text-lg opacity-85">
            Channel letters, monuments, pylons and vehicle graphics — designed,
            permitted, fabricated and installed under one roof in West Houston.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#quote"
              className="rounded-sm bg-primary px-8 py-4 font-bold uppercase tracking-wide text-primary-foreground hover:opacity-90"
            >
              Request a Free Quote
            </a>
            <a
              href="#services"
              className="rounded-sm border-2 border-ink-foreground/60 px-8 py-4 font-bold uppercase tracking-wide hover:bg-ink-foreground hover:text-ink"
            >
              Explore Services
            </a>
          </div>
        </div>
      </section>

      <section className="border-b bg-card">
        <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
          {[
            ["25+", "Years in Houston"],
            ["100%", "In-House Fabrication"],
            ["All", "Jurisdictions Permitted"],
            ["TX", "Licensed & Insured"],
          ].map(([n, l]) => (
            <div
              key={l}
              className="border-r p-8 text-center last:border-r-0"
            >
              <div className="font-display text-4xl text-primary">{n}</div>
              <div className="mt-1 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                {l}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-24">
        <p className="font-bold uppercase tracking-[0.3em] text-primary">
          What we build
        </p>
        <h2 className="mt-3 max-w-2xl text-4xl md:text-5xl">
          Every sign your business needs.
        </h2>
        <div className="mt-12 grid gap-px overflow-hidden rounded-sm border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <a
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group bg-card p-7 transition-colors hover:bg-ink hover:text-ink-foreground"
            >
              <div className="font-display text-sm text-primary">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-3 text-xl">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground group-hover:text-ink-foreground/70">
                {s.blurb}
              </p>
              <div className="mt-4 text-sm font-bold uppercase tracking-wide text-primary">
                Explore →
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="border-t bg-background">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="font-bold uppercase tracking-[0.3em] text-primary">
            Recent work
          </p>
          <h2 className="mt-3 max-w-2xl text-4xl md:text-5xl">
            Built, permitted, installed.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                src: workChannel,
                title: "Illuminated channel letters",
                note: "West Houston storefront",
              },
              {
                src: workMonument,
                title: "Masonry monument sign",
                note: "Office park entrance",
              },
              {
                src: workVan,
                title: "Fleet wrap program",
                note: "Full color-change vinyl",
              },
            ].map((w) => (
              <figure
                key={w.title}
                className="group overflow-hidden rounded-sm border bg-card"
              >
                <img
                  src={w.src}
                  alt={w.title}
                  width={1200}
                  height={800}
                  loading="lazy"
                  className="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <figcaption className="p-5">
                  <div className="text-lg">{w.title}</div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    {w.note}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="why" className="bg-ink text-ink-foreground">
        <div className="stripe h-3 opacity-80" />
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-3">
          {[
            [
              "Made Here",
              "No brokers. Your sign is built in our West Houston shop on Mimaki printers — come see it.",
            ],
            [
              "One Team",
              "Design, permits, fabrication and install under one project manager. No vendor relay race.",
            ],
            [
              "We Know Houston",
              "25 years of permits in Houston, Katy, Sugar Land, The Woodlands and Cypress.",
            ],
          ].map(([t, d], i) => (
            <div key={t} className="border-l-4 border-primary pl-6">
              <div className="font-display text-5xl text-accent">
                0{i + 1}
              </div>
              <h3 className="mt-4 text-2xl">{t}</h3>
              <p className="mt-3 opacity-75">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="process" className="mx-auto max-w-7xl px-6 py-24">
        <p className="font-bold uppercase tracking-[0.3em] text-primary">
          How it works
        </p>
        <h2 className="mt-3 text-4xl md:text-5xl">From idea to installed.</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {steps.map(([t, d], i) => (
            <div key={t} className="rounded-sm border bg-card p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary font-display text-primary-foreground">
                {i + 1}
              </div>
              <h3 className="mt-5 text-xl">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="quote" className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <p className="font-bold uppercase tracking-[0.3em] text-ink-foreground">
                Free quote
              </p>
              <h2 className="mt-3 text-4xl md:text-5xl">
                Ready to stand out? Let's build your sign.
              </h2>
              <p className="mt-5 max-w-md opacity-90">
                Tell us what you're thinking and we'll come back with a written
                quote — usually within two business days. No obligation, no
                pressure.
              </p>
              <div className="mt-8 space-y-3 text-sm font-semibold uppercase tracking-wider">
                <p>West Houston, Texas</p>
                <p>Call (713) 000-0000</p>
                <p>Mon–Fri 8am–5pm</p>
              </div>
            </div>
            <div className="rounded-sm bg-ink-foreground p-6 text-ink shadow-xl sm:p-8">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-ink py-10 text-center text-sm text-ink-foreground/70">
        © {new Date().getFullYear()} Texan Signs · West Houston, TX
      </footer>
    </div>
  );
}
