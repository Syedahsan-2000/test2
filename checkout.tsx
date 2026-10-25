import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/Header";
import { MERCHANT_NAME, MERCHANT_UPI, PRODUCTS, inr, useCart } from "@/lib/store";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Checkout — Bonbytes" },
      { name: "description", content: "Complete your Bonbytes order with UPI or Google Pay." },
      { property: "og:title", content: "Checkout — Bonbytes" },
      { property: "og:description", content: "Pay for your treats with UPI or Google Pay." },
    ],
  }),
  component: Checkout,
});

function Checkout() {
  const { cart, total, clear } = useCart();
  const [method, setMethod] = useState<"gpay" | "upi">("gpay");
  const [form, setForm] = useState({ name: "", phone: "", address: "" });
  const [done, setDone] = useState(false);
  const items = Object.entries(cart);
  const ready = form.name && form.phone.length >= 10 && form.address && total > 0;

  const params = new URLSearchParams({ pa: MERCHANT_UPI, pn: MERCHANT_NAME, am: String(total), cu: "INR", tn: `Bonbytes order - ${form.name}` });
  const link = (method === "gpay" ? "tez://upi/pay?" : "upi://pay?") + params.toString();
  const qr = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" + encodeURIComponent("upi://pay?" + params.toString());

  if (done) return (
    <div><Header />
      <div className="mx-auto max-w-md px-4 py-20 text-center">
        <h1 className="text-5xl font-extrabold text-primary">Yay! 🎉</h1>
        <p className="mt-3 text-lg">Thanks {form.name}! We'll confirm your order on {form.phone} once the payment comes through.</p>
        <Link to="/" className="btn-pop mt-6 inline-block rounded-full bg-sunny px-6 py-3 font-bold text-cocoa">Back to shop</Link>
      </div>
    </div>
  );

  const input = "w-full rounded-xl border-2 border-cocoa bg-card px-3 py-2 outline-none focus:ring-2 focus:ring-ring";
  return (
    <div>
      <Header />
      <main className="mx-auto grid max-w-5xl gap-8 px-4 py-10 md:grid-cols-2">
        <section className="space-y-4">
          <h1 className="text-4xl font-extrabold">Checkout</h1>
          <input className={input} placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          <input className={input} placeholder="Phone number" inputMode="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
          <textarea className={input} rows={3} placeholder="Delivery address (Hyderabad)" value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} />
          <h2 className="pt-2 text-2xl font-bold">Pay with</h2>
          <div className="grid grid-cols-2 gap-3">
            {([["gpay", "Google Pay"], ["upi", "Any UPI app"]] as const).map(([k, l]) => (
              <button key={k} onClick={() => setMethod(k)} className={`btn-pop rounded-xl px-3 py-3 font-bold ${method === k ? "bg-primary text-primary-foreground" : "bg-card"}`}>{l}</button>
            ))}
          </div>
        </section>
        <section className="shadow-pop h-fit rounded-2xl border-2 border-cocoa bg-card p-5">
          <h2 className="text-2xl font-bold">Order summary</h2>
          {items.length === 0 && <p className="mt-2 text-muted-foreground">Your cart is empty.</p>}
          {items.map(([id, q]) => { const p = PRODUCTS.find((x) => x.id === id)!; return (
            <div key={id} className="mt-2 flex justify-between"><span>{p.name} × {q}</span><span className="font-bold">{inr(p.price * q)}</span></div>
          ); })}
          <div className="mt-4 flex justify-between border-t-2 border-dashed pt-3 text-xl font-extrabold"><span>Total</span><span className="text-primary">{inr(total)}</span></div>
          {ready ? (
            <div className="mt-5 space-y-3 text-center">
              <a href={link} className="btn-pop block rounded-full bg-primary py-3 font-bold text-primary-foreground">Pay {inr(total)} on {method === "gpay" ? "Google Pay" : "UPI"}</a>
              <p className="text-sm text-muted-foreground">On a computer? Scan with any UPI app:</p>
              <img src={qr} alt="UPI QR code" className="mx-auto rounded-lg border-2 border-cocoa" width={180} height={180} />
              <button onClick={() => { clear(); setDone(true); }} className="btn-pop w-full rounded-full bg-sunny py-2 font-bold text-cocoa">I've paid</button>
            </div>
          ) : (
            <p className="mt-5 rounded-xl bg-muted p-3 text-sm">Fill in your name, phone and address to pay.</p>
          )}
        </section>
      </main>
    </div>
  );
}
