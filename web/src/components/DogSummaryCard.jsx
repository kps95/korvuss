import { Link } from "react-router-dom";
import siteConfig from "../config/siteConfig";
import { getBadgesByIds } from "../data/sampleData";
import BadgeList from "./BadgeList";

function getDogHref(dog) {
  if (dog.profileType === "stud") {
    return `/studs/${dog.id}`;
  }

  if (dog.profileType === "female") {
    return `/females/${dog.id}`;
  }

  return `/puppies/${dog.id}`;
}

export default function DogSummaryCard({ dog }) {
  const badges = getBadgesByIds(dog.badgeIds).slice(0, 2);
  const image = dog.image || siteConfig.logoSrc;
  const priceLabel =
    dog.profileType === "stud"
      ? `$${dog.studFee.toLocaleString()} fee`
      : typeof dog.price === "number"
        ? `$${dog.price.toLocaleString()}`
        : dog.availabilityStatus;

  return (
    <div className="card showcase-card">
      <div className="card-media">
        <img src={image} alt={dog.name} />
      </div>
      <div className="card-body">
        <div className="card-row card-row-start">
          <div>
            <h3>{dog.name}</h3>
            <p className="muted">{dog.registeredName}</p>
          </div>
          <span className="pill ghost status-pill">{dog.status}</span>
        </div>
        <p className="muted">{dog.description}</p>
        <div className="card-meta">
          <span>{dog.color}</span>
          <span>{dog.weight}</span>
          <span>{dog.kennelName}</span>
        </div>
        <BadgeList badges={badges} compact />
        <div className="card-row">
          <span className="price">{priceLabel}</span>
          <Link to={getDogHref(dog)} className="btn sm ghost">
            View profile
          </Link>
        </div>
      </div>
    </div>
  );
}
