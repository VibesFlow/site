import { useState, useEffect } from 'react';
import GlitchContainer from '../ui/GlitchContainer';
import GlitchText from '../ui/GlitchText';
import { COLORS, FONT_SIZES, SPACING, PARTNERS } from '../../styles/theme';

const BuiltWith: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % PARTNERS.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const sectionStyle: React.CSSProperties = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.backgroundLight,
    padding: `${SPACING.xl}px ${SPACING.medium}px`,
    position: 'relative',
  };

  const carouselContainerStyle: React.CSSProperties = {
    position: 'relative',
    width: '600px',
    height: '300px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: SPACING.xl,
  };

  const renderPartnerLogo = (partner: (typeof PARTNERS)[number], position: 'left' | 'center' | 'right') => {
    // Semi-circle positioning
    let translateX = 0;
    let translateY = 0;
    
    switch (position) {
      case 'left':
        translateX = -200;
        translateY = 60;
        break;
      case 'center':
        translateX = 0;
        translateY = -40;
        break;
      case 'right':
        translateX = 200;
        translateY = 60;
        break;
    }

    const isCenter = position === 'center';

    const containerStyle: React.CSSProperties = {
      position: 'absolute',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      transform: `translate(${translateX}px, ${translateY}px)`,
      transition: 'all 0.8s ease',
      opacity: isCenter ? 1 : 0.7,
      scale: isCenter ? 1.1 : 0.9,
    };

    const logoStyle: React.CSSProperties = {
      width: '100px',
      height: '100px',
      backgroundColor: COLORS.background,
      border: `2px solid ${isCenter ? COLORS.primary : COLORS.textTertiary}`,
      borderRadius: 0,
      padding: SPACING.sm,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: SPACING.sm,
      transition: 'all 0.3s ease',
    };

    const imageStyle: React.CSSProperties = {
      width: '60px',
      height: '60px',
      objectFit: 'contain',
      filter: isCenter ? 'brightness(1.2) contrast(1.1)' : 'brightness(0.8)',
      transition: 'filter 0.3s ease',
    };

    const labelStyle: React.CSSProperties = {
      fontSize: FONT_SIZES.xs,
      color: isCenter ? COLORS.primary : COLORS.textTertiary,
      fontWeight: 'bold',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      fontFamily: 'monospace',
      textAlign: 'center',
      transition: 'color 0.3s ease',
    };

    return (
      <div key={partner.name} style={containerStyle}>
        <div style={logoStyle}>
          <img
            src={partner.logo}
            alt={partner.name}
            style={imageStyle}
          />
        </div>
        <div style={labelStyle}>
          {partner.name}
        </div>
      </div>
    );
  };

  const getVisiblePartners = () => {
    const leftIndex = (currentIndex - 1 + PARTNERS.length) % PARTNERS.length;
    const centerIndex = currentIndex;
    const rightIndex = (currentIndex + 1) % PARTNERS.length;

    return [
      { partner: PARTNERS[leftIndex], position: 'left' as const },
      { partner: PARTNERS[centerIndex], position: 'center' as const },
      { partner: PARTNERS[rightIndex], position: 'right' as const },
    ];
  };

  return (
    <section style={sectionStyle}>
      <GlitchText
        text="BUILT WITH"
        style={{
          fontSize: FONT_SIZES.xxxl,
          fontWeight: 'bold',
          color: COLORS.textPrimary,
          marginBottom: SPACING.lg,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          fontFamily: 'monospace',
        }}
        intensity="low"
      />

      <p style={{
        fontSize: FONT_SIZES.large,
        color: COLORS.textSecondary,
        marginBottom: SPACING.lg,
        textAlign: 'center',
        letterSpacing: '0.05em',
        textTransform: 'uppercase',
      }}>
        CUTTING-EDGE DECENTRALIZED INFRASTRUCTURE
      </p>

      <GlitchContainer
        intensity="low"
        animated={false}
        style={carouselContainerStyle}
      >
        {getVisiblePartners().map(({ partner, position }) => 
          renderPartnerLogo(partner, position)
        )}

        {/* Central glow effect */}
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '40%',
            transform: 'translate(-50%, -50%)',
            width: '200px',
            height: '200px',
            background: `radial-gradient(circle, ${COLORS.primary}20 0%, transparent 70%)`,
            borderRadius: '50%',
            zIndex: 0,
            pointerEvents: 'none',
          }}
        />

        {/* Semi-circle guide (optional visual aid) */}
        <div
          style={{
            position: 'absolute',
            width: '400px',
            height: '200px',
            border: `1px solid ${COLORS.primary}10`,
            borderRadius: '400px 400px 0 0',
            borderBottom: 'none',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 0,
            pointerEvents: 'none',
          }}
        />
      </GlitchContainer>

      {/* Technology stack info */}
      <div style={{
        marginTop: SPACING.xl,
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: SPACING.medium,
        maxWidth: '800px',
        width: '100%',
      }}>
        <div style={{
          textAlign: 'center',
          padding: SPACING.medium,
          border: `1px solid ${COLORS.primary}20`,
          backgroundColor: COLORS.background,
        }}>
          <div style={{
            fontSize: FONT_SIZES.small,
            color: COLORS.primary,
            fontWeight: 'bold',
            marginBottom: SPACING.xs,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
          }}>
            STORAGE
          </div>
          <div style={{
            fontSize: FONT_SIZES.xs,
            color: COLORS.textSecondary,
            textTransform: 'uppercase',
          }}>
            FILECOIN • FILCDN • SYNAPSE
          </div>
        </div>

        <div style={{
          textAlign: 'center',
          padding: SPACING.medium,
          border: `1px solid ${COLORS.secondary}20`,
          backgroundColor: COLORS.background,
        }}>
          <div style={{
            fontSize: FONT_SIZES.small,
            color: COLORS.secondary,
            fontWeight: 'bold',
            marginBottom: SPACING.xs,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
          }}>
            BLOCKCHAIN
          </div>
          <div style={{
            fontSize: FONT_SIZES.xs,
            color: COLORS.textSecondary,
            textTransform: 'uppercase',
          }}>
            NEAR PROTOCOL
          </div>
        </div>

        <div style={{
          textAlign: 'center',
          padding: SPACING.medium,
          border: `1px solid ${COLORS.accent}20`,
          backgroundColor: COLORS.background,
        }}>
          <div style={{
            fontSize: FONT_SIZES.small,
            color: COLORS.accent,
            fontWeight: 'bold',
            marginBottom: SPACING.xs,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
          }}>
            AI & AGENTS
          </div>
          <div style={{
            fontSize: FONT_SIZES.xs,
            color: COLORS.textSecondary,
            textTransform: 'uppercase',
          }}>
            LYRIA • SHADE
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuiltWith; 