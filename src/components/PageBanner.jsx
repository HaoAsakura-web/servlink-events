export default function PageBanner({ eyebrow, title, description }) {
  return <section className="page-banner"><div className="container"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{description}</p></div></section>;
}
