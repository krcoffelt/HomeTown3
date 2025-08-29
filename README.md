# fabrica® Studio Clone

A pixel-perfect clone of the [Fabrica Studio website](https://fabrica.framer.media/) built with Next.js 14+, TypeScript, and Tailwind CSS.

## 🚀 Phase 1 Complete - Core Layout & Navigation Foundation

### What's Been Built

✅ **Next.js 14+ Development Environment**
- Full TypeScript setup with strict mode
- Tailwind CSS with custom design tokens
- ESLint and Prettier configuration
- App Router implementation

✅ **Core Layout Components**
- `BaseLayout` - Main layout wrapper with header and footer
- `Header` - Complete navigation with logo, primary nav, and secondary nav
- `Footer` - Full footer with navigation, social links, and company info
- `Navigation` - Responsive navigation system with mobile menu

✅ **Routing Structure**
- Home page (`/`) - Hero section with service tags and CTA
- Services page (`/services`) - Services showcase
- Projects page (`/projects`) - Portfolio grid
- Blog page (`/blog`) - Blog posts listing
- Contact page (`/contact`) - Contact form and information

✅ **Responsive Design**
- Mobile-first approach (375px+)
- Tablet breakpoint (768px+)
- Desktop breakpoint (1200px+)
- Mobile navigation with hamburger menu
- Touch-optimized interactions

### 🎨 Design System

**Color Palette**
- Primary: Black (#000000)
- Secondary: White (#ffffff)
- Accent: Light gray (#f3f4f6)
- Text: White, gray variations

**Typography**
- Font: Inter (Google Fonts)
- Display sizes: 4rem - 8rem
- Heading sizes: 1.875rem - 2.25rem
- Body sizes: 0.875rem - 1.125rem

**Spacing & Layout**
- Consistent grid system
- Generous whitespace
- Max-width containers
- Responsive breakpoints

### 🏗️ Project Structure

```
src/
├── app/
│   ├── (routes)/
│   │   ├── page.tsx              # Home page
│   │   ├── services/page.tsx     # Services page
│   │   ├── projects/page.tsx     # Projects page
│   │   ├── blog/page.tsx         # Blog page
│   │   └── contact/page.tsx      # Contact page
│   ├── layout.tsx                # Root layout
│   └── globals.css               # Global styles
├── components/
│   ├── ui/                       # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Logo.tsx
│   │   └── Navigation.tsx
│   ├── layout/                   # Layout components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── BaseLayout.tsx
│   └── sections/                 # Page-specific sections
├── lib/                          # Utility functions
│   └── hooks/
│       └── useResponsive.ts
├── types/                        # TypeScript definitions
├── data/                         # Static data
└── styles/                       # Custom CSS and Tailwind config
```

### 🚀 Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run development server**
   ```bash
   npm run dev
   ```

3. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### 📱 Responsive Breakpoints

- **Mobile**: 375px+ (iPhone SE and up)
- **Tablet**: 768px+ (iPad and up)
- **Desktop**: 1200px+ (Laptop and up)

### 🎯 Next Steps (Phase 2)

- Hero section with exact visual fidelity
- Animated text effects and transitions
- Service tag styling and positioning
- Team member spotlight section
- Logo animation and positioning

### 🛠️ Built With

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Inter (Google Fonts)
- **Icons**: Heroicons (SVG)
- **Development**: ESLint, Prettier

### 📄 License

This project is a clone created for educational purposes. The original design belongs to Fabrica Studio.

---

**Phase 1 Status**: ✅ COMPLETE  
**Next Phase**: Phase 2 - Hero Section & Brand Identity  
**Developer**: Kyle Coffelt
