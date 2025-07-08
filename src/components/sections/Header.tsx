import React from 'react';
import { COLORS } from '../../styles/theme';
import GlitchText from '../ui/GlitchText';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '0',
  };

  const leftContainerStyle: React.CSSProperties = {
    width: '65%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  };

  const bufferStyle: React.CSSProperties = {
    width: '10%', // Buffer between left and right
    height: '100%',
  };

  const rightContainerStyle: React.CSSProperties = {
    width: '25%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
    fontFamily: 'monospace',
    fontWeight: 'bold',
    color: COLORS.textPrimary,
    letterSpacing: 'clamp(2px, 0.4vw, 3px)',
    textTransform: 'uppercase',
    lineHeight: 1,
    marginBottom: 'clamp(0.8rem, 1.5vh, 1.5rem)',
    whiteSpace: 'nowrap', // Keep title on one line
    overflow: 'hidden',
  };

  const subtitleTaglineStyle: React.CSSProperties = {
    fontSize: 'clamp(0.7rem, 1.2vw, 1rem)',
    fontFamily: 'monospace',
    color: COLORS.primary,
    letterSpacing: 'clamp(1px, 0.25vw, 1.5px)',
    textTransform: 'uppercase',
    lineHeight: 1.4,
    marginBottom: 'clamp(0.8rem, 2vh, 1.5rem)',
  };

  const descriptionStyle: React.CSSProperties = {
    fontSize: 'clamp(0.8rem, 1.5vw, 1.2rem)',
    fontFamily: 'monospace',
    color: COLORS.textSecondary,
    letterSpacing: 'clamp(0.5px, 0.15vw, 0.8px)',
    lineHeight: 1.5,
    marginBottom: 'clamp(1.2rem, 3vh, 2rem)',
  };

  const manifestoStyle: React.CSSProperties = {
    fontSize: 'clamp(0.6rem, 1vw, 0.9rem)',
    fontFamily: 'monospace',
    color: COLORS.textTertiary,
    letterSpacing: 'clamp(1px, 0.25vw, 1.5px)',
    textTransform: 'uppercase',
    lineHeight: 1.6,
  };

  return (
    <div style={containerStyle}>
      {/* Left Container - 65% */}
      <div style={leftContainerStyle}>
        <GlitchText 
          text="BE AUTONOMOUS. CREATE YOUR OWN RHYTHM"
          style={titleStyle}
          intensity="medium"
        />
        
        <GlitchText
          text="SYNTHESIZE • SYNCHRONIZE • TRANSCEND"
          style={subtitleTaglineStyle}
          intensity="low"
        />
        
        <div style={descriptionStyle}>
          VibesFlow is the first app that lets you create music through your motion.
        </div>
        
        <GlitchText
          text="DECENTRALIZED FREQUENCIES // COLLECTIVE RESONANCE // AUTONOMOUS WAVES"
          style={manifestoStyle}
          intensity="low"
        />
      </div>

      {/* Buffer - 10% */}
      <div style={bufferStyle} />

      {/* Right Container - 25% */}
      <div style={rightContainerStyle}>
        <Button
          variant="primary"
          size="lg"
          onClick={() => window.open('https://app.vibesflow.ai', '_blank')}
          style={{
            fontSize: 'clamp(0.8rem, 1.3vw, 1.1rem)',
            padding: 'clamp(10px, 1.8vh, 18px) clamp(20px, 3.5vw, 35px)',
            letterSpacing: 'clamp(1px, 0.25vw, 1.5px)',
          }}
        >
          LAUNCH APP
        </Button>
      </div>
    </div>
  );
};

export default Header; 