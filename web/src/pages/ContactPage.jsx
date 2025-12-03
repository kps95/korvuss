import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Section from "../components/Section";
import siteConfig from "../config/siteConfig";
import { saveMessage } from "../services/api";

const reasons = [
  "General",
  "Stud Inquiry",
  "Puppy Inquiry",
  "Merch",
  "Other",
];

export default function ContactPage() {
  const [searchParams] = useSearchParams();
  const presetStud = searchParams.get("stud");
  const presetPuppy = searchParams.get("puppy");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    reason: presetStud ? "Stud Inquiry" : presetPuppy ? "Puppy Inquiry" : "General",
    subject: presetStud
      ? `Stud Inquiry - ${presetStud}`
      : presetPuppy
      ? `Puppy Inquiry - ${presetPuppy}`
      : "",
    body: "",
  });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const reasonOptions = useMemo(() => reasons, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const { error } = await saveMessage({
      ...form,
      stud: presetStud,
      puppy: presetPuppy,
    });

    if (error) {
      setStatus("Could not save message. Verify Supabase env + tables.");
    } else {
      setStatus("Message sent. We reply within 24 hours.");
      setForm({
        name: "",
        email: "",
        phone: "",
        reason: "General",
        subject: "",
        body: "",
      });
    }
    setLoading(false);
  };

  return (
    <div className="page">
      <Section
        eyebrow="Contact"
        title="Tell us what you need"
        actions={<span className="muted">Response within one business day.</span>}
      >
        <div className="detail-grid">
          <div className="panel">
            <form className="form" onSubmit={handleSubmit}>
              <label>
                Name
                <input
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                />
              </label>
              <label>
                Email
                <input
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                />
              </label>
              <label>
                Phone
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+1 555 555 0177"
                />
              </label>
              <label>
                Reason
                <select
                  name="reason"
                  value={form.reason}
                  onChange={handleChange}
                  required
                >
                  {reasonOptions.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Subject
                <input
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Brief subject"
                />
              </label>
              <label>
                Message
                <textarea
                  name="body"
                  rows="4"
                  value={form.body}
                  onChange={handleChange}
                  placeholder="Share context, goals, timeline."
                  required
                />
              </label>
              <button className="btn" type="submit" disabled={loading}>
                {loading ? "Sending..." : "Send message"}
              </button>
              {status && <p className="muted">{status}</p>}
            </form>
          </div>
          <div className="panel contact-side">
            <p className="eyebrow">Reach us</p>
            <p className="muted">{siteConfig.contactEmail}</p>
            <p className="muted">{siteConfig.contactPhone}</p>
            <p className="muted">{siteConfig.location}</p>
            <div className="map-placeholder">Static map placeholder</div>
            <p className="muted">
              We schedule video calls for puppy picks and stud consults. Use the
              form to request a time.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}
