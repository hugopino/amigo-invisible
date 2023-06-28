export interface ParticipantData {
  id: string;
  name: string;
  email: string;
}

export interface ParticipantDataContextType {
  participants: ParticipantData[];
  setParticipants: React.Dispatch<React.SetStateAction<ParticipantData[]>>;
}
