import { Link } from "react-router-dom";
import Section from "../components/Section";

export default function CheckoutCancelPage() {
  return (
    <div className="page">
      <Section eyebrow="Checkout" title="Payment canceled">
        <div className="panel">
          <p className="muted">
            The session was canceled. Your cart is still saved if you want to try
            again or adjust quantities.
          </p>
          <Link className="btn" to="/merch">
            Return to cart
          </Link>
        </div>
      </Section>
    </div>
  );
}
