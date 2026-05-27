# ✨ Abhishek | Creative Frontend Developer & Interactive Designer

A cinematic, high-end portfolio built to highlight premium web experiences, custom interactive canvas layouts, and butter-smooth animation frameworks. Meticulously optimized for 60/120 FPS scrolling across both desktop and mobile devices.

---

## 🎨 Architectural & Design Philosophy

This portfolio is tailored for a web builder and creative designer who treats websites as digital art. The styling utilizes a luxury **charcoal obsidian and brushed amber-gold palette** that focuses on clean visual hierarchy, subtle micro-interactions, and cinematic motion design.

### Key Sections
1. **Hero**: Interactive floating manifesto featuring spring-physics mouse-tilt cards and a soft spotlight cursor.
2. **Atmospheric Showcase**: Portfolio drawer showcasing immersive, story-driven, motion-heavy brand sites.
3. **Systemic Showcase**: Showcase of highly functional, complex grid systems and tools.
4. **Experiential Labs (New)**: Interactive sandbox highlighting raw creative technology, featuring a live HTML5 Canvas particle physics physics simulator where particles orbit around gravity wells.
5. **Process & Methodology**: Structured sequence detailing the creative journey from layout strategy to deployment.

---

## ⚡ Performance Engineering (The 120 FPS Initiative)

To achieve absolute scroll and interaction fluidity on mobile and desktop browsers, the codebase implements strict performance guidelines targeting layout calculation and compositing threads:

- **GPU Composite Repaint Elimination**: Removed full-screen dynamic animations on the film-grain overlay. The grain is rendered as a static matte-textured SVG layer, taking full-screen repaint loops off the main browser thread.
- **Backdrop-Blur Rasterization Optimization**: Expensive CSS `backdrop-filter: blur(...)` rules on cards have been replaced with semi-solid luxury obsidian layers (`rgba(10, 10, 12, 0.94)`). This prevents the browser from recalculating blurred layers behind cards during scrolling.
- **Direct Animation Value Injection**: Hero card mouse-tilts bypass React's standard state-update cycles. By employing Framer Motion `useMotionValue` and `useSpring` hooks, tilt coordinate updates write directly to style properties, preventing frequent re-renders of the entire section.
- **Passive Layout Caching**: Avoids synchronous reflow thrashing by caching bounding coordinates (`.getBoundingClientRect()`) once on component mount or window resize, instead of querying the DOM dynamically during mouse moves.
- **IntersectionObserver Accordion control**: The capabilities accordion in the Services section uses a native vertical observer instead of an expensive window scroll scroll handler.
- **Isolated Modals (React Portals)**: Modals are mounted directly under `document.body` via React Portals, placing them outside the animated `<main>` container and resolving layout/clipping conflicts.

---

## 🗺️ Navigation & History Routing

- **Hash-Change Router**: The app uses URL hashes (`#/`, `#/atmospheric`, `#/systemic`, `#/labs`) with a global `hashchange` listener. This allows trackpad and mobile swipe-to-back gestures to function natively, taking the user back to the homepage instead of closing the tab.
- **Scroll State Preservation**: Active scroll offsets are captured passively inside a React `useRef` to maintain homepage scroll indexes with zero re-render overhead. When a user swipes back, their scroll position is restored instantly.
- **Modal Scroll Isolation**: Added `data-lenis-prevent` attributes to fullscreen modals to prevent smooth scroll events from bubbling and leaking into the background page.
- **Defensive API Checks**: Strict check guards (`typeof globalLenis.scrollTo === "function"`) are applied globally to prevent touch-screen or mock-injected Lenis instances from crashing the UI.

---

## 🛠️ Technology Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 8](https://vite.dev/)
- **Style Engine**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animation Orchestrator**: [GSAP](https://gsap.com/) (GreenSock) for entrance, preloader, and timeline-controlled sequences.
- **Springs & Physics**: [Framer Motion](https://www.framer.com/motion/) for interactive cards and custom cursors.
- **Smooth Inertia Scroll**: [Lenis](https://lenis.darkroom.engineering/) for synchronized scroll mechanics.
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 📦 Asset Architecture

- **Web Builder Emblem (`src/logo.png`)**: A high-end 3D gold-amber browser frame, encasing obsidian code brackets and a glowing core node, cropped and exported at 512x512 PNG format for optimized loading.
- **Favicon (`public/favicon.png`)**: Custom-resized 64x64 PNG derived directly from the primary brand emblem, replacing the template Vite icon.

---

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js (v18+)** and **npm** installed.

### Installation

1. Clone or copy the project files to your local environment.
2. Install the package dependencies:
   ```bash
   npm install
   ```

### Development

Start the local development server with hot-reloading:
```bash
npm run dev
```
The application will be served at `http://localhost:5173/`.

### Production Build

Compile and bundle the application for production deployment:
```bash
npm run build
```
The optimized bundle will be compiled into the `dist/` directory, ready to be hosted.

### Code Quality

Run ESLint to check for stylistic or programmatic issues:
```bash
npm run lint
```
