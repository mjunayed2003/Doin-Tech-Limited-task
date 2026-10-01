"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Course {
  id: string;
  title: string;
  author: string;
  rating: number;
  level: string;
  price: number;
  image: string;
}

export default function CoursesSection() {
  const [activeCategory, setActiveCategory] = useState("Featured");

  const row1Categories = [
    "Featured",
    "Music",
    "Drawing & Painting",
    "Marketing",
    "Animation",
    "Social Media",
    "UI/UX Design",
    "Creative Marketing",
  ];

  const row2Categories = [
    "Digital Illustration",
    "Film & Video",
    "Crafts",
    "Freelance & Entrepreneurship",
    "Graphic Design",
    "Photography",
  ];

  const row3Categories = [
    "Productivity",
    "Web Development",
    "Data Science",
    "Cooking",
    "+ More",
  ];

  const studentAvatars = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&auto=format&fit=crop&q=80",
  ];

  const courses: Course[] = [
    {
      id: "1",
      title: "Learn Figma from Basic",
      author: "purepearl studio",
      rating: 4.5,
      level: "Beginner",
      price: 25,
      image: "/course-1.png",
    },
    {
      id: "2",
      title: "Build Digital Asset",
      author: "purepearl studio",
      rating: 4.5,
      level: "Beginner",
      price: 25,
      image: "/course-2.png",
    },
    {
      id: "3",
      title: "the Power of Big Data",
      author: "purepearl studio",
      rating: 4.5,
      level: "Beginner",
      price: 25,
      image: "/course-3.png",
    },
    {
      id: "4",
      title: "Balancing Productivity an...",
      author: "purepearl studio",
      rating: 4.5,
      level: "Beginner",
      price: 25,
      image: "/course-4.png",
    },
    {
      id: "5",
      title: "Mastering Money Manage...",
      author: "purepearl studio",
      rating: 4.5,
      level: "Beginner",
      price: 25,
      image: "/course-5.png",
    },
    {
      id: "6",
      title: "From Idea to Startup Succ...",
      author: "purepearl studio",
      rating: 4.5,
      level: "Beginner",
      price: 25,
      image: "/course-6.png",
    },
  ];

  return (
    <section className="w-full bg-white py-16 sm:py-24 text-slate-900 border-t border-slate-100">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Subtitle */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.18] px-2">
            Discover Your Passion, <br className="hidden sm:inline" />
            Build Your Skills
          </h2>
          <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-[15px] text-slate-500 max-w-[680px] mx-auto leading-relaxed px-3">
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
          </p>
        </div>

        {/* Category Filter Pills (3 Rows with mobile horizontal scroll) */}
        <div className="mt-8 sm:mt-12 flex flex-col items-center gap-2.5 sm:gap-3 select-none w-full">
          {/* Row 1 */}
          <div className="w-full overflow-x-auto no-scrollbar flex sm:flex-wrap items-center justify-start sm:justify-center gap-2 sm:gap-2.5 py-1 px-4 -mx-4 sm:mx-0 sm:px-0">
            {row1Categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`text-xs sm:text-sm font-medium px-4 sm:px-5 py-2 sm:py-2 rounded-full transition-all duration-200 cursor-pointer shrink-0 active:scale-95 ${
                  activeCategory === cat
                    ? "bg-[#CCFF00] text-slate-950 font-semibold shadow-xs"
                    : "bg-[#F4F5F7] text-slate-700 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Row 2 */}
          <div className="w-full overflow-x-auto no-scrollbar flex sm:flex-wrap items-center justify-start sm:justify-center gap-2 sm:gap-2.5 py-1 px-4 -mx-4 sm:mx-0 sm:px-0">
            {row2Categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`text-xs sm:text-sm font-medium px-4 sm:px-5 py-2 sm:py-2 rounded-full transition-all duration-200 cursor-pointer shrink-0 active:scale-95 ${
                  activeCategory === cat
                    ? "bg-[#CCFF00] text-slate-950 font-semibold shadow-xs"
                    : "bg-[#F4F5F7] text-slate-700 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Row 3 */}
          <div className="w-full overflow-x-auto no-scrollbar flex sm:flex-wrap items-center justify-start sm:justify-center gap-2 sm:gap-2.5 py-1 px-4 -mx-4 sm:mx-0 sm:px-0">
            {row3Categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`text-xs sm:text-sm font-medium px-4 sm:px-5 py-2 sm:py-2 rounded-full transition-all duration-200 cursor-pointer shrink-0 active:scale-95 ${
                  activeCategory === cat
                    ? "bg-[#CCFF00] text-slate-950 font-semibold shadow-xs"
                    : cat === "+ More"
                    ? "bg-transparent text-[#0047FF] hover:bg-[#0047FF]/10 font-semibold"
                    : "bg-[#F4F5F7] text-slate-700 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 6 Course Cards Grid */}
        <div className="mt-10 sm:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
          {courses.map((course) => (
            <Link
              href={`/courses/${course.id}`}
              key={course.id}
              className="bg-white rounded-[26px] p-4 sm:p-4.5 border border-[#E9ECEF] shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              {/* Card Thumbnail with baked badges */}
              <div className="relative w-full aspect-[236/135] rounded-[18px] overflow-hidden bg-slate-100">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-103 transition-transform duration-300"
                />
              </div>

              {/* Title & Rating */}
              <div className="mt-4 flex items-center justify-between gap-2">
                <h3 className="text-slate-900 font-bold text-base sm:text-[17px] leading-snug line-clamp-1 group-hover:text-[#0047FF] transition-colors">
                  {course.title}
                </h3>
                <div className="flex items-center gap-1 text-slate-500 text-xs sm:text-sm font-semibold shrink-0">
                  <span>{course.rating}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4 text-slate-300"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>

              {/* Author */}
              <p className="text-xs text-slate-400 font-normal mt-1">
                by <span className="text-[#0047FF] font-medium">{course.author}</span>
              </p>

              {/* Level & Student Avatars */}
              <div className="mt-3.5 pt-1 flex items-center justify-between">
                {/* Level Badge */}
                <div className="bg-[#F4F5F7] text-slate-600 text-xs px-2.5 py-1 rounded-full flex items-center gap-1.5 font-medium">
                  {/* Signal bars icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3.5 h-3.5 text-slate-500"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <rect x="3" y="14" width="3.5" height="7" rx="1" />
                    <rect x="9.5" y="9" width="3.5" height="12" rx="1" />
                    <rect x="16" y="4" width="3.5" height="17" rx="1" />
                  </svg>
                  <span>{course.level}</span>
                </div>

                {/* Overlapping Student Avatars Stack */}
                <div className="flex items-center">
                  {studentAvatars.map((src, idx) => (
                    <div
                      key={idx}
                      className={`relative w-6 h-6 rounded-full overflow-hidden ring-2 ring-white ${
                        idx > 0 ? "-ml-1.5" : ""
                      }`}
                    >
                      <Image
                        src={src}
                        alt="Student"
                        fill
                        sizes="24px"
                        className="object-cover"
                      />
                    </div>
                  ))}
                  <div className="w-6 h-6 rounded-full bg-[#CCFF00] text-slate-950 font-bold text-[10px] flex items-center justify-center -ml-1.5 ring-2 ring-white">
                    26+
                  </div>
                </div>
              </div>

              {/* Price Row */}
              <div className="mt-3.5 pt-1 flex items-baseline">
                <span className="text-[#0047FF] font-bold text-lg sm:text-xl">
                  ${course.price}
                </span>
                <span className="text-slate-400 font-normal text-xs ml-1">
                  /lifetime
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
