import { UnplugIcon } from "lucide-react";
import React from "react";
import { LogoIcon } from "../../assets/logo";
import { useKryptosConnect } from "../../context/KryptosContext";
import "./logo.css";

export const KryptosLogo = ({ showLabel = true, isDarkTheme = false }) => {
  return (
    <div
      className={`krypto-connect-brand-logo krypto-connect-brand-logo--${showLabel}`}
    >
      <LogoIcon isDarkTheme={isDarkTheme} />
      {showLabel ? <span>Kryptos</span> : null}
    </div>
  );
};

export const ConnectLogo = () => {
  const { theme, appName, appLogo } = useKryptosConnect();

  const isValidUrl = (str: string): boolean => {
    try {
      new URL(str);
      return true;
    } catch {
      return false;
    }
  };

  const renderLogo = () => {
    if (React.isValidElement(appLogo)) {
      // Case 1: Direct ReactNode
      return appLogo;
    } else if (typeof appLogo === "string" && isValidUrl(appLogo)) {
      // Case 2: Valid URL string
      return (
        <img src={appLogo} alt="app-logo" style={{ width: 24, height: 24 }} />
      );
    } else if (appName) {
      // Case 3: First char of appName
      return appName.charAt(0).toUpperCase();
    }
    return "?";
  };

  return (
    <div className="krypto-connect-logos">
      {/* Left: Fixed Logo */}
      <KryptosLogo showLabel={false} isDarkTheme={theme === "dark"} />

      {/* Middle: Chain Icon */}
      <UnplugIcon size={18} />

      {/* Right: Dynamic Logo */}
      <div className="krypto-connect-logo">{renderLogo()}</div>
    </div>
  );
};
