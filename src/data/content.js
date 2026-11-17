export const services = [
  { id: 1, name: 'Full Coordination', price: '₱45,000', description: 'Perfect for clients who want a stress-free experience from start to finish.', inclusions: ['Complete event planning & management', 'Unlimited consultation', 'Full supplier sourcing & coordination', 'Program flow creation', 'On-the-day team assistance', 'Venue inspection & layout planning'] },
  { id: 2, name: 'Partial Coordination', price: '₱28,000', description: 'Best for clients who already booked some suppliers but still need professional guidance.', inclusions: ['Assistance with supplier coordination', 'Timeline and program flow preparation', 'Monitoring of pre-event deadlines', '1–2 consultation meetings', 'On-the-day management'] },
  { id: 3, name: 'On-the-Day Coordination', price: '₱18,000', description: 'Ideal for clients who already completed planning and need assistance on the event day.', inclusions: ['1 pre-event meeting', 'Final timeline review', 'Coordination with all booked suppliers', 'Full event-day execution', 'Event flow and guest coordination'] },
  { id: 4, name: 'Event Styling Package', price: 'Starts at ₱25,000', description: 'Transform your venue with stunning designs that match your theme.', inclusions: ['Mood board & theme creation', 'Stage backdrop', 'Entrance & aisle setup', 'Premium floral & décor arrangements', 'Full styling team setup'] },
  { id: 5, name: 'Luxury Experience Package', price: 'Starts at ₱50,000', description: 'Experience the elegance and grandeur of a luxury-style event!', inclusions: ['Premium event concept and theme design', 'VIP guest experience management', 'Complete day-of coordination', 'Transportation and logistics management', 'Luxury styling and décor setup'] },
  { id: 6, name: 'Intimate & Personalized Package', price: 'Starts at ₱32,000', description: 'Celebrate your special moments with a touch of personal elegance.', inclusions: ['Personalized planning for small events', 'Partial day coordination', 'Guest favors and personal touches', 'Transportation and logistics management', 'On-site support and supervision'] }
];

export const suppliers = [
  { id: 1, category: '🍽️ Catering Services', name: 'Belagis Catering', description: 'Traditional Filipino dishes with modern presentation. Custom buffet packages for weddings, birthdays, and corporate events.', contact: '0912-345-6789 | belagiscatering@gmail.com', works: 'Buffet setups, plated dinners, themed catering stations' },
  { id: 2, category: '🌸 Florists & Event Stylists', name: 'BloomCraft Events', description: 'Rustic, minimalist, and luxury floral arrangements. Full event styling services available.', contact: '0938-456-7721', works: 'Bouquets, table centerpieces, stage styling' },
  { id: 3, category: '📸 Photographers & Videographers', name: 'FrameStory Studios', description: 'Cinematic wedding films and vibrant event photography coverage.', contact: 'framestorystudios@gmail.com | 0917-112-8899', works: 'Wedding highlight reels, debut photo sets, corporate albums' },
  { id: 4, category: '✉️ Invitation Designers', name: 'PaperLeaf Design Co.', description: 'Custom invitations, digital invites, menus, and printed materials.', contact: '@paperleafdesigns (Instagram)', works: 'Watercolor themes, foil-pressed invites, minimalist suites' },
  { id: 5, category: '💄 Hair & Makeup Artists', name: 'Glam by Trina', description: 'Soft glam for weddings, debuts, and shoots.', contact: '0927-667-0021', works: 'Bridal portfolio, editorial looks, debutante glam' },
  { id: 6, category: '🔊 Lights & Sounds Providers', name: 'SonicWave Lights & Sounds', description: 'Full audio and lighting services including DJ and stage setup.', contact: '0998-204-6630', works: 'Event lighting setups, concert-style sound systems' },
  { id: 7, category: '🏛️ Venue Recommendations', name: 'The Garden Loft Events Place', description: 'Elegant indoor–outdoor venue ideal for intimate weddings and private parties.', contact: '0915-788-9920', works: 'Garden ceremonies, rustic receptions' }
];

export const testimonials = [
  { id: 1, quote: 'ServLink Events made our wedding perfect! Everything was handled seamlessly.', author: 'Maria & Juan' },
  { id: 2, quote: 'Professional, creative, and super organized. Highly recommended for any event.', author: 'Anne L.' },
  { id: 3, quote: 'The styling team transformed our venue into a fairytale. Guests were amazed!', author: 'Paul & Emma' },
  { id: 4, quote: 'Everything went perfectly! The team was attentive, organized, and made sure every detail was taken care of.', author: 'David' },
  { id: 5, quote: 'Overall, we’re very happy with the event. The setup was gorgeous and the coordination was excellent.', author: 'Jessica Sojo' },
  { id: 6, quote: 'We couldn’t have asked for a better experience. From start to finish, the team made us feel special and supported.', author: 'Maribel' }
];

export const navLinks = [
  { label: 'Home', path: '/' }, { label: 'About', path: '/about' },
  { label: 'Services / Packages', path: '/services' }, { label: 'Suppliers', path: '/suppliers' },
  { label: 'Booking', path: '/booking' }, { label: 'Feedback', path: '/feedback' }, { label: 'Contact', path: '/contact' }
];
