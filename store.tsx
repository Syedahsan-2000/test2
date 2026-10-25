import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

const IMG = "https://thebonbytes.com/wp-content/uploads/2025/09/";

export type Product = { id: string; name: string; price: number; image: string; tag?: string; color: string };

export const PRODUCTS: Product[] = [
  { id: "best-seller", name: "Best Seller Box", price: 699, image: IMG + "WhatsApp-Image-2025-09-09-at-4.28.33-PM-1-200x300.jpeg", tag: "Best seller", color: "bg-primary" },
  { id: "brownie-bouquet", name: "Brownie Bouquet", price: 999, image: IMG + "WhatsApp-Image-2025-09-09-at-4.28.32-PM-200x300.jpeg", tag: "Gift pick", color: "bg-sunny" },
  { id: "ferrero-cupcake", name: "Ferrero Rocher Cup Cake", price: 549, image: IMG + "WhatsApp-Image-2025-09-09-at-4.29.17-PM-200x300.jpeg", color: "bg-mint" },
  { id: "signature-brownie", name: "Signature Brownie", price: 449, image: IMG + "ChatGPT-Image-Sep-9-2025-at-04_44_35-PM-200x300.png", color: "bg-primary" },
  { id: "brownie-cakes", name: "Brownie Cakes", price: 899, image: IMG + "ChatGPT-Image-Sep-9-2025-at-03_57_08-PM-200x300.png", color: "bg-sunny" },
  { id: "mini-brownies", name: "Mini Brownies", price: 399, image: IMG + "Untitled-design-25-200x300.png", tag: "New", color: "bg-mint" },
  { id: "custom-cupcakes", name: "Customized Cupcakes", price: 649, image: IMG + "2-12-208x300.png", color: "bg-primary" },
  { id: "rocher-cookies", name: "Rocher Cookies", price: 499, image: IMG + "WhatsApp-Image-2025-09-16-at-10.39.37-PM-200x300.jpeg", color: "bg-sunny" },
];

// Shop's UPI ID used for UPI / Google Pay payments. Replace with the real one.
export const MERCHANT_UPI = "bonbytes@upi";
export const MERCHANT_NAME = "Bonbytes";

export const inr = (n: number) => "₹" + n.toLocaleString("en-IN");

type Cart = Record<string, number>;
type Ctx = {
  cart: Cart; add: (id: string) => void; setQty: (id: string, q: number) => void; clear: () => void;
  count: number; total: number; open: boolean; setOpen: (o: boolean) => void;
};
const CartCtx = createContext<Ctx | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Cart>({});
  const [open, setOpen] = useState(false);
  useEffect(() => {
    try { setCart(JSON.parse(localStorage.getItem("bb-cart") || "{}")); } catch {}
  }, []);
  const save = (c: Cart) => { setCart(c); localStorage.setItem("bb-cart", JSON.stringify(c)); };
  const setQty = (id: string, q: number) => {
    const c = { ...cart };
    if (q <= 0) delete c[id]; else c[id] = q;
    save(c);
  };
  const add = (id: string) => { setQty(id, (cart[id] || 0) + 1); setOpen(true); };
  const count = Object.values(cart).reduce((a, b) => a + b, 0);
  const total = Object.entries(cart).reduce((s, [id, q]) => s + (PRODUCTS.find((p) => p.id === id)?.price || 0) * q, 0);
  return (
    <CartCtx.Provider value={{ cart, add, setQty, clear: () => save({}), count, total, open, setOpen }}>
      {children}
    </CartCtx.Provider>
  );
}

export function useCart() {
  const c = useContext(CartCtx);
  if (!c) throw new Error("useCart outside CartProvider");
  return c;
}
