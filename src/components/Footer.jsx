import { Link } from 'react-router-dom';
export default function Footer() {
  return <footer className="site-footer"><div className="container footer-inner"><div><strong>ServLink<span>Events</span></strong><p>Making event planning simple, organized, and stress-free.</p></div><div className="footer-links"><Link to="/services">Packages</Link><Link to="/suppliers">Suppliers</Link><Link to="/contact">Contact</Link></div><small>© {new Date().getFullYear()} ServLink Events. Student project for educational purposes.</small></div></footer>;
}
