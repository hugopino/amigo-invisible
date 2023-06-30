import { toast } from "react-hot-toast";
import BaseModal from "./BaseModal";
import { v4 as uuidv4 } from "uuid";
import { useParticipant } from "@/providers/ParticipantProvider";
import SubmitButton from "../SubmitButton";

export default function AddParticipantModal({
  showModal,
  setShowModal,
}: {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
}) {
  const { setParticipants } = useParticipant();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newParticipant = {
      id: uuidv4(),
      name: e.currentTarget.text.value,
      email: e.currentTarget.email.value,
    };

    setParticipants((prevParticipants) => [
      ...prevParticipants,
      newParticipant,
    ]);
    toast.success("Participante añadido");
    setShowModal(false);
    e.currentTarget.reset();
  };
  return (
    <BaseModal
      showModal={showModal}
      setShowModal={setShowModal}
      title="Añadir participante"
    >
      <form
        className="space-y-1 flex flex-col w-3/4 items-center mx-auto gap-2"
        action="#"
        onSubmit={handleSubmit}
      >
        <div className="w-full">
          <label
            htmlFor="text"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Nombre
          </label>
          <input
            type="text"
            name="text"
            id="text"
            autoComplete="given-name"
            placeholder="Nombre"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Correo
          </label>
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="ejemplo@gmail.com"
            required
          />
        </div>
        <div className="w-full flex justify-center pt-6 pb-2">
          <SubmitButton>Añadir</SubmitButton>
        </div>
      </form>
    </BaseModal>
  );
}
