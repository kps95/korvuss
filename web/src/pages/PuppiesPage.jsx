import { useMemo, useState } from "react";
import PuppyCard from "../components/PuppyCard";
import Section from "../components/Section";
import { puppies } from "../data/sampleData";

export default function PuppiesPage() {
  const [status, setStatus] = useState("all");
  const [sex, setSex] = useState("all");

  const filtered = useMemo(() => {
    return puppies.filter((p) => {
      const statusMatch = status === "all" || p.status === status;
      const sexMatch = sex === "all" || p.sex.toLowerCase() === sex;
      return statusMatch && sexMatch;
    });
  }, [status, sex]);

  return (
    <div className="page">
      <Section
        eyebrow="Puppies"
        title="Current + upcoming placements"
        actions={
          <div className="filters">
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="all">Status: All</option>
              <option value="available">Available</option>
              <option value="reserved">Reserved</option>
              <option value="sold">Sold</option>
            </select>
            <select value={sex} onChange={(e) => setSex(e.target.value)}>
              <option value="all">Sex: All</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        }
      >
        <div className="grid three">
          {filtered.map((puppy) => (
            <PuppyCard key={puppy.id} puppy={puppy} />
          ))}
          {filtered.length === 0 && (
            <p className="muted">No puppies match those filters yet.</p>
          )}
        </div>
      </Section>
    </div>
  );
}
