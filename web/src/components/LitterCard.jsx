import { Link } from "react-router-dom";
import { getDogById } from "../data/sampleData";

export default function LitterCard({ litter }) {
  const sire = getDogById(litter.sireId);
  const dam = getDogById(litter.damId);

  return (
    <div className="card litter-card">
      <div className="card-body">
        <div className="card-row card-row-start">
          <div>
            <p className="eyebrow">Litter</p>
            <h3>{litter.title}</h3>
          </div>
          <span className="pill ghost">{litter.birthDate}</span>
        </div>
        <p className="muted">{litter.breederNotes}</p>
        <div className="card-meta">
          <span>Sire: {sire?.name ?? "Pending"}</span>
          <span>Dam: {dam?.name ?? "Pending"}</span>
          <span>{litter.litterCount} puppies</span>
        </div>
        <div className="badge-list badge-list-compact">
          <span className="pill showcase-pill">
            {litter.statusSummary.available} available
          </span>
          <span className="pill showcase-pill">
            {litter.statusSummary.reserved} reserved
          </span>
          <span className="pill showcase-pill">
            {litter.statusSummary.sold} sold
          </span>
        </div>
        <div className="card-row">
          <span className="muted">DNA + document summary attached</span>
          <Link to={`/litters/${litter.id}`} className="btn sm ghost">
            View litter
          </Link>
        </div>
      </div>
    </div>
  );
}
