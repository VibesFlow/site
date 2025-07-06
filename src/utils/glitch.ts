// Exact copy from SplashScreen.tsx glitch implementation
export type GlitchLine = {
  y: number;
  width: number;
  opacity: number;
};

// Create a random set of glitch lines for the background
export const generateGlitchLines = (count: number, _containerWidth: number, containerHeight: number): GlitchLine[] => {
  const lines: GlitchLine[] = [];
  for (let i = 0; i < count; i++) {
    const y = Math.random() * containerHeight;
    const lineWidth = Math.random() * 100 + 50;
    const opacity = Math.random() * 0.5 + 0.1;
    lines.push({ y, width: lineWidth, opacity });
  }
  return lines;
};

export const generateRandomGlitchLines = (count: number = 15): GlitchLine[] => {
  return generateGlitchLines(count, window.innerWidth, window.innerHeight);
};

export const glitchAnimation = (element: HTMLElement, duration: number = 200) => {
  const originalTransform = element.style.transform;
  const glitchIntensity = 2;
  
  const animate = () => {
    const x = (Math.random() - 0.5) * glitchIntensity;
    const y = (Math.random() - 0.5) * glitchIntensity;
    element.style.transform = `translate(${x}px, ${y}px)`;
    
    setTimeout(() => {
      element.style.transform = originalTransform;
    }, duration / 2);
  };
  
  animate();
  return setTimeout(animate, duration);
};

export const createGlitchEffect = (intensity: 'low' | 'medium' | 'high' = 'medium') => {
  const intensityMap = {
    low: { count: 8, opacity: 0.3, duration: 100 },
    medium: { count: 12, opacity: 0.5, duration: 200 },
    high: { count: 18, opacity: 0.7, duration: 300 },
  };
  
  return intensityMap[intensity];
}; 