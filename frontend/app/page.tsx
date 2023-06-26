import RootLayout from "./layout";
import MainLayout from "@/components/MainLayout";
import HeroSection from "@/components/HeroSection";
import ParticipantsTable from "@/components/ParticipantsTable/ParticipantsTable";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <RootLayout>
      <Toaster />
      <MainLayout>
        <HeroSection />
        <ParticipantsTable />
      </MainLayout>
    </RootLayout>
  );
}
