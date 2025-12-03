import { Link, useParams } from "react-router-dom";
import Section from "../components/Section";
import siteConfig from "../config/siteConfig";
import { puppies } from "../data/sampleData";

export default function PuppyDetailPage() {
  const { id } = useParams();
  const puppy = puppies.find((p) => p.id === id);

  if (!puppy) {
    return (
      <div className="page">
        <Section title="Puppy not found">
          <p className="muted">This listing is unavailable.</p>
          <Link to="/puppies" className="btn ghost">
            Back to puppies
          </Link>
        </Section>
      </div>
    );
  }

  const image = siteConfig.logoSrc || puppy.image ;

  return (
    <div className="page">
      <Section eyebrow="Puppy profile" title={puppy.name}>
        <div className="detail-grid">
          <div className="detail-media">
            <img src={image} alt={puppy.name} />
            <span className={`pill ${puppy.status}`}>{puppy.status}</span>
          </div>
          <div className="detail-body">
            <p className="muted">{puppy.description}</p>
            <div className="detail-meta">
              <div>
                <p className="eyebrow">Sex</p>
                <p>{puppy.sex}</p>
              </div>
              <div>
                <p className="eyebrow">DOB</p>
                <p>{puppy.dob}</p>
              </div>
              <div>
                <p className="eyebrow">Color</p>
                <p>{puppy.color}</p>
              </div>
              <div>
                <p className="eyebrow">DNA</p>
                <p>{puppy.dna}</p>
              </div>
              <div>
                <p className="eyebrow">Price</p>
                <p>${puppy.price.toLocaleString()}</p>
              </div>
            </div>
            <div className="cta-stack">
              <Link
                className="btn"
                to={`/apply?puppyId=${puppy.id}&puppyName=${puppy.name}`}
              >
                Apply for this puppy
              </Link>
              <Link
                className="btn ghost"
                to={`/contact?reason=Puppy Inquiry&puppy=${puppy.name}`}
              >
                Contact about {puppy.name}
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
