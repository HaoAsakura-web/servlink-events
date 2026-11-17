import { Link } from 'react-router-dom';
export default function ServiceCard({ service }) {
  return <article className="service-card h-100"><div><span className="card-kicker">EVENT PACKAGE</span><h2>{service.name}</h2><p className="service-price">{service.price}</p><p>{service.description}</p><ul>{service.inclusions.map((item, index) => <li key={`${service.id}-${index}`}>✓ {item}</li>)}</ul></div><Link className="btn btn-pink" to="/booking">Book this package</Link></article>;
}
