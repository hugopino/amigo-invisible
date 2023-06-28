export interface ParticipantData {
  id: string;
  name: string;
  email: string;
}

export interface ParticipantDataContextType {
  participants: ParticipantData[];
  setParticipants: (participants: ParticipantData[]) => void;
}
