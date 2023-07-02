import React, { useState } from "react";
import CodeVar from "./CodeVar";

export default function MessageEditor() {
  const [message, setMessage] = useState(
    "Hola {regalador}, \n\nTu amigo invisible es {receptor}. ¡Esperamos que le hagas un regalo muy especial! \n\n Saludos"
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  return (
    <div className="md:mx-14 mx-4 sm:mx-8 mt-3">
      <p className="text-base mb-2">
        Puedes usar las siguientes variables en tu mensaje:
      </p>

      <div className="font-bold mb-4 text-sm flex gap-2">
        <CodeVar description="Nombre de quien hace el regalo">{`{regalador}`}</CodeVar>
        <CodeVar description="Nombre de quien recibe el regalo">{`{receptor}`}</CodeVar>
        <CodeVar description="Email de quien hace el regalo">{`{emailRegalador}`}</CodeVar>
        <CodeVar description="Email de quien recibe el regalo">{`{emailReceptor}`}</CodeVar>
      </div>

      <textarea
        value={message}
        onChange={handleInputChange}
        className="w-full p-3 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
        placeholder="Escribe aquí el mensaje..."
        rows={10}
      />
    </div>
  );
}
