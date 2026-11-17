# ServLink Events – React + Vite

A responsive, static multi-page event services and booking showcase converted from the original ServLink Events HTML/CSS project.

## Pages
- Home
- About
- Services / Packages
- Suppliers
- Booking
- Feedback
- Contact

## Requirements demonstrated
- React function components and JSX
- React Router navigation across seven pages
- Reusable components: Navbar, Footer, PageBanner, ServiceCard, SupplierCard, and TestimonialCard
- Props passed from parent components to child components
- Arrays of objects rendered with `.map()` and unique `key` values
- Bootstrap 5 grid and form classes plus custom CSS media queries
- React state and JavaScript events: responsive navigation menu, supplier search, supplier accordion, booking form validation, and feedback form
- Semantic HTML, accessible labels, button states, and image descriptions

## Run locally
1. Install Node.js (LTS).
2. Extract this project folder.
3. Open the folder in VS Code or a terminal.
4. Run `npm install`.
5. Run `npm run dev`.
6. Open the local URL printed by Vite (usually `http://localhost:5173`).

## Build
Run `npm run build`. Vite creates the production website in the `dist` folder. Use `npm run preview` to test the production build locally.

## Deployment
You can deploy the `dist` folder using Netlify or Vercel. Push the source project to a GitHub repository. For GitHub Pages, configure the Vite `base` path to match the repository name before building.

## Important project note
This is a front-end demonstration only. The booking form does not save or send booking data. Feedback added through the form is held only in React state and disappears when the page is refreshed. No backend or database is used.
