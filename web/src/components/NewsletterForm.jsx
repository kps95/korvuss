import { useState } from "react";
import { subscribeNewsletter } from "../services/api";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    const { error } = await subscribeNewsletter(email);
    if (error) {
      setStatus("Unable to subscribe right now. Check env and Supabase tables.");
    } else {
      setStatus("Subscribed. Watch for our next drop.");
      setEmail("");
    }
    setLoading(false);
  };

  return (
    <form className="newsletter" onSubmit={handleSubmit}>
      <input
        type="email"
        required
        placeholder="Email for litter drops and merch"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="btn" type="submit" disabled={loading}>
        {loading ? "Joining..." : "Join"}
      </button>
      {status && <p className="muted">{status}</p>}
    </form>
  );
}
