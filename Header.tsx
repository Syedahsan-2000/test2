import { Link } from "@tanstack/react-router";
import { ShoppingBag, Minus, Plus, X } from "lucide-react";
import { PRODUCTS, inr, useCart } from "@/lib/store";

export function Header() {
  const { count, setOpen } = useCart();
  return (
    <header className="sticky top-0 z-30 border-b-2 border-cocoa bg-background/95 backdrop-blur">
      <div className="bg-cocoa py-1.5 text-center text-sm font-bold text-cocoa-foreground">
        🎂 Cake deliveries only in Hyderabad
      </div>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" className="font-display text-3xl font-extrabold text-primary">
          bon<span className="text-cocoa">bytes</span>
        </Link>
        <button onClick={() => setOpen(true)} className="btn-pop relative flex items-center gap-2 rounded-full bg-sunny px-4 py-2 font-bold text-cocoa">
          <ShoppingBag className="h-5 w-5" /> Cart
          {count > 0 && (
            <span className="absolute -right-2 -top-2 grid h-6 w-6 place-items-center rounded-full bg-primary text-xs text-primary-foreground">{count}</span>
          )}
        </button>
      </div>
      <CartDrawer />
    </header>
  );
}

function CartDrawer() {
  const { cart, setQty, total, open, setOpen } = useCart();
  if (!open) return null;
  const items = Object.entries(cart);
  return (
    <div className="fixed inset-0 z-40 flex justify-end bg-cocoa/50" onClick={() => setOpen(false)}>
      <aside className="flex h-full w-full max-w-sm flex-col border-l-2 border-cocoa bg-background" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between border-b-2 border-cocoa bg-primary p-4 text-primary-foreground">
          <h2 className="text-2xl font-bold">Your treats</h2>
          <button onClick={() => setOpen(false)} aria-label="Close cart"><X /></button>
        </div>
        <div className="flex-1 space-y-3 overflow-y-auto p-4">
          {items.length === 0 && <p className="text-muted-foreground">Your cart is empty — go grab a brownie!</p>}
          {items.map(([id, q]) => {
            const p = PRODUCTS.find((x) => x.id === id)!;
            return (
              <div key={id} className="flex items-center gap-3 rounded-xl border-2 border-cocoa bg-card p-2">
                <img src={p.image} alt={p.name} className="h-16 w-14 rounded-lg object-cover" />
                <div className="flex-1">
                  <p className="font-bold leading-tight">{p.name}</p>
                  <p className="text-sm text-primary font-bold">{inr(p.price)}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button aria-label="Decrease" onClick={() => setQty(id, q - 1)} className="rounded-full bg-muted p-1"><Minus className="h-4 w-4" /></button>
                  <span className="w-4 text-center font-bold">{q}</span>
                  <button aria-label="Increase" onClick={() => setQty(id, q + 1)} className="rounded-full bg-muted p-1"><Plus className="h-4 w-4" /></button>
                </div>
              </div>
            );
          })}
        </div>
        {items.length > 0 && (
          <div className="border-t-2 border-cocoa p-4">
            <div className="mb-3 flex justify-between text-lg font-bold"><span>Total</span><span>{inr(total)}</span></div>
            <Link to="/checkout" onClick={() => setOpen(false)} className="btn-pop block rounded-full bg-primary py-3 text-center font-bold text-primary-foreground">
              Checkout with UPI / Google Pay
            </Link>
          </div>
        )}
      </aside>
    </div>
  );
}
