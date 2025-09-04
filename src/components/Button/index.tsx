import * as React from "react";
import "./Button.css";

type ButtonVariant = "outline" | "link" | "ghost";
type ButtonSize = "max-content" | "full";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = "outline", className = "", size = "max-content", ...props },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={`krypto-connect-btn krypto-connect-btn--${size} krypto-connect-btn--${variant} ${className}`}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
