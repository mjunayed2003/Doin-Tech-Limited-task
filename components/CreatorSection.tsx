"use client";

import Image from "next/image";

export default function CreatorSection() {
  return (
    <section className="w-full relative overflow-hidden bg-grid-pattern pt-20 sm:pt-24 lg:pt-28 pb-16 sm:pb-20 lg:pb-24 text-white select-none">
      {/* SVG filter for authentic 3D lime-green tint (#CCFF00) */}
      <svg width="0" height="0" className="absolute w-0 h-0 pointer-events-none">
        <filter id="lime-shape-filter" colorInterpolationFilters="sRGB">
          <feColorMatrix
            type="matrix"
            values="0.80  0  0  0  0
                    1.00  0  0  0  0
                    0.00  0  0  0  0
                    0     0  0  1  0"
          />
        </filter>
      </svg>

      {/* ========================================================= */}
      {/* 3D Decorative Floating Shapes (Figma 1:1 Placement)        */}
      {/* ========================================================= */}

      {/* 1. Top-Left Yellow/Lime 3D Coil (Flush against left edge) */}
      <div className="absolute -left-1 sm:left-0 top-0 sm:top-1 z-10 pointer-events-none animate-float-edge-y">
        <Image
          src="/shape-coil-left.png"
          alt="3D Decorative Coil"
          width={130}
          height={240}
          className="w-[85px] sm:w-[115px] md:w-[135px] lg:w-[155px] h-auto object-contain drop-shadow-2xl"
        />
      </div>

      {/* 2. Upper Mid-Left White Wavy Spring */}
      <div className="hidden sm:block absolute left-[12%] lg:left-[14%] top-[10%] lg:top-[12%] z-10 pointer-events-none animate-float-reverse">
        <Image
          src="/shape-spring-left.png"
          alt="3D White Spring"
          width={90}
          height={120}
          className="w-[55px] md:w-[70px] lg:w-[85px] h-auto object-contain drop-shadow-xl"
        />
      </div>

      {/* 3. Mid-Left White Cone (Flush against left border, pointing inwards) */}
      <div className="absolute left-0 top-[52%] sm:top-[50%] -translate-y-1/2 z-10 pointer-events-none animate-float-slow">
        <Image
          src="/shape-cone.png"
          alt="3D White Cone"
          width={95}
          height={115}
          className="w-[65px] sm:w-[85px] md:w-[105px] lg:w-[125px] h-auto object-contain drop-shadow-xl -rotate-12"
        />
      </div>

      {/* 4. Bottom-Left Large Lime 3D Torus Ring (Tilted, bottom cut by border) */}
      <div className="absolute left-[3%] sm:left-[5%] lg:left-[6%] -bottom-10 sm:-bottom-14 lg:-bottom-20 z-10 pointer-events-none animate-float-drift">
        <div className="relative w-[130px] sm:w-[180px] md:w-[220px] lg:w-[260px] h-auto drop-shadow-[0_16px_36px_rgba(0,0,0,0.4)] -rotate-12">
          <Image
            src="/shape-torus.png"
            alt="3D Lime Torus"
            width={160}
            height={135}
            className="w-full h-auto object-contain"
            style={{ filter: "url(#lime-shape-filter)" }}
          />
        </div>
      </div>

      {/* 5. Upper Mid-Right Lime 3D Cone / Pyramid */}
      <div className="hidden sm:block absolute right-[15%] lg:right-[17%] top-[10%] lg:top-[12%] z-10 pointer-events-none animate-float-slow">
        <div className="relative w-[55px] md:w-[75px] lg:w-[90px] h-auto drop-shadow-[0_10px_24px_rgba(0,0,0,0.3)]">
          <Image
            src="/shape-cone.png"
            alt="3D Lime Cone"
            width={95}
            height={115}
            className="w-full h-auto object-contain"
            style={{ filter: "url(#lime-shape-filter)" }}
          />
        </div>
      </div>

      {/* 6. Top-Right White 3D Cylinder (Flush against right edge) */}
      <div className="absolute right-0 top-0 sm:top-1 z-10 pointer-events-none animate-float-edge-y">
        <Image
          src="/shape-cylinder.png"
          alt="3D White Cylinder"
          width={125}
          height={230}
          className="w-[85px] sm:w-[115px] md:w-[135px] lg:w-[160px] h-auto object-contain drop-shadow-2xl"
        />
      </div>

      {/* 7. Bottom-Right Prominent Lime 3D Spring (Large vertical spring) */}
      <div className="absolute right-0 sm:right-3 lg:right-6 -bottom-8 sm:-bottom-12 lg:-bottom-16 z-10 pointer-events-none animate-float-reverse">
        <div className="relative w-[100px] sm:w-[140px] md:w-[175px] lg:w-[210px] h-auto drop-shadow-[0_16px_36px_rgba(0,0,0,0.4)]">
          <Image
            src="/shape-spring-left.png"
            alt="3D Lime Spring"
            width={90}
            height={120}
            className="w-full h-full object-contain"
            style={{ filter: "url(#lime-shape-filter)" }}
          />
        </div>
      </div>

      {/* ========================================================= */}
      {/* Central Content (Heading, Subtitle, CTA Button)           */}
      {/* ========================================================= */}
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 text-center relative z-20 flex flex-col items-center justify-center">
        {/* Main Heading */}
        <h2 className="text-white font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[44px] leading-[120%] tracking-[-0.01em] max-w-[820px] mx-auto text-center">
          Unlock Your Potential as a <br className="hidden sm:inline" />
          Creator with ByteSpace
        </h2>

        {/* Subtitle - Exact 3-line format matching Figma inspect */}
        <p className="mt-4 sm:mt-5 text-white/85 text-xs sm:text-sm md:text-[15px] font-['Satoshi',sans-serif] leading-[160%] max-w-[890px] mx-auto text-center px-2 sm:px-4 font-normal">
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
        </p>

        {/* CTA Button centered */}
        <div className="mt-7 sm:mt-8">
          <button
            type="button"
            className="bg-[#CCFF00] hover:bg-[#b8eb00] hover:scale-105 active:scale-95 text-slate-950 font-semibold text-sm sm:text-base px-8 sm:px-9 py-3 sm:py-3.5 rounded-full transition-all duration-200 shadow-[0_8px_25px_rgba(0,0,0,0.18)] cursor-pointer"
          >
            Join as Creator
          </button>
        </div>
      </div>
    </section>
  );
}
