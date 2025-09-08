import { Link, MoveRight, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { Button } from "../components/Button";
import { Info, InfoDescription } from "../components/Info";
import { Input } from "../components/Input";
import { ConnectLogo } from "../components/logo";
import {
  Modal,
  ModalClose,
  ModalHeader,
  ModalTitle,
} from "../components/Modal";
import { useKryptosConnect } from "../context/KryptosContext";

export const Auth = ({
  open,
  setOpen,
  setStep,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  setStep: (step: number) => void;
}) => {
  const { appName } = useKryptosConnect();
  const [email, setEmail] = useState("");

  const handleClose = () => {
    setOpen(false);
    setStep(1);
  };

  const handleContinue = () => {
    if (!email.trim()) return; // optional validation
    setStep(2);
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <ModalHeader>
        <ModalTitle>{null}</ModalTitle>
        <ModalClose onClose={handleClose} />
      </ModalHeader>
      <div className="krypto-connect-connection-title">
        Connect {appName} to your Kryptos account
      </div>

      <div className="krypto-connect-auth-body">
        {/* Logos */}
        <ConnectLogo />

        {[
          {
            icon: <Link />,
            title: "Simple and secure",
            text: "Connect your Web3 accounts with Kryptos in just a few clicks",
          },
          {
            icon: <ShieldCheck />,
            title: "Control what you share",
            text: "We never share your data without your permission",
          },
        ].map((section) => (
          <div className="krypto-connect-info-section" key={section.title}>
            <span className="krypto-connect-section-icon">{section.icon}</span>
            <div>
              <div className="krypto-connect-section-title">
                {section.title}
              </div>
              <div className="krypto-connect-section-description">
                {section.text}
              </div>
            </div>
          </div>
        ))}

        {/* Email input */}
        <Input
          type="email"
          placeholder="Enter email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Info box */}
        <Info variant="default">
          <InfoDescription>
            Sign in or create your Kryptos account with your email for quicker
            access next time. <a href="#">Learn more</a>
          </InfoDescription>
        </Info>

        {/* Continue button */}
        <Button onClick={handleContinue} variant="outline" size="full">
          Continue
          <MoveRight size={18} strokeWidth={2} />
        </Button>

        <div className="krypto-connect-auth-footer-description">
          By continuing, you agree to Kryptos <a href="#">Privacy Policy</a>
        </div>

        {/* Continue as guest */}
        <Button onClick={() => setStep(2)} variant="ghost" size="full">
          Continue as guest
        </Button>
      </div>
    </Modal>
  );
};
