// OTPVerification.js
import { MoveLeft, MoveRight } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../components/Button";
import {
  Modal,
  ModalClose,
  ModalHeader,
  ModalTitle,
} from "../components/Modal";
import Otp from "../components/Otp";
import { ConnectLogo } from "../components/logo";

const OTPVerification = ({
  open,
  setStep,
  setOpen,
}: {
  open: boolean;
  setStep: (step: number) => void;
  setOpen: (open: boolean) => void;
}) => {
  const [otp, setOtp] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Entered OTP: ${otp}`);
  };

  const handleClose = () => {
    setOpen(false);
    setStep(1);
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <ModalHeader>
        <Button variant="link" onClick={() => setStep(1)}>
          <MoveLeft />
        </Button>
        <ModalTitle>OTP Verification</ModalTitle>
        <ModalClose onClose={handleClose} />
      </ModalHeader>
      <div className="krypto-connect-otp-container">
        <ConnectLogo />

        <form onSubmit={handleSubmit}>
          <Otp />
          <br />
          <Button
            type="submit"
            onClick={() => setStep(3)}
            variant="outline"
            size="full"
          >
            Continue <MoveRight />
          </Button>
        </form>
      </div>
    </Modal>
  );
};

export default OTPVerification;
