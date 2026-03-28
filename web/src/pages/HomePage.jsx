import { Link } from "react-router-dom";
import DogSummaryCard from "../components/DogSummaryCard";
import Hero from "../components/Hero";
import LitterCard from "../components/LitterCard";
import NewsletterForm from "../components/NewsletterForm";
import PuppyCard from "../components/PuppyCard";
import Section from "../components/Section";
import StudCard from "../components/StudCard";
import TestimonialList from "../components/TestimonialList";
import siteConfig from "../config/siteConfig";
import {
  females,
  kennelProgram,
  litters,
  puppies,
  studs,
  testimonials,
  transparencyModules,
} from "../data/sampleData";

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
        <div className="pill-grid">
          <div className="pill-card">
            <h3>Proof first</h3>
            <p className="muted">
              DNA uploads, pedigree files, and litter paperwork are organized as
              part of the browsing experience.
            </p>
          </div>
          <div className="pill-card">
            <h3>Raw media</h3>
            <p className="muted">
              Buyers can inspect side stacks, fronts, heads, movement clips, and
              unedited footage without leaving the site.
            </p>
          </div>
          <div className="pill-card">
            <h3>Structured pages</h3>
            <p className="muted">
              Parents, puppies, and litters are grouped with lineage, breeder
              notes, and uploaded proof in one premium flow.
            </p>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Program"
        title={kennelProgram.title}
        actions={
          <Link className="btn ghost sm" to="/program">
            Full overview
          </Link>
        }
      >
        <div className="grid three">
          {transparencyModules.slice(0, 3).map((module) => (
            <div key={module.id} className="panel info-card">
              <p className="eyebrow">{module.title}</p>
              <p>{module.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Breeding stock" title="Studs and females">
        <div className="grid two">
          {studs.slice(0, 1).map((stud) => (
            <StudCard key={stud.id} stud={stud} />
          ))}
          {females.slice(0, 1).map((female) => (
            <DogSummaryCard key={female.id} dog={female} />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Available"
        title="Puppies ready for placement"
        actions={
          <Link className="btn ghost sm" to="/puppies">
            View all puppies
          </Link>
        }
      >
        <div className="grid two">
          {puppies
            .filter((p) => p.status !== "sold")
            .slice(0, 3)
            .map((puppy) => (
              <PuppyCard key={puppy.id} puppy={puppy} />
            ))}
        </div>
      </Section>

      <Section
        eyebrow="Litter pages"
        title="Grouped by breeding"
        actions={
          <Link className="btn ghost sm" to="/litters">
            Browse litters
          </Link>
        }
      >
        <div className="grid two">
          {litters.slice(0, 1).map((litter) => (
            <LitterCard key={litter.id} litter={litter} />
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
            <Link className="btn" to="/contact">
              Contact form
            </Link>
            <Link className="btn ghost" to="/apply">
              Apply / Waitlist
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
