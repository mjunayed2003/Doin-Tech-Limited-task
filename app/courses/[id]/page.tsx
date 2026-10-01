"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { coursesData } from "@/lib/data";

export default function CourseDetailPage() {
  const params = useParams();
  const courseId = params?.id as string;
  const course = coursesData.find((c) => c.id === courseId) || coursesData[0];

  const [activeTab, setActiveTab] = useState<"overview" | "curriculum" | "instructor" | "reviews">("overview");
  const [openSections, setOpenSections] = useState<number[]>([0]);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const toggleSection = (idx: number) => {
    if (openSections.includes(idx)) {
      setOpenSections(openSections.filter((i) => i !== idx));
    } else {
      setOpenSections([...openSections, idx]);
    }
  };

  return (
    <main className="min-h-screen w-full bg-[#FAFAFB] flex flex-col justify-between">
      {/* ========================================================= */}
      {/* 1. Header Banner & Course Hero                            */}
      {/* ========================================================= */}
      <div className="w-full bg-grid-pattern relative pb-16 sm:pb-24 pt-2">
        <Header />

        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 mt-6 sm:mt-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-white/70">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/courses" className="hover:text-white transition-colors">
              Courses
            </Link>
            <span>/</span>
            <span className="text-[#CCFF00] font-medium">{course.category}</span>
          </nav>

          {/* Hero Content (Grid Layout: Left Details, Right Placeholder) */}
          <div className="mt-6 lg:mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-8 text-white">
              <div className="flex items-center gap-3">
                <span className="bg-[#CCFF00] text-slate-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {course.category}
                </span>
                <span className="text-white/80 text-xs sm:text-sm font-medium">
                  Level: {course.level}
                </span>
              </div>

              <h1 className="mt-4 text-white font-extrabold text-3xl sm:text-4xl md:text-5xl leading-tight">
                {course.title}
              </h1>

              <p className="mt-4 text-white/80 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl font-['Satoshi',sans-serif]">
                {course.description}
              </p>

              {/* Creator & Meta info */}
              <div className="mt-6 flex flex-wrap items-center gap-6 text-xs sm:text-sm">
                <div className="flex items-center gap-2.5">
                  <div className="relative w-9 h-9 rounded-full overflow-hidden ring-2 ring-white/30">
                    <Image
                      src={course.authorAvatar}
                      alt={course.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-white/60 text-xs block">Created by</span>
                    <span className="font-semibold text-white">{course.author}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <span className="text-[#CCFF00] font-bold text-base">★</span>
                  <span className="font-bold text-white">{course.rating}</span>
                  <span className="text-white/60">({course.reviewsCount} ratings)</span>
                </div>

                <div className="text-white/80">
                  <span className="font-semibold text-white">{course.studentsCount.toLocaleString()}</span> students
                </div>

                <div className="text-white/80">
                  Duration: <span className="font-semibold text-white">{course.duration}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 2. Main Content & Sticky Enrollment Sidebar                */}
      {/* ========================================================= */}
      <section className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 -mt-10 sm:-mt-16 relative z-20 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Tabs & Sections */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            {/* Tabs Navigation */}
            <div className="bg-white rounded-2xl p-2 shadow-sm border border-gray-100 flex items-center gap-2 overflow-x-auto">
              {(["overview", "curriculum", "instructor", "reviews"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all capitalize cursor-pointer shrink-0 ${
                    activeTab === tab
                      ? "bg-[#040819] text-white shadow-xs"
                      : "text-gray-600 hover:text-black hover:bg-gray-50"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab 1: Overview */}
            {activeTab === "overview" && (
              <div className="flex flex-col gap-8">
                {/* What you'll learn card */}
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm">
                  <h3 className="text-slate-900 font-bold text-xl sm:text-2xl">
                    What You&apos;ll Learn
                  </h3>
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {course.whatYouWillLearn.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <span className="w-5 h-5 rounded-full bg-[#CCFF00] text-slate-950 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                          ✓
                        </span>
                        <span className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Course Details Description */}
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm">
                  <h3 className="text-slate-900 font-bold text-xl sm:text-2xl">
                    Course Description
                  </h3>
                  <div className="mt-4 text-gray-600 text-sm sm:text-base leading-relaxed space-y-4 font-['Satoshi',sans-serif]">
                    <p>{course.description}</p>
                    <p>
                      This comprehensive program is structured to give you deep practical immersion through step-by-step video tutorials, downloadable asset kits, and real-world project assignments reviewed by industry leaders.
                    </p>
                    <p>
                      Whether you are an ambitious beginner stepping into the industry or a seasoned professional looking to update your toolkit with the latest industry workflows, this course equips you with the confidence and portfolio pieces needed to excel.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: Curriculum Accordion */}
            {activeTab === "curriculum" && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between pb-6 border-b border-gray-100">
                  <div>
                    <h3 className="text-slate-900 font-bold text-xl sm:text-2xl">
                      Course Curriculum
                    </h3>
                    <p className="text-gray-500 text-xs sm:text-sm mt-1">
                      {course.curriculum.length} sections • {course.lessonsCount} lessons • {course.duration} total length
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      if (openSections.length === course.curriculum.length) {
                        setOpenSections([]);
                      } else {
                        setOpenSections(course.curriculum.map((_, i) => i));
                      }
                    }}
                    className="text-xs sm:text-sm font-semibold text-[#0047FF] hover:underline"
                  >
                    {openSections.length === course.curriculum.length
                      ? "Collapse All"
                      : "Expand All"}
                  </button>
                </div>

                <div className="mt-6 space-y-4">
                  {course.curriculum.map((section, idx) => {
                    const isOpen = openSections.includes(idx);
                    return (
                      <div
                        key={idx}
                        className="border border-gray-200 rounded-2xl overflow-hidden transition-all"
                      >
                        <button
                          onClick={() => toggleSection(idx)}
                          className="w-full px-6 py-4 bg-gray-50 hover:bg-gray-100 flex items-center justify-between transition-colors text-left"
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-[#040819] font-bold text-sm sm:text-base">
                              {section.title}
                            </span>
                            <span className="text-xs text-gray-500 font-normal">
                              ({section.lessons.length} lessons)
                            </span>
                          </div>
                          <span className="text-gray-400 font-bold text-lg">
                            {isOpen ? "−" : "+"}
                          </span>
                        </button>

                        {isOpen && (
                          <div className="p-4 sm:p-6 bg-white space-y-3 divide-y divide-gray-100">
                            {section.lessons.map((lesson, lIdx) => (
                              <div
                                key={lIdx}
                                className="pt-3 first:pt-0 flex items-center justify-between text-xs sm:text-sm"
                              >
                                <div className="flex items-center gap-3">
                                  <span className="w-6 h-6 rounded-full bg-blue-50 text-[#0047FF] flex items-center justify-center text-xs">
                                    ▶
                                  </span>
                                  <span className="text-gray-800 font-medium">
                                    {lesson.title}
                                  </span>
                                </div>
                                <span className="text-gray-400 font-mono">
                                  {lesson.duration}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Tab 3: Instructor Profile */}
            {activeTab === "instructor" && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden ring-4 ring-[#CCFF00]">
                    <Image
                      src={course.authorAvatar}
                      alt={course.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-slate-900 font-bold text-2xl">
                      {course.author}
                    </h3>
                    <p className="text-[#0047FF] font-medium text-sm mt-0.5">
                      {course.authorRole}
                    </p>
                    <div className="mt-3 flex items-center gap-4 text-xs sm:text-sm text-gray-500">
                      <span>★ 4.9 Instructor Rating</span>
                      <span>•</span>
                      <span>25,000+ Students</span>
                      <span>•</span>
                      <span>6 Courses</span>
                    </div>
                  </div>
                </div>

                <p className="mt-6 text-gray-600 text-sm sm:text-base leading-relaxed font-['Satoshi',sans-serif]">
                  Passionate industry professional dedicated to crafting immersive, hands-on learning experiences. Having trained thousands of engineers, designers, and entrepreneurs globally, our curriculum is engineered to bridge the gap between academic concepts and real-world execution.
                </p>
              </div>
            )}

            {/* Tab 4: Reviews */}
            {activeTab === "reviews" && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm">
                <h3 className="text-slate-900 font-bold text-xl sm:text-2xl">
                  Student Feedback
                </h3>
                <div className="mt-6 flex flex-col sm:flex-row items-center gap-8 pb-8 border-b border-gray-100">
                  <div className="text-center sm:text-left">
                    <span className="text-5xl font-black text-[#040819]">
                      {course.rating}
                    </span>
                    <div className="text-amber-400 text-lg mt-1">★★★★★</div>
                    <span className="text-xs text-gray-500 mt-1 block">
                      Course Rating • {course.reviewsCount} reviews
                    </span>
                  </div>

                  <div className="flex-1 w-full space-y-2">
                    {[
                      { star: "5 stars", pct: "82%" },
                      { star: "4 stars", pct: "14%" },
                      { star: "3 stars", pct: "3%" },
                      { star: "2 stars", pct: "1%" },
                      { star: "1 star", pct: "0%" },
                    ].map((row) => (
                      <div key={row.star} className="flex items-center gap-3 text-xs text-gray-500">
                        <span className="w-12 text-right">{row.star}</span>
                        <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-amber-400 rounded-full"
                            style={{ width: row.pct }}
                          />
                        </div>
                        <span className="w-8">{row.pct}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sample reviews */}
                <div className="mt-8 space-y-6">
                  {[
                    {
                      name: "Marcus Vance",
                      date: "2 weeks ago",
                      comment:
                        "Easily one of the best structured courses I have ever completed. The examples were direct and the workflow techniques have saved me hours of design work.",
                    },
                    {
                      name: "Sophia Chen",
                      date: "1 month ago",
                      comment:
                        "Clear, actionable, and full of gold nuggets that only veteran practitioners know. Highly recommend to anyone looking to level up quickly!",
                    },
                  ].map((rev, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-700">
                            {rev.name[0]}
                          </div>
                          <span className="text-xs sm:text-sm font-bold text-gray-900">
                            {rev.name}
                          </span>
                        </div>
                        <span className="text-xs text-gray-400">{rev.date}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed pl-9">
                        {rev.comment}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Sticky Video Preview & Purchase Card */}
          <div className="lg:col-span-4 sticky top-6">
            <div className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-xl">
              {/* Video Player Preview */}
              <div className="relative w-full h-[220px] bg-slate-900 overflow-hidden group">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <button
                    onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                    className="w-16 h-16 rounded-full bg-[#CCFF00] hover:bg-[#b8eb00] text-slate-950 flex items-center justify-center text-xl pl-1 shadow-lg hover:scale-110 active:scale-95 transition-all cursor-pointer"
                  >
                    ▶
                  </button>
                </div>
                <div className="absolute bottom-3 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-medium">
                  Preview this course
                </div>
              </div>

              {/* Pricing & CTA */}
              <div className="p-6 sm:p-7">
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl sm:text-4xl font-black text-[#040819]">
                    ${course.price}
                  </span>
                  <span className="text-base text-gray-400 line-through">
                    ${course.originalPrice}
                  </span>
                  <span className="bg-red-50 text-red-600 text-xs font-bold px-2 py-0.5 rounded-md">
                    72% OFF
                  </span>
                </div>

                <div className="mt-6 flex flex-col gap-3">
                  <button className="w-full bg-[#CCFF00] hover:bg-[#b8eb00] active:scale-98 text-[#040819] font-bold py-3.5 rounded-full text-base transition-all shadow-md cursor-pointer text-center">
                    Enroll Now
                  </button>

                  <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3.5 rounded-full text-sm transition-all cursor-pointer text-center">
                    Add to Wishlist
                  </button>
                </div>

                <p className="mt-4 text-center text-xs text-gray-400">
                  30-Day Money-Back Guarantee • Lifetime Access
                </p>

                {/* Course Includes Checklist */}
                <div className="mt-6 pt-6 border-t border-gray-100 space-y-3">
                  <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider">
                    This course includes:
                  </h4>
                  <ul className="space-y-2.5 text-xs text-gray-600">
                    <li className="flex items-center gap-2">
                      <span className="text-[#0047FF]">📹</span> {course.duration} on-demand video
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#0047FF]">📁</span> {course.lessonsCount} interactive lessons
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#0047FF]">📥</span> Downloadable source files & resources
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#0047FF]">📱</span> Access on mobile and desktop
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#0047FF]">🏆</span> Certificate of completion
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
