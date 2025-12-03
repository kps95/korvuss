import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Section from "../components/Section";
import { saveApplication } from "../services/api";

export default function ApplicationPage() {
  const [searchParams] = useSearchParams();
  const presetPuppy = searchParams.get("puppyId") || "";
  const presetPuppyName = searchParams.get("puppyName") || "";
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    experience: "",
    home_type: "",
    other_pets: "",
    preferred_sex: "",
    preferred_color: "",
    budget: "",
    timeline: "",
    puppy_id: presetPuppy,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    const { error } = await saveApplication(form);
    if (error) {
      setStatus("Could not submit application. Check Supabase env + tables.");
    } else {
      setStatus("Application submitted. We will follow up soon.");
      setForm({
        name: "",
        email: "",
        phone: "",
        location: "",
        experience: "",
        home_type: "",
        other_pets: "",
        preferred_sex: "",
        preferred_color: "",
        budget: "",
        timeline: "",
        puppy_id: "",
      });
    }
    setLoading(false);
  };

  return (
    <div className="page">
      <Section
        eyebrow="Apply / Waitlist"
        title="Tell us about your home"
        actions={
          presetPuppyName ? (
            <span className="pill ghost">Puppy: {presetPuppyName}</span>
          ) : null
        }
      >
        <div className="panel">
          <form className="form" onSubmit={handleSubmit}>
            <label>
              Name
              <input
                name="name"
                required
                value={form.name}
                onChange={handleChange}
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
              />
            </label>
            <label>
              Phone
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
              />
            </label>
            <label>
              Location
              <input
                name="location"
                value={form.location}
                onChange={handleChange}
              />
            </label>
            <label>
              Experience with dogs
              <textarea
                name="experience"
                rows="3"
                value={form.experience}
                onChange={handleChange}
              />
            </label>
            <label>
              Home type
              <input
                name="home_type"
                value={form.home_type}
                onChange={handleChange}
                placeholder="House, apartment, acreage..."
              />
            </label>
            <label>
              Other pets
              <textarea
                name="other_pets"
                rows="2"
                value={form.other_pets}
                onChange={handleChange}
              />
            </label>
            <label>
              Preferred sex / color / budget / timing
              <div className="form-grid">
                <input
                  name="preferred_sex"
                  placeholder="Sex"
                  value={form.preferred_sex}
                  onChange={handleChange}
                />
                <input
                  name="preferred_color"
                  placeholder="Color"
                  value={form.preferred_color}
                  onChange={handleChange}
                />
                <input
                  name="budget"
                  placeholder="Budget"
                  value={form.budget}
                  onChange={handleChange}
                />
                <input
                  name="timeline"
                  placeholder="Timeline"
                  value={form.timeline}
                  onChange={handleChange}
                />
              </div>
            </label>
            <label>
              Puppy ID (optional)
              <input
                name="puppy_id"
                value={form.puppy_id}
                onChange={handleChange}
                placeholder="If tied to a specific listing"
              />
            </label>
            <button className="btn" type="submit" disabled={loading}>
              {loading ? "Submitting..." : "Submit application"}
            </button>
            {status && <p className="muted">{status}</p>}
          </form>
        </div>
      </Section>
    </div>
  );
}
