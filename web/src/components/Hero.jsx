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
          Health-tested shepherds with nerve, structure, and biddability.
          Purpose-built litters, transparent pairing notes, and mentorship for
          every handler.
        </p>
        <div className="hero-actions">
          <Link to="/puppies" className="btn primary">
            View Puppies
          </Link>
          <Link to="/merch" className="btn ghost">
            Shop Merch
          </Link>
        </div>
        {/* <div className="hero-tags">
          <div className="tag-card">
            <p className="eyebrow">Studs</p>
            <strong>IPO & sport-tested sires</strong>
          </div>
          <div className="tag-card">
            <p className="eyebrow">Health</p>
            <strong>OFA + DNA panels cleared</strong>
          </div>
          <div className="tag-card">
            <p className="eyebrow">Support</p>
            <strong>Handler-first mentorship</strong>
          </div>
        </div> */}
      </div>
    </section>
  );
}
