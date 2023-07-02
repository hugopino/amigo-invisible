import RootLayout from "./layout";
import MainLayout from "@/components/MainLayout";
import HeroSection from "@/components/HeroSection";
import { Toaster } from "react-hot-toast";
import { ParticipantProvider } from "@/providers/ParticipantProvider";
import { StepperProvider } from "@/providers/StepperProvider";
import RenderStepperLayout from "@/components/modals/StepperLayout/RenderStepperLayout";

export default function Home() {
  return (
    <>
      <RootLayout>
        <ParticipantProvider>
          <StepperProvider>
            <Toaster />
            <MainLayout>
              <HeroSection />
              <RenderStepperLayout />
            </MainLayout>
          </StepperProvider>
        </ParticipantProvider>
      </RootLayout>
    </>
  );
}
