import React from "react";
import "./Info.css";

export function Info({
  children,
  variant = "default",
}: {
  children: React.ReactNode;
  variant?: "default" | "destructive";
}) {
  return (
    <div
      className={`krypto-connect-info krypto-connect-info--${variant}`}
      role="alert"
    >
      {children}
    </div>
  );
}

export function InfoTitle({ children }: { children: React.ReactNode }) {
  return <div className="krypto-connect-info-title">{children}</div>;
}

export function InfoDescription({ children }: { children: React.ReactNode }) {
  return <div className="krypto-connect-info-description">{children}</div>;
}
