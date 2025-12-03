import { Link, useParams } from "react-router-dom";
import Section from "../components/Section";
import siteConfig from "../config/siteConfig";
import { studs } from "../data/sampleData";

export default function StudDetailPage() {
  const { id } = useParams();
  const stud = studs.find((s) => s.id === id);

  if (!stud) {
    return (
      <div className="page">
        <Section title="Stud not found">
          <p className="muted">This sire is no longer listed.</p>
          <Link to="/studs" className="btn ghost">
            Back to studs
          </Link>
        </Section>
      </div>
    );
  }

  const image = siteConfig.logoSrc || stud.image ;

  return (
    <div className="page">
      <Section eyebrow="Stud profile" title={stud.name}>
        <div className="detail-grid">
          <div className="detail-media">
            <img src={image} alt={stud.name} />
          </div>
          <div className="detail-body">
            <p className="muted">{stud.description}</p>
            <div className="detail-meta">
              <div>
                <p className="eyebrow">Color</p>
                <p>{stud.color}</p>
              </div>
              <div>
                <p className="eyebrow">DNA</p>
                <p>{stud.dna}</p>
              </div>
              <div>
                <p className="eyebrow">Stud Fee</p>
                <p>${stud.fee.toLocaleString()}</p>
              </div>
            </div>
            <div className="cta-stack">
              <Link
                className="btn"
                to={`/contact?reason=Stud Inquiry&stud=${stud.name}`}
              >
                Request stud service
              </Link>
              <Link className="btn ghost" to="/faq">
                View policies
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
