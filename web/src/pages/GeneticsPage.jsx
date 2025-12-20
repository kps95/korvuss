import { useMemo, useState } from "react";
import Section from "../components/Section";
import siteConfig from "../config/siteConfig";
import { comboHighlights, lociDetails, strategyRows } from "../data/genetics";

const selectorOptions = {
  cocoa: ["co/co", "co/n", "n/n"],
  testable: ["b/b", "b/n", "n/n"],
  dilution: ["dd", "d/n", "n/n"],
  cream: ["e/e", "EM/EM", "E/E"],
  intensity: ["I/I", "I/i", "i/i"],
  pattern: ["ky/ky", "Kbr/*", "KB/*"],
};

function evaluateStack(stack) {
  const notes = [];
  const { cocoa, testable, dilution, cream, intensity, pattern } = stack;

  const hasFullCocoa = cocoa === "co/co";
  const hasFullB = testable === "b/b";
  const hasDilute = dilution === "dd";
  const hasCream = cream === "e/e";
  const strongIntensity = intensity === "I/I" || intensity === "I/i";
  const clearPattern = pattern === "ky/ky";

  if (hasFullB && hasDilute) notes.push("Isabella stack present (b/b + dd).");
  if (hasFullB && hasFullCocoa) notes.push("New Shade stack present (b/b + co/co).");
  if (hasFullB && hasFullCocoa && hasDilute)
    notes.push("New Shade Isabella potential (b/b + co/co + dd).");
  if (hasFullCocoa && strongIntensity)
    notes.push("Caramel foundation (co/co + intensity).");
  if (hasFullCocoa && strongIntensity && hasCream)
    notes.push("Pink/Caramel Pink path—confirm pigment suppression + no KB.");
  if (!clearPattern) notes.push("KB/Kbr will block or distort tan/tri expression.");
  if (notes.length === 0) notes.push("No premium color stack detected yet.");

  const label = notes[0];

  return { label, notes };
}

export default function GeneticsPage() {
  const [stack, setStack] = useState({
    cocoa: "co/co",
    testable: "b/b",
    dilution: "dd",
    cream: "e/e",
    intensity: "I/I",
    pattern: "ky/ky",
  });

  const evaluation = useMemo(() => evaluateStack(stack), [stack]);

  const handleSelect = (key, value) => {
    setStack((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="page">
      <Section eyebrow="Genetics" title="French Bulldog color master guide">
        <p className="muted">
          Quick-reference for modern Frenchie color genetics—tan/tri visibility, cocoa/testable
          chocolate stacks, dilution, cream, intensity, and the pink/caramel systems.
        </p>
        <div className="panel">
          <div className="detail-meta">
            {Object.keys(selectorOptions).map((key) => (
              <label key={key} className="form-control">
                <p className="eyebrow">{key}</p>
                <select
                  value={stack[key]}
                  onChange={(e) => handleSelect(key, e.target.value)}
                >
                  {selectorOptions[key].map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </label>
            ))}
          </div>
          <div className="panel" style={{ marginTop: 12 }}>
            <p className="eyebrow">Stack summary</p>
            <p>{evaluation.label}</p>
            <ul className="muted">
              {evaluation.notes.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
            <div className="cta-stack">
              <a className="btn ghost" href="/contact">
                Talk pairings
              </a>
              <a className="btn ghost" href="/apply">
                Apply for a pairing
              </a>
            </div>
          </div>
        </div>
      </Section>

      <Section eyebrow="Loci" title="Core color genes">
        <div className="grid two">
          {lociDetails.map((locus) => (
            <div key={locus.key} className="panel">
              <p className="eyebrow">{locus.key} locus</p>
              <h3>{locus.title}</h3>
              <p className="muted">{locus.description}</p>
              <div className="table">
                <div className="table-header">
                  <span>Genotype</span>
                  <span>Effect</span>
                </div>
                {locus.genotypes.map((g) => (
                  <div key={g.label} className="table-row">
                    <span>{g.label}</span>
                    <span className="muted">{g.detail}</span>
                  </div>
                ))}
              </div>
              <ul className="muted">
                {locus.insights.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Stacks" title="High-value combinations">
        <div className="grid three">
          {comboHighlights.map((combo) => (
            <div key={combo.title} className="card">
              <h3>{combo.title}</h3>
              <div className="card-meta">
                {combo.genes.map((g) => (
                  <span key={g} className="pill ghost">
                    {g}
                  </span>
                ))}
              </div>
              <p className="muted">{combo.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Breeding strategy" title="Pairing cheat sheet">
        <div className="panel">
          <div className="table">
            <div className="table-header">
              <span>Goal</span>
              <span>Requirements</span>
              <span>Probability</span>
              <span>Note</span>
            </div>
            {strategyRows.map((row) => (
              <div key={row.title} className="table-row">
                <span>{row.title}</span>
                <span>{row.requirements}</span>
                <span>{row.probability}</span>
                <span className="muted">{row.insight}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section eyebrow="Learn more" title="Next steps">
        <div className="contact-callout panel">
          <div>
            <p className="eyebrow">DNA guidance</p>
            <p className="muted">
              We help blueprint litters for pink, caramel, new shade, and clean tri/tan expression.
            </p>
          </div>
          <div className="cta-stack">
            <a className="btn" href="/contact">
              Contact Korvus
            </a>
            <a className="btn ghost" href="/studs">
              View studs
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
}
