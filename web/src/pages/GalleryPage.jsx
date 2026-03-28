import Section from "../components/Section";
import siteConfig from "../config/siteConfig";
import { galleryItems } from "../data/sampleData";

export default function GalleryPage() {
  return (
    <div className="page">
      <Section eyebrow="Gallery" title="Work, travel, and home life">
        <div className="grid four">
          {galleryItems.map((item) => (
            <div key={item.id} className="card photo">
              <img src={item.image || siteConfig.logoSrc} alt={item.caption} />
              <p className="muted">{item.caption}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
