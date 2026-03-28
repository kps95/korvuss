import { Link } from "react-router-dom";
import siteConfig from "../config/siteConfig";

export default function Hero() {
  return (
    <section className="hero">
      <video
        className="hero-video"
        src={siteConfig.introVideo}
        autoPlay
        loop
        muted
        playsInline
        poster={siteConfig.logoSrc}
      />
      <div className="hero-overlay" />
      <div className="hero-content">
        <p className="eyebrow">Korvus Kennels</p>
        <h1>{siteConfig.tagline}</h1>
        <p className="muted">
          Premium kennel transparency for buyers who want more than a listing.
          Inspect litters, documents, stack media, lineage, and breeder notes in
          one place.
        </p>
        <div className="hero-actions">
          <Link to="/puppies" className="btn primary">
            View Puppies
          </Link>
          <Link to="/program" className="btn ghost">
            Explore Program
          </Link>
        </div>
        <div className="hero-tags">
          <div className="tag-card">
            <p className="eyebrow">Proof library</p>
            <strong>DNA, health, pedigree, and litter uploads</strong>
          </div>
          <div className="tag-card">
            <p className="eyebrow">Stack off</p>
            <strong>Side, front, rear, and raw movement compare</strong>
          </div>
          <div className="tag-card">
            <p className="eyebrow">Transparency</p>
            <strong>Breeder notes clearly separated from uploaded proof</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
