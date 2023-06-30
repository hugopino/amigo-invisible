import { toast } from "react-hot-toast";
import BaseModal from "./BaseModal";
import { useParticipant } from "@/providers/ParticipantProvider";
import SubmitButton from "../SubmitButton";
import { XCircleIcon, XMarkIcon } from "@heroicons/react/24/solid";

export default function DeleteAllParticipantModal({
  showModal,
  setShowModal,
}: {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
}) {
  const { setParticipants } = useParticipant();

  const handleDeleteAll = () => {
    setParticipants([]);
    toast.success("Todos los participantes han sido eliminados");
    setShowModal(false);
  };

  return (
    <BaseModal
      showModal={showModal}
      setShowModal={setShowModal}
      title="Eliminar todos los participantes"
    >
      <div className="flex flex-col w-3/4 items-center mx-auto gap-1 ">
        <p className="text-gray-900">¿Estás seguro?</p>
        <XCircleIcon className="h-20 w-20 text-red-500" />
        <div className="w-full flex justify-center pt-6 pb-2">
          <SubmitButton onClick={handleDeleteAll}>Eliminar Todos</SubmitButton>
        </div>
      </div>
    </BaseModal>
  );
}
