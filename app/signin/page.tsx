"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate sign-in action
    alert(`Signing in with ${email}...`);
  };

  return (
    <main className="min-h-screen w-full bg-grid-pattern relative flex flex-col justify-between items-center px-4 py-8 sm:py-12">
      {/* Top Bar with Home Link */}
      <div className="w-full max-w-5xl flex items-center justify-between mb-6">
        <Link href="/" className="inline-flex items-center gap-2 group">
          <div className="w-[30px] h-[32px] overflow-hidden relative shrink-0">
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

        <Link
          href="/"
          className="text-xs sm:text-sm font-medium text-white/80 hover:text-white transition-colors"
        >
          ← Back to Website
        </Link>
      </div>

      {/* Main Centered Auth Card */}
      <div className="w-full max-w-md bg-white rounded-3xl p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/20 relative z-10 my-auto">
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#040819]">
            Welcome Back
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-gray-500 font-['Satoshi',sans-serif]">
            Enter your email and password to access your courses.
          </p>
        </div>

        {/* Social Sign In Buttons */}
        <div className="mt-6 flex flex-col gap-2.5">
          <button
            type="button"
            className="w-full flex items-center justify-center gap-3 py-2.5 px-4 border border-gray-200 rounded-full text-xs sm:text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.65v3h3.88c2.27-2.09 3.66-5.17 3.66-9.09z"
              />
              <path
                fill="#34A853"
                d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.24v3.09C3.26 21.48 7.33 24 12 24z"
              />
              <path
                fill="#FBBC05"
                d="M5.28 14.32c-.25-.72-.38-1.49-.38-2.32s.13-1.6.38-2.32V6.59H1.24C.45 8.16 0 9.97 0 12s.45 3.84 1.24 5.41l4.04-3.09z"
              />
              <path
                fill="#EA4335"
                d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.52 1.24 6.59l4.04 3.09c.95-2.83 3.6-4.93 6.72-4.93z"
              />
            </svg>
            Continue with Google
          </button>
        </div>

        {/* Or Divider */}
        <div className="my-6 flex items-center gap-3">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-xs text-gray-400 font-medium">Or with email</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Credentials Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
              Email Address
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-[#040819] placeholder:text-gray-400 focus:outline-none focus:border-[#040819] focus:bg-white transition-all"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
                Password
              </label>
              <a href="#" className="text-xs text-[#0047FF] hover:underline font-medium">
                Forgot password?
              </a>
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-[#040819] placeholder:text-gray-400 focus:outline-none focus:border-[#040819] focus:bg-white transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-600"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* Remember me */}
          <div className="flex items-center gap-2 pt-1">
            <input
              type="checkbox"
              id="remember"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="rounded border-gray-300 text-[#040819] focus:ring-[#040819]"
            />
            <label htmlFor="remember" className="text-xs text-gray-600 cursor-pointer">
              Remember me for 30 days
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-2 bg-[#CCFF00] hover:bg-[#b8eb00] active:scale-98 text-slate-950 font-bold py-3.5 rounded-full text-sm sm:text-base transition-all shadow-md cursor-pointer"
          >
            Sign In
          </button>
        </form>

        {/* Switch to Sign Up */}
        <p className="mt-6 text-center text-xs text-gray-500 font-['Satoshi',sans-serif]">
          Don&apos;t have an account?{" "}
          <Link href="/join" className="text-[#0047FF] font-bold hover:underline">
            Sign up now
          </Link>
        </p>
      </div>

      {/* Subtle Copyright */}
      <p className="text-xs text-white/50 mt-6">
        © {new Date().getFullYear()} ByteSpace Inc. All rights reserved.
      </p>
    </main>
  );
}
