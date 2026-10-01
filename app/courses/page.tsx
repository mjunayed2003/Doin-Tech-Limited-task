"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface CourseItem {
  id: string;
  title: string;
  author: string;
  rating: number;
  level: string;
  price: number;
  image: string;
  category: string;
}

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Featured");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [isCourseDropdownOpen, setIsCourseDropdownOpen] = useState(false);
  const [isLevelDropdownOpen, setIsLevelDropdownOpen] = useState(false);
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);
  const [sortBy, setSortBy] = useState("Most relevant");
  const [currentPage, setCurrentPage] = useState(1);

  const filterCategories = [
    "Featured",
    "Music",
    "Drawing & Painting",
    "Marketing",
    "Animation",
    "Social Media",
    "UI/UX Design",
    "Creative Marketing",
    "Cooking",
  ];

  const studentAvatars = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&auto=format&fit=crop&q=80",
  ];

  // Base 6 courses from Figma
  const baseCourses: CourseItem[] = [
    {
      id: "1",
      title: "Learn Figma from Basic",
      author: "purepearl studio",
      rating: 4.5,
      level: "Beginner",
      price: 25,
      image: "/course-1.png",
      category: "UI/UX Design",
    },
    {
      id: "2",
      title: "Build Digital Asset",
      author: "purepearl studio",
      rating: 4.5,
      level: "Beginner",
      price: 25,
      image: "/course-2.png",
      category: "Drawing & Painting",
    },
    {
      id: "3",
      title: "the Power of Big Data",
      author: "purepearl studio",
      rating: 4.5,
      level: "Beginner",
      price: 25,
      image: "/course-3.png",
      category: "Marketing",
    },
    {
      id: "4",
      title: "Balancing Productivity an...",
      author: "purepearl studio",
      rating: 4.5,
      level: "Beginner",
      price: 25,
      image: "/course-4.png",
      category: "Featured",
    },
    {
      id: "5",
      title: "Mastering Money Manage...",
      author: "purepearl studio",
      rating: 4.5,
      level: "Beginner",
      price: 25,
      image: "/course-5.png",
      category: "Featured",
    },
    {
      id: "6",
      title: "From Idea to Startup Succ...",
      author: "purepearl studio",
      rating: 4.5,
      level: "Beginner",
      price: 25,
      image: "/course-6.png",
      category: "Creative Marketing",
    },
  ];

  // 18 courses per page (6 rows of 3 columns) as shown in the full-length Figma frame
  const all18Courses: CourseItem[] = [
    ...baseCourses.map((c, i) => ({ ...c, id: `${c.id}` })),
    ...baseCourses.map((c, i) => ({ ...c, id: `${c.id}-row2` })),
    ...baseCourses.map((c, i) => ({ ...c, id: `${c.id}-row3` })),
  ];

  const filteredCourses = all18Courses.filter((course) => {
    const matchesCategory =
      selectedCategory === "Featured" ||
      course.category.toLowerCase().includes(selectedCategory.toLowerCase());
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLevel =
      selectedLevel === "All" || course.level === selectedLevel;
    return matchesCategory && matchesSearch && matchesLevel;
  });

  return (
    <main className="min-h-screen w-full bg-white flex flex-col justify-between">
      {/* ========================================================= */}
      {/* 1. Hero Banner: Blue Grid Background                      */}
      {/* ========================================================= */}
      <div className="w-full bg-grid-pattern relative pb-12 sm:pb-16 pt-2">
        <Header />

        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 mt-10 sm:mt-14 text-center">
          <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-[44px] leading-tight tracking-tight">
            Find Your Next Course
          </h1>

          {/* Search bar & Dropdown Pill row */}
          <div className="mt-8 flex items-center justify-center gap-3 max-w-xl mx-auto px-2">
            {/* Search Pill Input */}
            <div className="flex-1 bg-white rounded-full px-5 py-3 flex items-center shadow-md">
              <svg
                className="w-4 h-4 text-gray-400 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
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
                placeholder="Search"
                className="w-full ml-3 text-slate-800 text-sm focus:outline-none placeholder:text-gray-400 font-normal"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="text-xs text-gray-400 hover:text-gray-600 px-1 cursor-pointer"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Lime Pill Dropdown Button */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsCourseDropdownOpen(!isCourseDropdownOpen)}
                className="bg-[#CCFF00] hover:bg-[#b8eb00] text-[#040819] font-medium text-sm px-6 py-3 rounded-full flex items-center gap-2 transition-all cursor-pointer shadow-sm shrink-0"
              >
                <span>Courses</span>
                <svg
                  className="w-4 h-4 text-[#040819]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isCourseDropdownOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                  {["All Courses", "Popular", "Free", "Certificates"].map(
                    (opt) => (
                      <button
                        key={opt}
                        onClick={() => setIsCourseDropdownOpen(false)}
                        className="w-full text-left px-4 py-2 text-xs sm:text-sm text-gray-700 hover:bg-gray-50 hover:text-black font-medium"
                      >
                        {opt}
                      </button>
                    )
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 2. Filter Bar & Category Pills Section                    */}
      {/* ========================================================= */}
      <section className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 pt-10 pb-20 flex-1">
        {/* Row 1: Filter Buttons (Left) & Sort (Right) */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          {/* Left Buttons: Filter, Level, Category */}
          <div className="flex items-center gap-3 flex-wrap">
            {/* Filter Pill */}
            <button
              type="button"
              className="border border-[#E5E7EB] bg-white hover:border-gray-400 text-slate-700 px-4 py-2 rounded-full text-xs sm:text-sm font-medium flex items-center gap-2 transition-colors cursor-pointer"
            >
              <svg
                className="w-3.5 h-3.5 text-slate-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                />
              </svg>
              <span>Filter</span>
            </button>

            {/* Level Pill */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsLevelDropdownOpen(!isLevelDropdownOpen)}
                className="border border-[#E5E7EB] bg-white hover:border-gray-400 text-slate-700 px-4 py-2 rounded-full text-xs sm:text-sm font-medium flex items-center gap-2 transition-colors cursor-pointer"
              >
                <svg
                  className="w-3.5 h-3.5 text-slate-500"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.375 2.25c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h.75c.621 0 1.125-.504 1.125-1.125V3.375c0-.621-.504-1.125-1.125-1.125h-.75zM11.625 7.5c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h.75c.621 0 1.125-.504 1.125-1.125v-12c0-.621-.504-1.125-1.125-1.125h-.75zM4.875 12.75c-.621 0-1.125.504-1.125 1.125v6.75c0 .621.504 1.125 1.125 1.125h.75c.621 0 1.125-.504 1.125-1.125v-6.75c0-.621-.504-1.125-1.125-1.125h-.75z" />
                </svg>
                <span>Level</span>
              </button>

              {isLevelDropdownOpen && (
                <div className="absolute left-0 mt-2 w-36 bg-white rounded-xl shadow-lg border border-gray-100 py-1.5 z-40">
                  {["All", "Beginner", "Intermediate", "Advanced"].map((lvl) => (
                    <button
                      key={lvl}
                      onClick={() => {
                        setSelectedLevel(lvl);
                        setIsLevelDropdownOpen(false);
                      }}
                      className="w-full text-left px-3 py-1.5 text-xs text-gray-700 hover:bg-gray-50"
                    >
                      {lvl}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Category Pill */}
            <button
              type="button"
              className="border border-[#E5E7EB] bg-white hover:border-gray-400 text-slate-700 px-4 py-2 rounded-full text-xs sm:text-sm font-medium flex items-center gap-2 transition-colors cursor-pointer"
            >
              <svg
                className="w-3.5 h-3.5 text-slate-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
              <span>Category</span>
            </button>
          </div>

          {/* Right Sorter Pill: Most relevant */}
          <div className="relative self-start sm:self-auto">
            <button
              type="button"
              onClick={() => setIsSortDropdownOpen(!isSortDropdownOpen)}
              className="border border-[#E5E7EB] bg-white hover:border-gray-400 text-slate-700 px-4 py-2 rounded-full text-xs sm:text-sm font-medium flex items-center gap-2 transition-colors cursor-pointer"
            >
              <svg
                className="w-3.5 h-3.5 text-slate-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 4h18M3 8h12m-12 4h18m-18 4h8"
                />
              </svg>
              <span>{sortBy}</span>
            </button>

            {isSortDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-lg border border-gray-100 py-1.5 z-40">
                {[
                  "Most relevant",
                  "Highest Rated",
                  "Newest",
                  "Price: Low to High",
                ].map((s) => (
                  <button
                    key={s}
                    onClick={() => {
                      setSortBy(s);
                      setIsSortDropdownOpen(false);
                    }}
                    className="w-full text-left px-3 py-1.5 text-xs text-gray-700 hover:bg-gray-50"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Row 2: Category Filter Pills */}
        <div className="mt-6 flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-none">
          {filterCategories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all shrink-0 cursor-pointer ${
                  isActive
                    ? "bg-[#CCFF00] text-[#040819] font-medium shadow-xs"
                    : "bg-[#F4F5F7] text-slate-700 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* ========================================================= */}
        {/* 3. Course Cards Grid: 18 Cards (6 rows x 3 columns)       */}
        {/* ========================================================= */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredCourses.map((course, index) => {
            // Base ID for detail page link (e.g. "1", "2", ...)
            const baseId = course.id.split("-")[0];
            return (
              <Link
                href={`/courses/${baseId}`}
                key={`${course.id}-${index}`}
                className="bg-white rounded-[26px] p-4 sm:p-4.5 border border-[#E9ECEF] shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                {/* Thumbnail */}
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
                  by{" "}
                  <span className="text-[#0047FF] font-medium">
                    {course.author}
                  </span>
                </p>

                {/* Level & Student Avatars */}
                <div className="mt-3.5 pt-1 flex items-center justify-between">
                  {/* Level Badge */}
                  <div className="bg-[#F4F5F7] text-slate-600 text-xs px-2.5 py-1 rounded-full flex items-center gap-1.5 font-medium">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-3.5 h-3.5"
                    >
                      <path d="M18.375 2.25c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h.75c.621 0 1.125-.504 1.125-1.125V3.375c0-.621-.504-1.125-1.125-1.125h-.75zM11.625 7.5c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h.75c.621 0 1.125-.504 1.125-1.125v-12c0-.621-.504-1.125-1.125-1.125h-.75zM4.875 12.75c-.621 0-1.125.504-1.125 1.125v6.75c0 .621.504 1.125 1.125 1.125h.75c.621 0 1.125-.504 1.125-1.125v-6.75c0-.621-.504-1.125-1.125-1.125h-.75z" />
                    </svg>
                    <span>{course.level}</span>
                  </div>

                  {/* Overlapping Avatars */}
                  <div className="flex items-center">
                    {studentAvatars.map((avatar, idx) => (
                      <div
                        key={idx}
                        className="relative w-6 h-6 rounded-full overflow-hidden -ml-1.5 first:ml-0 ring-2 ring-white"
                      >
                        <Image
                          src={avatar}
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
            );
          })}
        </div>

        {/* ========================================================= */}
        {/* 4. Pagination (Figma Screenshot Pixel-Perfect Match)      */}
        {/* ========================================================= */}
        <div className="mt-14 sm:mt-18 flex items-center justify-center gap-4 sm:gap-6">
          {/* Previous Arrow Button in Circular Border */}
          <button
            type="button"
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            aria-label="Previous Page"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#E5E7EB] flex items-center justify-center text-gray-500 hover:text-black hover:border-gray-400 transition-colors disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Page Numbers: 1, 2, 3, 4, 5 */}
          <div className="flex items-center gap-4 sm:gap-6 text-sm sm:text-base font-medium">
            {[1, 2, 3, 4, 5].map((pageNum) => (
              <button
                key={pageNum}
                type="button"
                onClick={() => setCurrentPage(pageNum)}
                className={`transition-colors cursor-pointer ${
                  currentPage === pageNum
                    ? "text-[#040819] font-bold"
                    : "text-gray-400 hover:text-gray-700"
                }`}
              >
                {pageNum}
              </button>
            ))}
          </div>

          {/* Next Arrow Button in Circular Border */}
          <button
            type="button"
            onClick={() => setCurrentPage((p) => Math.min(5, p + 1))}
            disabled={currentPage === 5}
            aria-label="Next Page"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#E5E7EB] flex items-center justify-center text-gray-500 hover:text-black hover:border-gray-400 transition-colors disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
