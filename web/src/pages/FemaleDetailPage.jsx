import { Link, useParams } from "react-router-dom";
import DogProfileShowcase from "../components/DogProfileShowcase";
import Section from "../components/Section";
import { getDogById } from "../data/sampleData";

export default function FemaleDetailPage() {
  const { id } = useParams();
  const female = getDogById(id);

  if (!female || female.profileType !== "female") {
    return (
      <div className="page">
        <Section title="Female not found">
          <p className="muted">This female profile is no longer listed.</p>
          <Link to="/females" className="btn ghost">
            Back to females
          </Link>
        </Section>
      </div>
    );
  }

  return (
    <DogProfileShowcase
      dog={female}
      eyebrow="Female profile"
      backTo="/females"
      backLabel="Back to females"
    />
  );
}
