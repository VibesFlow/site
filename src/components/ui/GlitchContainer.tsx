import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { generateGlitchLines } from '../../utils/glitch';
import type { GlitchLine } from '../../utils/glitch';
import { COLORS } from '../../styles/theme';

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
  glitchOnly = false,
  className = '',
  style = {},
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [glitchLines, setGlitchLines] = useState<GlitchLine[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setDimensions({ width: rect.width, height: rect.height });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    if (dimensions.width > 0 && dimensions.height > 0) {
      // Generate static lines on mount/resize - exact behavior from SplashScreen
      const lines = generateGlitchLines(15, dimensions.width, dimensions.height);
      setGlitchLines(lines);
    }
  }, [dimensions]); // Only update on dimension changes, not on intensity

  const containerStyle: React.CSSProperties = {
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: glitchOnly ? 'transparent' : COLORS.backgroundLight,
    ...style,
  };

  return (
    <div
      ref={containerRef}
      className={`glitch-container ${className}`}
      style={containerStyle}
    >
      {/* Glitch lines - exact implementation from SplashScreen */}
      {glitchLines.map((line, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            left: Math.random() * dimensions.width, // Random left position like SplashScreen
            top: line.y,
            width: line.width,
            height: 1, // Horizontal lines
            backgroundColor: index % 3 === 0 ? COLORS.primary : index % 3 === 1 ? COLORS.secondary : COLORS.accent,
            opacity: line.opacity,
            zIndex: glitchOnly ? 1 : 2,
            pointerEvents: 'none',
          }}
        />
      ))}
      
      {/* Content */}
      {!glitchOnly && (
        <div style={{ position: 'relative', zIndex: 3 }}>
          {children}
        </div>
      )}
    </div>
  );
};

export default GlitchContainer; 