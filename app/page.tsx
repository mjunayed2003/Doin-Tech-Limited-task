import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <main className="min-h-screen lg:h-screen w-full bg-grid-pattern flex flex-col justify-between overflow-x-hidden relative">
      <Header />
      <HeroSection />
    </main>
  );
}
