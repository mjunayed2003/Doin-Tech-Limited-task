"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-transparent text-white relative z-50 shrink-0">
      {/* 1440px Container with proper Header Height */}
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-14 xl:px-16 h-16 sm:h-20 lg:h-[72px] flex items-center justify-between relative">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/images/Header_Logo.png"
            alt="ByteSpace Logo"
            width={152}
            height={33}
            priority
            className="w-[128px] sm:w-[148px] h-auto object-contain"
          />
        </Link>

        {/* Center: Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-10 xl:gap-12 absolute left-1/2 -translate-x-1/2">
          <Link
            href="/"
            className="text-base font-medium text-white hover:text-white/80 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/courses"
            className="text-base font-medium text-white hover:text-white/80 transition-colors"
          >
            Courses
          </Link>
          <Link
            href="/creators"
            className="text-base font-medium text-white hover:text-white/80 transition-colors"
          >
            Creators
          </Link>
        </nav>

        {/* Right: Actions & Cart (Desktop) */}
        <div className="hidden lg:flex items-center gap-7 xl:gap-8 shrink-0">
          <Link
            href="/signin"
            className="text-base font-medium text-white hover:text-white/80 transition-colors"
          >
            Sign In
          </Link>
          <Link
            href="/join"
            className="text-base font-medium text-white hover:text-white/80 transition-colors"
          >
            Join Us
          </Link>
          <button
            type="button"
            aria-label="Shopping Cart"
            className="text-white hover:text-white/80 transition-colors cursor-pointer p-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 8h12l1 12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1L6 8z" />
              <path d="M9 8V6a3 3 0 0 1 6 0v2" />
            </svg>
          </button>
        </div>

        {/* Mobile / Tablet Actions (Right side) */}
        <div className="flex lg:hidden items-center gap-2 sm:gap-3">
          <button
            type="button"
            aria-label="Shopping Cart"
            className="text-white hover:text-white/80 transition-colors cursor-pointer p-2.5 rounded-full hover:bg-white/10 active:scale-95"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 sm:w-6 sm:h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 8h12l1 12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1L6 8z" />
              <path d="M9 8V6a3 3 0 0 1 6 0v2" />
            </svg>
          </button>

          {/* Hamburger Menu Button with 44px min touch target */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="text-white p-2.5 rounded-lg hover:bg-white/10 active:scale-95 transition-colors cursor-pointer"
          >
            {isMobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 sm:w-7 sm:h-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 sm:w-7 sm:h-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#0037D4]/95 backdrop-blur-md border-t border-white/10 px-6 py-5 flex flex-col gap-4 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-1">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-medium text-white hover:text-[#CCFF00] hover:bg-white/10 transition-colors py-2.5 px-3 rounded-xl active:bg-white/15"
            >
              Home
            </Link>
            <Link
              href="/courses"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-medium text-white hover:text-[#CCFF00] hover:bg-white/10 transition-colors py-2.5 px-3 rounded-xl active:bg-white/15"
            >
              Courses
            </Link>
            <Link
              href="/creators"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-medium text-white hover:text-[#CCFF00] hover:bg-white/10 transition-colors py-2.5 px-3 rounded-xl active:bg-white/15"
            >
              Creators
            </Link>
          </nav>

          <div className="h-px bg-white/15 my-0.5" />

          <div className="flex flex-col gap-2 pt-1">
            <Link
              href="/signin"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-medium text-white hover:bg-white/10 transition-colors py-2.5 px-3 rounded-xl active:bg-white/15 text-center border border-white/20"
            >
              Sign In
            </Link>
            <Link
              href="/join"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-semibold text-slate-950 bg-[#CCFF00] hover:bg-[#b8eb00] transition-colors py-2.5 px-3 rounded-full active:scale-98 text-center shadow-sm"
            >
              Join Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
