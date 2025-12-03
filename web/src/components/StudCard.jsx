import { Link } from "react-router-dom";
import siteConfig from "../config/siteConfig";

export default function StudCard({ stud }) {
  const image =  siteConfig.logoSrc ||stud.image ;

  return (
    <div className="card">
      <div className="card-media">
        <img src={image} alt={stud.name} />
      </div>
      <div className="card-body">
        <h3>{stud.name}</h3>
        <p className="muted">{stud.description}</p>
        <div className="card-meta">
          <span>{stud.color}</span>
          <span>{stud.dna}</span>
        </div>
        <div className="card-row">
          <span className="price">${stud.fee.toLocaleString()}</span>
          <Link to={`/contact?reason=stud&stud=${stud.name}`} className="btn sm">
            Request Stud
          </Link>
        </div>
      </div>
    </div>
  );
}
