"use client";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/solid";
import Stepper from "./Stepper";
import { useStepper, StepperOptions } from "@/providers/StepperProvider";

export default function HeroSection() {
  const { currentStep, setCurrentStep } = useStepper();

  const handleNextStep = () => {
    const nextStepIndex = StepperOptions.indexOf(currentStep) + 1;
    if (nextStepIndex < StepperOptions.length) {
      setCurrentStep(StepperOptions[nextStepIndex]);
    }
  };

  const handlePreviousStep = () => {
    const prevStepIndex = StepperOptions.indexOf(currentStep) - 1;
    if (prevStepIndex >= 0) {
      setCurrentStep(StepperOptions[prevStepIndex]);
    }
  };

  return (
    <section>
      <h1 className="text-4xl my-8 font-bold text-center">Amigo invisible</h1>
      <Stepper />
      <div className="flex justify-center gap-4 mt-2">
        <button
          className={`bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded 
    ${
      currentStep === StepperOptions[0] ? "opacity-50 cursor-not-allowed" : ""
    }`}
          disabled={currentStep === StepperOptions[0]}
          onClick={handlePreviousStep}
        >
          <ChevronDoubleLeftIcon className="h-5 w-5 inline-block mr-1" />
          {"Anterior"}
        </button>
        <button
          className={`bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded 
    ${
      currentStep === StepperOptions[StepperOptions.length - 1]
        ? "opacity-50 cursor-not-allowed"
        : ""
    }`}
          disabled={currentStep === StepperOptions[StepperOptions.length - 1]}
          onClick={handleNextStep}
        >
          {"Siguiente"}
          <ChevronDoubleRightIcon className="h-5 w-5 inline-block mr-1" />
        </button>
      </div>
    </section>
  );
}
