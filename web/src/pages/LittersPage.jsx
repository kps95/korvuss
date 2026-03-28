import { Link } from "react-router-dom";
import LitterCard from "../components/LitterCard";
import Section from "../components/Section";
import { litters } from "../data/sampleData";

export default function LittersPage() {
  return (
    <div className="page">
      <Section
        eyebrow="Litters"
        title="Current and recent breedings"
        actions={
          <Link className="btn ghost sm" to="/program">
            Program overview
          </Link>
        }
      >
        <div className="grid two">
          {litters.map((litter) => (
            <LitterCard key={litter.id} litter={litter} />
          ))}
        </div>
      </Section>
    </div>
  );
}
