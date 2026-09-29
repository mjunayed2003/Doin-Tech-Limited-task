"use client";

import { useState } from "react";
import Image from "next/image";

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");

  const studentAvatars = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&auto=format&fit=crop&q=80",
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="relative w-full flex-1 flex flex-col justify-between overflow-hidden">
      {/* 3D Floating Shapes spanning the full width edges */}
      {/* Top-Left Yellow Coil (Flush against left edge with zero gap) */}
      <div className="hidden lg:block absolute left-0 top-1 xl:top-3 z-20 pointer-events-none animate-float-edge-y">
        <Image
          src="/shape-coil-left.png"
          alt="Decorative 3D Coil"
          width={130}
          height={240}
          priority
          className="w-[85px] xl:w-[120px] 2xl:w-[135px] h-auto object-contain drop-shadow-2xl"
        />
      </div>

      {/* Mid-Left White Wavy Spring */}
      <div className="hidden lg:block absolute left-14 xl:left-24 2xl:left-32 top-48 xl:top-52 z-20 pointer-events-none animate-float-reverse">
        <Image
          src="/shape-spring-left.png"
          alt="Decorative 3D Spring"
          width={90}
          height={120}
          priority
          className="w-[55px] xl:w-[80px] h-auto object-contain drop-shadow-xl"
        />
      </div>

      {/* Bottom-Left White Torus / Donut */}
      <div className="hidden lg:block absolute left-2 xl:left-6 2xl:left-12 bottom-4 xl:bottom-8 z-20 pointer-events-none animate-float-drift">
        <Image
          src="/shape-torus.png"
          alt="Decorative 3D Torus"
          width={160}
          height={135}
          priority
          className="w-[100px] xl:w-[145px] 2xl:w-[160px] h-auto object-contain drop-shadow-2xl"
        />
      </div>

      {/* Top-Right Lime Cylinder (Flush against right edge with zero gap) */}
      <div className="hidden lg:block absolute right-0 top-1 xl:top-2 z-20 pointer-events-none animate-float-edge-y">
        <Image
          src="/shape-cylinder.png"
          alt="Decorative 3D Cylinder"
          width={125}
          height={230}
          priority
          className="w-[85px] xl:w-[115px] 2xl:w-[130px] h-auto object-contain drop-shadow-2xl"
        />
      </div>

      {/* Mid-Right White Cone */}
      <div className="hidden lg:block absolute right-16 xl:right-24 2xl:right-32 top-50 xl:top-56 z-20 pointer-events-none animate-float-slow">
        <Image
          src="/shape-cone.png"
          alt="Decorative 3D Cone"
          width={95}
          height={115}
          priority
          className="w-[60px] xl:w-[90px] h-auto object-contain drop-shadow-xl"
        />
      </div>

      {/* Bottom-Right White Spiral */}
      <div className="hidden lg:block absolute right-2 xl:right-8 2xl:right-14 bottom-6 xl:bottom-10 z-20 pointer-events-none animate-float-reverse">
        <Image
          src="/shape-spiral.png"
          alt="Decorative 3D Spiral"
          width={140}
          height={140}
          priority
          className="w-[90px] xl:w-[130px] 2xl:w-[145px] h-auto object-contain drop-shadow-2xl"
        />
      </div>

      {/* Top Section: Full Width Headline & Search Area */}
      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-30 text-center pt-2 sm:pt-4 shrink-0">
        {/* Main Heading matching Figma inspect properties */}
        <h1 className="text-white font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[72px] leading-[120%] tracking-[-0.01em] max-w-[935px] mx-auto text-center">
          Get Access to Hundreds Courses Available
        </h1>

        {/* Subtitle */}
        <p className="mt-2.5 sm:mt-3 text-white/80 text-xs sm:text-sm md:text-base max-w-[620px] mx-auto font-normal leading-relaxed px-2">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>

        {/* Search Bar matching screenshot */}
        <div className="mt-4 sm:mt-6 flex items-center justify-center">
          <form
            onSubmit={handleSearch}
            className="flex items-center justify-center gap-2.5 sm:gap-3 w-full max-w-[480px]"
          >
            {/* White Pill Input */}
            <div className="flex items-center bg-white rounded-full px-4 sm:px-5 py-2 sm:py-2.5 w-full shadow-[0_8px_25px_rgba(0,0,0,0.15)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-gray-400 shrink-0 mr-2.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"
                />
              </svg>

              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Course, topic, creator"
                className="w-full bg-transparent text-gray-800 placeholder-gray-400 text-xs sm:text-sm md:text-base font-normal focus:outline-none"
              />
            </div>

            {/* Lime Pill Search Button */}
            <button
              type="submit"
              className="bg-[#CCFF00] hover:bg-[#b8eb00] active:scale-95 text-slate-950 font-semibold text-xs sm:text-sm md:text-base px-5 sm:px-7 py-2 sm:py-2.5 rounded-full transition-all duration-200 shrink-0 shadow-[0_8px_25px_rgba(0,0,0,0.15)] cursor-pointer"
            >
              Search
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Visual: Full Width Arc & Anchored Student / Cards */}
      <div className="relative w-full flex-1 flex items-end justify-center min-h-[300px] sm:min-h-[380px] lg:min-h-0 select-none overflow-visible">
        {/* Full-Width Lime Green Arc in Background */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1480px] xl:max-w-[1650px] 2xl:max-w-[1800px] pointer-events-none z-0 px-2 sm:px-4 flex justify-center">
          <Image
            src="/Ellipse 7 cercle.png"
            alt="Lime Green Arc"
            width={1149}
            height={442}
            priority
            className="w-full max-h-[380px] sm:max-h-[440px] md:max-h-[480px] object-contain object-bottom"
          />
        </div>

        {/* Centered Student & Floating Cards Container */}
        <div className="relative z-10 flex items-end justify-center w-full max-w-[740px] lg:max-w-[820px] shrink-0 bottom-0">
          {/* Student with Laptop (man.png) */}
          <div className="w-[280px] sm:w-[370px] md:w-[430px] lg:w-[470px] xl:w-[500px] shrink-0 bottom-0 relative z-10">
            <Image
              src="/man.png"
              alt="Student with laptop and headphones"
              width={722}
              height={515}
              priority
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Floating Card 1: UI/UX Design (Top-Left of student) */}
          <div className="absolute z-20 left-1 sm:left-4 md:left-6 lg:left-4 xl:left-6 top-[10%] sm:top-[12%] md:top-[14%] bg-white rounded-2xl shadow-[0_10px_28px_rgba(0,0,0,0.18)] px-3.5 sm:px-4 py-2 sm:py-3 text-left border border-slate-100/80 animate-float-slow hover:scale-105 transition-transform duration-300">
            <h4 className="text-slate-900 font-bold text-xs sm:text-sm md:text-base leading-snug">
              UI/UX Design
            </h4>
            <p className="text-[10px] sm:text-xs text-slate-500 font-medium mt-0.5 whitespace-nowrap">
              200 Courses • 1000+ Students
            </p>
          </div>

          {/* Floating Card 2: Learning Progress (Top-Right of student) */}
          <div className="absolute z-20 right-1 sm:right-4 md:right-6 lg:right-4 xl:right-6 top-[15%] sm:top-[17%] md:top-[19%] bg-white rounded-2xl shadow-[0_10px_28px_rgba(0,0,0,0.18)] p-3 sm:p-4 min-w-[140px] sm:min-w-[170px] md:min-w-[190px] text-left border border-slate-100/80 animate-float-reverse hover:scale-105 transition-transform duration-300">
            <span className="text-[10px] sm:text-xs font-semibold text-slate-500 block leading-tight">
              Learning Progress
            </span>
            <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 block mt-0.5 tracking-tight">
              55%
            </span>
            {/* Progress Bar */}
            <div className="mt-1.5 sm:mt-2 h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full w-[55%] bg-[#CCFF00] rounded-full transition-all duration-1000" />
            </div>
          </div>

          {/* Floating Card 3: Happy Students (Bottom-Left of student) */}
          <div className="absolute z-20 -left-2 sm:left-2 md:left-4 lg:left-0 xl:left-2 bottom-[8%] sm:bottom-[10%] bg-white rounded-2xl shadow-[0_10px_28px_rgba(0,0,0,0.18)] p-2.5 sm:p-3.5 min-w-[170px] sm:min-w-[195px] md:min-w-[215px] text-left border border-slate-100/80 animate-float-drift hover:scale-105 transition-transform duration-300">
            <h4 className="text-slate-900 font-bold text-[11px] sm:text-xs md:text-sm leading-tight">
              Happy Students
            </h4>
            <div className="flex items-center gap-1 mt-0.5 text-[10px] sm:text-[11px] font-bold text-slate-700">
              <span>4.5 (240)</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="#FBBF24"
                className="w-3 h-3 sm:w-3.5 sm:h-3.5"
              >
                <path
                  fillRule="evenodd"
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            {/* Avatar Stack */}
            <div className="flex items-center mt-2">
              {studentAvatars.map((src, idx) => (
                <div
                  key={idx}
                  className={`relative w-5 h-5 sm:w-6 sm:h-6 rounded-full overflow-hidden ring-2 ring-white ${
                    idx > 0 ? "-ml-1.5 sm:-ml-2" : ""
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
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#CCFF00] text-slate-950 font-bold text-[9px] sm:text-[10px] flex items-center justify-center -ml-1.5 sm:-ml-2 ring-2 ring-white">
                2K+
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
