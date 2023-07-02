import { StepperContextType, StepperOptions } from "@/types/Stepper";
import { ReactNode, createContext, useContext, useState } from "react";

const StepperContext = createContext<StepperContextType | undefined>(undefined);

export const useStepper = () => {
  const context = useContext(StepperContext);
  if (!context) throw new Error("error");
  return context;
};

export function StepperProvider({ children }: { children: ReactNode }) {
  const [currentStep, setCurrentStep] = useState<StepperOptions>(
    StepperOptions.PARTICIPANTS
  );
  const value: StepperContextType = {
    currentStep,
    setCurrentStep,
  };
  return (
    <StepperContext.Provider value={value}>{children}</StepperContext.Provider>
  );
}
