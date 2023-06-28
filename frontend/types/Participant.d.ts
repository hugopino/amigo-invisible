export interface ParticipantData {
  name: string;
  email: string;
}

export interface ParticipantDataContextType {
  participants: ParticipantData[];
  setParticipants: (participants: ParticipantData[]) => void;
}
