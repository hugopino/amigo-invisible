export interface FunctionalButtonProps {
  color: string;
  Icon: ForwardRefExoticComponent<RefAttributes<SVGSVGElement>>;
  text: string;
  onClick?: () => void;
  modalKey?: string | null;
}
interface ModalComponents {
  [key: string]: FunctionComponent<{
    showModal: boolean;
    setShowModal: (showModal: boolean) => void;
  }>;
}
