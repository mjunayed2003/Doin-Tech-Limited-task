import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <main className="min-h-screen w-full bg-white flex flex-col justify-between overflow-x-hidden select-none">
      {/* Blue Grid Hero Container */}
      <div className="w-full bg-grid-pattern relative flex flex-col justify-between overflow-hidden pb-16 sm:pb-24 lg:pb-28">
        {/* Top Header */}
        <Header />

        {/* Centered 404 Hero Section exactly matching Figma Image 2 */}
        <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-12 flex flex-col items-center justify-center relative z-10 pt-8 sm:pt-14 lg:pt-20 pb-4">
          <div className="relative w-full max-w-5xl mx-auto flex flex-col items-center justify-center">
            {/* Giant Gradient 404 Numbers (Geometric, elegant, matching Image 2) */}
            <div
              aria-hidden="true"
              className="font-bold text-[150px] xs:text-[200px] sm:text-[280px] md:text-[360px] lg:text-[430px] xl:text-[480px] leading-[0.82] tracking-tight select-none pointer-events-none bg-gradient-to-b from-[#D4FF00] via-[#9EDB00] to-[#5C9E00] bg-clip-text text-transparent opacity-95 drop-shadow-sm font-sans"
            >
              404
            </div>

            {/* Overlaid Headline & Action Content positioned across lower portion of 404 */}
            <div className="-mt-14 xs:-mt-18 sm:-mt-28 md:-mt-36 lg:-mt-44 xl:-mt-50 relative z-10 flex flex-col items-center text-center px-4 w-full">
              {/* Exactly 2 lines matching Image 2 */}
              <h1 className="text-white font-bold text-[24px] xs:text-[30px] sm:text-[44px] md:text-[54px] lg:text-[66px] xl:text-[72px] leading-[1.15] tracking-tight text-center drop-shadow-sm font-sans">
                <span className="block whitespace-nowrap">The page you are looking</span>
                <span className="block whitespace-nowrap">for doesn’t exist</span>
              </h1>

              {/* Subtitle */}
              <p className="mt-5 sm:mt-6 md:mt-7 text-white/80 text-xs sm:text-sm md:text-[15px] text-center max-w-xl mx-auto font-normal font-sans leading-relaxed">
                Try to use a correct url or go back to homepage to start again
              </p>

              {/* Back to Home Lime Green Pill Button */}
              <div className="mt-6 sm:mt-7 md:mt-8 flex justify-center">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center bg-[#CCFF00] hover:bg-[#b8eb00] active:scale-95 text-slate-950 font-semibold text-xs sm:text-sm md:text-[15px] px-8 sm:px-9 py-2.5 sm:py-3 rounded-full transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md text-center"
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

      {/* Footer matching Image 2 */}
      <Footer />
    </main>
  );
}
