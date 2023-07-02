export enum StepperOptions {
  PARTICIPANTS,
  MESSAGE,
  CONFIRMATION,
}

export interface StepperContextType {
  currentStep: StepperOptions;
  setCurrentStep: (step: StepperOptions) => void;
}
