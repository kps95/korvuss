import { Link } from "react-router-dom";
import siteConfig from "../config/siteConfig";

const statusColor = {
  available: "pill available",
  reserved: "pill reserved",
  sold: "pill sold",
};

export default function PuppyCard({ puppy }) {
  const image = puppy.image || siteConfig.logoSrc;

  return (
    <div className="card">
      <div className="card-media">
        <img src={image} alt={puppy.name} />
        <span className={statusColor[puppy.status] ?? "pill"}>
          {puppy.status}
        </span>
      </div>
      <div className="card-body">
        <h3>{puppy.name}</h3>
        <p className="muted">{puppy.description}</p>
        <div className="card-row">
          <span className="price">${puppy.price.toLocaleString()}</span>
          <Link to={`/puppies/${puppy.id}`} className="btn sm ghost">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}
