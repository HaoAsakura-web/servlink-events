import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Suppliers from './pages/Suppliers';
import Booking from './pages/Booking';
import Feedback from './pages/Feedback';
import Contact from './pages/Contact';

export default function App() {
  return <><Navbar /><main><Routes>
    <Route path="/" element={<Home />} /><Route path="/about" element={<About />} />
    <Route path="/services" element={<Services />} /><Route path="/suppliers" element={<Suppliers />} />
    <Route path="/booking" element={<Booking />} /><Route path="/feedback" element={<Feedback />} />
    <Route path="/contact" element={<Contact />} /><Route path="*" element={<Home />} />
  </Routes></main><Footer /></>;
}
