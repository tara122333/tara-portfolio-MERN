# Tara's Portfolio

A modern, animated personal portfolio website showcasing my work as a developer. Built with React 19, Vite, Three.js, and GSAP for immersive 3D visuals and smooth scroll-driven animations.

## Tech Stack

- **Framework:** React 19 + Vite 6
- **Styling:** Tailwind CSS 4
- **3D / Graphics:** Three.js, React Three Fiber, Drei, Postprocessing
- **Animations:** GSAP + @gsap/react
- **Contact Form:** EmailJS
- **Responsive Helpers:** react-responsive
- **Linting:** ESLint 9

## Sections

- **Hero** — animated landing with 3D model
- **Showcase** — featured project highlights
- **Logo Showcase** — tools & brands
- **Feature Cards** — what I do
- **Experience** — work timeline
- **Tech Stack** — technologies I use
- **Testimonials** — feedback from collaborators
- **Contact** — get in touch via EmailJS
- **Footer**

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
git clone https://github.com/<your-username>/tara-portfolio-MERN.git
cd tara-portfolio-MERN
npm install
```

### Environment Variables

The contact form uses EmailJS. Create a `.env` file in the project root with:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### Scripts

| Command           | Description                              |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start the Vite dev server                |
| `npm run build`   | Build the production bundle to `dist/`   |
| `npm run preview` | Preview the production build locally     |
| `npm run lint`    | Run ESLint across the project            |

## Project Structure

```
tara-portfolio-MERN/
├── public/
│   ├── images/        # static images & icons
│   └── models/        # 3D model assets (.glb, etc.)
├── src/
│   ├── components/    # reusable UI (NavBar, Button, GlowCard, ...)
│   ├── constants/     # site content & config
│   ├── sections/      # page sections (Hero, Experience, Contact, ...)
│   ├── App.jsx
│   ├── Main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## Deployment

The build output in `dist/` can be deployed to any static host (Vercel, Netlify, GitHub Pages, Cloudflare Pages, etc.).

```bash
npm run build
```

## Author

**Tara Chand Kumawat**

If you like this project, consider giving it a ⭐ on GitHub.
