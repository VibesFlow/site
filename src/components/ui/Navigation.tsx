import React, { useState } from 'react';
import { COLORS, SPACING, FONT_SIZES, BRANDING } from '../../styles/theme';
import GlitchText from './GlitchText';
import Button from './Button';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height: '70px',
    backgroundColor: 'rgba(0, 0, 0, 0.95)',
    borderBottom: `1px solid ${COLORS.primary}40`,
    backdropFilter: 'blur(10px)',
    zIndex: 1000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: `0 ${SPACING.lg}px`,
  };

  const logoSectionStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: `${SPACING.medium}px`,
  };

  const logoImageStyle: React.CSSProperties = {
    width: '40px',
    height: '40px',
    objectFit: 'contain',
  };

  const brandTextStyle: React.CSSProperties = {
    fontSize: `${FONT_SIZES.lg}px`,
    fontWeight: 'bold',
    color: COLORS.primary,
    letterSpacing: '3px',
    fontFamily: 'monospace',
    textTransform: 'uppercase',
  };

  const desktopMenuStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: `${SPACING.lg}px`,
  };

  const linkStyle: React.CSSProperties = {
    color: COLORS.textSecondary,
    textDecoration: 'none',
    fontSize: `${FONT_SIZES.sm}px`,
    fontFamily: 'monospace',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    padding: `${SPACING.xs}px ${SPACING.small}px`,
    borderBottom: '1px solid transparent',
    transition: 'all 0.2s ease',
  };

  const activeLinkStyle: React.CSSProperties = {
    ...linkStyle,
    color: COLORS.primary,
    borderBottomColor: COLORS.primary,
  };

  const mobileMenuOverlayStyle: React.CSSProperties = {
    position: 'fixed',
    top: '70px',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.98)',
    backdropFilter: 'blur(10px)',
    display: isMenuOpen ? 'flex' : 'none',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: `${SPACING.xl}px`,
    zIndex: 999,
  };

  const mobileMenuButtonStyle: React.CSSProperties = {
    background: 'none',
    border: `1px solid ${COLORS.primary}`,
    color: COLORS.primary,
    fontSize: `${FONT_SIZES.sm}px`,
    padding: `${SPACING.xs}px ${SPACING.small}px`,
    cursor: 'pointer',
    fontFamily: 'monospace',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    display: 'none',
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 70; // Navigation height
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav style={navigationStyle}>
        {/* Logo Section */}
        <div style={logoSectionStyle}>
          <img 
            src="/assets/logo.png" 
            alt="VibesFlow Logo" 
            style={logoImageStyle}
          />
          <GlitchText 
            text={BRANDING.appName} 
            style={brandTextStyle}
            intensity="low"
          />
        </div>

        {/* Desktop Menu */}
        <div style={desktopMenuStyle} className="desktop-menu">
          <a 
            href="#about" 
            style={linkStyle}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('about');
            }}
            onMouseEnter={(e) => Object.assign(e.currentTarget.style, activeLinkStyle)}
            onMouseLeave={(e) => Object.assign(e.currentTarget.style, linkStyle)}
          >
            About
          </a>
          <a 
            href="#features" 
            style={linkStyle}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('features');
            }}
            onMouseEnter={(e) => Object.assign(e.currentTarget.style, activeLinkStyle)}
            onMouseLeave={(e) => Object.assign(e.currentTarget.style, linkStyle)}
          >
            Features
          </a>
          <a 
            href="#technology" 
            style={linkStyle}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('technology');
            }}
            onMouseEnter={(e) => Object.assign(e.currentTarget.style, activeLinkStyle)}
            onMouseLeave={(e) => Object.assign(e.currentTarget.style, linkStyle)}
          >
            Technology
          </a>
          <Button 
            variant="primary" 
            size="sm"
            href="https://app.vibesflow.ai"
            target="_blank"
          >
            Launch App
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          style={mobileMenuButtonStyle}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="mobile-menu-btn"
        >
          {isMenuOpen ? 'Close' : 'Menu'}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div style={mobileMenuOverlayStyle}>
        <a 
          href="#about" 
          style={{ ...linkStyle, fontSize: `${FONT_SIZES.lg}px` }}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('about');
          }}
        >
          About
        </a>
        <a 
          href="#features" 
          style={{ ...linkStyle, fontSize: `${FONT_SIZES.lg}px` }}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('features');
          }}
        >
          Features
        </a>
        <a 
          href="#technology" 
          style={{ ...linkStyle, fontSize: `${FONT_SIZES.lg}px` }}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('technology');
          }}
        >
          Technology
        </a>
        <Button 
          variant="primary" 
          size="lg"
          href="https://app.vibesflow.ai"
          target="_blank"
        >
          Launch App
        </Button>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .mobile-menu-btn {
            display: block !important;
          }
          .desktop-menu {
            display: none !important;
          }
        }
        @media (min-width: 769px) {
          .mobile-menu-btn {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default Navigation; 