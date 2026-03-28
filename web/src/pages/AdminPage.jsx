import Section from "../components/Section";
import {
  documents,
  litters,
  mediaAssets,
  products,
  puppies,
  studs,
} from "../data/sampleData";

export default function AdminPage() {
  return (
    <div className="page">
      <Section
        eyebrow="Admin"
        title="Content studio starter"
        actions={
          <span className="muted">
            Static prototype now. Supabase CRUD + uploads next.
          </span>
        }
      >
        <div className="grid two">
          <div className="panel info-card">
            <h3>Publish workflow</h3>
            <ul className="bullet-list">
              <li>Create or clone a dog profile.</li>
              <li>Attach litter, lineage, badges, and buyer CTA settings.</li>
              <li>Upload stack photos, raw clips, and supporting documents.</li>
              <li>Reorder media, set visibility, then publish to the site.</li>
            </ul>
          </div>
          <div className="panel info-card">
            <h3>Current content inventory</h3>
            <div className="badge-list">
              <span className="pill showcase-pill">{studs.length} studs</span>
              <span className="pill showcase-pill">{puppies.length} puppies</span>
              <span className="pill showcase-pill">{litters.length} litters</span>
              <span className="pill showcase-pill">{documents.length} docs</span>
              <span className="pill showcase-pill">{mediaAssets.length} media</span>
            </div>
          </div>
        </div>
        <div className="panel">
          <h4>Puppies</h4>
          <div className="table">
            <div className="table-header">
              <span>Name</span>
              <span>Status</span>
              <span>Price</span>
            </div>
            {puppies.map((p) => (
              <div key={p.id} className="table-row">
                <span>{p.name}</span>
                <span className={`pill ${p.status}`}>{p.status}</span>
                <span>${p.price.toLocaleString()}</span>
              </div>
            ))}
          </div>
          <h4>Studs</h4>
          <div className="table">
            <div className="table-header">
              <span>Name</span>
              <span>DNA</span>
              <span>Fee</span>
            </div>
            {studs.map((s) => (
              <div key={s.id} className="table-row">
                <span>{s.name}</span>
                <span>{s.dna}</span>
                <span>${s.fee.toLocaleString()}</span>
              </div>
            ))}
          </div>
          <h4>Documents</h4>
          <div className="table">
            <div className="table-header">
              <span>Title</span>
              <span>Type</span>
              <span>Visibility</span>
            </div>
            {documents.map((document) => (
              <div key={document.id} className="table-row">
                <span>{document.title}</span>
                <span>{document.documentType}</span>
                <span>{document.visibility}</span>
              </div>
            ))}
          </div>
          <h4>Products</h4>
          <div className="table">
            <div className="table-header">
              <span>Name</span>
              <span>Price</span>
            </div>
            {products.map((p) => (
              <div key={p.id} className="table-row">
                <span>{p.name}</span>
                <span>${p.price.toFixed(2)}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
