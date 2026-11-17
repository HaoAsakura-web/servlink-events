export default function SupplierCard({ supplier, expanded, onToggle }) {
  return <article className="supplier-card"><button className="supplier-toggle" type="button" aria-expanded={expanded} onClick={onToggle}><span>{supplier.category}</span><span className="toggle-mark">{expanded ? '−' : '+'}</span></button>{expanded && <div className="supplier-details"><h2>{supplier.name}</h2><p>{supplier.description}</p><p><strong>Contact:</strong> {supplier.contact}</p><p><strong>Sample works:</strong> {supplier.works}</p></div>}</article>;
}
