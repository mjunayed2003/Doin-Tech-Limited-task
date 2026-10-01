"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function JoinPage() {
  const [role, setRole] = useState<"learner" | "creator">("learner");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) {
      alert("Please agree to the Terms of Service.");
      return;
    }
    alert(`Account created for ${fullName} (${role})!`);
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

      {/* Main Centered Join Card */}
      <div className="w-full max-w-md bg-white rounded-3xl p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/20 relative z-10 my-auto">
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#040819]">
            Create an Account
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-gray-500 font-['Satoshi',sans-serif]">
            Join thousands of passionate learners and creators worldwide.
          </p>
        </div>

        {/* Role Toggle Selector */}
        <div className="mt-6 bg-gray-100 p-1 rounded-full grid grid-cols-2 gap-1">
          <button
            type="button"
            onClick={() => setRole("learner")}
            className={`py-2 text-xs sm:text-sm font-bold rounded-full transition-all cursor-pointer ${
              role === "learner"
                ? "bg-white text-slate-900 shadow-xs"
                : "text-gray-500 hover:text-black"
            }`}
          >
            I&apos;m a Learner
          </button>
          <button
            type="button"
            onClick={() => setRole("creator")}
            className={`py-2 text-xs sm:text-sm font-bold rounded-full transition-all cursor-pointer ${
              role === "creator"
                ? "bg-[#CCFF00] text-slate-950 shadow-xs"
                : "text-gray-500 hover:text-black"
            }`}
          >
            I&apos;m a Creator
          </button>
        </div>

        {/* Credentials Form */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
              Full Name
            </label>
            <input
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Sarah Jenkins"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-[#040819] placeholder:text-gray-400 focus:outline-none focus:border-[#040819] focus:bg-white transition-all"
            />
          </div>

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
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="At least 8 characters"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-[#040819] placeholder:text-gray-400 focus:outline-none focus:border-[#040819] focus:bg-white transition-all"
            />
          </div>

          {/* Agree Terms Checkbox */}
          <div className="flex items-start gap-2 pt-1">
            <input
              type="checkbox"
              id="terms"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-0.5 rounded border-gray-300 text-[#040819] focus:ring-[#040819]"
            />
            <label htmlFor="terms" className="text-xs text-gray-500 leading-normal cursor-pointer">
              I agree to ByteSpace&apos;s{" "}
              <a href="#" className="text-[#0047FF] underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-[#0047FF] underline">
                Privacy Policy
              </a>
              .
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-2 bg-[#CCFF00] hover:bg-[#b8eb00] active:scale-98 text-slate-950 font-bold py-3.5 rounded-full text-sm sm:text-base transition-all shadow-md cursor-pointer"
          >
            {role === "creator" ? "Apply as Creator" : "Create Free Account"}
          </button>
        </form>

        {/* Switch to Sign In */}
        <p className="mt-6 text-center text-xs text-gray-500 font-['Satoshi',sans-serif]">
          Already have an account?{" "}
          <Link href="/signin" className="text-[#0047FF] font-bold hover:underline">
            Sign in
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
