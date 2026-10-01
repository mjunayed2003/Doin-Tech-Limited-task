"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 4000);
    }
  };

  const column1Links = [
    { label: "Featured Courses", href: "/courses" },
    { label: "Featured Categories", href: "/categories" },
    { label: "Business", href: "/courses?category=business" },
    { label: "IT", href: "/courses?category=it" },
    { label: "Design", href: "/courses?category=design" },
  ];

  const column2Links = [
    { label: "Development", href: "/courses?category=development" },
    { label: "Marketing", href: "/courses?category=marketing" },
    { label: "Photography", href: "/courses?category=photography" },
    { label: "Finance", href: "/courses?category=finance" },
    { label: "Sport", href: "/courses?category=sport" },
  ];

  const column3Links = [
    { label: "Become a Creator", href: "/creators" },
    { label: "Affiliate Program", href: "/affiliate" },
    { label: "Contact", href: "/contact" },
    { label: "Help", href: "/help" },
    { label: "About", href: "/about" },
  ];

  return (
    <footer className="w-full bg-white text-[#040819] relative z-10 pt-16 sm:pt-20 lg:pt-24 pb-10 sm:pb-14 border-t border-[#F0F2F5]">
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        {/* ========================================================= */}
        {/* Top Section: Newsletter (Left) & Nav Links (Right)         */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start justify-between">
          {/* Left Column: Brand, Tagline, Email Form */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col items-start max-w-[480px]">
            {/* Logo: Lime Icon + ByteSpace Text */}
            <Link href="/" className="inline-flex items-center gap-2 group">
              <div className="w-[30px] h-[32px] overflow-hidden relative shrink-0">
                <Image
                  src="/images/Header_Logo.png"
                  alt="ByteSpace Logo"
                  width={152}
                  height={33}
                  className="max-w-none object-left object-contain w-auto h-full"
                />
              </div>
              <span className="font-bold text-[24px] sm:text-[26px] text-[#040819] tracking-[-0.03em] leading-none group-hover:opacity-90 transition-opacity">
                ByteSpace
              </span>
            </Link>

            {/* Newsletter Tagline */}
            <p className="mt-5 text-[#333842] text-sm sm:text-[15px] leading-relaxed font-['Satoshi',sans-serif]">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>

            {/* Email Subscription Form */}
            <form
              onSubmit={handleSubscribe}
              className="mt-6 w-full flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
            >
              <div className="relative flex-1">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full bg-white border border-[#D5D9E2] text-[#040819] placeholder:text-[#9CA3AF] text-sm sm:text-[15px] px-6 py-3 rounded-full focus:outline-none focus:border-[#040819] transition-colors"
                />
              </div>

              <button
                type="submit"
                className="bg-[#CCFF00] hover:bg-[#b8eb00] active:scale-95 text-[#040819] font-medium text-sm sm:text-base px-8 py-3 rounded-full transition-all duration-200 shrink-0 cursor-pointer shadow-xs text-center"
              >
                Search
              </button>
            </form>

            {/* Success message feedback */}
            {isSubscribed && (
              <p className="mt-2 text-xs text-emerald-600 font-medium">
                Thank you for subscribing to our newsletter!
              </p>
            )}

            {/* Disclaimer & Policy Notice */}
            <p className="mt-4 text-[#82868E] text-[11px] sm:text-xs leading-[160%] font-['Satoshi',sans-serif]">
              By subscribing, you agree to our{" "}
              <Link
                href="/privacy"
                className="underline hover:text-[#040819] transition-colors"
              >
                Privacy Policy
              </Link>{" "}
              and consent to receive updates from our company.
            </p>
          </div>

          {/* Right Column: 3 Columns of Navigation Links */}
          <div className="lg:col-span-6 xl:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 lg:justify-items-end">
            {/* Column 1 */}
            <div className="flex flex-col space-y-3.5 sm:space-y-4">
              {column1Links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm sm:text-[15px] text-[#333842] hover:text-[#0047FF] transition-colors font-['Satoshi',sans-serif] leading-normal"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Column 2 */}
            <div className="flex flex-col space-y-3.5 sm:space-y-4">
              {column2Links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm sm:text-[15px] text-[#333842] hover:text-[#0047FF] transition-colors font-['Satoshi',sans-serif] leading-normal"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Column 3 */}
            <div className="flex flex-col space-y-3.5 sm:space-y-4">
              {column3Links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm sm:text-[15px] text-[#333842] hover:text-[#0047FF] transition-colors font-['Satoshi',sans-serif] leading-normal"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* Bottom Bar: Horizontal Line, Copyright, Legal Links        */}
        {/* ========================================================= */}
        <div className="mt-14 sm:mt-18 lg:mt-24 pt-6 sm:pt-8 border-t border-[#E5E7EB] flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-xs sm:text-[13px] text-[#82868E] font-['Satoshi',sans-serif]">
            ® 2023 ByteSpace. All rights reserved.
          </p>

          {/* Legal Links */}
          <div className="flex items-center gap-6 sm:gap-8 flex-wrap justify-center">
            <Link
              href="/privacy"
              className="text-xs sm:text-[13px] text-[#5E6470] hover:text-[#040819] transition-colors font-['Satoshi',sans-serif]"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs sm:text-[13px] text-[#5E6470] hover:text-[#040819] transition-colors font-['Satoshi',sans-serif]"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookies"
              className="text-xs sm:text-[13px] text-[#5E6470] hover:text-[#040819] transition-colors font-['Satoshi',sans-serif]"
            >
              Cookies Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
