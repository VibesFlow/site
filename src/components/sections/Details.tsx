import React, { useState, useEffect } from 'react';
import { COLORS } from '../../styles/theme';
import GlitchContainer from '../ui/GlitchContainer';
import GlitchText from '../ui/GlitchText';

interface FeatureCard {
  title: string;
  description: string[];
  icon: string;
}

const Details: React.FC = () => {
  const [currentFeature, setCurrentFeature] = useState(0);

  const features: FeatureCard[] = [
    {
      title: "Motion-to-Music",
      description: [
        "Transform device movement into real-time music generation",
        "Advanced sensor interpretation with AI-powered analysis",
        "Continuous adaptive audio streaming via Lyria RealTime API"
      ],
      icon: "🎵"
    },
    {
      title: "Decentralized Storage",
      description: [
        "Automatic chunking and compression of audio sessions",
        "Permanent storage on Filecoin via Synapse SDK",
        "Proof of Data Possession for content verification"
      ],
      icon: "🌐"
    },
    {
      title: "NFT Ownership",
      description: [
        "Dynamic NFTs as Real-Time Assets that evolve on-chain",
        "Stored on-chain for immutable proof of ownership",
        "Decentralized delegation for live audio metadata updates",
        "Provenance tracking for all audio chunks"        
      ],
      icon: "🎨"
    }
  ];

  // Auto-rotate features continuously
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [features.length]);

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
    fontSize: 'clamp(0.5rem, 1vw, 0.8rem)', // Reduced from clamp(0.6rem, 1.1vw, 0.9rem)
    fontFamily: 'monospace',
    color: COLORS.textTertiary,
    letterSpacing: 'clamp(0.5px, 0.2vw, 1px)',
    textTransform: 'uppercase',
    lineHeight: 1.4, // Reduced from 1.6
  };

  const carouselContainerStyle: React.CSSProperties = {
    position: 'relative',
    width: '100%',
    height: '80%',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    perspective: '1000px',
  };

  // Create continuous carousel by duplicating cards
  const getExtendedFeatures = () => {
    return [...features, ...features, ...features]; 
  };

  const getCardPosition = (index: number) => {
    const center = features.length; 
    const offset = (index - center - currentFeature) % features.length;
    
    // Adjust offset to handle negative modulo
    const adjustedOffset = offset > features.length / 2 ? offset - features.length : 
                          offset < -features.length / 2 ? offset + features.length : offset;
    
    return adjustedOffset;
  };

  const cardContainerStyle = (index: number): React.CSSProperties => {
    const offset = getCardPosition(index);
    const isActive = offset === 0;
    const isAdjacent = Math.abs(offset) === 1;
    const isVisible = Math.abs(offset) <= 1;

    return {
      position: 'absolute',
      width: 'clamp(250px, 25vw, 400px)',
      height: 'clamp(300px, 50vh, 450px)',
      transition: 'all 0.6s cubic-bezier(0.4, 0.0, 0.2, 1)',
      transform: `
        translateX(${offset * Math.min(window.innerWidth * 0.2, 300)}px) 
        translateZ(${isActive ? 0 : -200}px) 
        scale(${isActive ? 1 : 0.8})
      `,
      opacity: isVisible ? (isActive ? 1 : 0.4) : 0,
      filter: isActive ? 'blur(0px)' : 'blur(2px)',
      zIndex: isActive ? 3 : isAdjacent ? 2 : 1,
      pointerEvents: isActive ? 'auto' : 'none',
    };
  };

  const cardStyle: React.CSSProperties = {
    backgroundColor: 'rgba(0,0,0,0.8)',
    border: `1px solid ${COLORS.primary}40`,
    padding: 'clamp(1rem, 3vw, 2rem)',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    boxSizing: 'border-box',
  };

  const cardIconStyle: React.CSSProperties = {
    fontSize: 'clamp(2rem, 5vw, 3rem)',
    marginBottom: 'clamp(1rem, 2vh, 1.5rem)',
    display: 'block',
    textAlign: 'center',
  };

  const cardTitleStyle: React.CSSProperties = {
    fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
    fontFamily: 'monospace',
    fontWeight: 'bold',
    color: COLORS.primary,
    letterSpacing: 'clamp(1px, 0.3vw, 2px)',
    textTransform: 'uppercase',
    marginBottom: 'clamp(0.5rem, 1vh, 1rem)',
    textAlign: 'center',
  };

  const cardDescriptionStyle: React.CSSProperties = {
    fontSize: 'clamp(0.7rem, 1.2vw, 1rem)',
    fontFamily: 'monospace',
    color: COLORS.textSecondary,
    letterSpacing: 'clamp(0.3px, 0.1vw, 0.5px)',
    lineHeight: 1.6,
  };

  const listItemStyle: React.CSSProperties = {
    marginBottom: 'clamp(0.3rem, 1vh, 0.5rem)',
    position: 'relative',
    paddingLeft: 'clamp(0.8rem, 1.5vw, 1.2rem)',
  };

  const bulletStyle: React.CSSProperties = {
    position: 'absolute',
    left: 0,
    top: 0,
    color: COLORS.accent,
    fontWeight: 'bold',
  };

  const getCardBorderColor = (index: number): string => {
    const featureIndex = index % features.length;
    return featureIndex === 0 ? COLORS.primary + '60' : 
           featureIndex === 1 ? COLORS.secondary + '60' : 
           COLORS.accent + '60';
  };

  return (
    <div style={containerStyle}>
      {/* Main Content - 75% */}
      <div style={mainContentStyle}>
        {/* Left Content - 30% */}
        <div style={leftContentStyle}>
          <GlitchText 
            text="How It Works"
            style={titleStyle}
            intensity="medium"
          />
          
          <div style={descriptionStyle}>
            Experience the future of music creation through motion, powered by decentralized technology and AI.
          </div>
        </div>

        {/* Buffer - 10% */}
        <div style={bufferStyle} />

        {/* Right Visual - 60% */}
        <div style={rightVisualStyle}>
          <div style={carouselContainerStyle}>
            {getExtendedFeatures().map((feature, index) => (
              <div
                key={`${feature.title}-${index}`}
                style={cardContainerStyle(index)}
              >
                <GlitchContainer
                  intensity="low"
                  style={{
                    ...cardStyle,
                    borderColor: getCardBorderColor(index),
                  }}
                >
                  <div style={cardIconStyle}>{feature.icon}</div>
                  
                  <GlitchText 
                    text={feature.title}
                    style={cardTitleStyle}
                    intensity="low"
                  />
                  
                  <div style={cardDescriptionStyle}>
                    {feature.description.map((desc, descIndex) => (
                      <div key={descIndex} style={listItemStyle}>
                        <span style={bulletStyle}>›</span>
                        {desc}
                      </div>
                    ))}
                  </div>
                </GlitchContainer>
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
            text="Technology Stack "
            style={deeperDiveTitleStyle}
            intensity="low"
          />
          
          <GlitchText
            text=" NEAR • Metis • Lyria RealTime • Filecoin • SynapseSDK • FilCDN"
            style={deeperDiveDescStyle}
            intensity="low"
          />
        </GlitchContainer>
      </div>
    </div>
  );
};

export default Details; 