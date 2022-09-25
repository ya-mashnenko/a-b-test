export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: string;
  title: string;
}
