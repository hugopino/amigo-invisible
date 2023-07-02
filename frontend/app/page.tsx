import RootLayout from "./layout";
import MainLayout from "@/components/MainLayout";
import HeroSection from "@/components/HeroSection";
import ParticipantsTable from "@/components/ParticipantsTable/ParticipantsTable";
import { Toaster } from "react-hot-toast";
import { ParticipantProvider } from "@/providers/ParticipantProvider";
import { StepperProvider } from "@/providers/StepperProvider";

export default function Home() {
  return (
    <>
      <RootLayout>
        <StepperProvider>
          <ParticipantProvider>
            <Toaster />
            <MainLayout>
              <HeroSection />
              <ParticipantsTable />
            </MainLayout>
          </ParticipantProvider>
        </StepperProvider>
      </RootLayout>
    </>
  );
}
