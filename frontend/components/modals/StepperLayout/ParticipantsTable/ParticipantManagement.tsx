import ImportParticipantModal from "../../ImportParticipantModal";
import AddParticipantModal from "../../AddParticipantModal";
import DeleteAllParticipantModal from "../../DeleteAllParticipantModal";
import {
  ArrowUpCircleIcon,
  PlusCircleIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import TableButton from "./FunctionalButton";
import { useState, FunctionComponent } from "react";
import {
  FunctionalButtonProps,
  ModalComponents,
} from "@/types/ParticipantsTable";

const MODAL_COMPONENTS: ModalComponents = {
  add: AddParticipantModal,
  import: ImportParticipantModal,
  delete: DeleteAllParticipantModal,
};

export default function ParticipantManagement() {
  const [activeModal, setActiveModal] = useState<string | null | undefined>(
    null
  );

  const buttons: FunctionalButtonProps[] = [
    {
      color: "blue",
      Icon: ArrowUpCircleIcon,
      text: "Importar",
      modalKey: "import",
    },
    {
      color: "green",
      Icon: PlusCircleIcon,
      text: "Agregar",
      modalKey: "add",
    },
    {
      color: "red",
      Icon: TrashIcon,
      text: "Borrar todos",
      modalKey: "delete",
    },
  ];

  const ModalComponent = activeModal ? MODAL_COMPONENTS[activeModal] : null;

  return (
    <>
      {buttons.map(({ color, Icon, text, modalKey }) => (
        <TableButton
          key={modalKey}
          color={color}
          Icon={Icon as any}
          text={text}
          onClick={() => setActiveModal(modalKey)}
        />
      ))}
      {ModalComponent && (
        <ModalComponent
          showModal={activeModal !== null}
          setShowModal={() => setActiveModal(null)}
        />
      )}
    </>
  );
}
