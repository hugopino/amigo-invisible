"use client";
import {
  ParticipantData,
  ParticipantDataContextType,
} from "@/types/Participant";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

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
  useEffect(() => {
    if (typeof window !== "undefined") {
      const participants = localStorage.getItem("participants");
      setParticipants(participants ? JSON.parse(participants) : []);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("participants", JSON.stringify(participants));
    }
  }, [participants]);
  return (
    <ParticipantContext.Provider value={value}>
      {children}
    </ParticipantContext.Provider>
  );
}
