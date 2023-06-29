import RootLayout from "./layout";
import MainLayout from "@/components/MainLayout";
import HeroSection from "@/components/HeroSection";
import ParticipantsTable from "@/components/ParticipantsTable/ParticipantsTable";
import { Toaster } from "react-hot-toast";
import { ParticipantProvider } from "@/providers/ParticipantProvider";

export default function Home() {
  return (
    <>
      <RootLayout>
        <ParticipantProvider>
          <Toaster />
          <MainLayout>
            <HeroSection />
            <ParticipantsTable />
          </MainLayout>
        </ParticipantProvider>
      </RootLayout>
    </>
  );
}
