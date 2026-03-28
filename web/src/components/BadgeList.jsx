export default function BadgeList({ badges = [], compact = false }) {
  if (!badges.length) {
    return null;
  }

  return (
    <div className={`badge-list ${compact ? "badge-list-compact" : ""}`}>
      {badges.map((badge) => (
        <span key={badge.id} className="pill showcase-pill">
          {badge.label}
        </span>
      ))}
    </div>
  );
}
