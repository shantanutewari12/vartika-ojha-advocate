# Vartika Ojha — Advocate & Legal Consultant

> *"Justice is not merely a profession — it is a quiet discipline of truth, intellect, and integrity."*

A premium, fully responsive personal website for **Vartika Ojha**, Advocate & Legal Consultant. Built with a bespoke law-chamber aesthetic — deep mahogany tones, gold accents, Cormorant Garamond typography, and cinematic micro-animations — to reflect the gravitas and professionalism of legal practice.

---

## 🏛️ Live Site

Live site: [vartika-ojha-advocate-portfolio.vercel.app](https://vartika-ojha-advocate-portfolio.vercel.app/)

Deployed via Vercel integration.

---

## ✨ Features

### 🎨 Design & UX
- **Premium Law-Chamber Aesthetic** — deep blackish-brown background, gold (`oklch`) accents, ivory text, mahogany card surfaces
- **Custom CSS Design System** — `.leather-card`, `.wood-panel`, `.glass`, `.gold-border`, `.shimmer-gold`, `.animate-book-open` utility classes
- **Book-Open Entry Animation** — page enters with a cinematic 3D perspective rotation on first load
- **Shimmer Gold Effect** — hero name "Vartika" shimmers continuously with a light-sweep animation
- **Floating Dust Particles** — ambient particles rise across the Hero section for depth and atmosphere
- **Vignette Overlay** — radial darkening on Hero for a studio-quality photograph feel
- **Scroll-Triggered Animations** — every section animates in (`opacity` + `y` translate) as it enters the viewport using Framer Motion's `whileInView`
- **Gold Glow on Hover** — cards and buttons emit a warm gold box-shadow on hover

### 📱 Responsive Design
- Fully mobile-first layout
- Collapsible hamburger navigation drawer for mobile with animated three-bar → X transform
- Adaptive grid layouts (1 → 2 → 3/4 columns) across all breakpoints
- Touch-friendly button sizes and tap targets

### 🧭 Navigation
- **Fixed Header** — transparent on top, blurs and darkens on scroll using `backdrop-filter`
- **Smooth Scroll** — all nav links scroll to their sections with `scroll-behavior: smooth`
- **"Consult" CTA Button** — always visible in nav for quick access to consultation booking
- **Mobile Drawer** — full-screen slide-down menu with staggered link animation

### 📜 Page Sections (Single Page Application)

| Section | Anchor | Description |
|---------|--------|-------------|
| **Hero** | `#top` | Full-screen landing with name, title, particles, and dual CTA buttons |
| **About** | `#about` | Advocate bio with framed monogram card, quote, and 3 stat counters |
| **Education** | `#education` | Timeline with gold seals — LL.M. (IP Rights, 2024–2026) & B.A. LL.B. (Hons.) |
| **Experience** | `#experience` | 6 internship "Case File" cards styled as legal dossiers on parchment |
| **Expertise** | `#expertise` | 8 practice area cards — Constitutional, Corporate, Criminal, Competition, Consumer, Trade, Drafting, Litigation |
| **Skills** | `#skills` | Animated progress bars for 6 skills + certification badges + languages |
| **Services** | `#services` | 6 service cards with Roman numeral accents and "Enquire →" CTAs |
| **Online Consultation** | `#online` | Feature grid (4 cards) + large CTA panel for booking sessions |
| **Testimonials** | — | 3 recommendation cards with blockquote styling and quotation mark SVGs |
| **Contact** | `#contact` | Enquiry form + contact info card + Pro-Bono sessions card |
| **Footer** | — | Copyright + *"Fiat Justitia Ruat Caelum"* motto |

### 📬 Contact Form & Submission
- Fields: Full Name, Email Address, Matter/Subject, Brief of Matter
- **Submit Enquiry Animation** — on form submission:
  - A **gavel strike sound** plays (Web Audio API — synthesized deep thud + resonant click + echo)
  - An animated **success overlay** appears with:
    - Animated checkmark drawn via SVG `pathLength`
    - Pulsing gold ring
    - "Received & Acknowledged" label
    - "Enquiry Submitted" heading with separator line
    - Confirmation message from Advocate Vartika Ojha
  - "Close" button to dismiss and reset

### ⬆️ Scroll To Top Button
- Appears automatically after scrolling past the Hero section (~80% of viewport height)
- **Continuous wiggle animation** — gentle `y` + `rotate` loop (2.8s period) for visual attention
- Gold accent bar at the top, chevron icon
- Smooth `window.scrollTo({ top: 0, behavior: 'smooth' })` on click
- Animated entrance/exit via Framer Motion `AnimatePresence`

---

## 🛠️ Tech Stack

### Core Framework
| Technology | Purpose |
|-----------|---------|
| **React 19** | UI component library |
| **TanStack Start** | Full-stack SSR React framework (file-based routing, SSR, server functions) |
| **TanStack Router** | Type-safe file-based routing |
| **TanStack Query** | Async state management |
| **Vite 7** | Build tool & dev server |
| **TypeScript 5.8** | Type safety across the codebase |

### Styling
| Technology | Purpose |
|-----------|---------|
| **Tailwind CSS v4** | Utility-first CSS (configured via `@theme inline`) |
| **tw-animate-css** | Additional Tailwind animation utilities |
| **Custom CSS Design System** | Law-chamber palette, leather cards, wood panels, glass morphism, gold gradients |
| **Cormorant Garamond** | Display / heading font (Google Fonts — elegant serif) |
| **Inter** | Body / sans-serif font (Google Fonts — clean, readable) |

### Animation
| Technology | Purpose |
|-----------|---------|
| **Framer Motion 12** | Scroll-triggered animations, page transitions, AnimatePresence, SVG path drawing |
| **Web Audio API** | Synthesized gavel sound on form submission (no external audio files) |
| **CSS Keyframes** | `book-open`, `shimmer-gold`, `float-dust` animations |

### UI Components
| Technology | Purpose |
|-----------|---------|
| **Radix UI** | Headless accessible component primitives (20+ packages) |
| **Lucide React** | Icon library |
| **React Hook Form** | Form state management |
| **Zod** | Schema validation |
| **Sonner** | Toast notifications |
| **Embla Carousel** | Carousel component |
| **Vaul** | Drawer component |
| **cmdk** | Command palette |

### Deployment & Infrastructure
| Technology | Purpose |
|-----------|---------|
| **Vercel** | Hosting platform for frontend and serverless APIs |
| **GitHub** | Source control & CI/CD integration |

### Developer Experience
| Technology | Purpose |
|-----------|---------|
| **ESLint 9** | Linting with React Hooks & React Refresh plugins |
| **Prettier** | Code formatting |
| **Bun** | Fast package manager (lockfile included) |
| **`vite-tsconfig-paths`** | `@/` path alias resolution |

---

## 📂 Project Structure

```
vartika-ojha-advocate/
├── src/
│   ├── assets/                  # Static images (hero-chamber.jpg, about-frame.jpg, parchment.jpg)
│   ├── components/
│   │   ├── site/                # All page section components
│   │   │   ├── Nav.tsx          # Fixed navigation header + mobile drawer
│   │   │   ├── Hero.tsx         # Full-screen landing section
│   │   │   ├── About.tsx        # Bio, stats, signature
│   │   │   ├── Education.tsx    # Timeline with gold seals
│   │   │   ├── Experience.tsx   # Case-file dossier cards
│   │   │   ├── Expertise.tsx    # Practice area grid
│   │   │   ├── Skills.tsx       # Animated skill bars + badges
│   │   │   ├── Services.tsx     # Service offering cards
│   │   │   ├── OnlineConsultation.tsx  # Online booking section
│   │   │   ├── Testimonials.tsx # Recommendation quotes
│   │   │   ├── Contact.tsx      # Enquiry form + Footer
│   │   │   ├── Ornament.tsx     # Shared SectionTitle + Ornament components
│   │   │   ├── Particles.tsx    # Floating dust particle canvas
│   │   │   └── ScrollToTop.tsx  # Animated scroll-to-top button
│   │   └── ui/                  # Radix UI / shadcn component library
│   ├── hooks/                   # Custom React hooks
│   ├── lib/                     # Utility functions, error handling
│   ├── routes/
│   │   ├── __root.tsx           # Root layout (HTML shell, QueryClient, error/404 pages)
│   │   └── index.tsx            # Home page route (assembles all sections)
│   ├── styles.css               # Global CSS, Tailwind config, design tokens
│   ├── router.tsx               # TanStack Router configuration
│   ├── server.ts                # Server entry point
│   └── start.ts                 # TanStack Start entry
├── vite.config.ts               # Vite + TanStack Start config
├── components.json              # shadcn/ui component registry config
├── tsconfig.json                # TypeScript configuration
└── package.json                 # Dependencies & scripts
```

---

## 🎨 Design Tokens (Color Palette)

```css
--background:        oklch(0.16 0.018 50)   /* Deep blackish-brown */
--foreground:        oklch(0.94 0.025 80)   /* Ivory */
--gold:              oklch(0.78 0.13 78)    /* Warm gold accent */
--gold-soft:         oklch(0.86 0.09 82)    /* Light gold for shimmer */
--ivory:             oklch(0.94 0.025 80)   /* Off-white text */
--mahogany:          oklch(0.24 0.04 35)    /* Dark mahogany */
--leather:           oklch(0.32 0.05 45)    /* Leather brown */
--muted-foreground:  oklch(0.72 0.035 75)   /* Subdued warm grey */
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+ (or Bun)
- npm / bun

### Installation

```bash
# Clone the repository
git clone https://github.com/shantanutewari12/vartika-ojha-advocate.git
cd vartika-ojha-advocate

# Install dependencies
npm install
# or with bun
bun install
```

### Development

```bash
npm run dev
```

Opens at `http://localhost:3000` with hot module replacement.

### Production Build

```bash
npm run build
```

Outputs to `dist/` — client bundle + server Worker bundle.

### Code Quality

```bash
npm run lint      # ESLint check
npm run format    # Prettier format
```

---

## 🚀 Deployment

### Vercel
To deploy the application on Vercel:
1. Connect your GitHub repository to Vercel.
2. Vercel will automatically detect the settings.
3. Configure the build command as `npm run build` and output directory as `dist` if prompted.
4. Deploy.

Alternatively, deploy via CLI:
```bash
npm install -g vercel
vercel login
vercel --prod
```

---

## 📋 Content Overview

### About the Advocate
- **7+ Years** of legal study and internship experience
- **6 Offices** served across India's top legal institutions
- **8 Practice Areas** — Constitutional, Corporate, Criminal, Competition, Consumer Dispute, International Trade, Drafting, Litigation

### Education
- **LL.M.** — University of Allahabad (2024–2026), Specialization: Intellectual Property Rights
- **B.A. LL.B. (Hons.)** — Invertis University (2019–2024), Distinction in Constitutional Law

### Professional Experience
| Organization | Role |
|---|---|
| Yayskool | Law Faculty |
| Competition Commission of India | Legal Intern |
| National Consumer Disputes Redressal Commission | Legal Intern |
| Centre for Trade and Investment Law | Legal Intern |
| Ministry of Law and Justice | Legal Intern |
| BPTP Ltd. | Corporate Legal Intern |

### Contact
- 📧 **Email:** vartikaojha.advocate@gmail.com
- 🌐 **Online Consultation:** Pan-India via Video Call
- 💼 **LinkedIn:** linkedin.com/in/vartika-ojha
- 🤝 **Pro-Bono:** Reserved hours every Saturday for matters of public interest

---

## 📄 License

© 2025 Office of Vartika Ojha. All rights reserved.

*Fiat Justitia Ruat Caelum — Let justice be done though the heavens fall.*
