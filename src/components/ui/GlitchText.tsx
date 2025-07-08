import React, { useEffect, useState } from 'react';

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
  const [displayText, setDisplayText] = useState(text);
  const [isGlitching, setIsGlitching] = useState(false);

  const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?~`';
  
  const getGlitchFrequency = () => {
    switch (intensity) {
      case 'low': return 100;
      case 'medium': return 50;
      case 'high': return 20;
      default: return 50;
    }
  };

  const createGlitchText = (originalText: string) => {
    return originalText
      .split('')
      .map(char => {
        if (char === ' ') return char;
        const shouldGlitch = Math.random() < 0.3;
        if (shouldGlitch) {
          return glitchChars[Math.floor(Math.random() * glitchChars.length)];
        }
        return char;
      })
      .join('');
  };

  useEffect(() => {
    if (!animated) return;
    
    const glitchInterval = setInterval(() => {
      if (Math.random() < 0.1) { // 10% chance to glitch
        setIsGlitching(true);
        
        // Create glitch sequence
        const glitchSequence = [
          createGlitchText(text),
          createGlitchText(text),
          text
        ];

        let step = 0;
        const glitchStep = setInterval(() => {
          setDisplayText(glitchSequence[step]);
          step++;
          
          if (step >= glitchSequence.length) {
            clearInterval(glitchStep);
            setIsGlitching(false);
          }
        }, 80);

        setTimeout(() => {
          clearInterval(glitchStep);
          setDisplayText(text);
          setIsGlitching(false);
        }, 240);
      }
    }, getGlitchFrequency());

    return () => clearInterval(glitchInterval);
  }, [text, intensity, animated]);

  return (
    <span 
      className={className}
      style={{
        ...style,
        opacity: isGlitching ? 0.9 : 1,
        fontFamily: 'monospace',
      }}
    >
      {displayText}
    </span>
  );
};

export default GlitchText; 