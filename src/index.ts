import "./styles.css";
import { KryptosConnectButton } from "./molecules/Kryptos-connect";
import {
  KryptosConnectProvider,
  useKryptosConnect,
} from "./context/KryptosContext";

// Named exports for module users
export { KryptosConnectButton, KryptosConnectProvider, useKryptosConnect };

// Default export
export default {
  KryptosConnectButton,
  KryptosConnectProvider,
  useKryptosConnect,
};

// Attach to window if available (UMD/CDN usage)
if (typeof window !== "undefined") {
  (window as any).KryptosConnect = {
    KryptosConnectButton,
    KryptosConnectProvider,
    useKryptosConnect,
  };
}
