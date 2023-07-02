"use client";
import { StepperOptions, useStepper } from "@/providers/StepperProvider";
import ParticipantsTable from "./ParticipantsTable/ParticipantsTable";
import MessageEditor from "./MessageEditor/MessageEditor";

const StepComponentMap = {
  [StepperOptions[0]]: <ParticipantsTable />,
  [StepperOptions[1]]: <MessageEditor />,
  [StepperOptions[2]]: <div>Confirmation</div>,
};

export default function RenderStepperLayout() {
  const { currentStep } = useStepper();
  return StepComponentMap[currentStep] || null;
}
