import Hero from "../components/Hero";
import NewsletterForm from "../components/NewsletterForm";
import PuppyCard from "../components/PuppyCard";
import Section from "../components/Section";
import StudCard from "../components/StudCard";
import TestimonialList from "../components/TestimonialList";
import siteConfig from "../config/siteConfig";
import { puppies, studs, testimonials } from "../data/sampleData";

export default function HomePage() {
  return (
    <div className="page">
      <Hero />

      <Section
        eyebrow="Why Korvus Kennels"
        title="Raised with intention"
        actions={
          <a className="btn ghost sm" href="#contact">
            Talk with us
          </a>
        }
      >
        {/* <div className="pill-grid">
          <div className="pill-card">
            <h3>Health first</h3>
            <p className="muted">
              OFA hips/elbows, full DNA panels, cardiac + eyes on breeding stock.
            </p>
          </div>
          <div className="pill-card">
            <h3>Early imprinting</h3>
            <p className="muted">
              ENS + sound desensitization, problem-solving games, and crate
              conditioning start at week three.
            </p>
          </div>
          <div className="pill-card">
            <h3>Transparent pairings</h3>
            <p className="muted">
              Each litter includes pairing rationale, expected traits, and honest
              notes on drive + structure.
            </p>
          </div>
        </div> */}
      </Section>

      <Section eyebrow="Studs" title="Featured sires">
        <div className="grid three">
          {studs.slice(0, 2).map((stud) => (
            <StudCard key={stud.id} stud={stud} />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Available"
        title="Puppies ready for placement"
        actions={
          <a className="btn ghost sm" href="/puppies">
            View all puppies
          </a>
        }
      >
        <div className="grid three">
          {puppies
            .filter((p) => p.status !== "sold")
            .slice(0, 3)
            .map((puppy) => (
              <PuppyCard key={puppy.id} puppy={puppy} />
            ))}
        </div>
      </Section>

      <Section eyebrow="Families + handlers" title="Testimonials">
        <TestimonialList testimonials={testimonials} />
      </Section>

      <Section eyebrow="Stay in the loop" title="Drops, litters, studs">
        <div className="panel">
          <p className="muted">
            Merch drops, planned pairings, and opening dates go to the list first.
            We keep it concise.
          </p>
          <NewsletterForm />
        </div>
      </Section>

      <Section id="contact" eyebrow="Contact" title="Let's talk dogs">
        <div className="panel contact-callout">
          <div>
            <h3>{siteConfig.contactEmail}</h3>
            <p className="muted">{siteConfig.contactPhone}</p>
            <p className="muted">{siteConfig.location}</p>
          </div>
          <div className="cta-stack">
            <a className="btn" href="/contact">
              Contact form
            </a>
            <a className="btn ghost" href="/apply">
              Apply / Waitlist
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
}
