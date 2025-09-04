import * as React from "react";
import "./Button.css";

type ButtonVariant = "outline" | "link" | "ghost";
type ButtonSize = "max-content" | "full";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export const Button: React.FC<ButtonProps> = ({
  variant = "outline",
  className = "",
  size = "max-content",
  ...props
}) => {
  return (
    <button
      className={`krypto-connect-btn krypto-connect-btn--${size} krypto-connect-btn--${variant} ${className}`}
      {...props}
    />
  );
};
