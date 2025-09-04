import { SuccessIcon } from "../assets/success";
import { Button } from "../components/Button";
import {
  Modal,
  ModalClose,
  ModalHeader,
  ModalTitle,
} from "../components/Modal";

export function StatusModal({
  open,
  onClose,
  status,
  onSuccess,
  onError,
}: {
  open: boolean;
  onClose: () => void;
  status: "success" | "error";
  onSuccess: () => void;
  onError: () => void;
}) {
  return (
    <Modal open={open} onClose={onClose}>
      <ModalHeader>
        <ModalTitle>{null}</ModalTitle>
        <ModalClose onClose={onClose} />
      </ModalHeader>

      <div className="krypto-connect-status-modal-content">
        <div
          className={`krypto-connect-status-icon krypto-connect-status-${status}`}
        >
          {status === "success" ? <SuccessIcon /> : "❌"}
        </div>
        <p className="krypto-connect-status-message">
          {status === "success" ? "Connection successful" : "Connection failed"}
        </p>
      </div>
      <Button
        variant="outline"
        size="full"
        onClick={status === "success" ? onSuccess : onError}
      >
        {status === "success" ? "Continue" : "Try again later"}
      </Button>
    </Modal>
  );
}
