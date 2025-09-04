import * as React from "react";
import "./Input.css";

export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({
  className = "",
  ...props
}) => {
  return (
    <input
      className={`krypto-connect-input 
        krypto-connect-input--outline 
        ${className}`}
      {...props}
    />
  );
};
