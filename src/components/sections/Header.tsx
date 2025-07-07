import GlitchContainer from '../ui/GlitchContainer';
import Button from '../ui/Button';
import { COLORS, SPACING, BRAND, BREAKPOINTS } from '../../styles/theme';

const Header: React.FC = () => {
  const headerStyle: React.CSSProperties = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    backgroundColor: COLORS.background,
    padding: `${SPACING.lg}px ${SPACING.medium}px`,
  };

  const containerStyle: React.CSSProperties = {
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: `${SPACING.xxl}px`,
  };

  const contentRowStyle: React.CSSProperties = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: `${SPACING.xl}px`,
  };

  const brandSectionStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: `${SPACING.lg}px`,
    textAlign: 'center',
  };

  const logoRowStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: `${SPACING.lg}px`,
    flexWrap: 'wrap',
  };

  const logoStyle: React.CSSProperties = {
    width: '4rem',
    height: '4rem',
    flexShrink: 0,
  };

  const logoImageStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  };

  const brandTextStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.2em',
    flexWrap: 'wrap',
    justifyContent: 'center',
  };

  const vibesStyle: React.CSSProperties = {
    fontSize: 'clamp(2rem, 8vw, 4rem)',
    fontWeight: 'bold',
    color: COLORS.primary,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    fontFamily: 'monospace',
    lineHeight: 1,
  };

  const flowStyle: React.CSSProperties = {
    fontSize: 'clamp(2rem, 8vw, 4rem)',
    fontWeight: 'bold',
    color: COLORS.secondary,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    fontFamily: 'monospace',
    lineHeight: 1,
  };

  const titleSectionStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: `${SPACING.medium}px`,
    textAlign: 'center',
    maxWidth: '800px',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: 'clamp(1.2rem, 4vw, 2rem)',
    color: COLORS.primary,
    fontWeight: 'bold',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    fontFamily: 'monospace',
    lineHeight: 1.2,
    margin: 0,
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
    color: COLORS.textSecondary,
    letterSpacing: '0.05em',
    fontFamily: 'monospace',
    lineHeight: 1.4,
    margin: 0,
    maxWidth: '600px',
  };

  const buttonStyle: React.CSSProperties = {
    padding: `${SPACING.medium}px ${SPACING.xl}px`,
    borderWidth: 2,
    borderColor: COLORS.primary,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    position: 'relative',
    fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
    fontWeight: 'bold',
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    fontFamily: 'monospace',
    minWidth: '140px',
  };

  // Media query styles using CSS-in-JS approach
  const responsiveStyles = `
    @media (min-width: ${BREAKPOINTS.md}) {
      .header-content-row {
        flex-direction: row !important;
        justify-content: space-between !important;
        align-items: flex-start !important;
      }
      
      .header-brand-section {
        flex: 1 1 45% !important;
        text-align: left !important;
        align-items: flex-start !important;
      }
      
      .header-title-section {
        flex: 1 1 55% !important;
        text-align: right !important;
        align-items: flex-end !important;
        padding-left: ${SPACING.xl}px !important;
      }
      
      .header-logo-row {
        justify-content: flex-start !important;
      }
      
      .header-logo {
        width: 5rem !important;
        height: 5rem !important;
      }
    }
    
    @media (min-width: ${BREAKPOINTS.lg}) {
      .header-logo {
        width: 6rem !important;
        height: 6rem !important;
      }
    }
    
    @media (max-width: ${BREAKPOINTS.sm}) {
      .header-brand-text {
        flex-direction: column !important;
        gap: 0.1em !important;
      }
      
      .header-container {
        gap: ${SPACING.lg}px !important;
      }
    }
  `;

  return (
    <>
      <style>{responsiveStyles}</style>
      <GlitchContainer 
        intensity="low" 
        animated={false}
        style={headerStyle}
      >
        <div style={containerStyle} className="header-container">
          <div style={contentRowStyle} className="header-content-row">
            {/* Brand section: Logo + VibesFlow */}
            <div style={brandSectionStyle} className="header-brand-section">
              <div style={logoRowStyle} className="header-logo-row">
                <div style={logoStyle} className="header-logo">
                  <img 
                    src="/assets/logo.png" 
                    alt="VibesFlow Logo" 
                    style={logoImageStyle}
                  />
                </div>
                <div style={brandTextStyle} className="header-brand-text">
                  <span style={vibesStyle}>VIBES</span>
                  <span style={flowStyle}>FLOW</span>
                </div>
              </div>
            </div>

            {/* Title section: Tagline + Description */}
            <div style={titleSectionStyle} className="header-title-section">
              <h1 style={titleStyle}>
                {BRAND.tagline.toUpperCase()}
              </h1>
              <p style={subtitleStyle}>
                {BRAND.description}
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <Button
            variant="primary"
            size="lg"
            href={BRAND.appDomain}
            target="_blank"
            style={buttonStyle}
          >
            TRY APP
          </Button>
        </div>
      </GlitchContainer>
    </>
  );
};

export default Header; 