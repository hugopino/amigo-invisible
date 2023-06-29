import { useParticipant } from "@/providers/ParticipantProvider";
import { ParticipantData } from "@/types/Participant";
import { toast } from "react-hot-toast";
export default function ParticipantRow({
  participant,
}: {
  participant: ParticipantData;
}) {
  const { setParticipants } = useParticipant();
  const handleDeleteParticipant = () => {
    setParticipants((prevParticipants) => {
      return prevParticipants.filter(
        (prevParticipant) => prevParticipant.id !== participant.id
      );
    });
    toast.success("Participante eliminado");
  };
  return (
    <tr className="bg-white border-b">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
      >
        {participant.name}
      </th>
      <td className="px-6 py-4">{participant.email}</td>
      <td className="px-6 py-4 text-right">
        <button
          className="font-medium text-blue-600 hover:underline"
          onClick={handleDeleteParticipant}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
}
