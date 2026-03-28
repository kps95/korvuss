import Section from "../components/Section";
import DogSummaryCard from "../components/DogSummaryCard";
import { females } from "../data/sampleData";

export default function FemalesPage() {
  return (
    <div className="page">
      <Section eyebrow="Female roster" title="Foundation females">
        <div className="grid two">
          {females.map((female) => (
            <DogSummaryCard key={female.id} dog={female} />
          ))}
        </div>
      </Section>
    </div>
  );
}
