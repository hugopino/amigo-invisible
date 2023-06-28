import {
  ParticipantData,
  ParticipantDataContextType,
} from "@/types/Participant";
import { ReactNode, createContext, useContext, useState } from "react";

const ParticipantContext = createContext<
  ParticipantDataContextType | undefined
>(undefined);

export function useParticipant() {
  const context = useContext(ParticipantContext);
  if (!context)
    throw new Error("useParticipant must be used within a ParticipantProvider");
  return context;
}

export function ParticipantProvider({ children }: { children: ReactNode }) {
  const [participants, setParticipants] = useState<ParticipantData[]>([]);

  const value: ParticipantDataContextType = {
    participants,
    setParticipants,
  };
  return (
    <ParticipantContext.Provider value={value}>
      {children}
    </ParticipantContext.Provider>
  );
}
