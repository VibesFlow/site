import { useEffect, useRef, useState } from 'react';
import { COLORS } from '../../styles/theme';

interface GlitchTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  intensity?: 'low' | 'medium' | 'high';
  animated?: boolean;
}

const GlitchText: React.FC<GlitchTextProps> = ({
  text,
  className = '',
  style = {},
  intensity = 'medium',
  animated = true,
}) => {
  const textRef = useRef<HTMLSpanElement>(null);
  const [glitchText, setGlitchText] = useState(text);

  useEffect(() => {
    if (!animated || !textRef.current) return;

    const intensityMap = {
      low: { frequency: 5000, duration: 100 },
      medium: { frequency: 3000, duration: 200 },
      high: { frequency: 1000, duration: 300 },
    };

    const config = intensityMap[intensity];
    
    const glitchInterval = setInterval(() => {
      if (Math.random() < 0.1) { // 10% chance of glitch
        const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
        const glitched = text
          .split('')
          .map((char) => {
            if (Math.random() < 0.3) {
              return chars[Math.floor(Math.random() * chars.length)];
            }
            return char;
          })
          .join('');
        
        setGlitchText(glitched);
        
        setTimeout(() => {
          setGlitchText(text);
        }, config.duration);
      }
    }, config.frequency);

    return () => clearInterval(glitchInterval);
  }, [text, intensity, animated]);

  const textStyle: React.CSSProperties = {
    fontFamily: 'monospace',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    color: COLORS.textPrimary,
    ...style,
  };

  return (
    <span
      ref={textRef}
      className={`glitch-text ${className}`}
      style={textStyle}
    >
      {glitchText}
    </span>
  );
};

export default GlitchText; 