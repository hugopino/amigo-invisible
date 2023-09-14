import React, { useState, useEffect } from "react";
import LoadingSpinner from "@/components/common/LoadingSpinner";
import { useMessage } from "@/providers/MessageProvider";
import { useParticipant } from "@/providers/ParticipantProvider";
import {
  EnvelopeIcon,
  QuestionMarkCircleIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/solid";
import toast, { LoaderIcon } from "react-hot-toast";

export default function Confirmation() {
  const { participants } = useParticipant();
  const { message } = useMessage();

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const sendEmails = () => {
    setIsLoading(true);
    setIsSuccess(false);
    setIsError(false);

    const dataToSend = {
      participants: participants,
      message: message,
    };
    fetch("http://127.0.0.1:8000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    })
      .then((response) =>
        response.json().then((data) => ({
          data: data,
          status: response.status,
        }))
      )
      .then((res) => {
        setIsLoading(false);
        if (res.status === 200) {
          console.log(res.data);
          setIsSuccess(true);
        } else {
          console.error("Error:", res.data.detail);
          toast.error(res.data.detail);
          setIsError(true);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("Error al enviar los correos");
        setIsLoading(false);
        setIsError(true);
      });
  };
  console.log(participants);
  return (
    <div className="md:mx-14 mx-4 sm:mx-8 mt-3">
      <div className="flex flex-col justify-center">
        {!isLoading && !isSuccess && (
          <>
            <h2 className="text-xl font-semibold text-center mb-2">
              Participantes
            </h2>
            <ul className="list-disc mx-auto w-full max-w-xs overflow-y-auto h-auto max-h-64">
              {participants.map((participant) => {
                return (
                  <li>
                    {participant.name} ({participant.email})
                  </li>
                );
              })}
            </ul>
            <button
              className="mt-4 w-1/2 mx-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-4"
              onClick={sendEmails}
            >
              Confirmar y enviar correos
            </button>
          </>
        )}
        {isError && (
          <p className="mt-4 text-red-500 text-center">
            Error al enviar los correos, por favor intente de nuevo.
          </p>
        )}
        {isSuccess && (
          <p className="mt-4 text-green-500 text-center">
            Los correos han sido enviados con éxito.
          </p>
        )}
        <div className="mx-auto">
          {isLoading ? (
            <LoadingSpinner />
          ) : isSuccess ? (
            <CheckCircleIcon className="h-16 w-16 text-green-500 inline-block ml-2" />
          ) : isError ? (
            <ExclamationCircleIcon className="h-16 w-16 text-red-500 inline-block ml-2" />
          ) : (
            <EnvelopeIcon className="h-16 w-16 bg-gray-500 text-white rounded-full p-5 inline-block ml-2" />
          )}
        </div>
      </div>
    </div>
  );
}
