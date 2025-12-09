# Landing Pro - IT Solutions Clone

Clone website IT Solutions landing page menggunakan Nuxt.js 3 dan Tailwind CSS.

## 🚀 Features

- ✅ Nuxt.js 3 dengan auto-imports
- ✅ Tailwind CSS untuk styling
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Smooth scrolling navigation
- ✅ Modern gradient effects
- ✅ Animated hover effects
- ✅ SEO friendly
- ✅ **CMS-Ready Portfolio Section** (NEW!)

## 📚 Documentation

### ⭐ Portfolio Section (CMS-Ready) - NEW!
Portfolio section telah di-refactor menjadi **CMS-ready** dengan struktur data yang terorganisir.

#### 🚀 Quick Start
**Langsung mulai**: [MULAI_DISINI.md](./MULAI_DISINI.md) 📌  
**Edit konten cepat**: [QUICK_START.md](./QUICK_START.md)  
**Copy-paste template**: [CHEAT_SHEET.md](./CHEAT_SHEET.md)

#### 📖 Complete Documentation
- **[DOCS_INDEX.md](./DOCS_INDEX.md)** - Main documentation hub
- **[PORTFOLIO_SUMMARY.md](./PORTFOLIO_SUMMARY.md)** - Complete overview  
- **[PORTFOLIO_README.md](./PORTFOLIO_README.md)** - Technical docs & CMS setup
- **[ARCHITECTURE.md](./ARCHITECTURE.md)** - Visual diagrams
- **[CHANGELOG.md](./CHANGELOG.md)** - Version history

#### 🔧 File Locations
- **Edit content**: `composables/usePortfolio.js`
- **Upload images**: `public/images/project/`
- **API endpoint**: `server/api/portfolio.get.ts`
- **Component**: `components/StatsSection.vue`

#### ✨ Features
- ✅ 6 card types (hero, feature, project, pricing, about, info)
- ✅ Bento grid responsive layout
- ✅ Data-driven architecture
- ✅ TypeScript support
- ✅ Ready for CMS integration
- ✅ Comprehensive documentation (7 docs)

## 📋 Prerequisites

- Node.js 18+ 
- npm atau yarn

## 🛠️ Installation

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Open browser di `http://localhost:3000`

## 📦 Build Production

```bash
npm run build
npm run preview
```

## 🎨 Struktur Project

```
.
├── app.vue                 # Main app component
├── components/
│   ├── Header.vue         # Navigation header
│   ├── HeroSection.vue    # Hero/banner section
│   ├── FeaturesSection.vue # Features showcase
│   ├── ServicesSection.vue # Services offered
│   ├── AboutSection.vue   # About company
│   ├── ContactSection.vue # Contact CTA
│   └── Footer.vue         # Footer links
├── assets/css/
│   └── main.css          # Global CSS & Tailwind
├── nuxt.config.ts        # Nuxt configuration
├── tailwind.config.js    # Tailwind configuration
└── package.json
```

## 🎯 Sections

1. **Hero Section** - Banner dengan CTA dan statistics
2. **Features** - 6 fitur utama dengan icons
3. **Services** - 4 layanan detail dengan checklist
4. **About** - Informasi perusahaan dan achievements
5. **Contact** - CTA dan kontak informasi
6. **Footer** - Links dan social media

## 🎨 Customization

### Colors
Edit di `tailwind.config.js`:
```js
colors: {
  primary: {
    // Custom colors
  }
}
```

### Content
Edit text dan data di masing-masing component:
- `components/HeroSection.vue` - Hero content
- `components/FeaturesSection.vue` - Features array
- `components/ServicesSection.vue` - Services array
- dll.

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

Deploy ke Netlify, Vercel, atau platform lainnya:

```bash
npm run generate
```

Upload folder `.output/public` ke hosting.

## 📄 License

MIT License - feel free to use for personal or commercial projects.
