import { KryptosConnectProvider } from "./context/KryptosContext";
import { KryptosConnectButton } from "./molecules/Kryptos-connect";
import "./styles.css";

// Named exports for module users
export { KryptosConnectButton, KryptosConnectProvider };

// Attach to window if available (UMD/CDN usage)
if (typeof window !== "undefined") {
  (window as any).KryptosConnect = {
    KryptosConnectButton,
    KryptosConnectProvider,
  };
}
