import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { navLinks } from '../data/content';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <NavLink className="brand" to="/" onClick={() => setOpen(false)}>ServLink<span>Events</span></NavLink>
        <button className="menu-toggle" type="button" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span></span><span></span><span></span>
        </button>
        <nav className={`main-nav ${open ? 'show' : ''}`} aria-label="Main navigation">
          {navLinks.map(link => <NavLink key={link.path} to={link.path} end={link.path === '/'} onClick={() => setOpen(false)}>{link.label}</NavLink>)}
        </nav>
      </div>
    </header>
  );
}
