# SharkEdge Media Website

A modern Next.js website for SharkEdge, a branding agency that helps founders, coaches, and business owners build impactful personal brands.

## 🚀 Getting Started

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build
```

## 📁 Project Structure

```
SHARKEDGEMEDIA/
├── app/                        # Next.js App Router
│   ├── globals.css             # Global styles & Tailwind
│   ├── layout.tsx              # Root layout with fonts
│   └── page.tsx                # Homepage
│
├── components/
│   ├── sections/               # Page sections (homepage flow)
│   │   ├── hero.tsx
│   │   ├── client-results.tsx
│   │   ├── testimonials.tsx
│   │   ├── problem-section.tsx
│   │   ├── solution-section.tsx
│   │   ├── process-section.tsx
│   │   ├── results-section.tsx
│   │   ├── before-after-results.tsx
│   │   ├── faq-section.tsx
│   │   └── footer-cta.tsx
│   │
│   ├── common/                 # Shared/reusable components
│   │   ├── header.tsx
│   │   ├── mobile-menu.tsx
│   │   ├── star-border.tsx     # Animated border button
│   │   ├── reveal-text.tsx     # Scroll reveal animation
│   │   ├── gradual-blur.tsx    # Edge blur effect
│   │   └── proof-message-card.tsx
│   │
│   └── ui/                     # Shadcn UI primitives (Cleaned)
│       ├── infinite-scroll.tsx
│       └── masonry.tsx
│
├── hooks/                      # Custom React hooks
│   └── use-mobile.ts
│
├── lib/                        # Utilities
│   └── utils.ts                # cn() helper
│
├── public/                     # Static assets
│   ├── background/             # Hero video
│   ├── clients/                # Client avatars
│   ├── fonts/                  # Custom fonts
│   ├── logos/                  # Company logos (webp)
│   ├── process-images/         # Process phase images
│   └── results/                # Result screenshots
│
└── Configuration
    ├── next.config.ts
    ├── tsconfig.json
    └── package.json
```

## 🎨 Creating New Components

### New Page Section

1. Create file in `components/sections/` using kebab-case:
   ```tsx
   // components/sections/my-section.tsx
   "use client"
   
   import { RevealText } from "@/components/common/reveal-text"
   import StarBorder from "@/components/common/star-border"
   
   export function MySection() {
     return (
       <section id="my-section" className="py-20 px-4">
         {/* Content */}
       </section>
     )
   }
   ```

2. Add to `app/page.tsx` with dynamic import:
   ```tsx
   const MySection = dynamic(() => 
     import("@/components/sections/my-section")
       .then(mod => ({ default: mod.MySection }))
   )
   ```

### New Shared Component

Create in `components/common/` using kebab-case naming.

## 📝 Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Component files | kebab-case | `star-border.tsx` |
| Component exports | PascalCase | `export function StarBorder()` |
| Asset files | kebab-case | `rosa-antonini.jpg` |
| Folders | lowercase | `sections/`, `common/` |

**All files must be `.tsx`** - no `.jsx`, `.js`, or standalone `.css` files in components.

## 🎯 Website Flow

```
Hero → Client Results → Testimonials → Problem → Solution → Process → Results → Before/After → FAQ → Footer CTA
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion, GSAP
- **UI Components**: Shadcn/UI (Radix primitives)
- **Fonts**: Inter, Manrope, Instrument Serif

## 📄 License

Private - All rights reserved.
