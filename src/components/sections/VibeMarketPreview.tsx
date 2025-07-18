import React, { useState, useEffect } from 'react';
import { COLORS } from '../../styles/theme';
import GlitchContainer from '../ui/GlitchContainer';
import GlitchText from '../ui/GlitchText';

interface MockVibestream {
  id: string;
  creator: string;
  rta_id: string;
  rta_duration: string;
  chunks: number;
  is_complete: boolean;
  created_at: string;
  profile_image: string;
  total_size_mb: number;
  synapse_proof_set_id: number;
  chunks_detail: ChunkDetail[];
}

interface ChunkDetail {
  chunk_id: string;
  cid: string;
  size: number;
  url: string;
  duration?: number;
}

const VibeMarketPreview: React.FC = () => {
  const [currentStream, setCurrentStream] = useState(0);

  const mockVibestreams: MockVibestream[] = [
    {
      id: "1",
      creator: "jabyl.testnet",
      rta_id: "1735082903_abc123",
      rta_duration: "04:32",
      chunks: 5,
      is_complete: true,
      created_at: "2025-07-24T20:00:23Z",
      profile_image: "bafkreiabcd1234567890",
      total_size_mb: 4.2,
      synapse_proof_set_id: 12345,
      chunks_detail: []
    },
    {
      id: "2", 
      creator: "raver.testnet",
      rta_id: "1735039284_def456",
      rta_duration: "06:15",
      chunks: 7,
      is_complete: true,
      created_at: "2025-07-24T19:57:03Z",
      profile_image: "bafkreiefgh1234567890",
      total_size_mb: 6.8,
      synapse_proof_set_id: 12346,
      chunks_detail: []
    },
    {
      id: "3",
      creator: "basshead.testnet",
      rta_id: "1735074423_ghi789",
      rta_duration: "08:45",
      chunks: 9,
      is_complete: true,
      created_at: "2025-07-24T19:53:43Z",
      profile_image: "bafkreiijkl1234567890",
      total_size_mb: 8.9,
      synapse_proof_set_id: 12347,
      chunks_detail: []
    }
  ];

  // Auto-rotate streams
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStream((prev) => (prev + 1) % mockVibestreams.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [mockVibestreams.length]);

  const containerStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  };

  const mainContentStyle: React.CSSProperties = {
    width: '100%',
    height: '75%', // Reduced to make room for deeper-dive
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };

  const leftVisualStyle: React.CSSProperties = {
    width: '60%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  };

  const bufferStyle: React.CSSProperties = {
    width: '10%',
    height: '100%',
  };

  const rightContentStyle: React.CSSProperties = {
    width: '30%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  };

  const deeperDiveStyle: React.CSSProperties = {
    width: '100%',
    height: '20%', // Bottom section
      display: 'flex',
      alignItems: 'center',
    justifyContent: 'center',
    marginTop: 'clamp(1rem, 2vh, 2rem)',
  };

  const deeperDiveContainerStyle: React.CSSProperties = {
    width: '90%',
    padding: 'clamp(1rem, 2vh, 1.5rem)',
    backgroundColor: 'rgba(0,0,0,0.5)',
    border: `1px solid ${COLORS.primary}30`,
    textAlign: 'center',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: 'clamp(1.8rem, 4vw, 3rem)',
    fontFamily: 'monospace',
    fontWeight: 'bold',
    color: COLORS.textPrimary,
    letterSpacing: 'clamp(2px, 0.5vw, 4px)',
    textTransform: 'uppercase',
    lineHeight: 1.1,
    marginBottom: 'clamp(1rem, 3vh, 2rem)',
  };

  const descriptionStyle: React.CSSProperties = {
    fontSize: 'clamp(0.9rem, 1.5vw, 1.2rem)',
    fontFamily: 'monospace',
    color: COLORS.textSecondary,
    letterSpacing: 'clamp(0.5px, 0.2vw, 1px)',
    lineHeight: 1.6,
    marginBottom: 'clamp(2rem, 5vh, 3rem)',
  };

  // Deeper-dive styles (smaller than group 1)
  const deeperDiveTitleStyle: React.CSSProperties = {
    fontSize: 'clamp(1rem, 2vw, 1.5rem)', // Smaller than main title
    fontFamily: 'monospace',
    fontWeight: 'bold',
      color: COLORS.textPrimary,
    letterSpacing: 'clamp(1px, 0.3vw, 2px)',
    textTransform: 'uppercase',
    marginBottom: 'clamp(0.5rem, 1vh, 1rem)',
  };

  const deeperDiveDescStyle: React.CSSProperties = {
    fontSize: 'clamp(0.7rem, 1.2vw, 1rem)', // Smaller than main description
    fontFamily: 'monospace',
      color: COLORS.textTertiary,
    letterSpacing: 'clamp(0.5px, 0.2vw, 1px)',
      textTransform: 'uppercase',
    lineHeight: 1.6,
  };

  const previewContainerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '80%',
    position: 'relative',
  };

  // Generate simple waveform data
  const generateWaveform = (): number[] => {
    const points: number[] = [];
    const segments = 80;
    
    for (let i = 0; i < segments; i++) {
      const height = 10 + Math.sin((i * 0.1) + (Date.now() * 0.001)) * 15 + Math.random() * 10;
      points.push(Math.max(5, Math.min(30, height)));
    }
    return points;
  };

  const waveformData = generateWaveform();

  const renderVibestreamCard = (stream: MockVibestream) => {
    return (
      <GlitchContainer intensity="low" style={{
        backgroundColor: 'rgba(0,0,0,0.8)',
        border: `1px solid ${COLORS.primary}40`,
        maxWidth: 'clamp(400px, 50vw, 600px)',
        width: '100%',
        transition: 'all 0.5s ease',
      }}>
        <div style={{
          padding: 'clamp(1rem, 2vw, 1.5rem)',
          backgroundColor: `${COLORS.backgroundLight}60`,
        }}>
          {/* Creator Section */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: 'clamp(0.8rem, 1.5vh, 1.2rem)',
          }}>
            <div style={{
              position: 'relative',
              marginRight: 'clamp(0.8rem, 1.5vw, 1.2rem)',
            }}>
              <div style={{
                width: 'clamp(30px, 6vw, 40px)',
                height: 'clamp(30px, 6vw, 40px)',
                backgroundColor: COLORS.backgroundLight,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 'clamp(16px, 3vw, 20px)',
                color: COLORS.primary,
              }}>
                🎵
              </div>
              <div style={{
                position: 'absolute',
                top: '-1px',
                left: '-1px',
                right: '-1px',
                bottom: '-1px',
                border: `1px solid ${COLORS.primary}`,
                pointerEvents: 'none',
              }} />
            </div>
            
            <div style={{ flex: 1 }}>
              <GlitchText 
                text={stream.creator} 
                style={{
                  fontSize: 'clamp(0.9rem, 1.8vw, 1.2rem)',
                  color: COLORS.textPrimary,
                  fontWeight: 'bold',
                  letterSpacing: 'clamp(0.5px, 0.2vw, 1px)',
                  marginBottom: '2px',
                }}
              />
              <div style={{
                fontSize: 'clamp(0.6rem, 1.2vw, 0.8rem)',
                color: COLORS.textTertiary,
                letterSpacing: 'clamp(1px, 0.3vw, 2px)',
                textTransform: 'uppercase',
              }}>
                CREATOR
              </div>
            </div>

            {/* Play Button */}
            <div style={{
              backgroundColor: COLORS.secondary,
              borderRadius: '20px',
              width: 'clamp(30px, 6vw, 40px)',
              height: 'clamp(30px, 6vw, 40px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
            }}>
              ▶
            </div>
          </div>

          {/* Vibestream Info */}
          <div style={{ marginBottom: 'clamp(0.8rem, 1.5vh, 1.2rem)' }}>
            <GlitchText 
              text={stream.rta_id.toUpperCase()} 
              style={{
                fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
      color: COLORS.secondary,
      fontWeight: 'bold',
                letterSpacing: 'clamp(1px, 0.3vw, 2px)',
                marginBottom: 'clamp(0.3rem, 1vh, 0.5rem)',
              }}
            />
            
            <div style={{
      display: 'flex',
      justifyContent: 'space-between',
              marginBottom: 'clamp(0.3rem, 1vh, 0.5rem)',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                flex: 1,
              }}>
                <span style={{ marginRight: 'clamp(0.3rem, 0.8vw, 0.5rem)' }}>🕒</span>
                <span style={{
                  fontSize: 'clamp(0.6rem, 1.2vw, 0.8rem)',
                  color: COLORS.textSecondary,
                  marginLeft: 'clamp(0.3rem, 0.8vw, 0.5rem)',
                  letterSpacing: 'clamp(0.5px, 0.2vw, 1px)',
                  textTransform: 'uppercase',
                }}>
                  {stream.rta_duration}
                </span>
              </div>
              
              <div style={{
      display: 'flex',
      alignItems: 'center',
      flex: 1,
              }}>
                <span style={{ marginRight: 'clamp(0.3rem, 0.8vw, 0.5rem)' }}>📦</span>
                <span style={{
                  fontSize: 'clamp(0.6rem, 1.2vw, 0.8rem)',
      color: COLORS.textSecondary,
                  marginLeft: 'clamp(0.3rem, 0.8vw, 0.5rem)',
                  letterSpacing: 'clamp(0.5px, 0.2vw, 1px)',
      textTransform: 'uppercase',
                }}>
                  {stream.chunks} chunks
                </span>
              </div>

              <div style={{
      display: 'flex',
      alignItems: 'center',
      flex: 1,
              }}>
                <span style={{ marginRight: 'clamp(0.3rem, 0.8vw, 0.5rem)' }}>
                  {stream.is_complete ? '✅' : '⏳'}
                </span>
                <span style={{
                  fontSize: 'clamp(0.6rem, 1.2vw, 0.8rem)',
                  color: stream.is_complete ? COLORS.secondary : COLORS.primary,
                  marginLeft: 'clamp(0.3rem, 0.8vw, 0.5rem)',
                  letterSpacing: 'clamp(0.5px, 0.2vw, 1px)',
                  textTransform: 'uppercase',
                }}>
                  {stream.is_complete ? "COMPLETE" : "STREAMING"}
                </span>
              </div>
            </div>
          </div>

          {/* Waveform Section */}
          <div style={{
            paddingTop: 'clamp(0.8rem, 1.5vh, 1.2rem)',
            paddingBottom: 'clamp(0.8rem, 1.5vh, 1.2rem)',
            paddingLeft: 'clamp(0.3rem, 0.8vw, 0.5rem)',
            paddingRight: 'clamp(0.3rem, 0.8vw, 0.5rem)',
          }}>
            {/* Progress Track */}
            <div style={{
              height: 'clamp(4px, 1vh, 6px)',
              backgroundColor: COLORS.backgroundLight,
              borderRadius: '3px',
              marginBottom: 'clamp(0.3rem, 0.8vh, 0.5rem)',
              position: 'relative',
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                height: '100%',
                width: '45%',
                backgroundColor: COLORS.secondary,
                borderRadius: '3px',
              }} />
        </div>

            {/* Animated Waveform */}
            <div style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              height: 'clamp(25px, 5vh, 40px)',
              marginTop: 'clamp(0.3rem, 0.8vh, 0.5rem)',
              marginBottom: 'clamp(0.3rem, 0.8vh, 0.5rem)',
              paddingLeft: 'clamp(0.2rem, 0.5vw, 0.3rem)',
              paddingRight: 'clamp(0.2rem, 0.5vw, 0.3rem)',
            }}>
              {waveformData.map((height, i) => (
                <div
                  key={i}
                  style={{
                    width: 'clamp(1px, 0.3vw, 2px)',
                    height: `${height * 0.8}px`,
                    backgroundColor: `${COLORS.primary}60`,
                    borderRadius: '1px',
                    marginLeft: '0.5px',
                    marginRight: '0.5px',
                  }}
                />
              ))}
            </div>
            
            {/* Time Display */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: 'clamp(0.2rem, 0.5vh, 0.3rem)',
            }}>
              <span style={{
                fontSize: 'clamp(0.6rem, 1.2vw, 0.8rem)',
                color: COLORS.textSecondary,
                letterSpacing: 'clamp(0.5px, 0.2vw, 1px)',
              }}>
                2:05
              </span>
              <span style={{
                fontSize: 'clamp(0.6rem, 1.2vw, 0.8rem)',
                color: COLORS.textSecondary,
                letterSpacing: 'clamp(0.5px, 0.2vw, 1px)',
              }}>
                {stream.rta_duration}
              </span>
            </div>
          </div>

          {/* Storage Info */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              flex: 1,
            }}>
              <span style={{ marginRight: 'clamp(0.3rem, 0.8vw, 0.5rem)' }}>🗄️</span>
              <span style={{
                fontSize: 'clamp(0.6rem, 1.2vw, 0.8rem)',
                color: COLORS.textSecondary,
                marginLeft: 'clamp(0.3rem, 0.8vw, 0.5rem)',
                letterSpacing: 'clamp(0.5px, 0.2vw, 1px)',
                textTransform: 'uppercase',
              }}>
                {stream.total_size_mb.toFixed(1)}MB
              </span>
            </div>
            
            <div style={{
              display: 'flex',
              alignItems: 'center',
              flex: 1,
            }}>
              <span style={{ marginRight: 'clamp(0.3rem, 0.8vw, 0.5rem)' }}>🛡️</span>
              <span style={{
                fontSize: 'clamp(0.6rem, 1.2vw, 0.8rem)',
                color: COLORS.textSecondary,
                marginLeft: 'clamp(0.3rem, 0.8vw, 0.5rem)',
                letterSpacing: 'clamp(0.5px, 0.2vw, 1px)',
                textTransform: 'uppercase',
              }}>
                PDP #{stream.synapse_proof_set_id}
              </span>
            </div>
          </div>

          {/* FilCDN Status */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            paddingTop: 'clamp(0.3rem, 0.8vh, 0.5rem)',
            borderTop: `1px solid ${COLORS.primary}20`,
            marginTop: 'clamp(0.3rem, 0.8vh, 0.5rem)',
          }}>
            <span style={{ marginRight: 'clamp(0.3rem, 0.8vw, 0.5rem)' }}>🌐</span>
            <div style={{
              width: 'clamp(6px, 1.2vw, 8px)',
              height: 'clamp(6px, 1.2vw, 8px)',
              backgroundColor: COLORS.secondary,
              marginLeft: 'clamp(0.3rem, 0.8vw, 0.5rem)',
            }} />
        </div>
        </div>
      </GlitchContainer>
    );
  };

  const stream = mockVibestreams[currentStream];

  return (
    <div style={containerStyle}>
      {/* Main Content - 75% */}
      <div style={mainContentStyle}>
        {/* Left Visual - 60% */}
        <div style={leftVisualStyle}>
          <div style={previewContainerStyle}>
            {renderVibestreamCard(stream)}
          </div>

          {/* Navigation Dots */}
          <div style={{
            position: 'absolute',
            bottom: '10%',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: 'clamp(0.3rem, 0.8vw, 0.5rem)',
          }}>
            {mockVibestreams.map((_, index) => (
              <div
                key={index}
        style={{
                  width: 'clamp(8px, 1.5vw, 12px)',
                  height: 'clamp(8px, 1.5vw, 12px)',
                  backgroundColor: index === currentStream ? COLORS.secondary : COLORS.textTertiary,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  border: `1px solid ${index === currentStream ? COLORS.secondary : COLORS.textTertiary}`,
                }}
                onClick={() => setCurrentStream(index)}
              />
            ))}
          </div>
        </div>

        {/* Buffer - 10% */}
        <div style={bufferStyle} />

        {/* Right Content - 30% */}
        <div style={rightContentStyle}>
          <GlitchText 
            text="Vibe Market"
            style={titleStyle}
            intensity="medium"
          />
          
          <div style={descriptionStyle}>
            Discover and stream vibesets created by the community. Each session is stored permanently on Filecoin with FilCDN delivery.
          </div>
        </div>
      </div>

      {/* Deeper-Dive Section - 20% */}
      <div style={deeperDiveStyle}>
        <GlitchContainer
          intensity="low"
          style={deeperDiveContainerStyle}
        >
          <GlitchText 
            text="Truly Sovereign Music Marketplace "
            style={deeperDiveTitleStyle}
            intensity="low"
          />
          
          <GlitchText
            text=" Every vibestream is permanently stored on Filecoin, streamed through FilCDN for instant access, and represented as dynamic NFTs on the blockchain for ownership and royalties."
            style={deeperDiveDescStyle}
            intensity="low"
          />
        </GlitchContainer>
      </div>
    </div>
  );
};

export default VibeMarketPreview; 