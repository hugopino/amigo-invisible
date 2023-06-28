"use client";

import { PlusCircleIcon } from "@heroicons/react/24/solid";
import TableButton from "./TableButton";
import AddParticipantModal from "../modals/AddParticipantModal";
import { useState } from "react";
import { toast } from "react-hot-toast";
export default function ParticipantsTable() {
  const [showAddParticipantModal, setShowAddParticipantModal] = useState(false);
  return (
    <div className="relative overflow-x-auto md:mx-14 mx-4 sm:mx-8">
      <div className="flex justify-end mb-4">
        <TableButton
          color="green"
          Icon={PlusCircleIcon as any}
          text="Agregar"
          onClick={() => setShowAddParticipantModal(true)}
        />
      </div>
      <AddParticipantModal
        showModal={showAddParticipantModal}
        setShowModal={setShowAddParticipantModal}
      />
      <table className="w-full text-sm text-left text-gray-500 sm:rounded-lg shadow-md">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">
              Nombre
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">
                Correo electrónico
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 h-3 ml-1"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 320 512"
                  >
                    <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                  </svg>
                </button>
              </div>
            </th>

            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Eliminar</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
            >
              Pablo
            </th>
            <td className="px-6 py-4">pablo@example.com</td>

            <td className="px-6 py-4 text-right">
              <button
                className="font-medium text-blue-600 hover:underline"
                onClick={() => toast.success("Participante eliminado")}
              >
                Eliminar
              </button>
            </td>
          </tr>
          <tr className="bg-white border-b">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
            >
              Juan
            </th>
            <td className="px-6 py-4">juan@example.com</td>

            <td className="px-6 py-4 text-right">
              <button className="font-medium text-blue-600 hover:underline">
                Eliminar
              </button>
            </td>
          </tr>
          <tr className="bg-white">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
            >
              Lucas
            </th>
            <td className="px-6 py-4">lucas@example.com</td>

            <td className="px-6 py-4 text-right">
              <button className="font-medium text-blue-600 hover:underline">
                Eliminar
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
