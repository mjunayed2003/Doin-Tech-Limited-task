"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CourseDetailPage() {
  const [activeTab, setActiveTab] = useState<"about" | "lesson" | "reviews">("reviews");
  const [selectedRatingFilter, setSelectedRatingFilter] = useState("All rating");
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const sneakPeekImages = [
    {
      src: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=500&auto=format&fit=crop&q=80",
      alt: "Wireframing and UX sketching",
    },
    {
      src: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=500&auto=format&fit=crop&q=80",
      alt: "Laptop color palettes and UI components",
    },
    {
      src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format&fit=crop&q=80",
      alt: "Desktop analytics and design system",
    },
    {
      src: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&auto=format&fit=crop&q=80",
      alt: "Mobile app interfaces showcase",
    },
  ];

  const keyPoints = [
    "Foundational Concepts",
    "Design Principles Mastery",
    "Advanced Techniques in Digital Creation",
    "Project Showcase and Critique",
    "Optimizing for Various Platforms",
    "Digital Asset Management Best Practices",
    "Monetization Strategies",
    "Capstone Project: Building Your Portfolio",
  ];

  const lessonModules = [
    {
      title: "Module 1: Introduction to Digital Assets",
      description:
        "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
    },
    {
      title: "Module 2: Design Principles for Impact",
      description:
        "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
    },
    {
      title: "Module 4: User-Centric Design Strategies",
      description:
        "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
    },
    {
      title: "Module 5: Interactive Media and Engagement",
      description:
        "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences.",
    },
    {
      title: "Module 6: Project Showcase and Critique",
      description:
        "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.",
    },
    {
      title: "Module 7: Optimizing Digital Assets for Various Platforms",
      description:
        "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes.",
    },
  ];

  const reviewsList = [
    {
      id: "1",
      name: "PurePearl Studio",
      role: "UI/UX Designer",
      date: "a year ago",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
      comment:
        '"The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!"',
    },
    {
      id: "2",
      name: "Albert Flores",
      role: "UI/UX Designer",
      date: "a year ago",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80",
      comment:
        "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!",
    },
    {
      id: "3",
      name: "Cody Fisher",
      role: "UI/UX Designer",
      date: "a year ago",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&auto=format&fit=crop&q=80",
      comment:
        "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.",
    },
    {
      id: "4",
      name: "Brooklyn Simmons",
      role: "UI/UX Designer",
      date: "a year ago",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80",
      comment:
        "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.",
    },
  ];

  const ratingBreakdown = [
    { stars: 5, count: 720, percent: "82%" },
    { stars: 4, count: 120, percent: "35%" },
    { stars: 3, count: 21, percent: "12%" },
    { stars: 2, count: 12, percent: "6%" },
    { stars: 1, count: 16, percent: "8%" },
  ];

  const filteredReviews = reviewsList.filter((rev) => {
    if (selectedRatingFilter === "All rating") return true;
    const starNum = parseInt(selectedRatingFilter.replace("★ ", ""));
    return rev.rating === starNum;
  });

  return (
    <main className="min-h-screen w-full bg-white flex flex-col justify-between">
      {/* ========================================================= */}
      {/* 1. Hero Banner: Blue Grid Background                      */}
      {/* ========================================================= */}
      <div className="w-full bg-grid-pattern relative pb-16 sm:pb-24 pt-2">
        <Header />

        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 mt-8 sm:mt-12">
          {/* Title & Share button row */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div className="max-w-3xl">
              <h1 className="text-white font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-tight tracking-tight">
                Build Digital Asset: A Comprehensive Guide
              </h1>
              <p className="mt-2.5 text-white/80 text-sm sm:text-base font-normal font-['Satoshi',sans-serif]">
                Unlock the Power of Digital Creation with Expert Guidance
              </p>
              <p className="mt-3 text-xs sm:text-sm text-white/80 font-normal">
                by{" "}
                <span className="text-[#CCFF00] font-semibold">
                  purepearl studio
                </span>
              </p>
            </div>

            {/* Lime Pill Share Button */}
            <button
              type="button"
              className="self-start bg-[#CCFF00] hover:bg-[#b8eb00] text-slate-950 font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-full flex items-center gap-2 shadow-sm transition-all duration-200 cursor-pointer active:scale-95 shrink-0"
            >
              <svg
                className="w-4 h-4 text-slate-950"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
              <span>Share</span>
            </button>
          </div>

          {/* 3 Badges Row: Intermediate, 4.8 Rating, 199 Students */}
          <div className="mt-6 flex items-center gap-3 flex-wrap">
            {/* Level Badge */}
            <div className="bg-white text-slate-800 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full flex items-center gap-2 shadow-sm">
              <svg
                className="w-3.5 h-3.5 text-slate-600"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.375 2.25c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h.75c.621 0 1.125-.504 1.125-1.125V3.375c0-.621-.504-1.125-1.125-1.125h-.75zM11.625 7.5c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h.75c.621 0 1.125-.504 1.125-1.125v-12c0-.621-.504-1.125-1.125-1.125h-.75zM4.875 12.75c-.621 0-1.125.504-1.125 1.125v6.75c0 .621.504 1.125 1.125 1.125h.75c.621 0 1.125-.504 1.125-1.125v-6.75c0-.621-.504-1.125-1.125-1.125h-.75z" />
              </svg>
              <span>Intermediate</span>
            </div>

            {/* Rating Badge */}
            <div className="bg-white text-slate-800 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
              <span className="text-[#0047FF]">★</span>
              <span>4.8 (172 reviews)</span>
            </div>

            {/* Students Badge */}
            <div className="bg-white text-slate-800 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
              <svg
                className="w-3.5 h-3.5 text-slate-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span>199 Students</span>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 2. Main Two-Column Section (Video/Tabs + Sticky Sidebar)   */}
      {/* ========================================================= */}
      <section className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 -mt-10 sm:-mt-16 relative z-20 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* ===================================================== */}
          {/* Left Column: Video Player + Tabs + Tab Contents       */}
          {/* ===================================================== */}
          <div className="lg:col-span-8 flex flex-col">
            {/* Big Video Thumbnail with user's video-image.png */}
            <div
              onClick={() => setIsVideoModalOpen(true)}
              className="relative w-full aspect-[720/479] max-w-[720px] rounded-[24px] sm:rounded-[28px] overflow-hidden bg-slate-100 shadow-xl border border-white/20 group cursor-pointer"
            >
              <Image
                src="/images/video-image.png"
                alt="Build Digital Asset Course Preview"
                fill
                priority
                className="object-cover group-hover:scale-101 transition-transform duration-300"
              />
            </div>

            {/* Tabs Row: About, Lesson, Reviews */}
            <div className="mt-8 flex items-center gap-3">
              <button
                type="button"
                onClick={() => setActiveTab("about")}
                className={`px-6 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === "about"
                    ? "bg-[#CCFF00] text-slate-950 shadow-xs"
                    : "bg-[#F4F5F7] text-slate-700 hover:bg-slate-200"
                }`}
              >
                About
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("lesson")}
                className={`px-6 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === "lesson"
                    ? "bg-[#CCFF00] text-slate-950 shadow-xs"
                    : "bg-[#F4F5F7] text-slate-700 hover:bg-slate-200"
                }`}
              >
                Lesson
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("reviews")}
                className={`px-6 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === "reviews"
                    ? "bg-[#CCFF00] text-slate-950 shadow-xs"
                    : "bg-[#F4F5F7] text-slate-700 hover:bg-slate-200"
                }`}
              >
                Reviews
              </button>
            </div>

            {/* =================================================== */}
            {/* TAB CONTENT 1: About                                */}
            {/* =================================================== */}
            {activeTab === "about" && (
              <div className="mt-8 animate-in fade-in duration-200">
                {/* Description Heading */}
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  Description
                </h2>

                {/* 3 Paragraphs exactly matching the Figma screenshot */}
                <div className="mt-4 text-[#5E6470] text-xs sm:text-sm leading-[180%] font-['Satoshi',sans-serif] space-y-4">
                  <p>
                    Embark on an enlightening exploration into the world of digital
                    creation with our comprehensive course, &quot;Build Digital Assets: A
                    Comprehensive Guide.&quot; This transformative learning experience invites
                    you to delve deep into the intricacies of crafting impactful digital
                    content. From laying the groundwork with foundational concepts to
                    mastering advanced techniques, this guide is meticulously curated to
                    empower you with the skills essential for navigating the dynamic
                    landscape of digital asset creation.
                  </p>
                  <p>
                    In the initial modules, you&apos;ll establish a solid foundation by
                    immersing yourself in the foundational concepts that form the backbone
                    of digital asset creation. Understand the fundamental elements that
                    constitute compelling digital content and gain proficiency in leveraging
                    these elements to communicate effectively in the digital realm.
                  </p>
                  <p>
                    As you progress through the course, you&apos;ll ascend to higher levels
                    of expertise, delving into the nuances of design principles that drive
                    impactful creations. Uncover the secrets behind effective visual
                    communication, exploring color theory, typography, and layout
                    strategies that elevate your digital assets to new heights. Engage in
                    hands-on exercises that reinforce your understanding, allowing you to
                    apply these principles in practical scenarios.
                  </p>
                </div>

                {/* Sneak Peak Section */}
                <div className="mt-10">
                  <h3 className="text-lg font-bold text-slate-900">Sneak Peak</h3>
                  <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                    {sneakPeekImages.map((img, idx) => (
                      <div
                        key={idx}
                        className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 shadow-sm border border-gray-100 group"
                      >
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          sizes="(max-width: 768px) 50vw, 25vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Points Section */}
                <div className="mt-10">
                  <h3 className="text-lg font-bold text-slate-900">Key Points</h3>
                  <div className="mt-4 space-y-3">
                    {keyPoints.map((point, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#0047FF] text-white flex items-center justify-center shrink-0">
                          <svg
                            className="w-3 h-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="3.5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-xs sm:text-sm text-slate-800 font-medium">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* =================================================== */}
            {/* TAB CONTENT 2: Lesson                               */}
            {/* =================================================== */}
            {activeTab === "lesson" && (
              <div className="mt-8 animate-in fade-in duration-200">
                {/* 1. Explore the Modules */}
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Explore the Modules
                </h2>
                <p className="mt-2 text-[#5E6470] text-xs sm:text-sm leading-relaxed font-['Satoshi',sans-serif]">
                  Immerse yourself in the course content as we break down each module
                  into comprehensive lessons, providing practical insights and
                  hands-on experiences.
                </p>

                {/* 2. Lesson List Heading */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-8 mb-5">
                  Lesson List
                </h3>

                {/* 6 Modules List matching Figma */}
                <div className="space-y-5">
                  {lessonModules.map((mod, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      {/* Rounded Lime-Green Video Camera Icon Box */}
                      <div className="w-12 h-12 rounded-2xl bg-[#CCFF00] flex items-center justify-center shrink-0 shadow-xs">
                        <svg
                          className="w-5 h-5 text-slate-950 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M4.5 4.5a3 3 0 00-3 3v9a3 3 0 003 3h8.25a3 3 0 003-3v-9a3 3 0 00-3-3H4.5zM19.94 18.71l-3.19-2.13a.75.75 0 01-.35-.63V8.05c0-.26.13-.5.35-.63l3.19-2.13A1.5 1.5 0 0122 6.54v10.92a1.5 1.5 0 01-2.06 1.25z" />
                        </svg>
                      </div>

                      {/* Module Title & Description */}
                      <div className="flex-1">
                        <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                          {mod.title}
                        </h4>
                        <p className="mt-1 text-xs sm:text-sm text-[#5E6470] leading-relaxed font-['Satoshi',sans-serif]">
                          {mod.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* 3. Lesson Content Section */}
                <div className="mt-10">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                    Lesson Content
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#5E6470] leading-relaxed font-['Satoshi',sans-serif]">
                    Engage with each lesson through captivating video content, detailed
                    textual explanations, and interactive elements. Download resources,
                    complete assignments, and test your understanding with quizzes.
                  </p>
                </div>

                {/* 4. Lesson Progress Tracking Section */}
                <div className="mt-10">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                    Lesson Progress Tracking
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#5E6470] leading-relaxed font-['Satoshi',sans-serif]">
                    Witness your growth as you complete lessons, with an intuitive
                    progress tracking feature guiding you through your learning journey.
                  </p>

                  {/* Progress 55% Card */}
                  <div className="mt-5 bg-white border border-[#E9ECEF] rounded-2xl p-5 sm:p-6 shadow-xs max-w-xl">
                    <span className="text-xs text-gray-500 font-medium block">
                      Learning Progress
                    </span>
                    <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1 block">
                      55%
                    </span>
                    <div className="mt-3 w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-[#CCFF00] rounded-full w-[55%]" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* =================================================== */}
            {/* TAB CONTENT 3: Reviews (Figma Screenshot 1, 2, 3)   */}
            {/* =================================================== */}
            {activeTab === "reviews" && (
              <div className="mt-8 animate-in fade-in duration-200">
                {/* 1. What Learners Are Saying */}
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  What Learners Are Saying
                </h2>
                <p className="mt-2 text-[#5E6470] text-xs sm:text-sm leading-relaxed font-['Satoshi',sans-serif] max-w-2xl">
                  Discover what our learners have to say about their experience with
                  &apos;Build Digital Assets: A Comprehensive Guide.&apos; Read reviews and
                  ratings from individuals who have embarked on the transformative
                  journey of mastering digital asset creation.
                </p>

                {/* 2. Rating Breakdown Card */}
                <div className="mt-6 bg-white rounded-3xl p-6 sm:p-7 border border-[#E9ECEF] shadow-xs flex flex-col sm:flex-row items-center gap-6 sm:gap-8 max-w-xl">
                  {/* Lime Ratings 4.7 Box */}
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-[#CCFF00] flex flex-col items-center justify-center shrink-0 shadow-xs">
                    <span className="text-xs text-slate-900 font-medium">Ratings</span>
                    <span className="text-3xl sm:text-4xl font-extrabold text-slate-950 mt-0.5">
                      4.7
                    </span>
                  </div>

                  {/* Rating progress bars & counts */}
                  <div className="flex-1 w-full space-y-2.5">
                    {ratingBreakdown.map((row) => (
                      <div
                        key={row.stars}
                        className="flex items-center gap-3 text-xs text-slate-500 font-medium"
                      >
                        {/* Progress Bar */}
                        <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden max-w-[200px]">
                          <div
                            className="h-full bg-[#CCFF00] rounded-full"
                            style={{ width: row.percent }}
                          />
                        </div>

                        {/* Stars in dark gray */}
                        <span className="text-slate-700 tracking-widest text-[11px]">
                          ★★★★★
                        </span>

                        {/* Count */}
                        <span className="w-8 text-right font-mono text-gray-500 text-xs">
                          {row.count}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3. Individual Reviews Filter */}
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-10 mb-4">
                  Individual Reviews:
                </h3>

                <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
                  {["All rating", "★ 5", "★ 4", "★ 3", "★ 2", "★ 1"].map(
                    (filter) => {
                      const isActive = selectedRatingFilter === filter;
                      return (
                        <button
                          key={filter}
                          type="button"
                          onClick={() => setSelectedRatingFilter(filter)}
                          className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all shrink-0 cursor-pointer ${
                            isActive
                              ? "bg-[#CCFF00] text-slate-950 font-semibold shadow-xs"
                              : "bg-[#F4F5F7] text-slate-700 hover:bg-slate-200"
                          }`}
                        >
                          {filter}
                        </button>
                      );
                    }
                  )}
                </div>

                {/* 4. Individual Review Cards */}
                <div className="mt-6 space-y-5">
                  {filteredReviews.map((rev) => (
                    <div
                      key={rev.id}
                      className="bg-white rounded-[24px] sm:rounded-[28px] p-6 sm:p-7 border border-[#E9ECEF] shadow-xs space-y-3"
                    >
                      {/* Reviewer Header */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="relative w-10 h-10 rounded-full overflow-hidden ring-1 ring-gray-100 shrink-0">
                            <Image
                              src={rev.avatar}
                              alt={rev.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                              {rev.name}
                            </h4>
                            <p className="text-xs text-gray-500">{rev.role}</p>
                          </div>
                        </div>

                        <span className="text-xs text-gray-400 font-normal">
                          {rev.date}
                        </span>
                      </div>

                      {/* Stars */}
                      <div className="text-slate-800 text-sm tracking-wider">
                        ★★★★★
                      </div>

                      {/* Comment text */}
                      <p className="text-xs sm:text-sm text-[#5E6470] leading-[170%] font-['Satoshi',sans-serif]">
                        {rev.comment}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* ===================================================== */}
          {/* Right Column: Floating Enrollment Sidebar Card        */}
          {/* ===================================================== */}
          <div className="lg:col-span-4 sticky top-6">
            <div className="bg-white rounded-[24px] sm:rounded-[28px] p-6 sm:p-7 shadow-[0_12px_40px_rgba(0,0,0,0.08)] border border-[#E9ECEF] flex flex-col justify-between">
              <div>
                {/* Heading: 112 Lessons (24 hours) */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                  112 Lessons (24 hours)
                </h3>

                {/* 3 Featured Lessons preview */}
                <div className="mt-4 space-y-3">
                  <div className="flex items-start justify-between text-xs sm:text-sm gap-2">
                    <span className="text-slate-800 font-medium">
                      <strong className="text-slate-500 font-normal mr-2">01</strong>
                      Introduction to Digital Assets
                    </span>
                    <span className="text-[#0047FF] font-semibold shrink-0">
                      12 mins
                    </span>
                  </div>

                  <div className="flex items-start justify-between text-xs sm:text-sm gap-2">
                    <span className="text-slate-800 font-medium">
                      <strong className="text-slate-500 font-normal mr-2">02</strong>
                      Design Principles for Impacts
                    </span>
                    <span className="text-[#0047FF] font-semibold shrink-0">
                      21 mins
                    </span>
                  </div>

                  <div className="flex items-start justify-between text-xs sm:text-sm gap-2">
                    <span className="text-slate-800 font-medium">
                      <strong className="text-slate-500 font-normal mr-2">03</strong>
                      Advanced Techniques in Digital Creation
                    </span>
                    <span className="text-[#0047FF] font-semibold shrink-0">
                      16 mins
                    </span>
                  </div>
                </div>

                {/* 99 more videos */}
                <p className="mt-3 text-xs text-gray-400 font-normal">
                  99 more videos
                </p>

                {/* Promotional subtext */}
                <p className="mt-5 text-xs text-gray-500 leading-relaxed font-['Satoshi',sans-serif]">
                  Ready to Dive In? Enroll Now and Start Building Your Digital
                  Future!
                </p>

                {/* Price: $25/lifetime */}
                <div className="mt-5 flex items-baseline">
                  <span className="text-[#0047FF] text-3xl font-extrabold tracking-tight">
                    $25
                  </span>
                  <span className="text-gray-400 text-xs ml-1 font-normal">
                    /lifetime
                  </span>
                </div>

                {/* Lime Pill Enroll Now Button */}
                <button
                  type="button"
                  className="w-full mt-4 bg-[#CCFF00] hover:bg-[#b8eb00] active:scale-98 text-slate-950 font-bold py-3.5 rounded-full text-sm sm:text-base transition-all duration-200 shadow-sm cursor-pointer text-center"
                >
                  Enroll Now
                </button>

                {/* This course include */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <h4 className="text-sm font-bold text-slate-900">
                    This course include
                  </h4>
                  <ul className="mt-3.5 space-y-3 text-xs text-slate-700">
                    <li className="flex items-center gap-3">
                      <svg
                        className="w-4 h-4 text-[#0047FF]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                        />
                      </svg>
                      <span>Learning Resources</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg
                        className="w-4 h-4 text-[#0047FF]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                      <span>Quality Lesson Videos</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg
                        className="w-4 h-4 text-[#0047FF]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                        />
                      </svg>
                      <span>Certificate of Completion</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg
                        className="w-4 h-4 text-[#0047FF]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      <span>Private Consultation</span>
                    </li>
                  </ul>
                </div>

                {/* Instructor Profile Widget */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="relative w-11 h-11 rounded-full overflow-hidden ring-2 ring-gray-100">
                      <Image
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80"
                        alt="PurePearl Studio"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-slate-900 leading-snug">
                        PurePearl Studio
                      </h5>
                      <p className="text-xs text-gray-500">Professional Creator</p>
                    </div>
                  </div>

                  <p className="mt-3.5 text-xs text-gray-500 leading-relaxed font-['Satoshi',sans-serif]">
                    Ready to Dive In? Enroll Now and Start Building Your Digital
                    Future!
                  </p>

                  <Link
                    href="/creators"
                    className="mt-3.5 inline-block border border-gray-300 hover:border-black text-slate-800 text-xs font-semibold px-5 py-2 rounded-full transition-colors"
                  >
                    See Full Profile
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal if clicked */}
      {isVideoModalOpen && (
        <div
          onClick={() => setIsVideoModalOpen(false)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl bg-black rounded-3xl overflow-hidden shadow-2xl aspect-[16/9]"
          >
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/20 hover:bg-white text-white hover:text-black flex items-center justify-center font-bold text-sm transition-all"
            >
              ✕
            </button>
            <div className="w-full h-full flex flex-col items-center justify-center text-white p-8 text-center">
              <span className="text-6xl mb-4">🎬</span>
              <h3 className="text-2xl font-bold">Course Video Preview</h3>
              <p className="text-white/70 text-sm mt-2 max-w-md">
                Build Digital Asset: A Comprehensive Guide by purepearl studio
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </main>
  );
}
