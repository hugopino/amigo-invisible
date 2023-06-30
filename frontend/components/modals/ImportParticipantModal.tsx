import React, { useState } from "react";
import { toast } from "react-hot-toast";
import BaseModal from "./BaseModal";
import SubmitButton from "../SubmitButton";
import { useParticipant } from "@/providers/ParticipantProvider";
import { ParticipantData } from "@/types/Participant";
import { v4 as uuidv4 } from "uuid";

export default function ImportParticipantModal({
  showModal,
  setShowModal,
}: {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
}) {
  const [textAreaValue, setTextAreaValue] = useState("");
  const { setParticipants } = useParticipant();

  const handleImportParticipants = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const regex =
      /^[a-zA-Z0-9 ]+:[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,8}$/;

    const lines = textAreaValue.split("\n");
    const newParticipants: ParticipantData[] = [];

    for (let line of lines) {
      line = line.trim();
      if (line === "") {
        continue;
      }
      if (!regex.test(line)) {
        toast.error("Formato incorrecto en " + line);
        return;
      }
      const [name, email]: string[] = line.split(":");
      const id = uuidv4();
      newParticipants.push({ id, name, email });
    }

    setParticipants((prevParticipants) => [
      ...prevParticipants,
      ...newParticipants,
    ]);
    toast.success("Participantes importados exitosamente");
    setTextAreaValue("");
    setShowModal(false);
  };

  return (
    <BaseModal
      showModal={showModal}
      setShowModal={setShowModal}
      title="Importar participantes"
    >
      <form
        className="space-y-1 flex flex-col w-3/4 items-center mx-auto gap-2"
        onSubmit={handleImportParticipants}
      >
        <textarea
          id="message"
          rows={8}
          value={textAreaValue}
          onChange={(e) => setTextAreaValue(e.target.value)}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          placeholder="nombre:correo@ejemplo.com"
        />
        <div className="w-full flex justify-center pt-4 pb-2">
          <SubmitButton>Importar</SubmitButton>
        </div>
      </form>
    </BaseModal>
  );
}
