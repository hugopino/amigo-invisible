import RootLayout from "./layout";
import MainLayout from "@/components/MainLayout";
import HeroSection from "@/components/HeroSection";
import ParticipantsTable from "@/components/ParticipantsTable/ParticipantsTable";

export default function Home() {
  return (
    <RootLayout>
      <MainLayout>
        <HeroSection />
        <ParticipantsTable />
      </MainLayout>
    </RootLayout>
  );
}
