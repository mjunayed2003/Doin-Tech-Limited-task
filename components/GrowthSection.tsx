"use client";

import Image from "next/image";

export default function GrowthSection() {
  const studentAvatars = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=60&auto=format&fit=crop&q=80",
  ];

  return (
    <section
      className="w-full relative overflow-hidden border-t border-slate-100/80 flex justify-center"
      style={{
        background: `
          radial-gradient(circle 750px at 45% 6%, rgba(204, 255, 0, 0.35) 0%, rgba(204, 255, 0, 0.08) 45%, transparent 75%),
          radial-gradient(circle 550px at 4% 10%, rgba(204, 255, 0, 0.20) 0%, transparent 65%),
          radial-gradient(circle 550px at 2% 46%, rgba(59, 130, 246, 0.18) 0%, transparent 65%),
          radial-gradient(circle 550px at 96% 18%, rgba(59, 130, 246, 0.16) 0%, transparent 65%),
          radial-gradient(circle 650px at 4% 92%, rgba(204, 255, 0, 0.48) 0%, rgba(204, 255, 0, 0.14) 45%, transparent 70%),
          radial-gradient(circle 620px at 94% 88%, rgba(59, 130, 246, 0.22) 0%, transparent 70%),
          #FFFFFF
        `,
      }}
    >
      {/* SVG filter for authentic 3D lime-green tint (#CCFF00) */}
      <svg width="0" height="0" className="absolute w-0 h-0 pointer-events-none">
        <filter id="lime-spring-filter" colorInterpolationFilters="sRGB">
          <feColorMatrix
            type="matrix"
            values="0.80  0  0  0  0
                    1.00  0  0  0  0
                    0.00  0  0  0  0
                    0     0  0  1  0"
          />
        </filter>
      </svg>

      {/* Main 1440px Canvas Container */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-16 xl:px-20 py-14 sm:py-24 lg:py-28 flex flex-col justify-center gap-16 sm:gap-36 lg:gap-40 relative z-10">
        {/* ========================================================= */}
        {/* ROW 1: Your Path to Professional Growth Starts Here!       */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-8 items-center relative">
          {/* Row 1 specific local ambient glow */}
          <div className="absolute -top-16 left-1/3 w-[450px] h-[450px] bg-[#CCFF00]/25 rounded-full blur-[110px] pointer-events-none -z-0" />
          <div className="absolute top-1/2 -left-16 w-[340px] h-[340px] bg-[#3B82F6]/14 rounded-full blur-[90px] pointer-events-none -z-0" />

          {/* Left Content Column (5 Cols) */}
          <div className="lg:col-span-5 space-y-5 sm:space-y-7 relative z-10">
            <h2 className="text-[#040819] font-bold text-2xl xs:text-3xl sm:text-4xl lg:text-[46px] leading-[115%] tracking-[-0.02em]">
              Your Path to Professional <br className="hidden sm:inline" />
              Growth Starts Here!
            </h2>

            <div className="space-y-3 text-[#82868E] text-xs sm:text-base md:text-[17px] leading-[165%] font-['Satoshi',sans-serif] max-w-[500px]">
              <p>
                Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey.
              </p>
              <p>
                Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
              </p>
            </div>

            {/* 3 Stats Counters on mobile grid */}
            <div className="pt-3 sm:pt-6 grid grid-cols-3 gap-3 sm:flex sm:items-center sm:gap-14">
              <div>
                <div className="text-2xl sm:text-4xl font-bold text-[#0047FF] tracking-tight">
                  12K
                </div>
                <div className="text-[11px] sm:text-sm text-[#82868E] font-medium mt-0.5 sm:mt-1">
                  Students
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-4xl font-bold text-[#0047FF] tracking-tight">
                  70+
                </div>
                <div className="text-[11px] sm:text-sm text-[#82868E] font-medium mt-0.5 sm:mt-1">
                  Courses
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-4xl font-bold text-[#0047FF] tracking-tight">
                  16
                </div>
                <div className="text-[11px] sm:text-sm text-[#82868E] font-medium mt-0.5 sm:mt-1">
                  Creators
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual Column (7 Cols) - Large Scale Composition */}
          <div className="lg:col-span-7 flex items-center justify-center relative select-none overflow-hidden sm:overflow-visible">
            <div className="relative w-full max-w-[620px] xl:max-w-[660px] min-h-[380px] xs:min-h-[440px] sm:min-h-[580px] lg:min-h-[640px] flex items-center justify-center">
              {/* 1. Behind the man: Full-sized Course Card (Top Left) */}
              <div className="absolute left-0 sm:left-2 lg:left-4 top-0 sm:top-2 z-10 bg-white rounded-[20px] sm:rounded-[26px] p-2.5 sm:p-4 shadow-[0_16px_40px_rgba(0,0,0,0.06)] border border-[#E9ECEF] w-[190px] xs:w-[230px] sm:w-[310px] md:w-[330px]">
                <div className="relative w-full aspect-[236/135] rounded-[14px] sm:rounded-[16px] overflow-hidden bg-slate-100">
                  <Image
                    src="/images/course-1.png"
                    alt="Learn Figma"
                    fill
                    sizes="(max-width: 640px) 230px, 330px"
                    className="object-cover"
                  />
                </div>
                <div className="mt-2 sm:mt-3">
                  <h4 className="text-[#040819] font-bold text-xs sm:text-base line-clamp-1">
                    Learn Figma fro...
                  </h4>
                  <p className="text-[10px] sm:text-xs text-[#82868E] mt-0.5">
                    by <span className="text-[#0047FF] font-medium">purepearl studio</span>
                  </p>
                  <div className="mt-2 sm:mt-3 flex items-center justify-between">
                    <span className="bg-[#F4F5F7] text-slate-600 text-[10px] sm:text-xs font-semibold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full">
                      Beginner
                    </span>
                    <span className="text-[#0047FF] font-bold text-xs sm:text-base">
                      $25<span className="text-[10px] sm:text-xs text-[#82868E] font-normal">/lifetime</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* 2. Behind the man: 3D Lime Spring (Top Right) */}
              <div className="absolute right-3 sm:right-12 lg:right-16 top-2 sm:top-4 z-10 pointer-events-none">
                <div className="relative w-14 h-20 sm:w-24 sm:h-34 drop-shadow-[0_10px_20px_rgba(204,255,0,0.55)]">
                  <Image
                    src="/shape-spring-left.png"
                    alt="3D Lime Spring"
                    width={90}
                    height={120}
                    className="w-full h-full object-contain"
                    style={{ filter: "url(#lime-spring-filter)" }}
                  />
                </div>
              </div>

              {/* 3. Central Prominent Figure: The Man (man.png) */}
              <div className="relative z-20 w-[230px] xs:w-[280px] sm:w-[420px] md:w-[500px] lg:w-[560px] xl:w-[600px] ml-4 sm:ml-12 lg:ml-20">
                <Image
                  src="/images/man.png"
                  alt="Student with laptop and headphones"
                  width={600}
                  height={720}
                  priority
                  className="w-full h-auto object-contain drop-shadow-[0_24px_50px_rgba(0,0,0,0.18)]"
                />
              </div>

              {/* 4. In front / overlapping: Learning Progress (Mid-Right) */}
              <div className="absolute right-0 sm:-right-4 lg:-right-6 top-28 xs:top-36 sm:top-44 z-30 bg-white rounded-[18px] sm:rounded-[22px] p-3 sm:p-5 min-w-[130px] sm:min-w-[205px] shadow-[0_16px_40px_rgba(0,0,0,0.10)] border border-[#E9ECEF] text-left scale-[0.76] xs:scale-[0.84] sm:scale-100 origin-top-right">
                <span className="text-[10px] sm:text-xs font-semibold text-[#82868E] block leading-tight">
                  Learning Progress
                </span>
                <span className="text-2xl sm:text-4xl font-extrabold text-[#040819] block mt-0.5 sm:mt-1 tracking-tight">
                  55%
                </span>
                <div className="mt-2 sm:mt-3 h-1.5 sm:h-2 w-full bg-[#F0F2F5] rounded-full overflow-hidden">
                  <div className="h-full w-[55%] bg-[#CCFF00] rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* ROW 2: Create & Manage Courses Easily.                     */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-8 items-center relative">
          {/* Row 2 specific local ambient glows matching screenshot */}
          <div className="absolute -bottom-16 -left-16 w-[420px] h-[420px] bg-[#CCFF00]/40 rounded-full blur-[100px] pointer-events-none -z-0" />
          <div className="absolute -top-10 -left-12 w-[340px] h-[340px] bg-[#3B82F6]/18 rounded-full blur-[90px] pointer-events-none -z-0" />
          <div className="absolute -bottom-10 -right-12 w-[400px] h-[400px] bg-[#3B82F6]/18 rounded-full blur-[95px] pointer-events-none -z-0" />

          {/* Left Visual Column (7 Cols) */}
          <div className="lg:col-span-7 flex items-center justify-center relative select-none order-2 lg:order-1 overflow-hidden sm:overflow-visible">
            <div className="relative w-full max-w-[620px] xl:max-w-[660px] min-h-[380px] xs:min-h-[440px] sm:min-h-[580px] lg:min-h-[640px] flex items-center justify-center">
              {/* 1. Behind the woman: Decorative 3D Lime Spring (Mid-Right) */}
              <div className="absolute right-3 sm:right-12 lg:right-16 top-16 sm:top-30 z-10 pointer-events-none">
                <div className="relative w-14 h-20 sm:w-24 sm:h-34 drop-shadow-[0_10px_20px_rgba(204,255,0,0.55)]">
                  <Image
                    src="/shape-spring-left.png"
                    alt="3D Lime Spring"
                    width={90}
                    height={120}
                    className="w-full h-full object-contain"
                    style={{ filter: "url(#lime-spring-filter)" }}
                  />
                </div>
              </div>

              {/* 2. Floating Card 1: Total Revenue (Top Left) */}
              <div className="absolute left-0 sm:left-2 lg:left-4 top-2 xs:top-4 sm:top-12 z-15 bg-[#0047FF] rounded-[18px] sm:rounded-[22px] p-3 sm:p-4.5 min-w-[130px] sm:min-w-[195px] text-white shadow-[0_16px_36px_rgba(0,71,255,0.36)] scale-[0.76] xs:scale-[0.84] sm:scale-100 origin-top-left">
                <div className="text-[11px] sm:text-[13px] font-semibold text-white">
                  Total Revenue
                </div>
                <div className="text-[9px] sm:text-[11px] text-white/75 mt-0.5">
                  July 1-28
                </div>
                <div className="text-xl sm:text-[26px] font-bold mt-0.5 sm:mt-1 text-white tracking-tight">
                  $120.29
                </div>
                <div className="mt-2 sm:mt-2.5 h-1.5 w-full bg-white/20 rounded-full overflow-hidden flex">
                  <div className="h-full w-[72%] bg-[#CCFF00] rounded-full" />
                </div>
              </div>

              {/* 3. Floating Card 2: Year to Date (Mid Left) */}
              <div className="absolute left-0 sm:left-6 lg:left-8 top-28 xs:top-36 sm:top-52 z-15 bg-[#0047FF] rounded-[18px] sm:rounded-[22px] p-3 sm:p-4.5 min-w-[130px] sm:min-w-[195px] text-white shadow-[0_16px_36px_rgba(0,71,255,0.36)] scale-[0.76] xs:scale-[0.84] sm:scale-100 origin-top-left">
                <div className="text-[11px] sm:text-[13px] font-semibold text-white">
                  Year to Date
                </div>
                <div className="text-[9px] sm:text-[11px] text-white/75 mt-0.5">
                  2023
                </div>
                <div className="text-xl sm:text-[26px] font-bold mt-0.5 sm:mt-1 text-white tracking-tight">
                  $1,200.38
                </div>
                <div className="mt-1.5 sm:mt-2">
                  <span className="bg-[#CCFF00] text-slate-950 font-bold text-[10px] sm:text-[11px] px-2 sm:px-2.5 py-0.5 rounded-full inline-block shadow-xs">
                    +12%
                  </span>
                </div>
              </div>

              {/* 4. Central Prominent Figure: The Woman (man2.png) */}
              <div className="relative z-20 w-[230px] xs:w-[270px] sm:w-[400px] md:w-[480px] lg:w-[530px] xl:w-[570px] -ml-2 sm:-ml-6 lg:-ml-8">
                <Image
                  src="/images/man2.png"
                  alt="Instructor with tablet and headphones"
                  width={600}
                  height={720}
                  priority
                  className="w-full h-auto object-contain drop-shadow-[0_24px_50px_rgba(0,0,0,0.18)]"
                />
              </div>

              {/* 5. In front: Happy Students (Bottom Right, overlapping tablet) */}
              <div className="absolute right-0 sm:right-2 lg:right-4 bottom-2 sm:bottom-8 z-30 bg-white rounded-[18px] sm:rounded-[22px] p-2.5 sm:p-4 min-w-[150px] sm:min-w-[230px] shadow-[0_16px_40px_rgba(0,0,0,0.10)] border border-[#E9ECEF] text-left scale-[0.76] xs:scale-[0.84] sm:scale-100 origin-bottom-right">
                <h4 className="text-[#040819] font-bold text-[11px] sm:text-sm leading-tight">
                  Happy Students
                </h4>
                <div className="flex items-center gap-1 mt-0.5 text-[10px] sm:text-[11px] font-bold text-slate-700">
                  <span>4.5 (240)</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="#FBBF24"
                    className="w-3 sm:w-3.5 h-3 sm:h-3.5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>

                <div className="flex items-center mt-1.5 sm:mt-2.5">
                  {studentAvatars.map((src, idx) => (
                    <div
                      key={idx}
                      className={`relative w-4.5 h-4.5 sm:w-6 sm:h-6 rounded-full overflow-hidden ring-2 ring-white ${
                        idx > 0 ? "-ml-1 sm:-ml-1.5" : ""
                      }`}
                    >
                      <Image
                        src={src}
                        alt="Student avatar"
                        fill
                        sizes="24px"
                        className="object-cover"
                      />
                    </div>
                  ))}
                  <div className="w-4.5 h-4.5 sm:w-6 sm:h-6 rounded-full bg-[#CCFF00] text-slate-950 font-bold text-[8px] sm:text-[10px] flex items-center justify-center -ml-1 sm:-ml-1.5 ring-2 ring-white">
                    2K+
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content Column (5 Cols) */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-7 order-1 lg:order-2 relative z-10">
            <h2 className="text-[#040819] font-bold text-3xl sm:text-4xl lg:text-[46px] leading-[115%] tracking-[-0.02em]">
              Create & Manage <br className="hidden sm:inline" />
              Courses Easily.
            </h2>

            <p className="text-[#82868E] text-sm sm:text-base md:text-[17px] leading-[165%] font-['Satoshi',sans-serif] max-w-[500px]">
              <span className="text-[#040819] font-semibold">ByteSpace</span> supports individuals or entities in the creation, publication, and administration of educational courses.
            </p>

            {/* Checklist items */}
            <div className="pt-2 sm:pt-4 space-y-3.5 sm:space-y-4">
              {[
                "Share Your Expertise",
                "Monetize Your Passion",
                "Flexibility and Autonomy",
                "Build a Community",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3.5">
                  <div className="w-5.5 h-5.5 rounded-full bg-[#0047FF] flex items-center justify-center text-white shrink-0 shadow-sm">
                    <svg
                      className="w-3.5 h-3.5 stroke-[3]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-[#040819] font-semibold text-base sm:text-[17px]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
