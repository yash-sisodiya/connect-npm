import { useState } from "react";
import { Button } from "../components/Button";
import { useKryptosConnect } from "../context/KryptosContext";
import "./../styles.css";
import { Auth } from "./Auth";
import { KryptosLogo } from "../components/logo";
import { OTPVerification } from "./Otp-verify";
import { Permissions } from "./Permissions";
import { StatusModal } from "./StatusModal";
// import OTPVerification from "./Otp-verify";

export const KryptosConnect = () => {
  const { theme } = useKryptosConnect();
  const [step, setStep] = useState(1);
  const [open, setOpen] = useState(false);
  return (
    <div className="krypto-connect" data-theme={theme}>
      {/* Trigger Button */}
      <Button
        onClick={() => setOpen(true)}
        className="krypto-connect-trigger-btn"
      >
        Connect with <KryptosLogo />
      </Button>

      {/* Reusable Modal */}

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
          status="success"
          message="Connection successful"
        />
      )}
    </div>
  );
};
