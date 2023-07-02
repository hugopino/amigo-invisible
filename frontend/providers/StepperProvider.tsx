"use client";
import { ReactNode, createContext, useContext, useState } from "react";

export const StepperOptions = [
  "PARTICIPANTS",
  "MESSAGE",
  "CONFIRMATION",
] as const;

export type Step = (typeof StepperOptions)[number];

export interface StepperContextType {
  currentStep: Step;
  setCurrentStep: (step: Step) => void;
}

const StepperContext = createContext<StepperContextType | undefined>(undefined);

export function useStepper() {
  const context = useContext(StepperContext);
  if (!context) throw new Error("error");
  return context;
}

export function StepperProvider({ children }: { children: ReactNode }) {
  const [currentStep, setCurrentStep] = useState<Step>(StepperOptions[0]);
  const value: StepperContextType = {
    currentStep,
    setCurrentStep,
  };
  return (
    <StepperContext.Provider value={value}>{children}</StepperContext.Provider>
  );
}
