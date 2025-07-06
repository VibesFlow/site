import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import GlitchContainer from '../ui/GlitchContainer';
import GlitchText from '../ui/GlitchText';
import { COLORS, FONT_SIZES, SPACING, PARTNERS } from '../../styles/theme';

const BuiltWith: React.FC = () => {
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
    width: '800px',
    height: '400px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: SPACING.xl,
  };

  const renderPartnerLogo = (partner: (typeof PARTNERS)[number], slideIndex: number) => {
    const isCenterSlide = slideIndex === 1; // Center slide in 3-slide view
    const isLeftSlide = slideIndex === 0;
    const isRightSlide = slideIndex === 2;
    
    // Semi-circle positioning
    let translateX = 0;
    let translateY = 0;
    
    if (isCenterSlide) {
      translateY = -60; // Center partner higher
    } else if (isLeftSlide) {
      translateX = -180;
      translateY = 20;
    } else if (isRightSlide) {
      translateX = 180;
      translateY = 20;
    }

    const logoStyle: React.CSSProperties = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: isCenterSlide ? '140px' : '100px',
      height: isCenterSlide ? '140px' : '100px',
      backgroundColor: COLORS.background,
      border: `2px solid ${isCenterSlide ? COLORS.primary : COLORS.textTertiary}`,
      borderRadius: 0,
      padding: SPACING.sm,
      transition: 'all 0.6s ease',
      opacity: isCenterSlide ? 1 : 0.6,
      transform: `translate(${translateX}px, ${translateY}px) scale(${isCenterSlide ? 1 : 0.8})`,
      cursor: 'pointer',
    };

    const imageStyle: React.CSSProperties = {
      width: '60px',
      height: '60px',
      objectFit: 'contain',
      filter: isCenterSlide ? 'brightness(1.2) contrast(1.1)' : 'brightness(0.8)',
      transition: 'filter 0.3s ease',
    };

    const labelStyle: React.CSSProperties = {
      fontSize: FONT_SIZES.xs,
      color: isCenterSlide ? COLORS.primary : COLORS.textTertiary,
      fontWeight: 'bold',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      fontFamily: 'monospace',
      textAlign: 'center',
      marginTop: SPACING.xs,
      transition: 'color 0.3s ease',
    };

    return (
      <div key={partner.name} style={logoStyle}>
        <img
          src={partner.logo}
          alt={partner.name}
          style={imageStyle}
        />
        <div style={labelStyle}>
          {partner.name}
        </div>
      </div>
    );
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
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={0}
          slidesPerView={3}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          style={{
            width: '100%',
            height: '100%',
            position: 'relative',
          }}
        >
          {PARTNERS.map((partner) => (
            <SwiperSlide
              key={partner.name}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {({ isPrev, isNext }) => {
                let slideIndex = 1; // center
                if (isPrev) slideIndex = 0; // left
                if (isNext) slideIndex = 2; // right
                
                return renderPartnerLogo(partner, slideIndex);
              }}
            </SwiperSlide>
          ))}
        </Swiper>

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
            FILECOIN • FILCDN
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
            LYRIA • SHADE • SYNAPSE
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuiltWith; 