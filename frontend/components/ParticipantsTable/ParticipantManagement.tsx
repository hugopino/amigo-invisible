import ImportParticipantModal from "../modals/ImportParticipantModal";
import {
  ArrowUpCircleIcon,
  PlusCircleIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import TableButton from "./FunctionalButton";
import { useState } from "react";
import AddParticipantModal from "../modals/AddParticipantModal";
import DeleteAllParticipantModal from "../modals/DeleteAllParticipantModal";

export default function ParticipantManagement() {
  const [showAddParticipantModal, setShowAddParticipantModal] =
    useState<boolean>(false);
  const [showImportParticipantsModal, setShowImportParticipantsModal] =
    useState<boolean>(false);
  const [showDeleteAllParticipantsModal, setShowDeleteAllParticipantsModal] =
    useState<boolean>(false);
  return (
    <>
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
      <TableButton
        color="red"
        Icon={TrashIcon as any}
        text="Borrar todos"
        onClick={() => setShowDeleteAllParticipantsModal(true)}
      />
      <AddParticipantModal
        showModal={showAddParticipantModal}
        setShowModal={setShowAddParticipantModal}
      />
      <ImportParticipantModal
        showModal={showImportParticipantsModal}
        setShowModal={setShowImportParticipantsModal}
      />
      <DeleteAllParticipantModal
        showModal={showDeleteAllParticipantsModal}
        setShowModal={setShowDeleteAllParticipantsModal}
      />
    </>
  );
}
