import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <main className="min-h-screen w-full bg-white flex flex-col justify-between overflow-x-hidden select-none">
      {/* 404 Blue Grid Hero Section */}
      <div className="w-full bg-grid-pattern relative flex flex-col justify-between overflow-hidden pb-16 sm:pb-24 lg:pb-28">
        {/* Top Header */}
        <Header />

        {/* Centered 404 Content exactly matching Figma screenshots */}
        <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-12 flex flex-col items-center justify-center relative z-10 pt-10 sm:pt-16 lg:pt-20 pb-6">
          <div className="relative w-full max-w-5xl mx-auto flex flex-col items-center justify-center">
            {/* Giant Gradient 404 Numbers */}
            <div
              aria-hidden="true"
              className="font-bold text-[160px] xs:text-[220px] sm:text-[300px] md:text-[370px] lg:text-[420px] xl:text-[460px] leading-[0.8] tracking-tight select-none pointer-events-none bg-gradient-to-b from-[#D4FF00] via-[#9EDB00] to-[#508B00] bg-clip-text text-transparent opacity-95 drop-shadow-sm font-sans"
            >
              404
            </div>

            {/* Overlaid Headline positioned slightly further down near the bottom of 404 */}
            <div className="-mt-2 xs:-mt-4 sm:-mt-7 md:-mt-10 lg:-mt-12 xl:-mt-14 relative z-10 flex flex-col items-center text-center px-4 w-full">
              {/* Exactly 2 lines matching Figma */}
              <h1 className="text-white font-bold text-[26px] xs:text-[34px] sm:text-[48px] md:text-[56px] lg:text-[64px] xl:text-[70px] leading-[1.15] tracking-tight text-center drop-shadow-sm font-sans">
                <span className="block whitespace-nowrap">The page you are looking</span>
                <span className="block whitespace-nowrap">for doesn’t exist</span>
              </h1>

              {/* Subtitle matching Figma */}
              <p className="mt-5 sm:mt-6 text-[#D5E0FA] text-xs sm:text-sm md:text-[15px] text-center max-w-2xl mx-auto font-normal font-sans leading-relaxed px-4">
                Try to use a correct url or go back to homepage to start again
              </p>

              {/* Back to Home Lime Green Pill Button */}
              <div className="mt-6 sm:mt-8 flex justify-center">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center bg-[#D4FF00] hover:bg-[#bfee00] active:scale-95 text-[#0B0F19] font-medium text-xs sm:text-sm md:text-[15px] px-8 sm:px-9 py-2.5 sm:py-3 rounded-full transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md text-center"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Ambient subtle decorative flare */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#CCFF00]/10 rounded-full blur-[160px] pointer-events-none -z-0" />
      </div>

      {/* Footer matching Figma Full Artboard */}
      <Footer />
    </main>
  );
}
