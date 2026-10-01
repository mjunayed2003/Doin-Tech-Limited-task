"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { creatorsData } from "@/lib/data";

export default function CreatorsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSkill, setSelectedSkill] = useState("All");

  const skills = [
    "All",
    "Figma",
    "UI/UX Design",
    "Big Data",
    "Productivity",
    "Finance",
    "Startups",
  ];

  const filteredCreators = creatorsData.filter((creator) => {
    const matchesSkill =
      selectedSkill === "All" ||
      creator.skills.some((s) => s.toLowerCase() === selectedSkill.toLowerCase());
    const matchesSearch =
      creator.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      creator.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      creator.bio.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSkill && matchesSearch;
  });

  return (
    <main className="min-h-screen w-full bg-[#FAFAFB] flex flex-col justify-between">
      {/* ========================================================= */}
      {/* 1. Hero Header Banner (Blue Grid Background)              */}
      {/* ========================================================= */}
      <div className="w-full bg-grid-pattern relative pb-16 sm:pb-20 pt-2">
        <Header />

        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 mt-10 sm:mt-14 text-center">
          <span className="inline-block bg-[#CCFF00] text-[#040819] font-bold text-xs sm:text-sm px-4 py-1.5 rounded-full uppercase tracking-wider mb-4 shadow-sm">
            Top Industry Talent
          </span>
          <h1 className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-tight tracking-tight">
            Learn Directly from Inspiring Creators
          </h1>
          <p className="mt-4 text-white/80 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-['Satoshi',sans-serif]">
            Our mentors are seasoned practitioners, studio founders, and engineers
            who bring real-world wisdom into every lesson they craft.
          </p>

          {/* Search bar inside hero */}
          <div className="mt-8 max-w-xl mx-auto bg-white rounded-full p-2 pl-6 flex items-center shadow-[0_12px_32px_rgba(0,0,0,0.18)]">
            <svg
              className="w-5 h-5 text-gray-400 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"
              />
            </svg>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search creator name, domain or skill..."
              className="w-full ml-3 text-slate-800 text-sm sm:text-base focus:outline-none placeholder:text-gray-400"
            />
            <button className="bg-[#CCFF00] hover:bg-[#b8eb00] text-slate-950 font-semibold px-6 py-2.5 rounded-full text-sm sm:text-base transition-all shrink-0 ml-2">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 2. Creators Grid Section                                  */}
      {/* ========================================================= */}
      <section className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 py-12 sm:py-16 flex-1">
        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 border-b border-gray-200 scrollbar-none">
          {skills.map((skill) => (
            <button
              key={skill}
              onClick={() => setSelectedSkill(skill)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all shrink-0 cursor-pointer ${
                selectedSkill === skill
                  ? "bg-[#040819] text-white shadow-sm"
                  : "bg-white text-gray-600 hover:text-black border border-gray-200"
              }`}
            >
              {skill}
            </button>
          ))}
        </div>

        {/* Creators Cards Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCreators.map((creator) => (
            <div
              key={creator.id}
              className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Cover Banner */}
                <div className="relative w-full h-32 bg-slate-200 overflow-hidden">
                  <Image
                    src={creator.coverImage}
                    alt={creator.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>

                {/* Creator Avatar & Basic Info */}
                <div className="px-6 relative">
                  <div className="relative -mt-12 w-20 h-20 rounded-full overflow-hidden ring-4 ring-white shadow-md">
                    <Image
                      src={creator.avatar}
                      alt={creator.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="mt-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-[#040819] group-hover:text-[#0047FF] transition-colors">
                        {creator.name}
                      </h3>
                      <div className="flex items-center gap-1 text-xs font-bold text-amber-500 bg-amber-50 px-2 py-0.5 rounded-full">
                        <span>★</span>
                        <span>{creator.rating}</span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-400 font-mono mt-0.5">
                      {creator.handle}
                    </p>
                    <p className="text-xs sm:text-sm font-medium text-[#0047FF] mt-1 line-clamp-1">
                      {creator.role}
                    </p>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-gray-600 line-clamp-2 leading-relaxed font-['Satoshi',sans-serif]">
                    {creator.bio}
                  </p>

                  {/* Skills tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {creator.skills.map((s) => (
                      <span
                        key={s}
                        className="bg-gray-100 text-gray-700 text-[11px] font-medium px-2.5 py-1 rounded-md"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Stats & View Profile CTA */}
              <div className="p-6 pt-4 border-t border-gray-100 mt-6 flex items-center justify-between">
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <div>
                    <strong className="text-gray-900 block font-bold">
                      {creator.coursesCount}
                    </strong>
                    <span>Courses</span>
                  </div>
                  <div>
                    <strong className="text-gray-900 block font-bold">
                      {creator.students.toLocaleString()}
                    </strong>
                    <span>Students</span>
                  </div>
                </div>

                <Link
                  href="/courses"
                  className="bg-[#CCFF00] hover:bg-[#b8eb00] text-[#040819] font-semibold text-xs sm:text-sm px-4 py-2 rounded-full transition-all"
                >
                  View Courses
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* ========================================================= */}
        {/* 3. "Become a Creator" Banner                              */}
        {/* ========================================================= */}
        <div className="mt-20 w-full bg-[#040819] rounded-3xl p-8 sm:p-12 lg:p-16 text-center text-white relative overflow-hidden">
          <div className="max-w-2xl mx-auto relative z-10">
            <span className="bg-[#CCFF00] text-slate-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Teach & Earn
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold">
              Unlock Your Potential as a Creator
            </h2>
            <p className="mt-3 text-white/70 text-sm sm:text-base font-['Satoshi',sans-serif]">
              Publish your signature course, access our built-in student community,
              and monetize your expertise with powerful course authoring tools.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Link
                href="/join"
                className="bg-[#CCFF00] hover:bg-[#b8eb00] text-slate-950 font-bold px-8 py-3.5 rounded-full text-sm sm:text-base transition-all shadow-md"
              >
                Apply as a Creator
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
