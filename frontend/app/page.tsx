import RootLayout from "./layout";
import MainLayout from "@/components/MainLayout";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <RootLayout>
      <MainLayout>
        <HeroSection />
      </MainLayout>
    </RootLayout>
  );
}
