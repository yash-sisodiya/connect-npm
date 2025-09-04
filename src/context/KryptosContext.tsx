import { createContext, ReactNode, useContext } from "react";

type KryptosConfig = {
  appName: string;
  appLogo?: React.ReactNode | string;
  theme?: "light" | "dark";
  onSuccess?: () => void;
  onError?: () => void;
};

const KryptosContext = createContext<KryptosConfig | undefined>(undefined);

export const KryptosConnectProvider = ({
  children,
  config,
}: {
  children: ReactNode;
  config: KryptosConfig;
}) => {
  return (
    <KryptosContext.Provider value={config}>{children}</KryptosContext.Provider>
  );
};

export const useKryptosConnect = () => {
  const ctx = useContext(KryptosContext);
  if (!ctx)
    throw new Error(
      "useKryptosConnect must be used inside <KryptosConnectProvider>"
    );
  return ctx;
};
