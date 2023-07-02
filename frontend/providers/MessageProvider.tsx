"use client";
import { createContext, useState, useContext, ReactNode } from "react";

interface MessageContextType {
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
}

const MessageContext = createContext<MessageContextType | undefined>(undefined);

export function useMessage() {
  const context = useContext(MessageContext);
  if (!context)
    throw new Error("useMessage debe ser utilizado dentro de MessageProvider");
  return context;
}

export function MessageProvider({ children }: { children: ReactNode }) {
  const [message, setMessage] = useState<string>(
    "Hola {regalador}, \n\nTu amigo invisible es {receptor}. ¡Esperamos que le hagas un regalo muy especial! \n\n Saludos"
  );

  const value: MessageContextType = {
    message,
    setMessage,
  };

  return (
    <MessageContext.Provider value={value}>{children}</MessageContext.Provider>
  );
}
