import React, { useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { COLORS } from '../../styles/theme';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
  href?: string;
  target?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  style = {},
  disabled = false,
  href,
  target,
}) => {
  const [isPressed, setIsPressed] = useState(false);
  const [pulse, setPulse] = useState(1);

  // Get colors based on variant
  const getColors = () => {
    switch(variant) {
      case 'primary':
        return {
          border: COLORS.primary,
          text: COLORS.primary,
          glow: `rgba(0, 255, 65, ${isPressed ? 0.3 : 0.15})`,
          shadow: 'rgba(0, 255, 65, 0.5)',
        };
      case 'secondary':
        return {
          border: COLORS.secondary,
          text: COLORS.secondary,
          glow: `rgba(255, 0, 160, ${isPressed ? 0.3 : 0.15})`,
          shadow: 'rgba(255, 0, 160, 0.5)',
        };
      case 'accent':
        return {
          border: COLORS.accent,
          text: COLORS.accent,
          glow: `rgba(0, 204, 255, ${isPressed ? 0.3 : 0.15})`,
          shadow: 'rgba(0, 204, 255, 0.5)',
        };
      default:
        return {
          border: COLORS.primary,
          text: COLORS.primary,
          glow: `rgba(0, 255, 65, ${isPressed ? 0.3 : 0.15})`,
          shadow: 'rgba(0, 255, 65, 0.5)',
        };
    }
  };

  // Get padding based on size
  const getPadding = () => {
    switch(size) {
      case 'sm':
        return { vertical: 8, horizontal: 16 };
      case 'md':
        return { vertical: 12, horizontal: 24 };
      case 'lg':
        return { vertical: 16, horizontal: 32 };
      default:
        return { vertical: 12, horizontal: 24 };
    }
  };

  const colors = getColors();
  const padding = getPadding();

  // Pulse animation
  useEffect(() => {
    const pulseInterval = setInterval(() => {
      setPulse(prev => prev === 1 ? 1.02 : 1);
    }, 1500);

    return () => clearInterval(pulseInterval);
  }, []);

  const handlePress = () => {
    if (disabled || !onClick) return;
    onClick();
  };

  const buttonStyle: React.CSSProperties = {
    position: 'relative',
    border: `1px solid ${disabled ? COLORS.textTertiary : colors.border}`,
    backgroundColor: 'rgba(0,0,0,0.7)',
    color: disabled ? COLORS.textTertiary : colors.text,
    fontFamily: 'monospace',
    fontWeight: 'bold',
    fontSize: size === 'sm' ? '14px' : size === 'lg' ? '18px' : '16px',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    textDecoration: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: `${padding.vertical}px`,
    paddingBottom: `${padding.vertical}px`,
    paddingLeft: `${padding.horizontal}px`,
    paddingRight: `${padding.horizontal}px`,
    overflow: 'hidden',
    transform: `scale(${pulse})`,
    transition: 'all 0.2s ease',
    textShadow: isPressed ? `0 0 5px ${colors.shadow}` : 'none',
    boxShadow: `0 0 0 ${colors.glow}`,
    ...style,
  };

  const overlayStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `linear-gradient(135deg, ${colors.glow}, transparent)`,
    opacity: isPressed ? 1 : 0.5,
    transition: 'opacity 0.2s ease',
    pointerEvents: 'none',
  };

  const flashStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors.glow,
    opacity: isPressed ? 0.2 : 0,
    transition: 'opacity 0.1s ease',
    pointerEvents: 'none',
  };

  const contentStyle: React.CSSProperties = {
    position: 'relative',
    zIndex: 2,
  };

  if (href) {
    return (
      <a
        href={href}
        target={target}
        className={className}
        style={buttonStyle}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        onMouseLeave={() => setIsPressed(false)}
      >
        <div style={overlayStyle} />
        <div style={flashStyle} />
        <div style={contentStyle}>
          {children}
        </div>
      </a>
    );
  }

  return (
    <button
      className={className}
      style={buttonStyle}
      disabled={disabled}
      onClick={handlePress}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
    >
      <div style={overlayStyle} />
      <div style={flashStyle} />
      <div style={contentStyle}>
        {children}
      </div>
    </button>
  );
};

export default Button; 