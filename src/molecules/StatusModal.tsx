import { SuccessIcon } from "../assets/success";
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
  message,
}: {
  open: boolean;
  onClose: () => void;
  status: "success" | "error";
  message: string;
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
        <p className="krypto-connect-status-message">{message}</p>
      </div>
    </Modal>
  );
}
