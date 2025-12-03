export default function TestimonialList({ testimonials }) {
  return (
    <div className="testimonial-grid">
      {testimonials.map((t) => (
        <div key={t.name} className="testimonial-card">
          <p>“{t.quote}”</p>
          <span className="muted">— {t.name}</span>
        </div>
      ))}
    </div>
  );
}
