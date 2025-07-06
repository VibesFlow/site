# VibesFlow Website

A modern, responsive React website for VibesFlow - the first app that lets you create music through your motion.

## 🎵 Overview

This website showcases VibesFlow's innovative motion-to-music technology, featuring:

- **Header Section**: Animated logo, brand tagline, and CTA to try the app
- **Details Section**: Three feature cards explaining the app's capabilities
- **Vibe Market Preview**: Rolling carousel of mock vibestreams with real-world styling
- **Built With Section**: Rotating circular carousel showcasing partner technologies
- **Footer**: Links to social media, documentation, and attribution

## 🎨 Design Philosophy

Following the VibesFlow Style Guide:

- **Minimal**: Clean interfaces with essential elements only
- **Acid**: Bold, high-contrast neon colors (#00ff41, #ff00a0, #0cf) against dark backgrounds
- **Anarcho-Chaotic**: Glitch effects, asymmetry, and dynamic animations

## 🚀 Technology Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **CSS-in-JS** for component-scoped styling
- **Modern React Hooks** for state management
- **Responsive Design** with CSS Grid and Flexbox
- **Accessibility Features** (reduced motion support, proper focus management)

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/                    # Reusable UI components
│   │   ├── GlitchContainer.tsx
│   │   ├── GlitchText.tsx
│   │   └── Button.tsx
│   └── sections/              # Page sections
│       ├── Header.tsx
│       ├── Details.tsx
│       ├── VibeMarketPreview.tsx
│       ├── BuiltWith.tsx
│       └── Footer.tsx
├── styles/
│   └── theme.ts              # Design system constants
├── utils/
│   ├── glitch.ts             # Glitch effect utilities
│   └── mockData.ts           # Mock vibestream data
└── App.tsx                   # Main application component
```

## 🎭 Features

### Animated Components
- **Glitch Effects**: Random line animations with brand colors
- **Text Glitching**: Character-level animation effects
- **Rotating Carousels**: Smooth transitions for content display
- **Hover Interactions**: Color changes and glow effects

### Responsive Design
- Mobile-first approach
- Breakpoint-aware layouts
- Optimized for all screen sizes
- Touch-friendly interactions

### Performance Optimizations
- Vite for fast builds
- Code splitting ready
- Optimized images and assets
- Efficient state management

## 🛠️ Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development Server
The dev server runs on `http://localhost:4173` by default.

## 🎨 Brand Assets

The website uses assets from `../app/assets/`:
- **Logo**: VibesFlow logo
- **Partner Logos**: Filecoin, NEAR, Shade Agents, SynapseSDK, Lyria, FilCDN

## 🔗 External Links

- **App**: https://app.vibesflow.ai
- **GitHub**: https://github.com/vibesflow
- **Twitter**: https://x.com/vibesflowAI
- **Docs**: https://github.com/vibesflow/docs

## 🔧 Customization

### Themes
Update `src/styles/theme.ts` to modify:
- Color palette
- Typography scales
- Spacing system
- Brand constants

### Components
All components use CSS-in-JS for easy customization and theming.

### Animations
Glitch effects and animations can be tuned in:
- `src/utils/glitch.ts` - Effect parameters
- `src/index.css` - Global animations

### Build Output
```bash
npm run build
# Outputs to ./dist/ directory
```

## 📄 License

Built by [jabyl](https://github.com/jabyl).

---

**Be autonomous, create your own rhythm @ [vibesflow.ai](https://vibesflow.ai)**
