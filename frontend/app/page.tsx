import RootLayout from "./layout";
import MainLayout from "@/components/MainLayout";
import HeroSection from "@/components/HeroSection";
import { Toaster } from "react-hot-toast";
import { ParticipantProvider } from "@/providers/ParticipantProvider";
import { StepperProvider } from "@/providers/StepperProvider";
import RenderStepperLayout from "@/components/StepperLayout/RenderStepperLayout";
import { MessageProvider } from "@/providers/MessageProvider";

export default function Home() {
  return (
    <>
      <RootLayout>
        <ParticipantProvider>
          <StepperProvider>
            <MessageProvider>
              <Toaster />
              <MainLayout>
                <HeroSection />
                <RenderStepperLayout />
              </MainLayout>
            </MessageProvider>
          </StepperProvider>
        </ParticipantProvider>
      </RootLayout>
    </>
  );
}
