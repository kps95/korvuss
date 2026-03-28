import { useSearchParams } from "react-router-dom";
import Section from "../components/Section";
import StackOffCompare from "../components/StackOffCompare";

export default function StackOffPage() {
  const [searchParams] = useSearchParams();

  return (
    <div className="page">
      <Section
        eyebrow="Virtual stack off"
        title="Compare angles, movement, and raw footage"
      >
        <p className="muted">
          This compare view is kennel-owned. Media is labeled as breeder
          provided, photographer provided, raw, or edited so buyers can inspect
          context honestly.
        </p>
        <StackOffCompare
          initialLeftDogId={searchParams.get("left")}
          initialRightDogId={searchParams.get("right")}
          initialAngle={searchParams.get("angle")}
        />
      </Section>
    </div>
  );
}
