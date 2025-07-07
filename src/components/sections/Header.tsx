import GlitchContainer from '../ui/GlitchContainer';
import Button from '../ui/Button';
import { COLORS, SPACING, BRAND } from '../../styles/theme';

const Header: React.FC = () => {
  const headerStyle: React.CSSProperties = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    backgroundColor: COLORS.background,
    padding: `${SPACING.xl}px ${SPACING.medium}px`,
  };

  const rowContainerStyle: React.CSSProperties = {
    width: '80%',
    maxWidth: '1200px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: SPACING.xl,
  };

  const leftSectionStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    width: '40%',
    height: '8rem', 
  };

  const logoStyle: React.CSSProperties = {
    width: '6rem',
    height: '6rem',
    marginRight: SPACING.lg,
    flexShrink: 0,
  };

  const logoImageStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  };

  const vibesFlowStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    flex: 1,
  };

  const vibesStyle: React.CSSProperties = {
    fontSize: '3.5rem',
    fontWeight: 'bold',
    color: COLORS.primary,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    fontFamily: 'monospace',
    lineHeight: 0.9,
    marginRight: '0.2em',
  };

  const flowStyle: React.CSSProperties = {
    fontSize: '3.5rem',
    fontWeight: 'bold',
    color: COLORS.secondary,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    fontFamily: 'monospace',
    lineHeight: 0.9,
  };

  const rightSectionStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '60%',
    height: '8rem',
    paddingLeft: SPACING.xl,
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '2rem',
    color: COLORS.primary,
    fontWeight: 'bold',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    fontFamily: 'monospace',
    marginBottom: SPACING.sm,
    lineHeight: 1.2,
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: '1rem',
    color: COLORS.textSecondary,
    letterSpacing: '0.05em',
    fontFamily: 'monospace',
    lineHeight: 1.4,
  };

  const buttonContainerStyle: React.CSSProperties = {
    width: '80%',
    maxWidth: '1200px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const buttonStyle: React.CSSProperties = {
    padding: '16px 24px',
    borderWidth: 2,
    borderColor: COLORS.primary,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    position: 'relative',
    fontSize: '1rem',
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
      {/* Main row with logo+vibesflow and title+subtitle */}
      <div style={rowContainerStyle}>
        {/* Left section: Logo + VibesFlow (40%) */}
        <div style={leftSectionStyle}>
          <div style={logoStyle}>
            <img 
              src="/assets/logo.png" 
              alt="VibesFlow Logo" 
              style={logoImageStyle}
            />
          </div>

          <div style={vibesFlowStyle}>
            <div style={vibesStyle}>VIBES</div>
            <div style={flowStyle}>FLOW</div>
          </div>
        </div>

        {/* Right section: Title + Subtitle (60%) */}
        <div style={rightSectionStyle}>
          <div style={titleStyle}>
            CREATE DJ SETS WITH YOUR 'VIBES'
          </div>
          <div style={subtitleStyle}>
            VibesFlow is the first mobile-native app that lets you create music in real-time through your motion
          </div>
        </div>
      </div>

      {/* Button container - same width as main row */}
      <div style={buttonContainerStyle}>
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
  );
};

export default Header; 