import React from 'react';
import { COLORS } from '../../styles/theme';
import GlitchContainer from '../ui/GlitchContainer';
import GlitchText from '../ui/GlitchText';

const Footer: React.FC = () => {
  const footerStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.background,
    borderTop: `1px solid ${COLORS.primary}20`,
  };

  const containerStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };

  // Left Section: Vibesflow + Manifesto (35%)
  const leftSectionStyle: React.CSSProperties = {
    width: '35%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  };

  const logoTextStyle: React.CSSProperties = {
    fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', // Larger font for Vibesflow
    fontFamily: 'monospace',
    fontWeight: 'bold',
    color: COLORS.textPrimary,
    letterSpacing: 'clamp(1px, 0.3vw, 2px)',
    textTransform: 'uppercase',
    marginBottom: 'clamp(0.5rem, 1vh, 1rem)',
  };

  const manifestoStyle: React.CSSProperties = {
    fontSize: 'clamp(0.7rem, 1.2vw, 1rem)',
    fontFamily: 'monospace',
    color: COLORS.primary,
    letterSpacing: 'clamp(1px, 0.3vw, 2px)',
    textTransform: 'uppercase',
    whiteSpace: 'nowrap', // Keep manifesto on one line
    overflow: 'hidden',
  };

  // Buffer 1 (7.5%)
  const buffer1Style: React.CSSProperties = {
    width: '7.5%',
    height: '100%',
  };

  // Center Section: Built by Jabyl (15%)
  const centerSectionStyle: React.CSSProperties = {
    width: '15%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const copyrightStyle: React.CSSProperties = {
    fontSize: 'clamp(0.6rem, 1vw, 0.8rem)',
    fontFamily: 'monospace',
    color: COLORS.textTertiary,
    letterSpacing: 'clamp(0.5px, 0.2vw, 1px)',
    textTransform: 'uppercase',
    textAlign: 'center',
    whiteSpace: 'nowrap',
  };

  // Buffer 2 (7.5%)
  const buffer2Style: React.CSSProperties = {
    width: '7.5%',
    height: '100%',
  };

  // Right Section: Links (35%)
  const rightSectionStyle: React.CSSProperties = {
    width: '35%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  };

  const linksContainerStyle: React.CSSProperties = {
    display: 'flex',
    gap: 'clamp(1.5rem, 3vw, 3rem)',
    alignItems: 'center',
  };

  const linkStyle: React.CSSProperties = {
    fontSize: 'clamp(0.7rem, 1.2vw, 1rem)',
    fontFamily: 'monospace',
    color: COLORS.textSecondary,
    textDecoration: 'none',
    letterSpacing: 'clamp(0.5px, 0.2vw, 1px)',
    textTransform: 'uppercase',
    transition: 'color 0.3s ease',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
  };

  const handleLinkHover = (e: React.MouseEvent<HTMLAnchorElement>, isEnter: boolean) => {
    e.currentTarget.style.color = isEnter ? COLORS.primary : COLORS.textSecondary;
  };

  const handleSocialHover = (e: React.MouseEvent<HTMLAnchorElement>, isEnter: boolean) => {
    e.currentTarget.style.color = isEnter ? COLORS.secondary : COLORS.textSecondary;
  };

  return (
    <GlitchContainer glitchOnly intensity="low" style={footerStyle}>
      <div style={containerStyle}>
        {/* Left Section: Vibesflow + Manifesto (35%) */}
        <div style={leftSectionStyle}>
          <GlitchText
            text="VIBESFLOW"
            style={logoTextStyle}
            intensity="low"
          />
          
          <GlitchText
            text="BE AUTONOMOUS • CREATE YOUR OWN RHYTHM"
            style={manifestoStyle}
            intensity="low"
          />
        </div>

        {/* Buffer 1 (7.5%) */}
        <div style={buffer1Style} />

        {/* Center Section: Built by Jabyl (15%) */}
        <div style={centerSectionStyle}>
          <GlitchText
            text="Built with 🎧 by Jabyl • 2025"
            style={copyrightStyle}
            intensity="low"
          />
        </div>

        {/* Buffer 2 (7.5%) */}
        <div style={buffer2Style} />

        {/* Right Section: Links (35%) */}
        <div style={rightSectionStyle}>
          <div style={linksContainerStyle}>            
            <a
              href="https://github.com/vibesflow/docs"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
              onMouseEnter={(e) => handleLinkHover(e, true)}
              onMouseLeave={(e) => handleLinkHover(e, false)}
            >
              Docs
            </a>
            
            <a
              href="https://github.com/vibesflow"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
              onMouseEnter={(e) => handleLinkHover(e, true)}
              onMouseLeave={(e) => handleLinkHover(e, false)}
            >
              GitHub
            </a>
            
            <a
              href="https://x.com/vibesflowAI"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
              onMouseEnter={(e) => handleSocialHover(e, true)}
              onMouseLeave={(e) => handleSocialHover(e, false)}
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </GlitchContainer>
  );
};

export default Footer; 