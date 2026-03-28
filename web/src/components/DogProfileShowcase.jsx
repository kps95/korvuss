import { Link } from "react-router-dom";
import {
  getBadgesByIds,
  getDocumentsByIds,
  getDogById,
  getDogsByIds,
  getMediaByIds,
  getRelatedLitterForDog,
} from "../data/sampleData";
import BadgeList from "./BadgeList";
import DocumentLibrary from "./DocumentLibrary";
import DogSummaryCard from "./DogSummaryCard";
import MediaGallery from "./MediaGallery";
import Section from "./Section";

function getPrimaryLink(dog) {
  if (dog.profileType === "puppy") {
    return `/apply?puppyId=${dog.id}&puppyName=${encodeURIComponent(dog.name)}`;
  }

  return `/contact?reason=${encodeURIComponent(
    dog.contactReason || "Kennel Inquiry"
  )}&dog=${encodeURIComponent(dog.name)}`;
}

export default function DogProfileShowcase({
  dog,
  eyebrow,
  backTo,
  backLabel,
}) {
  const badges = getBadgesByIds(dog.badgeIds);
  const documents = getDocumentsByIds(dog.documentIds);
  const media = getMediaByIds(dog.mediaIds);
  const relatedLitter = getRelatedLitterForDog(dog);
  const featuredLitterId = relatedLitter?.id || dog.previousLitterIds?.[0];
  const offspring = getDogsByIds(dog.offspringIds);
  const parents = [getDogById(dog.sireId), getDogById(dog.damId)].filter(Boolean);
  const sampleOffspringMedia = getMediaByIds(dog.sampleOffspringGalleryIds);

  const headlinePrice =
    dog.profileType === "stud"
      ? `$${dog.studFee.toLocaleString()} stud fee`
      : typeof dog.price === "number"
        ? `$${dog.price.toLocaleString()}`
        : dog.availabilityStatus;

  return (
    <div className="page">
      <Section
        eyebrow={eyebrow}
        title={dog.name}
        actions={
          backTo ? (
            <Link className="btn ghost sm" to={backTo}>
              {backLabel}
            </Link>
          ) : null
        }
      >
        <div className="showcase-hero-grid">
          <div className="showcase-hero-media">
            <img src={dog.coverImage || dog.image} alt={dog.name} />
          </div>
          <div className="detail-body">
            <div className="card-row card-row-start">
              <div>
                <p className="eyebrow">{dog.registeredName}</p>
                <h3>{dog.callName ? `${dog.callName} at Korvus` : dog.name}</h3>
              </div>
              <span className="pill ghost status-pill">{dog.status}</span>
            </div>
            <p className="muted">{dog.description}</p>
            <BadgeList badges={badges} />
            <div className="detail-meta">
              <div>
                <p className="eyebrow">Color</p>
                <p>{dog.color}</p>
              </div>
              <div>
                <p className="eyebrow">Price / Fee</p>
                <p>{headlinePrice}</p>
              </div>
              <div>
                <p className="eyebrow">DOB</p>
                <p>{dog.dob}</p>
              </div>
              <div>
                <p className="eyebrow">Temperament</p>
                <p>{dog.temperamentNotes}</p>
              </div>
            </div>
            <div className="annotation-list">
              {dog.traitTags.map((tag) => (
                <span key={tag} className="pill ghost">
                  {tag}
                </span>
              ))}
            </div>
            <div className="cta-stack">
              <Link className="btn" to={getPrimaryLink(dog)}>
                {dog.primaryCtaLabel}
              </Link>
              {featuredLitterId ? (
                <Link className="btn ghost" to={`/litters/${featuredLitterId}`}>
                  View litter page
                </Link>
              ) : (
                <Link className="btn ghost" to={`/stack-off?left=${dog.id}`}>
                  {dog.secondaryCtaLabel}
                </Link>
              )}
            </div>
          </div>
        </div>
      </Section>

      <Section eyebrow="Transparency" title="Structure notes">
        <div className="grid two">
          <div className="panel info-card">
            <h3>Structure summary</h3>
            <p className="muted">{dog.structureSummary}</p>
            <div className="info-list">
              <div>
                <p className="eyebrow">Stack notes</p>
                <p>{dog.stackNotes}</p>
              </div>
              <div>
                <p className="eyebrow">Front / rear</p>
                <p>{dog.frontRearNotes}</p>
              </div>
              <div>
                <p className="eyebrow">Movement</p>
                <p>{dog.movementNotes}</p>
              </div>
            </div>
          </div>
          <div className="panel info-card">
            <h3>Head, topline, and breeder notes</h3>
            <div className="info-list">
              <div>
                <p className="eyebrow">Topline</p>
                <p>{dog.toplineNotes}</p>
              </div>
              <div>
                <p className="eyebrow">Muzzle / head / rope</p>
                <p>{dog.muzzleHeadRopeNotes}</p>
              </div>
              <div>
                <p className="eyebrow">Body proportion</p>
                <p>{dog.bodyProportionNotes}</p>
              </div>
              <div>
                <p className="eyebrow">Breeder commentary</p>
                <p>{dog.breederCommentary}</p>
              </div>
              {dog.judgeCommentary ? (
                <div>
                  <p className="eyebrow">Judge commentary</p>
                  <p>{dog.judgeCommentary}</p>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </Section>

      <Section eyebrow="Lineage" title="Family tree and production">
        <div className="grid two">
          <div className="panel info-card">
            <h3>Family tree</h3>
            <div className="info-list">
              {dog.familyTree.map((node) => (
                <div key={node.label}>
                  <p className="eyebrow">{node.label}</p>
                  <p>{node.value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="panel info-card">
            <h3>Breeding notes</h3>
            <div className="info-list">
              <div>
                <p className="eyebrow">DNA summary</p>
                <p>{dog.dnaPanelSummary}</p>
              </div>
              <div>
                <p className="eyebrow">What this dog throws</p>
                <p>{dog.traitsProduced.join(", ") || "Breeder notes pending."}</p>
              </div>
              <div>
                <p className="eyebrow">Pairing notes</p>
                <p>{dog.breedingNotes}</p>
              </div>
            </div>
          </div>
        </div>
        {!!parents.length && (
          <div className="grid two">
            {parents.map((parent) => (
              <DogSummaryCard key={parent.id} dog={parent} />
            ))}
          </div>
        )}
        {!!offspring.length && (
          <>
            <div className="section-spacer" />
            <div className="grid two">
              {offspring.map((offspringDog) => (
                <DogSummaryCard key={offspringDog.id} dog={offspringDog} />
              ))}
            </div>
          </>
        )}
      </Section>

      <Section eyebrow="Proof library" title="Documents and paperwork">
        <DocumentLibrary documents={documents} />
      </Section>

      <Section eyebrow="Virtual stack off" title="Media and raw clips">
        <MediaGallery assets={media} />
        {!!sampleOffspringMedia.length && (
          <>
            <div className="section-spacer" />
            <h3>Sample offspring gallery</h3>
            <MediaGallery assets={sampleOffspringMedia} />
          </>
        )}
      </Section>

      <Section eyebrow="Buyer info" title="Availability and logistics">
        <div className="grid two">
          <div className="panel info-card">
            <h3>Availability</h3>
            <div className="info-list">
              <div>
                <p className="eyebrow">Deposit status</p>
                <p>{dog.depositStatus}</p>
              </div>
              <div>
                <p className="eyebrow">Availability</p>
                <p>{dog.availabilityStatus}</p>
              </div>
              <div>
                <p className="eyebrow">Delivery options</p>
                <p>{dog.deliveryOptions}</p>
              </div>
            </div>
          </div>
          <div className="panel info-card">
            <h3>What goes home with the buyer</h3>
            <p className="muted">{dog.puppyPackageSummary}</p>
            <div className="cta-stack">
              <Link className="btn" to={getPrimaryLink(dog)}>
                Inquiry / apply
              </Link>
              <Link className="btn ghost" to="/program">
                View program overview
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
