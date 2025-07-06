import { useState, useEffect } from 'react';
import GlitchContainer from '../ui/GlitchContainer';
import GlitchText from '../ui/GlitchText';
import Button from '../ui/Button';
import { COLORS, FONT_SIZES, SPACING, BRAND } from '../../styles/theme';
import { getRandomVibestreams } from '../../utils/mockData';
import type { MockVibestream } from '../../utils/mockData';

const VibeMarketPreview: React.FC = () => {
  const [vibestreams, setVibestreams] = useState<MockVibestream[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const streams = getRandomVibestreams(5);
    setVibestreams(streams);
  }, []);

  useEffect(() => {
    if (vibestreams.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % vibestreams.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [vibestreams.length]);

  const sectionStyle: React.CSSProperties = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.background,
    padding: `${SPACING.xl}px ${SPACING.medium}px`,
    position: 'relative',
  };

  const cardsContainerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    maxWidth: '1200px',
    height: '300px',
    overflow: 'hidden',
    position: 'relative',
  };

  const renderVibestreamCard = (stream: MockVibestream, index: number) => {
    const isFirst = index === currentIndex;
    const isSecond = index === (currentIndex + 1) % vibestreams.length;
    
    if (!isFirst && !isSecond) return null;

    const cardStyle: React.CSSProperties = {
      width: isFirst ? '600px' : '450px', // 75% for second card
      height: '250px',
      backgroundColor: COLORS.backgroundLight,
      border: `1px solid ${COLORS.primary}40`,
      padding: SPACING.medium,
      position: 'absolute',
      left: isFirst ? '0px' : '620px', // 20px gap
      top: '50%',
      transform: 'translateY(-50%)',
      transition: 'all 0.5s ease',
      zIndex: isFirst ? 10 : 5,
    };

    const profileStyle: React.CSSProperties = {
      display: 'flex',
      alignItems: 'center',
      marginBottom: SPACING.medium,
    };

    const profileImageStyle: React.CSSProperties = {
      width: '40px',
      height: '40px',
      borderRadius: '2px',
      marginRight: SPACING.medium,
      border: `1px solid ${COLORS.primary}`,
    };

    const creatorInfoStyle: React.CSSProperties = {
      flex: 1,
    };

    const creatorNameStyle: React.CSSProperties = {
      fontSize: FONT_SIZES.medium,
      color: COLORS.textPrimary,
      fontWeight: 'bold',
      letterSpacing: 1,
      marginBottom: 2,
    };

    const creatorLabelStyle: React.CSSProperties = {
      fontSize: FONT_SIZES.xs,
      color: COLORS.textTertiary,
      letterSpacing: 2,
      textTransform: 'uppercase',
    };

    const rtaStyle: React.CSSProperties = {
      fontSize: FONT_SIZES.large,
      color: COLORS.secondary,
      fontWeight: 'bold',
      letterSpacing: 2,
      marginBottom: SPACING.small,
      textTransform: 'uppercase',
      fontFamily: 'monospace',
    };

    const statsRowStyle: React.CSSProperties = {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: SPACING.small,
    };

    const statItemStyle: React.CSSProperties = {
      display: 'flex',
      alignItems: 'center',
      flex: 1,
    };

    const statTextStyle: React.CSSProperties = {
      fontSize: FONT_SIZES.xs,
      color: COLORS.textSecondary,
      marginLeft: SPACING.xs,
      letterSpacing: 1,
      textTransform: 'uppercase',
    };

    const filcdnSectionStyle: React.CSSProperties = {
      display: 'flex',
      alignItems: 'center',
      paddingTop: SPACING.small,
      borderTop: `1px solid ${COLORS.primary}20`,
      marginTop: 'auto',
    };

    const filcdnTextStyle: React.CSSProperties = {
      fontSize: FONT_SIZES.xs,
      color: COLORS.textTertiary,
      marginLeft: SPACING.xs,
      letterSpacing: 1,
      flex: 1,
    };

    const filcdnIndicatorStyle: React.CSSProperties = {
      width: 8,
      height: 8,
      backgroundColor: COLORS.secondary,
      marginLeft: SPACING.small,
    };

    return (
      <GlitchContainer
        key={stream.id}
        intensity="low"
        animated={false}
        style={cardStyle}
      >
        <div style={profileStyle}>
          <img
            src={stream.profile_image}
            alt={stream.creator}
            style={profileImageStyle}
          />
          <div style={creatorInfoStyle}>
            <GlitchText text={stream.creator} style={creatorNameStyle} />
            <div style={creatorLabelStyle}>CREATOR</div>
          </div>
        </div>

        <div>
          <GlitchText text={stream.rta_id.toUpperCase()} style={rtaStyle} />
          
          <div style={statsRowStyle}>
            <div style={statItemStyle}>
              <span style={{ fontSize: FONT_SIZES.xs, color: COLORS.accent }}>🕒</span>
              <div style={statTextStyle}>{stream.rta_duration}</div>
            </div>
            
            <div style={statItemStyle}>
              <span style={{ fontSize: FONT_SIZES.xs, color: COLORS.accent }}>📦</span>
              <div style={statTextStyle}>{stream.chunks} chunks</div>
            </div>
            
            <div style={statItemStyle}>
              <span style={{ fontSize: FONT_SIZES.xs, color: COLORS.textTertiary }}>🛡️</span>
              <div style={statTextStyle}>PDP #{stream.synapse_proof_set_id}</div>
            </div>
          </div>
        </div>

        <div style={filcdnSectionStyle}>
          <span style={{ fontSize: FONT_SIZES.xs, color: COLORS.textTertiary }}>🌐</span>
          <div style={filcdnTextStyle}>SYNAPSE SDK READY</div>
          <div style={filcdnIndicatorStyle} />
        </div>
      </GlitchContainer>
    );
  };

  return (
    <section style={sectionStyle}>
      <GlitchText
        text="VIBE MARKET PREVIEW"
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
        marginBottom: SPACING.xxl,
        textAlign: 'center',
        letterSpacing: '0.05em',
        textTransform: 'uppercase',
      }}>
        DISCOVER LIVE VIBESTREAMS FROM CREATORS WORLDWIDE
      </p>

      <div style={cardsContainerStyle}>
        {vibestreams.map((stream, index) => renderVibestreamCard(stream, index))}
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: SPACING.sm,
        marginTop: SPACING.xl,
      }}>
        {vibestreams.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            style={{
              width: '12px',
              height: '12px',
              backgroundColor: index === currentIndex ? COLORS.primary : COLORS.textTertiary,
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          />
        ))}
      </div>

      <Button
        variant="secondary"
        size="lg"
        style={{
          marginTop: SPACING.xl,
          fontSize: FONT_SIZES.large,
          padding: '18px 24px',
          fontFamily: 'monospace',
          textTransform: 'uppercase',
          letterSpacing: '1.5px',
          fontWeight: 'bold',
        }}
        href={`${BRAND.appDomain}/market`}
        target="_blank"
      >
        EXPLORE VIBE MARKET
      </Button>
    </section>
  );
};

export default VibeMarketPreview; 