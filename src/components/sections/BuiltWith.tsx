import React, { useState, useEffect } from 'react';
import { COLORS } from '../../styles/theme';
import GlitchContainer from '../ui/GlitchContainer';
import GlitchText from '../ui/GlitchText';

interface Partner {
  name: string;
  logo: string;
  description: string;
}

const BuiltWith: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const partners: Partner[] = [
    {
      name: 'NEAR Protocol',
      logo: '/assets/partners/near.png',
      description: 'Dynamic NFTs & Smart Contracts'
    },
    {
      name: 'Filecoin',
      logo: '/assets/partners/Filecoin.png', 
      description: 'Decentralized Storage Network'
    },
    {
      name: 'FilCDN',
      logo: '/assets/partners/filcdn.png',
      description: 'Content Delivery Network'
    },
    {
      name: 'Synapse SDK',
      logo: '/assets/partners/synapsesdk.png',
      description: 'Proof Data Possession'
    },
    {
      name: 'Lyria',
      logo: '/assets/partners/lyria.png',
      description: 'Real-time AI Music Generation'
    },
    {
      name: 'Shade Agents',
      logo: '/assets/partners/shade-agents.png',
      description: 'Autonomous Blockchain Workers'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % partners.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [partners.length]);

  const containerStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  };

  const mainContentStyle: React.CSSProperties = {
    width: '100%',
    height: '85%', // Increased from 75% to give more space to main content
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };

  const leftContentStyle: React.CSSProperties = {
    width: '30%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  };

  const bufferStyle: React.CSSProperties = {
    width: '10%',
    height: '100%',
  };

  const rightVisualStyle: React.CSSProperties = {
    width: '60%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  };

  const deeperDiveStyle: React.CSSProperties = {
    width: '100%',
    height: '15%', // Reduced from 20% to take only leftover space
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 'clamp(1rem, 2vh, 2rem)',
  };

  const deeperDiveContainerStyle: React.CSSProperties = {
    width: '90%',
    padding: 'clamp(1rem, 2vh, 1.5rem)',
    backgroundColor: 'rgba(0,0,0,0.5)',
    border: `1px solid ${COLORS.primary}30`,
    textAlign: 'center',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: 'clamp(1.8rem, 4vw, 3rem)',
    fontFamily: 'monospace',
    fontWeight: 'bold',
    color: COLORS.textPrimary,
    letterSpacing: 'clamp(2px, 0.5vw, 4px)',
    textTransform: 'uppercase',
    lineHeight: 1.1,
    marginBottom: 'clamp(1rem, 3vh, 2rem)',
    whiteSpace: 'nowrap', // Added nowrap for title
    overflow: 'hidden',
  };

  const descriptionStyle: React.CSSProperties = {
    fontSize: 'clamp(0.9rem, 1.5vw, 1.2rem)',
    fontFamily: 'monospace',
    color: COLORS.textSecondary,
    letterSpacing: 'clamp(0.5px, 0.2vw, 1px)',
    lineHeight: 1.6,
    marginBottom: 'clamp(2rem, 5vh, 3rem)',
  };

  // Deeper-dive styles (smaller than group 1)
  const deeperDiveTitleStyle: React.CSSProperties = {
    fontSize: 'clamp(0.8rem, 1.5vw, 1.2rem)', // Reduced from clamp(1rem, 2vw, 1.5rem)
    fontFamily: 'monospace',
    fontWeight: 'bold',
    color: COLORS.textPrimary,
    letterSpacing: 'clamp(1px, 0.3vw, 2px)',
    textTransform: 'uppercase',
    marginBottom: 'clamp(0.3rem, 0.8vh, 0.8rem)', // Reduced margin
  };

  const deeperDiveDescStyle: React.CSSProperties = {
    fontSize: 'clamp(0.5rem, 1vw, 0.8rem)', // Reduced from clamp(0.7rem, 1.2vw, 1rem)
    fontFamily: 'monospace',
    color: COLORS.textTertiary,
    letterSpacing: 'clamp(0.5px, 0.2vw, 1px)',
    textTransform: 'uppercase',
    lineHeight: 1.4, // Reduced from 1.6
  };

  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridTemplateRows: 'repeat(2, 1fr)',
    gap: 'clamp(1rem, 2vw, 2rem)',
    width: '100%',
    height: '80%',
    maxWidth: '90%',
  };

  const cardStyle = (index: number): React.CSSProperties => {
    const isCenter = index === Math.floor(partners.length / 2);
    const isCurrent = index === currentIndex;
    
    return {
      position: 'relative',
      padding: 'clamp(0.8rem, 1.5vw, 1.5rem)',
      backgroundColor: isCenter ? 'rgba(0,0,0,0.9)' : 'rgba(0,0,0,0.7)',
      border: `1px solid ${isCurrent ? COLORS.primary : COLORS.primary}40`,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      overflow: 'hidden',
      // Retro illumination effect in acid green
      boxShadow: isCurrent 
        ? `0 0 clamp(15px, 3vw, 20px) ${COLORS.primary}80, inset 0 0 clamp(15px, 3vw, 20px) ${COLORS.primary}20` 
        : isCenter 
          ? `0 0 clamp(10px, 2vw, 15px) ${COLORS.primary}60, inset 0 0 clamp(10px, 2vw, 15px) ${COLORS.primary}15`
          : 'none',
    };
  };

  // Internal container for consistent card layout
  const cardInternalContainerStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'clamp(0.3rem, 1vh, 0.8rem)', // Consistent spacing between elements
  };

  const logoStyle = (index: number): React.CSSProperties => {
    const isCenter = index === Math.floor(partners.length / 2);
    const isCurrent = index === currentIndex;
    
    return {
      width: 'clamp(60px, 12vw, 80px)', // Consistent size for all logos
      height: 'clamp(60px, 12vw, 80px)', // Consistent size for all logos
      objectFit: 'contain',
      filter: isCurrent 
        ? `drop-shadow(0 0 clamp(8px, 1.5vw, 10px) ${COLORS.primary}) brightness(1.2)` 
        : 'brightness(0.8)',
      transition: 'all 0.3s ease',
      flexShrink: 0, // Prevent shrinking
    };
  };

  const partnerNameStyle = (index: number): React.CSSProperties => {
    const isCurrent = index === currentIndex;
    
    return {
      fontSize: 'clamp(0.7rem, 1.4vw, 1rem)', // Consistent font size for all
      fontFamily: 'monospace',
      fontWeight: 'bold',
      color: isCurrent ? COLORS.primary : COLORS.textPrimary,
      letterSpacing: 'clamp(0.5px, 0.2vw, 1px)',
      textTransform: 'uppercase',
      transition: 'all 0.3s ease',
      textAlign: 'center',
      lineHeight: 1.2,
      minHeight: 'clamp(1rem, 2vh, 1.5rem)', // Ensure consistent height
    };
  };

  const descriptionCardStyle = (index: number): React.CSSProperties => {
    const isCurrent = index === currentIndex;
    
    return {
      fontSize: 'clamp(0.6rem, 1vw, 0.7rem)', // Consistent font size for all
      fontFamily: 'monospace',
      color: isCurrent ? COLORS.textSecondary : COLORS.textTertiary,
      letterSpacing: 'clamp(0.3px, 0.1vw, 0.5px)',
      lineHeight: 1.3,
      opacity: isCurrent ? 1 : 0.8,
      transition: 'all 0.3s ease',
      textAlign: 'center',
      minHeight: 'clamp(1.5rem, 3vh, 2rem)', // Ensure consistent height for descriptions
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    };
  };

  return (
    <div style={containerStyle}>
      {/* Main Content - 75% */}
      <div style={mainContentStyle}>
        {/* Left Content - 30% */}
        <div style={leftContentStyle}>
      <GlitchText
            text="Built With"
            style={titleStyle}
            intensity="medium"
          />
          
          <div style={descriptionStyle}>
            Powered by cutting-edge decentralized technologies
          </div>
        </div>

        {/* Buffer - 10% */}
        <div style={bufferStyle} />

        {/* Right Visual - 60% */}
        <div style={rightVisualStyle}>
          {/* Partners Grid */}
          <div style={gridStyle}>
            {partners.map((partner, index) => (
              <div
                key={partner.name}
                style={cardStyle(index)}
                onClick={() => setCurrentIndex(index)}
                onMouseEnter={() => setCurrentIndex(index)}
              >
                {/* Retro glow background */}
                {index === currentIndex && (
        <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '150%',
                    height: '150%',
                    background: `radial-gradient(circle, ${COLORS.primary}10 0%, transparent 70%)`,
                    transform: 'translate(-50%, -50%)',
                    zIndex: 1,
                    pointerEvents: 'none',
                  }} />
                )}
                
                <div style={{ position: 'relative', zIndex: 2 }}>
                  <div style={cardInternalContainerStyle}>
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      style={logoStyle(index)}
                    />
                    
                    <GlitchText
                      text={partner.name}
                      style={partnerNameStyle(index)}
                      intensity={index === currentIndex ? 'medium' : 'low'}
                    />
                    
                    <div style={descriptionCardStyle(index)}>
                      {partner.description}
                    </div>
                  </div>
                </div>

                {/* Border glow effect */}
                {index === currentIndex && (
        <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    border: `2px solid ${COLORS.primary}`,
                    borderRadius: '0',
                    pointerEvents: 'none',
                    zIndex: 3,
                    animation: 'pulse 2s infinite',
                  }} />
                )}
          </div>
            ))}
          </div>
        </div>
      </div>

      {/* Deeper-Dive Section - 20% */}
      <div style={deeperDiveStyle}>
        <GlitchContainer
          intensity="low"
          style={deeperDiveContainerStyle}
        >
          <GlitchText 
            text="Decentralized Technology Stack"
            style={deeperDiveTitleStyle}
            intensity="low"
          />
          
          <GlitchText
            text="VibesFlow leverages the most advanced decentralized technologies to create a truly autonomous music generation platform. From blockchain smart contracts to AI-powered audio synthesis, every component is designed for maximum decentralization and user ownership."
            style={deeperDiveDescStyle}
            intensity="low"
          />
        </GlitchContainer>
      </div>

      <style>
        {`
          @keyframes pulse {
            0% { opacity: 1; }
            50% { opacity: 0.5; }
            100% { opacity: 1; }
          }
        `}
      </style>
    </div>
  );
};

export default BuiltWith; 