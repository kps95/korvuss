import { Link, useParams } from "react-router-dom";
import DogProfileShowcase from "../components/DogProfileShowcase";
import Section from "../components/Section";
import { getDogById } from "../data/sampleData";

export default function PuppyDetailPage() {
  const { id } = useParams();
  const puppy = getDogById(id);

  if (!puppy || puppy.profileType !== "puppy") {
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

  return (
    <DogProfileShowcase
      dog={puppy}
      eyebrow="Puppy profile"
      backTo="/puppies"
      backLabel="Back to puppies"
    />
  );
}
