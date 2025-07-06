import GlitchContainer from '../ui/GlitchContainer';
import GlitchText from '../ui/GlitchText';
import { COLORS, FONT_SIZES, SPACING } from '../../styles/theme';

interface FeatureCard {
  title: string;
  description: string[];
}

const Details: React.FC = () => {
  const features: FeatureCard[] = [
    {
      title: 'SOLO VS. GROUP MODE',
      description: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
        'Laboris nisi ut aliquip ex ea commodo consequat.',
        'Duis aute irure dolor in reprehenderit in voluptate velit esse.',
        'Cillum dolore eu fugiat nulla pariatur excepteur sint occaecat.',
      ],
    },
    {
      title: 'FULL CONTROL',
      description: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
        'Laboris nisi ut aliquip ex ea commodo consequat.',
        'Duis aute irure dolor in reprehenderit in voluptate velit esse.',
        'Cillum dolore eu fugiat nulla pariatur excepteur sint occaecat.',
      ],
    },
    {
      title: 'PROVABLE OWNERSHIP, ROYALTIES FOREVER',
      description: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
        'Laboris nisi ut aliquip ex ea commodo consequat.',
        'Duis aute irure dolor in reprehenderit in voluptate velit esse.',
        'Cillum dolore eu fugiat nulla pariatur excepteur sint occaecat.',
      ],
    },
  ];

  const sectionStyle: React.CSSProperties = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.backgroundLight,
    padding: `${SPACING.xxl}px ${SPACING.medium}px`,
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '1200px',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: SPACING.xl,
    marginTop: SPACING.xl,
  };

  const cardStyle: React.CSSProperties = {
    backgroundColor: COLORS.background,
    border: `1px solid ${COLORS.primary}40`,
    padding: SPACING.xl,
    position: 'relative',
    minHeight: '400px',
    display: 'flex',
    flexDirection: 'column',
  };

  const titleContainerStyle: React.CSSProperties = {
    height: '80px', // Fixed height for title container
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SPACING.lg,
  };

  const cardTitleStyle: React.CSSProperties = {
    fontSize: FONT_SIZES.xl,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    fontFamily: 'monospace',
    textAlign: 'center',
    lineHeight: 1.2,
  };

  const bodyContainerStyle: React.CSSProperties = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  };

  const descriptionStyle: React.CSSProperties = {
    fontSize: FONT_SIZES.medium,
    color: COLORS.textSecondary,
    lineHeight: 1.8,
    letterSpacing: '0.02em',
  };

  const sectionTitleStyle: React.CSSProperties = {
    fontSize: FONT_SIZES.xxxl,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
    marginBottom: SPACING.xl,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    fontFamily: 'monospace',
    textAlign: 'center',
  };

  const getCardVariant = (index: number) => {
    const variants = [COLORS.primary, COLORS.secondary, COLORS.accent];
    return variants[index % variants.length];
  };

  return (
    <section style={sectionStyle}>
      <GlitchText
        text="HOW IT WORKS"
        style={sectionTitleStyle}
        intensity="low"
      />

      <div style={containerStyle}>
        {features.map((feature, index) => (
          <GlitchContainer
            key={index}
            intensity="low"
            animated={true}
            style={{
              ...cardStyle,
              borderColor: `${getCardVariant(index)}40`,
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '2px',
                backgroundColor: getCardVariant(index),
                opacity: 0.6,
              }}
            />
            
            {/* Title Container - fixed height for alignment */}
            <div style={titleContainerStyle}>
              <h3 style={{
                ...cardTitleStyle,
                color: getCardVariant(index),
              }}>
                {feature.title}
              </h3>
            </div>

            {/* Body Container - flexible height */}
            <div style={bodyContainerStyle}>
              <div style={descriptionStyle}>
                {feature.description.map((line, lineIndex) => (
                  <p key={lineIndex} style={{ marginBottom: SPACING.sm }}>
                    {line}
                  </p>
                ))}
              </div>
            </div>
            
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '2px',
                backgroundColor: getCardVariant(index),
                opacity: 0.6,
              }}
            />
          </GlitchContainer>
        ))}
      </div>
    </section>
  );
};

export default Details; 