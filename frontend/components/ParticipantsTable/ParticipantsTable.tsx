"use client";

import { ArrowUpCircleIcon, PlusCircleIcon } from "@heroicons/react/24/solid";
import TableButton from "./FunctionalButton";
import AddParticipantModal from "../modals/AddParticipantModal";
import SearchBar from "./SearchBar";
import TableHeader from "./TableElements/TableHeader";
import ParticipantRow from "./TableElements/ParticipantRow";
import { useState } from "react";
import { useParticipant } from "@/providers/ParticipantProvider";
import ImportParticipantModal from "../modals/ImportParticipantModal";
export default function ParticipantsTable() {
  const [showAddParticipantModal, setShowAddParticipantModal] =
    useState<boolean>(false);
  const [showImportParticipantsModal, setShowImportParticipantsModal] =
    useState<boolean>(false);
  const { participants } = useParticipant();

  return (
    <div className="relative overflow-x-auto md:mx-14 mx-4 sm:mx-8">
      <div className="flex justify-between mb-4">
        <SearchBar />
        <div className="flex">
          <TableButton
            color="blue"
            Icon={ArrowUpCircleIcon as any}
            text="Importar"
            onClick={() => setShowImportParticipantsModal(true)}
          />
          <TableButton
            color="green"
            Icon={PlusCircleIcon as any}
            text="Agregar"
            onClick={() => setShowAddParticipantModal(true)}
          />
        </div>
      </div>
      <AddParticipantModal
        showModal={showAddParticipantModal}
        setShowModal={setShowAddParticipantModal}
      />
      <ImportParticipantModal
        showModal={showImportParticipantsModal}
        setShowModal={setShowImportParticipantsModal}
      />

      <table className="w-full text-sm text-left text-gray-500 sm:rounded-lg shadow-md">
        <TableHeader columns={["Nombre", "Correo", ""]} />
        <tbody>
          {participants?.map((participant) => {
            return (
              <ParticipantRow participant={participant} key={participant.id} />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
