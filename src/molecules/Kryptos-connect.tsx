import { forwardRef, useState } from "react";
import { Button } from "../components/Button";
import { KryptosLogo } from "../components/logo";
import { useKryptosConnect } from "../context/KryptosContext";
import "./../styles.css";
import { Auth } from "./Auth";
import { OTPVerification } from "./Otp-verify";
import { Permissions } from "./Permissions";
import { StatusModal } from "./StatusModal";

import type { ButtonHTMLAttributes } from "react";

export interface KryptosConnectButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  onSuccess?: () => void;
  onError?: () => void;
}

export const KryptosConnectButton = forwardRef<
  HTMLButtonElement,
  KryptosConnectButtonProps
>(({ children, className, onSuccess, onError, ...props }, ref) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        ref={ref}
        onClick={() => setOpen(true)}
        className={`krypto-connect-trigger-btn ${className ?? ""}`}
        {...props}
      >
        {children ? (
          children
        ) : (
          <>
            Connect with <KryptosLogo />
          </>
        )}
      </Button>
      <KryptosConnectModel
        open={open}
        setOpen={setOpen}
        onSuccess={onSuccess}
        onError={onError}
      />
    </>
  );
});

KryptosConnectButton.displayName = "KryptosConnectButton";

export const KryptosConnectModel = ({
  open,
  setOpen,
  onSuccess,
  onError,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  onSuccess?: () => void;
  onError?: () => void;
}) => {
  const { theme } = useKryptosConnect();
  const [step, setStep] = useState(1);
  return (
    <div className="krypto-connect" data-theme={theme}>
      {step === 1 && <Auth open={open} setOpen={setOpen} setStep={setStep} />}
      {step === 2 && (
        <OTPVerification open={open} setOpen={setOpen} setStep={setStep} />
      )}
      {step === 3 && (
        <Permissions
          open={open}
          onClose={() => {
            setOpen(false);
            setStep(1);
          }}
          setStep={setStep}
        />
      )}
      {step === 4 && (
        <StatusModal
          open={open}
          onClose={() => {
            setOpen(false);
            setStep(1);
          }}
          onSuccess={() => {
            setStep(1);
            setOpen(false);
            onSuccess?.();
          }}
          onError={() => {
            setStep(1);
            setOpen(false);
            onError?.();
          }}
          status={Math.random() > 0.5 ? "success" : "error"}
        />
      )}
    </div>
  );
};
