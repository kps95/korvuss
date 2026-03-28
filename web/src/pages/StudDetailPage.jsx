import { Link, useParams } from "react-router-dom";
import DogProfileShowcase from "../components/DogProfileShowcase";
import Section from "../components/Section";
import { getDogById } from "../data/sampleData";

export default function StudDetailPage() {
  const { id } = useParams();
  const stud = getDogById(id);

  if (!stud || stud.profileType !== "stud") {
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

  return (
    <DogProfileShowcase
      dog={stud}
      eyebrow="Stud profile"
      backTo="/studs"
      backLabel="Back to studs"
    />
  );
}
