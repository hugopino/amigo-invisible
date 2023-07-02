import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { Step, useStepper } from "@/providers/StepperProvider";

export default function Stepper() {
  const { currentStep } = useStepper();

  const checkOrNumber = (step: Step, number: number) => {
    return currentStep === step ? (
      <CheckCircleIcon className="w-4 h-4 mr-2 sm:w-5 sm:h-5" />
    ) : (
      <span className="mr-2">{number}</span>
    );
  };

  const getStepClass = (step: Step) => {
    return currentStep === step ? "text-blue-600" : "text-gray-500";
  };

  return (
    <>
      <ol className="flex items-center mx-auto w-4/5 text-sm font-medium text-center sm:text-base mb-5">
        <li
          className={`flex md:w-full items-center ${getStepClass(
            "PARTICIPANTS"
          )} sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 `}
        >
          <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 ">
            {checkOrNumber("PARTICIPANTS", 1)}
            Participantes
          </span>
        </li>
        <li
          className={`flex md:w-full items-center ${getStepClass(
            "MESSAGE"
          )} after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10`}
        >
          <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200">
            {checkOrNumber("MESSAGE", 2)}
            Mensaje <span className="hidden sm:inline-flex sm:ml-2">email</span>
          </span>
        </li>
        <li className={`flex items-center ${getStepClass("CONFIRMATION")}`}>
          {checkOrNumber("CONFIRMATION", 3)}
          Confirmación
        </li>
      </ol>
    </>
  );
}
