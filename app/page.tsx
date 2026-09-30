import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PartnersSection from "@/components/PartnersSection";
import CoursesSection from "@/components/CoursesSection";
import CategoriesSection from "@/components/CategoriesSection";
import GrowthSection from "@/components/GrowthSection";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-white flex flex-col overflow-x-hidden relative">
      {/* 1. Hero Section Container */}
      <div className="w-full bg-grid-pattern relative min-h-screen lg:h-screen flex flex-col justify-between overflow-hidden">
        <Header />
        <HeroSection />
      </div>

      {/* 2. Partner Logos Banner */}
      <PartnersSection />

      {/* 3. Discover Your Passion / Courses Section */}
      <CoursesSection />

      {/* 4. Explore Diverse Learning Paths / Categories Section */}
      <CategoriesSection />

      {/* 5. Professional Growth & Course Management Dual Section */}
      <GrowthSection />
    </main>
  );
}


