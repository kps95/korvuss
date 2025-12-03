import { Link, NavLink } from "react-router-dom";
import siteConfig from "../config/siteConfig";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

export default function Header() {
  const { itemCount } = useCart();
  const { user } = useAuth();

  return (
    <header className="nav">
      <Link to="/" className="brand">
        <div className="brand-mark">
          <img src={siteConfig.logoSrc} alt={siteConfig.siteName} />
        </div>
        <div>
          <p className="brand-eyebrow">Korvus Kennels</p>
          <span className="brand-title">Forged Bloodlines</span>
        </div>
      </Link>

      <nav className="nav-links">
        {siteConfig.navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `nav-link ${isActive ? "nav-link-active" : ""}`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      <div className="nav-actions">
        <Link to="/merch" className="pill">
          Cart <span className="pill-count">{itemCount}</span>
        </Link>
        <Link to="/account" className="pill ghost">
          {user ? "Account" : "Sign In"}
        </Link>
      </div>
    </header>
  );
}
