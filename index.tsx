import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { PRODUCTS, inr, useCart } from "@/lib/store";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bonbytes — Brownies, Cupcakes & Cakes in Hyderabad" },
      { name: "description", content: "Order brownie bouquets, Ferrero cupcakes, designer cakes and more from Bonbytes. Pay easily with UPI or Google Pay." },
      { property: "og:title", content: "Bonbytes — Sweet treats delivered in Hyderabad" },
      { property: "og:description", content: "Brownies, cupcakes and cakes. Pay with UPI or Google Pay." },
    ],
  }),
  component: Index,
});

function Index() {
  const { add } = useCart();
  return (
    <div>
      <Header />
      <section className="bg-hero border-b-2 border-cocoa">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-16 md:grid-cols-2">
          <div className="text-primary-foreground">
            <span className="btn-pop inline-block rounded-full bg-sunny px-3 py-1 text-sm font-bold text-cocoa">Freshly baked in Hyderabad</span>
            <h1 className="mt-4 text-5xl font-extrabold leading-none md:text-7xl">Every bite is a little party.</h1>
            <p className="mt-4 max-w-md text-lg font-semibold">Fudgy brownies, Rocher cupcakes and dreamy cakes — order in a tap, pay with UPI.</p>
            <a href="#shop" className="btn-pop mt-6 inline-block rounded-full bg-cocoa px-6 py-3 font-bold text-cocoa-foreground">Shop treats →</a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {PRODUCTS.slice(0, 4).map((p, i) => (
              <img key={p.id} src={p.image} alt={p.name} className={`shadow-pop aspect-[3/4] w-full rounded-2xl border-2 border-cocoa object-cover ${i % 2 ? "translate-y-6 rotate-2" : "-rotate-2"}`} />
            ))}
          </div>
        </div>
      </section>

      <section id="shop" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-4xl font-extrabold">Pick your treat 🍫</h2>
        <div className="mt-8 grid grid-cols-2 gap-5 md:grid-cols-4">
          {PRODUCTS.map((p) => (
            <article key={p.id} className="shadow-pop overflow-hidden rounded-2xl border-2 border-cocoa bg-card transition-transform hover:-rotate-1">
              <div className={`relative ${p.color}`}>
                <img src={p.image} alt={p.name} loading="lazy" className="aspect-[3/4] w-full object-cover" />
                {p.tag && <span className="absolute left-2 top-2 rounded-full border-2 border-cocoa bg-sunny px-2 text-xs font-bold text-cocoa">{p.tag}</span>}
              </div>
              <div className="p-3">
                <h3 className="text-lg font-bold leading-tight">{p.name}</h3>
                <div className="mt-2 flex items-center justify-between">
                  <span className="font-extrabold text-primary">{inr(p.price)}</span>
                  <button onClick={() => add(p.id)} className="btn-pop rounded-full bg-mint px-3 py-1 text-sm font-bold text-accent-foreground">Add</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y-2 border-cocoa bg-sunny">
        <div className="mx-auto grid max-w-6xl gap-4 px-4 py-10 text-center font-bold text-cocoa md:grid-cols-3">
          <p>⚡ Pay instantly with UPI</p><p>📱 Google Pay, PhonePe, Paytm</p><p>🚚 Delivery across Hyderabad</p>
        </div>
      </section>
      <footer className="bg-cocoa py-8 text-center text-cocoa-foreground">© Bonbytes · Made with love & chocolate</footer>
    </div>
  );
}
