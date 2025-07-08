import React, { useMemo, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { COLORS } from '../../styles/theme';

interface GlitchLine {
  x: number;
  height: number;
  opacity: number;
  color: string;
  top: number;
  width: number;
}

interface GlitchContainerProps {
  children?: ReactNode;
  intensity?: 'low' | 'medium' | 'high';
  animated?: boolean;
  glitchOnly?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const GlitchContainer: React.FC<GlitchContainerProps> = ({
  children,
  intensity = 'medium',
  animated = true,
  glitchOnly = false,
  className = '',
  style = {},
}) => {
  const [glitchActive, setGlitchActive] = useState(false);
  const [containerDimensions, setContainerDimensions] = useState({ width: 800, height: 600 });

  // Update dimensions on resize
  useEffect(() => {
    const updateDimensions = () => {
      setContainerDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Generate random VERTICAL glitch lines based on intensity (like SplashScreen.tsx)
  const glitchLines = useMemo(() => {
    const lineCount = 
      intensity === 'low' ? 5 :
      intensity === 'medium' ? 10 :
      15;
    
    return generateGlitchLines(lineCount, containerDimensions.width, containerDimensions.height);
  }, [intensity, containerDimensions]);

  // Start glitch animation
  useEffect(() => {
    if (!animated) return;
    
    const glitchProbability = 
      intensity === 'low' ? 0.01 :
      intensity === 'medium' ? 0.02 :
      0.04;
    
    const glitchInterval = setInterval(() => {
      if (Math.random() < glitchProbability) {
        setGlitchActive(true);
        setTimeout(() => setGlitchActive(false), 200);
      }
    }, 2000);
    
    return () => clearInterval(glitchInterval);
  }, [animated, intensity]);

  function generateGlitchLines(count: number, containerWidth: number, containerHeight: number): GlitchLine[] {
    const lines: GlitchLine[] = [];
    for (let i = 0; i < count; i++) {
      const x = Math.random() * containerWidth;
      const lineHeight = Math.random() * 100 + 50;
      const opacity = Math.random() * 0.5 + 0.1;
      const colorIndex = Math.floor(Math.random() * 3);
      const color = 
        colorIndex === 0 ? COLORS.primary :
        colorIndex === 1 ? COLORS.secondary :
        COLORS.accent;
      const top = Math.random() * containerHeight;
      const lineWidth = Math.random() < 0.8 ? 1 : Math.random() * 3 + 1;
      
      lines.push({ 
        x, 
        height: lineHeight, 
        opacity, 
        color,
        top,
        width: lineWidth
      });
    }
    return lines;
  }

  // Only render glitch lines if glitchOnly
  if (glitchOnly) {
    return (
      <div 
        className={className}
        style={{
          position: 'relative',
          overflow: 'hidden',
          ...style
        }}
      >
        {glitchLines.map((line, index) => (
          <div
            key={index}
            style={{
              position: 'absolute',
              left: `${line.x + (glitchActive ? Math.random() * 20 - 10 : 0)}px`,
              top: `${line.top}px`,
              width: `${line.width}px`,
              height: `${line.height}px`,
              backgroundColor: line.color,
              opacity: glitchActive ? line.opacity * 2 : line.opacity,
              transition: 'all 0.1s linear',
              pointerEvents: 'none',
              zIndex: 2,
            }}
          />
        ))}
        {children}
      </div>
    );
  }

  return (
    <div 
      className={className}
      style={{
        position: 'relative',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: COLORS.primary + '40',
        backgroundColor: 'rgba(0,0,0,0.7)',
        overflow: 'hidden',
        ...style
      }}
    >
      {/* Background gradient */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(10,10,10,0.8), rgba(0,0,0,0.9))',
          zIndex: 1,
        }}
      />
      
      {/* Vertical glitch lines */}
      {glitchLines.map((line, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            left: `${line.x + (glitchActive ? Math.random() * 20 - 10 : 0)}px`,
            top: `${line.top}px`,
            width: `${line.width}px`,
            height: `${line.height}px`,
            backgroundColor: line.color,
            opacity: glitchActive ? line.opacity * 2 : 0,
            transition: 'all 0.1s linear',
            pointerEvents: 'none',
            zIndex: 2,
          }}
        />
      ))}
      
      {/* Noise overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.05,
          background: 'url("data:image/svg+xml,%3Csvg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noiseFilter)"/%3E%3C/svg%3E")',
          zIndex: 3,
        }}
      />
      
      {/* Content */}
      <div style={{ position: 'relative', zIndex: 4 }}>
        {children}
      </div>
      
      {/* Border glitch effect */}
      <div
        style={{
          position: 'absolute',
          top: -3,
          left: -3,
          right: -3,
          bottom: -3,
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: COLORS.primary,
          opacity: glitchActive ? 1 : 0,
          transform: `translateX(${glitchActive ? 3 : 0}px)`,
          transition: 'all 0.1s linear',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />
    </div>
  );
};

export default GlitchContainer; 