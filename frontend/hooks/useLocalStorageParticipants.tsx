import { useState, useEffect } from "react";
import { ParticipantData } from "@/types/Participant";

export function useLocalStorageParticipants(): [
  ParticipantData[],
  React.Dispatch<React.SetStateAction<ParticipantData[]>>
] {
  const [participants, setParticipants] = useState<ParticipantData[]>([]);

  useEffect(() => {
    const storedParticipants = localStorage.getItem("participants");
    if (storedParticipants) {
      setParticipants(JSON.parse(storedParticipants));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("participants", JSON.stringify(participants));
  }, [participants]);

  return [participants, setParticipants];
}
