import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";
import React from "react";
import toast from "react-hot-toast";

export default function Confirmation() {
  const sendEmails = () => {
    // Aquí es donde implementarías la lógica de envío de correos
    // Cuando los correos se envíen, puedes mostrar una notificación
    toast.success("Los correos han sido enviados!");
  };

  return (
    <div className="md:mx-14 mx-4 sm:mx-8 mt-3">
      <div className="flex flex-col justify-center">
        <div className="mx-auto">
          <QuestionMarkCircleIcon className="h-32 w-32 text-gray-500 inline-block ml-2" />
        </div>
        <button
          className="mt-4 w-1/2 mx-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={sendEmails}
        >
          Confirmar y enviar correos
        </button>
      </div>
    </div>
  );
}
