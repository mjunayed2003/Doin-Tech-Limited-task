"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#0047FF] text-white relative z-50">
      {/* 1440px Container with 120px Desktop Height */}
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16 xl:px-20 h-20 lg:h-[120px] flex items-center justify-between relative">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/Header_Logo.png"
            alt="ByteSpace Logo"
            width={171}
            height={37}
            priority
            className="w-[145px] sm:w-[171px] h-auto object-contain"
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
        <div className="flex lg:hidden items-center gap-4">
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

          {/* Hamburger Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="text-white p-1 hover:text-white/80 transition-colors cursor-pointer"
          >
            {isMobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#003ee6] border-t border-white/10 px-6 py-5 flex flex-col gap-4 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-3">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-medium text-white hover:text-white/80 transition-colors py-1"
            >
              Home
            </Link>
            <Link
              href="/courses"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-medium text-white hover:text-white/80 transition-colors py-1"
            >
              Courses
            </Link>
            <Link
              href="/creators"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-medium text-white hover:text-white/80 transition-colors py-1"
            >
              Creators
            </Link>
          </nav>

          <div className="h-px bg-white/15 my-1" />

          <div className="flex flex-col gap-3">
            <Link
              href="/signin"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-medium text-white hover:text-white/80 transition-colors py-1"
            >
              Sign In
            </Link>
            <Link
              href="/join"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-medium text-white hover:text-white/80 transition-colors py-1"
            >
              Join Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
