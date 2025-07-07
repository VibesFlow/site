export const COLORS = {
  // Primary brand colors - exact match from app
  primary: "#00ff41", // Neon green
  secondary: "#ff00a0", // Hot pink
  accent: "#0cf", // Cyan

  // Background colors
  background: "#000000",
  backgroundLight: "#0a0a0a",
  backgroundSecondary: "#1a1a1a",

  // Text colors
  text: "#ffffff",
  textPrimary: "#ffffff",
  textSecondary: "#aaaaaa",
  textTertiary: "#666666",
  muted: "#666666",

  // Status colors
  success: "#00ff41",
  error: "#ff0066",
  warning: "#ffaa00",
} as const;

export const FONT_SIZES = {
  xs: 10,
  small: 12,
  sm: 12,
  medium: 16,
  md: 16,
  large: 20,
  lg: 20,
  xl: 24,
  xxl: 32,
  xxxl: 38,
  title: 70,
} as const;

export const SPACING = {
  xs: 4,
  small: 8,
  sm: 8,
  medium: 16,
  md: 16,
  large: 24,
  lg: 24,
  xl: 32,
  xxl: 48,
} as const;

export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

export const BRAND = {
  appName: "VIBESFLOW",
  slogan: "SYNTHESIZE · SYNCHRONIZE · TRANSCEND",
  name: 'VibesFlow',
  domain: 'https://vibesflow.ai',
  appDomain: 'https://app.vibesflow.ai',
  tagline: "Create DJ sets with your 'vibes'",
  description: 'VibesFlow is the first app that lets you create music through your motion',
} as const;

export const PARTNERS = [
  { name: 'Filecoin', logo: '/assets/partners/Filecoin.png' },
  { name: 'NEAR', logo: '/assets/partners/near.png' },
  { name: 'Shade Agents', logo: '/assets/partners/shade-agents.png' },
  { name: 'SynapseSDK', logo: '/assets/partners/synapsesdk.png' },
  { name: 'Lyria RealTime', logo: '/assets/partners/lyria.png' },
  { name: 'FilCDN', logo: '/assets/partners/filcdn.png' },
] as const;

export const GLITCH_ANIMATIONS = {
  low: '0.1s ease-in-out',
  medium: '0.2s ease-in-out',
  high: '0.3s ease-in-out',
} as const; 