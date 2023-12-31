"use client";
import TableHeader from "./TableElements/TableHeader";
import ParticipantRow from "./TableElements/ParticipantRow";
import { useParticipant } from "@/providers/ParticipantProvider";
import ParticipantManagement from "./ParticipantManagement";

export default function ParticipantsTable() {
  const { participants } = useParticipant();

  return (
    <div className="relative overflow-x-auto md:mx-14 mx-4 sm:mx-8">
      <div className="flex justify-center mb-4">
        <ParticipantManagement />
      </div>
      <div className="overflow-x-auto overflow-y-auto h-[50vh]">
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
