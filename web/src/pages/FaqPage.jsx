import Section from "../components/Section";
import { faqs } from "../data/sampleData";

export default function FaqPage() {
  return (
    <div className="page">
      <Section eyebrow="Policies" title="FAQ">
        <div className="faq-list">
          {faqs.map((faq) => (
            <details key={faq.question} className="faq-item" open>
              <summary>{faq.question}</summary>
              <p className="muted">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Section>
    </div>
  );
}
