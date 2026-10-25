import { createFileRoute, notFound } from "@tanstack/react-router";
import { getService, services } from "@/lib/services";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return service;
  },
  head: ({ params }) => {
    const service = getService(params.slug);
    const title = service
      ? `${service.title} — Texan Signs Houston`
      : "Service — Texan Signs";
    const description = service
      ? `${service.blurb} Designed, permitted, fabricated and installed in West Houston.`
      : "Custom commercial signage built in West Houston.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ServicePage,
});

function ServicePage() {
  const service = Route.useLoaderData();
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 4);

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
          <a
            href="/#quote"
            className="rounded-sm bg-primary px-5 py-2.5 font-bold uppercase tracking-wide text-primary-foreground hover:opacity-90"
          >
            Get a Quote
          </a>
        </div>
      </header>

      <section className="bg-ink text-ink-foreground">
        <div className="stripe h-3 opacity-80" />
        <div className="mx-auto max-w-4xl px-6 py-20">
          <a
            href="/#services"
            className="text-sm font-bold uppercase tracking-wider text-accent hover:underline"
          >
            ← All services
          </a>
          <h1 className="mt-6 text-5xl leading-[0.95] md:text-6xl">
            {service.title}
          </h1>
          <p className="mt-6 text-lg opacity-85">{service.intro}</p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-3xl md:text-4xl">What's included</h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {service.bullets.map((b) => (
            <li
              key={b}
              className="flex gap-3 rounded-sm border bg-card p-5 text-sm font-medium"
            >
              <span className="mt-0.5 text-primary">■</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <div className="mt-14 rounded-sm border-l-4 border-primary bg-card p-8">
          <p className="text-lg font-semibold">{service.lead}</p>
          <a
            href="/#quote"
            className="mt-6 inline-block rounded-sm bg-primary px-8 py-4 font-bold uppercase tracking-wide text-primary-foreground hover:opacity-90"
          >
            Request a Free Quote
          </a>
        </div>
      </section>

      <section className="border-t bg-card">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-2xl md:text-3xl">Also worth a look</h2>
          <div className="mt-8 grid gap-px overflow-hidden rounded-sm border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {others.map((s) => (
              <a
                key={s.slug}
                href={`/services/${s.slug}`}
                className="bg-card p-6 transition-colors hover:bg-ink hover:text-ink-foreground"
              >
                <h3 className="text-lg">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.blurb}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-ink py-10 text-center text-sm text-ink-foreground/70">
        © {new Date().getFullYear()} Texan Signs · West Houston, TX
      </footer>
    </div>
  );
}
