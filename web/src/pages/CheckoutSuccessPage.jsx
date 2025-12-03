import { Link } from "react-router-dom";
import Section from "../components/Section";

export default function CheckoutSuccessPage() {
  return (
    <div className="page">
      <Section eyebrow="Checkout" title="Payment confirmed">
        <div className="panel">
          <p className="muted">
            Thank you. A receipt was sent to your email. We will pack and ship
            within two business days.
          </p>
          <Link className="btn" to="/merch">
            Back to merch
          </Link>
        </div>
      </Section>
    </div>
  );
}
