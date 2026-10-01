"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Signing in as ${email}...`);
  };

  return (
    <main className="min-h-screen w-full bg-grid-pattern relative flex items-center justify-center p-4 sm:p-6 lg:p-10 overflow-hidden">
      {/* Main 2-Column Container */}
      <div className="w-full max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center relative z-10 py-6">
        {/* ========================================================= */}
        {/* LEFT COLUMN: Logo, Headline & Visual Graphic              */}
        {/* ========================================================= */}
        <div className="lg:col-span-6 flex flex-col items-start justify-center relative select-none">
          {/* ByteSpace Logo at top */}
          <Link href="/" className="inline-flex items-center gap-2 group mb-5">
            <div className="w-[32px] h-[34px] overflow-hidden relative shrink-0">
              <Image
                src="/images/Header_Logo.png"
                alt="ByteSpace"
                width={152}
                height={33}
                className="max-w-none object-left object-contain w-auto h-full"
              />
            </div>
            <span className="font-bold text-2xl text-white tracking-tight">
              ByteSpace
            </span>
          </Link>

          {/* Heading */}
          <h1 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl tracking-tight leading-snug">
            Sign in and continue
          </h1>

          {/* Subtitle */}
          <p className="mt-3 text-white/80 text-xs sm:text-sm leading-relaxed max-w-md font-['Satoshi',sans-serif]">
            Pick up right where you left off. Continue your lessons, check project
            feedback, and collaborate with your community.
          </p>

          {/* User's Exact Graphic Image from Figma */}
          <div className="mt-6 sm:mt-8 relative w-full max-w-[460px] lg:max-w-[490px]">
            <Image
              src="/images/create  and signin.png"
              alt="ByteSpace Course Showcase"
              width={530}
              height={560}
              priority
              className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.25)]"
            />
          </div>
        </div>

        {/* ========================================================= */}
        {/* RIGHT COLUMN: White Login Card                            */}
        {/* ========================================================= */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          <div className="w-full max-w-[460px] bg-white rounded-[32px] sm:rounded-[36px] p-8 sm:p-12 shadow-[0_24px_60px_rgba(0,0,0,0.25)] border border-white/40 flex flex-col justify-between">
            <div>
              {/* Eyebrow */}
              <span className="text-xs sm:text-sm font-semibold text-[#0047FF]">
                Sign In
              </span>

              {/* Heading */}
              <h2 className="mt-1 text-3xl sm:text-4xl font-extrabold text-[#040819] tracking-tight leading-[115%]">
                Welcome back to <br />
                ByteSpace
              </h2>

              {/* Form */}
              <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="designer@example.com"
                    className="w-full px-4 py-3.5 bg-white border border-[#E2E8F0] rounded-xl text-sm text-slate-900 placeholder:text-gray-400 focus:outline-none focus:border-[#0047FF] focus:ring-1 focus:ring-[#0047FF] transition-all"
                  />
                </div>

                {/* Password */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-xs font-semibold text-slate-700">
                      Password
                    </label>
                    <a
                      href="#"
                      className="text-xs text-[#0047FF] hover:underline"
                    >
                      Forgot?
                    </a>
                  </div>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full px-4 py-3.5 bg-white border border-[#E2E8F0] rounded-xl text-sm text-slate-900 placeholder:text-gray-400 focus:outline-none focus:border-[#0047FF] focus:ring-1 focus:ring-[#0047FF] transition-all"
                  />
                </div>

                {/* Continue Button (Right aligned) */}
                <div className="pt-2 flex justify-end">
                  <button
                    type="submit"
                    className="bg-[#CCFF00] hover:bg-[#b8eb00] active:scale-95 text-slate-950 font-bold text-sm sm:text-base px-8 py-3 rounded-full transition-all duration-200 cursor-pointer shadow-sm text-center"
                  >
                    Continue
                  </button>
                </div>
              </form>
            </div>

            {/* Bottom link: Don't have an account? Sign up */}
            <div className="mt-12 sm:mt-16 text-center text-xs text-gray-500 font-['Satoshi',sans-serif]">
              Don&apos;t have an account?{" "}
              <Link
                href="/join"
                className="text-[#0047FF] font-semibold hover:underline"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
