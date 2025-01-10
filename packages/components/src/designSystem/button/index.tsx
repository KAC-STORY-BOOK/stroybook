// packages/components/src/Button/Button.tsx
import React, { ButtonHTMLAttributes } from "react";
import "./Button.css"; // Import your styles

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger"; // Style options
  size?: "small" | "medium" | "large"; // Size options
  onClick?: () => void; // Click event
  disabled?: boolean; // Disabled state
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "medium",
  children,
  onClick,
  disabled = false,
  ...props
}) => {
  const className = `btn btn-${variant} btn-${size}`;
  return (
    <button
      className={className}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

Button.displayName = "Button";

export default Button;
