import React from "react";
import "./Modal.css";
import { Button } from "../Button";
import { X } from "lucide-react";

function Modal({
  open,
  onClose,
  children,
}: {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
  if (!open) return null;

  return (
    <div className="krypto-connect-modal-overlay" onClick={onClose}>
      <div
        className="krypto-connect-modal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {children}
      </div>
    </div>
  );
}

function ModalHeader({ children }: { children: React.ReactNode }) {
  return <div className="krypto-connect-modal-header">{children}</div>;
}

function ModalTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="krypto-connect-modal-title">{children}</h2>;
}

function ModalDescription({ children }: { children: React.ReactNode }) {
  return <p className="krypto-connect-modal-description">{children}</p>;
}

function ModalBody({ children }: { children: React.ReactNode }) {
  return <div className="krypto-connect-modal-body">{children}</div>;
}

function ModalFooter({ children }: { children: React.ReactNode }) {
  return <div className="krypto-connect-modal-footer">{children}</div>;
}

function ModalClose({ onClose }: { onClose: () => void }) {
  return (
    <Button
      className="krypto-connect-modal-close-btn"
      onClick={onClose}
      aria-label="Close modal"
      variant="link"
    >
      <X />
    </Button>
  );
}

export {
  Modal,
  ModalHeader,
  ModalTitle,
  ModalDescription,
  ModalBody,
  ModalFooter,
  ModalClose,
};
