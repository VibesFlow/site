import GlitchText from '../ui/GlitchText';
import { COLORS, FONT_SIZES, SPACING } from '../../styles/theme';

const Footer: React.FC = () => {
  const sectionStyle: React.CSSProperties = {
    backgroundColor: COLORS.background,
    padding: `${SPACING.xl}px`,
    borderTop: `1px solid ${COLORS.primary}20`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: '80px',
  };

  const leftSectionStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: SPACING.medium,
  };

  const logoStyle: React.CSSProperties = {
    width: '40px',
    height: '40px',
  };

  const logoImageStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  };

  const brandNameStyle: React.CSSProperties = {
    fontSize: FONT_SIZES.large,
    color: COLORS.textPrimary,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    fontFamily: 'monospace',
  };

  const centerSectionStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: SPACING.xs,
  };

  const attributionStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: SPACING.xs,
    fontSize: FONT_SIZES.small,
    color: COLORS.textTertiary,
    textAlign: 'center',
    fontFamily: 'monospace',
  };

  const copyrightStyle: React.CSSProperties = {
    fontSize: FONT_SIZES.xs,
    color: COLORS.textTertiary,
    textAlign: 'center',
    fontFamily: 'monospace',
    letterSpacing: '0.1em',
  };

  const rightSectionStyle: React.CSSProperties = {
    display: 'flex',
    gap: SPACING.large,
  };

  const linkStyle: React.CSSProperties = {
    color: COLORS.textSecondary,
    textDecoration: 'none',
    fontSize: FONT_SIZES.small,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    fontFamily: 'monospace',
    transition: 'all 0.2s ease',
    padding: `${SPACING.xs}px ${SPACING.sm}px`,
  };

  const headphonesStyle: React.CSSProperties = {
    fontSize: FONT_SIZES.medium,
    color: COLORS.primary,
  };

  const links = [
    { name: 'GitHub', url: 'https://github.com/vibesflow' },
    { name: 'X', url: 'https://x.com/vibesflowAI' },
    { name: 'Docs', url: 'https://github.com/vibesflow/docs' },
  ];

  return (
    <footer style={sectionStyle}>
      {/* Left section - Logo + VibesFlow */}
      <div style={leftSectionStyle}>
        <div style={logoStyle}>
          <img 
            src="/assets/logo.png" 
            alt="VibesFlow Logo" 
            style={logoImageStyle}
          />
        </div>
        <GlitchText text="VIBESFLOW" style={brandNameStyle} />
      </div>

      {/* Center section - Attribution and Copyright */}
      <div style={centerSectionStyle}>
        <div style={attributionStyle}>
          <span>Built with</span>
          <span style={headphonesStyle}>🎧</span>
          <span>by</span>
          <a
            href="https://github.com/jabyl"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: COLORS.secondary,
              textDecoration: 'none',
              fontWeight: 'bold',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = COLORS.primary;
              e.currentTarget.style.textShadow = `0 0 10px ${COLORS.primary}50`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = COLORS.secondary;
              e.currentTarget.style.textShadow = 'none';
            }}
          >
            jabyl
          </a>
        </div>
        <div style={copyrightStyle}>
          © 2025 VibesFlow. All rights reserved.
        </div>
      </div>

      {/* Right section - Links */}
      <nav style={rightSectionStyle}>
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = COLORS.primary;
              e.currentTarget.style.textShadow = `0 0 10px ${COLORS.primary}30`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = COLORS.textSecondary;
              e.currentTarget.style.textShadow = 'none';
            }}
          >
            {link.name}
          </a>
        ))}
      </nav>
    </footer>
  );
};

export default Footer; 