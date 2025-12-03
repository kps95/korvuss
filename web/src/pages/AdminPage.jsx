import Section from "../components/Section";
import { products, puppies, studs } from "../data/sampleData";

export default function AdminPage() {
  return (
    <div className="page">
      <Section
        eyebrow="Admin"
        title="Read-only starter"
        actions={<span className="muted">Wire RLS + Supabase UI for edits.</span>}
      >
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
