import type { ReactNode } from 'react';
import { COLORS, SPACING } from '../../styles/theme';

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
  const colorMap = {
    primary: COLORS.primary,
    secondary: COLORS.secondary,
    accent: COLORS.accent,
  };

  const sizeMap = {
    sm: { padding: `${SPACING.sm}px ${SPACING.medium}px`, fontSize: '0.875rem' },
    md: { padding: `${SPACING.medium}px ${SPACING.lg}px`, fontSize: '1rem' },
    lg: { padding: `${SPACING.lg}px ${SPACING.xl}px`, fontSize: '1.125rem' },
  };

  const color = colorMap[variant];
  const sizing = sizeMap[size];

  const buttonStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: sizing.padding,
    fontSize: sizing.fontSize,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    color: disabled ? COLORS.textTertiary : color,
    backgroundColor: 'transparent',
    border: `1px solid ${disabled ? COLORS.textTertiary : color}`,
    borderRadius: 0, // Sharp corners per style guide
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all 0.2s ease',
    textDecoration: 'none',
    boxShadow: disabled ? 'none' : `0 0 10px ${color}20`,
    opacity: disabled ? 0.5 : 1,
    fontFamily: 'monospace',
    ...style,
  };

  const hoverStyle: React.CSSProperties = {
    backgroundColor: disabled ? 'transparent' : `${color}10`,
    boxShadow: disabled ? 'none' : `0 0 20px ${color}40`,
    transform: disabled ? 'none' : 'translateY(-1px)',
  };

  const Component = href ? 'a' : 'button';

  return (
    <Component
      href={href}
      target={target}
      onClick={onClick}
      disabled={disabled}
      className={`vibes-button ${className}`}
      style={buttonStyle}
      onMouseEnter={(e) => {
        if (!disabled) {
          Object.assign(e.currentTarget.style, hoverStyle);
        }
      }}
      onMouseLeave={(e) => {
        if (!disabled) {
          Object.assign(e.currentTarget.style, buttonStyle);
        }
      }}
    >
      {children}
    </Component>
  );
};

export default Button; 