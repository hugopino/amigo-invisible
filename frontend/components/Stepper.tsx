import { CheckCircleIcon } from "@heroicons/react/24/solid";

export default function Stepper() {
  return (
    <>
      <ol className="flex items-center mx-auto w-4/5 text-sm font-medium text-center text-gray-500 sm:text-base mb-10">
        <li className="flex md:w-full items-center text-blue-600 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 ">
          <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 ">
            <CheckCircleIcon className="w-4 h-4 mr-2 sm:w-5 sm:h-5" />
            Participantes{" "}
          </span>
        </li>
        <li className="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10">
          <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200">
            <span className="mr-2">2</span>
            Mensaje <span className="hidden sm:inline-flex sm:ml-2">email</span>
          </span>
        </li>
        <li className="flex items-center">
          <span className="mr-2">3</span>
          Confirmación
        </li>
      </ol>
    </>
  );
}
