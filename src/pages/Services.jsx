import PageBanner from '../components/PageBanner';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/content';
export default function Services() {
  return <><PageBanner eyebrow="OUR OFFERINGS" title="Event Services & Packages" description="Choose the perfect package that fits your event needs and budget." /><section className="container content-wrap"><div className="row g-4">{services.map(service => <div className="col-md-6 col-xl-4" key={service.id}><ServiceCard service={service} /></div>)}</div></section></>;
}
