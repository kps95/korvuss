import { Link } from "react-router-dom";
import DogSummaryCard from "../components/DogSummaryCard";
import DocumentLibrary from "../components/DocumentLibrary";
import LitterCard from "../components/LitterCard";
import PuppyCard from "../components/PuppyCard";
import Section from "../components/Section";
import TestimonialList from "../components/TestimonialList";
import {
  documents,
  getDogsByIds,
  getLitterById,
  kennelProgram,
  transparencyModules,
  testimonials,
} from "../data/sampleData";

export default function ProgramPage() {
  const featuredStuds = getDogsByIds(kennelProgram.featuredStudIds);
  const featuredFemales = getDogsByIds(kennelProgram.featuredFemaleIds);
  const featuredPuppies = getDogsByIds(kennelProgram.featuredPuppyIds);
  const featuredLitters = kennelProgram.featuredLitterIds
    .map((id) => getLitterById(id))
    .filter(Boolean);

  return (
    <div className="page">
      <Section
        eyebrow={kennelProgram.eyebrow}
        title={kennelProgram.title}
        actions={
          <div className="cta-stack">
            <Link className="btn sm" to="/stack-off">
              Open stack off
            </Link>
            <Link className="btn sm ghost" to="/litters">
              View litters
            </Link>
          </div>
        }
      >
        <div className="grid two">
          <div className="panel info-card">
            <p className="muted">{kennelProgram.story}</p>
            <div className="info-list">
              <div>
                <p className="eyebrow">Breeding philosophy</p>
                <ul className="bullet-list">
                  {kennelProgram.philosophy.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="eyebrow">Transparency commitments</p>
                <ul className="bullet-list">
                  {kennelProgram.transparencyCommitments.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="panel info-card">
            <div className="info-list">
              <div>
                <p className="eyebrow">Health commitments</p>
                <ul className="bullet-list">
                  {kennelProgram.healthCommitments.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="eyebrow">How we raise and place puppies</p>
                <ul className="bullet-list">
                  {[
                    ...kennelProgram.careRoutine,
                    ...kennelProgram.socializationApproach,
                    ...kennelProgram.feedingApproach,
                  ].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="eyebrow">Delivery / pickup</p>
                <p>{kennelProgram.shippingPickup}</p>
              </div>
              <div>
                <p className="eyebrow">Contracts & guarantees</p>
                <p>{kennelProgram.contractSummary}</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section eyebrow="Breeding stock" title="Studs and females">
        <div className="grid two">
          {[...featuredStuds, ...featuredFemales].map((dog) => (
            <DogSummaryCard key={dog.id} dog={dog} />
          ))}
        </div>
      </Section>

      <Section eyebrow="Available puppies" title="Current placement opportunities">
        <div className="grid two">
          {featuredPuppies.map((puppy) => (
            <PuppyCard key={puppy.id} puppy={puppy} />
          ))}
        </div>
      </Section>

      <Section eyebrow="Recent litter" title="Grouped by breeding">
        <div className="grid two">
          {featuredLitters.map((litter) => (
            <LitterCard key={litter.id} litter={litter} />
          ))}
        </div>
      </Section>

      <Section eyebrow="Buyer transparency" title="Modules buyers actually use">
        <div className="grid three">
          {transparencyModules.map((module) => (
            <div key={module.id} className="panel info-card">
              <p className="eyebrow">{module.title}</p>
              <p>{module.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Proof library" title="Documents and uploaded proof">
        <DocumentLibrary documents={documents.slice(0, 4)} />
      </Section>

      <Section
        eyebrow="Families + handlers"
        title="Testimonials"
        actions={
          <Link className="btn ghost sm" to="/contact">
            Start an inquiry
          </Link>
        }
      >
        <TestimonialList testimonials={testimonials} />
      </Section>
    </div>
  );
}
