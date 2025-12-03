import { Link } from "react-router-dom";
import StudCard from "../components/StudCard";
import Section from "../components/Section";
import { studs } from "../data/sampleData";

export default function StudsPage() {
  return (
    <div className="page">
      <Section
        eyebrow="Stud roster"
        title="Select from proven sires"
        actions={<Link className="btn ghost sm" to="/contact">Stud inquiries</Link>}
      >
        <div className="grid three">
          {studs.map((stud) => (
            <StudCard key={stud.id} stud={stud} />
          ))}
        </div>
      </Section>
    </div>
  );
}
