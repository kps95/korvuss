import { useState } from "react";
import ProductCard from "../components/ProductCard";
import Section from "../components/Section";
import { products } from "../data/sampleData";
import { createCheckoutSession } from "../services/api";
import { useCart } from "../context/CartContext";

export default function MerchPage() {
  const { items, subtotal, updateQuantity, removeItem, clearCart } = useCart();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleCheckout = async () => {
    setLoading(true);
    setStatus(null);
    const { data, error } = await createCheckoutSession(items);
    if (error) {
      setStatus(
        "Checkout session could not be created. Confirm Supabase + Stripe env vars."
      );
    } else if (data?.url) {
      window.location.href = data.url;
    } else {
      setStatus("No checkout URL returned.");
    }
    setLoading(false);
  };

  return (
    <div className="page">
      <Section
        eyebrow="Korvus merch"
        title="Built to last and move with you"
        actions={<span className="muted">Ships worldwide</span>}
      >
        <div className="grid three">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Section>

      <Section eyebrow="Cart" title="Your kit">
        <div className="panel">
          {items.length === 0 && <p className="muted">Cart is empty.</p>}
          {items.length > 0 && (
            <div className="cart-list">
              {items.map((item) => (
                <div key={item.id} className="cart-row">
                  <div>
                    <strong>{item.name}</strong>
                    <p className="muted">${item.price.toFixed(2)} each</p>
                  </div>
                  <div className="cart-controls">
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(item.id, Number(e.target.value))
                      }
                    />
                    <button
                      className="btn ghost sm"
                      onClick={() => removeItem(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
              <div className="cart-total">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="cart-actions">
                <button className="btn ghost" onClick={clearCart}>
                  Clear
                </button>
                <button
                  className="btn"
                  onClick={handleCheckout}
                  disabled={loading}
                >
                  {loading ? "Redirecting..." : "Checkout with Stripe"}
                </button>
              </div>
              {status && <p className="muted">{status}</p>}
            </div>
          )}
        </div>
      </Section>
    </div>
  );
}
