import { Link } from "react-router-dom";
import Section from "../components/Section";
import { useAuth } from "../context/AuthContext";

const placeholderOrders = [
  { id: "ord-123", status: "paid", total: "$128.00" },
  { id: "ord-124", status: "pending", total: "$72.00" },
];

export default function AccountPage() {
  const { user, loading, signOut } = useAuth();

  if (loading) {
    return (
      <div className="page">
        <Section title="Loading account..." />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="page">
        <Section title="Sign in">
          <p className="muted">
            Connect Supabase Auth to enable account view. For now this page
            renders placeholders.
          </p>
          <Link className="btn" to="/contact">
            Contact us
          </Link>
        </Section>
      </div>
    );
  }

  return (
    <div className="page">
      <Section eyebrow="Account" title={user.email}>
        <div className="panel">
          <div className="detail-meta">
            <div>
              <p className="eyebrow">User ID</p>
              <p>{user.id}</p>
            </div>
            <div>
              <p className="eyebrow">Email</p>
              <p>{user.email}</p>
            </div>
          </div>
          <button className="btn ghost" onClick={signOut}>
            Sign out
          </button>
        </div>
      </Section>

      <Section eyebrow="Orders" title="Recent orders">
        <div className="panel">
          {placeholderOrders.map((o) => (
            <div key={o.id} className="cart-row">
              <div>
                <strong>{o.id}</strong>
                <p className="muted">Status: {o.status}</p>
              </div>
              <span>{o.total}</span>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
