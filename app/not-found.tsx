import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <main className="min-h-screen w-full bg-white flex flex-col justify-between">
      {/* Top 404 Hero Container with Blue Grid Pattern */}
      <div className="w-full bg-grid-pattern relative min-h-[70vh] flex flex-col justify-between overflow-hidden pb-16 sm:pb-24">
        <Header />

        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 text-center my-auto py-12 relative z-10">
          {/* Giant 404 text in Lime Green */}
          <div className="text-[#CCFF00] font-black text-8xl sm:text-9xl md:text-[180px] lg:text-[220px] leading-none tracking-tighter drop-shadow-[0_10px_35px_rgba(0,0,0,0.3)] select-none">
            404
          </div>

          <h1 className="mt-4 text-white font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight">
            The page you are looking for doesn&apos;t exist!
          </h1>

          <p className="mt-4 text-white/80 text-sm sm:text-base md:text-lg max-w-xl mx-auto font-['Satoshi',sans-serif]">
            The link you followed may be broken or the page might have been removed.
            Explore our hundreds of world-class courses instead.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="bg-[#CCFF00] hover:bg-[#b8eb00] text-slate-950 font-bold px-8 py-3.5 rounded-full text-sm sm:text-base transition-all shadow-[0_8px_25px_rgba(0,0,0,0.18)] hover:scale-105 active:scale-95"
            >
              Back to Home
            </Link>

            <Link
              href="/courses"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold px-8 py-3.5 rounded-full text-sm sm:text-base transition-all hover:scale-105 active:scale-95"
            >
              Explore Courses
            </Link>
          </div>
        </div>

        {/* Ambient decorative glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#CCFF00]/10 rounded-full blur-[140px] pointer-events-none -z-0" />
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
