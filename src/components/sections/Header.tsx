import GlitchContainer from '../ui/GlitchContainer';
import GlitchText from '../ui/GlitchText';
import Button from '../ui/Button';
import { COLORS, FONT_SIZES, SPACING, BRAND } from '../../styles/theme';

const Header: React.FC = () => {
  const headerStyle: React.CSSProperties = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
    backgroundColor: COLORS.background,
    padding: `${SPACING.xl}px`,
  };

  const leftSectionStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
  };

  const logoStyle: React.CSSProperties = {
    width: '80px',
    height: '80px',
    marginRight: SPACING.lg,
  };

  const logoImageStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  };

  const titleSectionStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: FONT_SIZES.xxxl,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
    marginBottom: SPACING.sm,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    fontFamily: 'monospace',
  };

  const vibesStyle: React.CSSProperties = {
    color: COLORS.primary,
  };

  const flowStyle: React.CSSProperties = {
    color: COLORS.secondary,
  };

  const taglineStyle: React.CSSProperties = {
    fontSize: FONT_SIZES.medium,
    color: COLORS.primary,
    fontWeight: 'bold',
    marginBottom: SPACING.xs,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    fontFamily: 'monospace',
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: FONT_SIZES.small,
    color: COLORS.textSecondary,
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
  };

  const buttonStyle: React.CSSProperties = {
    padding: '18px 24px',
    borderWidth: 1,
    borderColor: COLORS.primary,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    position: 'relative',
    fontSize: FONT_SIZES.large,
    fontWeight: 'bold',
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    fontFamily: 'monospace',
  };

  return (
    <GlitchContainer 
      intensity="low" 
      animated={false}
      style={headerStyle}
    >
      {/* Left section with logo and text */}
      <div style={leftSectionStyle}>
        <div style={logoStyle}>
          <img 
            src="/assets/logo.png" 
            alt="VibesFlow Logo" 
            style={logoImageStyle}
          />
        </div>

        <div style={titleSectionStyle}>
          {/* Title */}
          <h1 style={titleStyle}>
            <span style={vibesStyle}>VIBES</span>
            <span style={flowStyle}>FLOW</span>
          </h1>

          {/* Tagline */}
          <div style={taglineStyle}>
            CREATE DJ SETS WITH YOUR 'VIBES'
          </div>

          {/* Subtitle */}
          <div style={subtitleStyle}>
            MOTION-TO-MUSIC // COLLECTIVE RESONANCE // AUTONOMOUS WAVES
          </div>
        </div>
      </div>

      {/* CTA Button on the right */}
      <Button
        variant="primary"
        size="lg"
        href={BRAND.appDomain}
        target="_blank"
        style={buttonStyle}
      >
        TRY APP
      </Button>

      {/* Manifesto at bottom */}
      <div
        style={{
          position: 'absolute',
          bottom: SPACING.xl,
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: FONT_SIZES.xs,
          color: COLORS.textTertiary,
          letterSpacing: '0.1em',
          textAlign: 'center',
          textTransform: 'uppercase',
        }}
      >
        {BRAND.manifesto}
      </div>
    </GlitchContainer>
  );
};

export default Header; 