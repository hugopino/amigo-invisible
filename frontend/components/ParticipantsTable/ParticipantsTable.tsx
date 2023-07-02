"use client";
import SearchBar from "./SearchBar";
import TableHeader from "./TableElements/TableHeader";
import ParticipantRow from "./TableElements/ParticipantRow";
import { useParticipant } from "@/providers/ParticipantProvider";
import ParticipantManagement from "./ParticipantManagement";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/solid";
export default function ParticipantsTable() {
  const { participants } = useParticipant();

  return (
    <div className="relative overflow-x-auto md:mx-14 mx-4 sm:mx-8">
      <div className="flex justify-center mb-4">
        {/* <SearchBar /> */}
        <div className="flex-col">
          <ParticipantManagement />
          <div className="flex justify-center gap-4 mt-2">
            <button className="bg-blue-500 hover:bg-blue-700 text-white  py-1 px-2 rounded">
              <ChevronDoubleLeftIcon className="h-5 w-5 inline-block mr-1" />
              {"Anterior"}
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white  py-1 px-2 rounded">
              {"Siguiente"}
              <ChevronDoubleRightIcon className="h-5 w-5 inline-block mr-1" />
            </button>
          </div>
        </div>
      </div>
      <div className="overflow-x-scroll overflow-y-auto h-[50vh]">
        <table className="w-full text-sm text-left text-gray-500 sm:rounded-lg shadow-md">
          <TableHeader columns={["Nombre", "Correo", ""]} />
          <tbody>
            {participants?.map((participant) => {
              return (
                <ParticipantRow
                  participant={participant}
                  key={participant.id}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
