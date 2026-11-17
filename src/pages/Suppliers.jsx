import { useMemo, useState } from 'react';
import PageBanner from '../components/PageBanner';
import SupplierCard from '../components/SupplierCard';
import { suppliers } from '../data/content';
export default function Suppliers() {
  const [search, setSearch] = useState(''); const [active, setActive] = useState(null);
  const filtered = useMemo(() => suppliers.filter(s => `${s.category} ${s.name} ${s.description}`.toLowerCase().includes(search.toLowerCase())), [search]);
  return <><PageBanner eyebrow="OUR PARTNERS" title="Trusted Event Suppliers" description="We collaborate with trusted suppliers to make every celebration smooth, memorable, and beautiful." /><section className="container content-wrap narrow-content"><label className="form-label" htmlFor="supplier-search">Search suppliers</label><input id="supplier-search" className="form-control search-input" type="search" placeholder="Search by supplier or service..." value={search} onChange={e => setSearch(e.target.value)} /><p className="result-count">Showing {filtered.length} supplier categories</p><div className="supplier-list">{filtered.map(supplier => <SupplierCard key={supplier.id} supplier={supplier} expanded={active === supplier.id} onToggle={() => setActive(active === supplier.id ? null : supplier.id)} />)}{filtered.length === 0 && <p className="empty-state">No suppliers match your search. Try another keyword.</p>}</div></section></>;
}
