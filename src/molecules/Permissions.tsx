import {
  Modal,
  ModalHeader,
  ModalTitle,
  ModalClose,
} from "../components/Modal";
import { Button } from "../components/Button";
import { ConnectLogo } from "../components/logo";
import { useKryptosConnect } from "../context/KryptosContext";

export function Permissions({
  open,
  onClose,
  setStep,
}: {
  open: boolean;
  onClose: () => void;
  setStep: (step: number) => void;
}) {
  const { appName } = useKryptosConnect();
  return (
    <Modal open={open} onClose={onClose}>
      <ModalHeader>
        <ModalTitle>Permissions</ModalTitle>
        <ModalClose onClose={onClose} />
      </ModalHeader>

      {/* Logos */}
      <ConnectLogo />

      {/* Permissions list */}
      <div className="permissions-list">
        <p className="permissions-subtitle">Allow {appName} to:</p>
        <ol>
          <li>First access text here.</li>
          <li>Second access text here.</li>
          <li>Third access text here.</li>
        </ol>
      </div>

      {/* Info box */}
      <div className="permissions-info">
        By selecting <b>‘Allow’</b>, you agree to share this information and
        keep it updated.
      </div>

      {/* Action button */}
      <Button
        variant="outline"
        size="full"
        onClick={() => {
          setStep(4);
        }}
      >
        Allow
      </Button>
    </Modal>
  );
}
