import { Link, useParams } from "react-router-dom";
import DocumentLibrary from "../components/DocumentLibrary";
import MediaGallery from "../components/MediaGallery";
import PuppyCard from "../components/PuppyCard";
import Section from "../components/Section";
import {
  getDogById,
  getDogsByIds,
  getLitterById,
  getDocumentsByIds,
  getMediaByIds,
} from "../data/sampleData";

export default function LitterDetailPage() {
  const { id } = useParams();
  const litter = getLitterById(id);

  if (!litter) {
    return (
      <div className="page">
        <Section title="Litter not found">
          <p className="muted">This litter page is unavailable.</p>
          <Link to="/litters" className="btn ghost">
            Back to litters
          </Link>
        </Section>
      </div>
    );
  }

  const sire = getDogById(litter.sireId);
  const dam = getDogById(litter.damId);
  const puppies = getDogsByIds(litter.puppyIds);
  const documents = getDocumentsByIds(litter.documentIds);
  const media = getMediaByIds(litter.mediaIds);

  return (
    <div className="page">
      <Section
        eyebrow="Litter profile"
        title={litter.title}
        actions={
          <div className="cta-stack">
            <Link className="btn sm" to="/contact?reason=Litter Inquiry">
              Deposit / inquiry
            </Link>
            <Link className="btn sm ghost" to="/litters">
              Back to litters
            </Link>
          </div>
        }
      >
        <div className="grid two">
          <div className="panel info-card">
            <h3>Breeding summary</h3>
            <div className="info-list">
              <div>
                <p className="eyebrow">Sire</p>
                <p>{sire?.name}</p>
              </div>
              <div>
                <p className="eyebrow">Dam</p>
                <p>{dam?.name}</p>
              </div>
              <div>
                <p className="eyebrow">Breeding date</p>
                <p>{litter.breedingDate}</p>
              </div>
              <div>
                <p className="eyebrow">Birth date</p>
                <p>{litter.birthDate}</p>
              </div>
              <div>
                <p className="eyebrow">Expected traits</p>
                <p>{litter.expectedTraits.join(", ")}</p>
              </div>
            </div>
          </div>
          <div className="panel info-card">
            <h3>Availability</h3>
            <div className="badge-list">
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
            <p className="muted">{litter.breederNotes}</p>
            <div className="info-list">
              <div>
                <p className="eyebrow">DNA summary</p>
                <p>{litter.dnaSummary}</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section eyebrow="Puppies" title="Grouped litter profiles">
        <div className="grid two">
          {puppies.map((puppy) => (
            <PuppyCard key={puppy.id} puppy={puppy} />
          ))}
        </div>
      </Section>

      <Section eyebrow="Growth timeline" title="Weekly breeder updates">
        <div className="grid three">
          {litter.growthTimeline.map((item) => (
            <div key={item.week} className="panel info-card">
              <p className="eyebrow">{item.week}</p>
              <p>{item.note}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Documentation" title="Proof library for this litter">
        <DocumentLibrary documents={documents} />
      </Section>

      <Section eyebrow="Virtual stack off" title="Litter media gallery">
        <MediaGallery assets={media} />
      </Section>
    </div>
  );
}
