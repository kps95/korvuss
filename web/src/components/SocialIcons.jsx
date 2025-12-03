import siteConfig from "../config/siteConfig";

const ICONS = {
  instagram: "IG",
  tiktok: "TT",
  facebook: "FB",
  youtube: "YT",
};

export default function SocialIcons() {
  return (
    <div className="social-icons">
      {Object.entries(siteConfig.socialLinks).map(([key, url]) => {
        if (!url) return null;
        return (
          <a
            key={key}
            href={url}
            target="_blank"
            rel="noreferrer"
            className="social-chip"
            aria-label={key}
          >
            <span>{ICONS[key] ?? key}</span>
          </a>
        );
      })}
    </div>
  );
}
