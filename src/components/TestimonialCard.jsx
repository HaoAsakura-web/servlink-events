export default function TestimonialCard({ testimonial }) {
  return <article className="testimonial-card"><div className="stars" aria-label="5 out of 5 stars">★★★★★</div><p>“{testimonial.quote}”</p><h3>— {testimonial.author}</h3></article>;
}
