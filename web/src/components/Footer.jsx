import { Link } from "react-router-dom";
import siteConfig from "../config/siteConfig";
import SocialIcons from "./SocialIcons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <div className="brand-mark small">
            <img src={siteConfig.logoSrc} alt={siteConfig.siteName} />
          </div>
          <h4>{siteConfig.siteName}</h4>
          <p className="muted">
            {siteConfig.tagline} Based in {siteConfig.location}.
          </p>
          <SocialIcons />
        </div>
        <div>
          <p className="eyebrow">Navigation</p>
          <div className="footer-links">
            {siteConfig.navLinks.map((link) => (
              <Link key={link.to} to={link.to}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="eyebrow">Contact</p>
          <p>{siteConfig.contactEmail}</p>
          <p>{siteConfig.contactPhone}</p>
          <p>{siteConfig.location}</p>
        </div>
      </div>
      <div className="footer-note">
        <span>© {new Date().getFullYear()} {siteConfig.siteName}</span>
        <span>Crafted for discerning canine programs.</span>
      </div>
    </footer>
  );
}
