"use client";

import Image from "next/image";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  quote: string;
}

export default function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      id: "1",
      name: "Sarah M.",
      role: "Enthusiastic Learner",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80",
      quote:
        '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
    },
    {
      id: "2",
      name: "James L.",
      role: "Lifelong Learner",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
      quote:
        '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
    },
    {
      id: "3",
      name: "Alex B.",
      role: "Inspired Creator",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80",
      quote:
        '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
    },
  ];

  return (
    <section
      className="w-full relative overflow-hidden py-20 sm:py-28 md:py-32 flex justify-center border-t border-slate-100"
      style={{
        background: `
          radial-gradient(circle 700px at 52% 16%, rgba(204, 255, 0, 0.22) 0%, rgba(204, 255, 0, 0.05) 45%, transparent 70%),
          radial-gradient(circle 600px at 98% 30%, rgba(204, 255, 0, 0.26) 0%, rgba(204, 255, 0, 0.06) 40%, transparent 65%),
          radial-gradient(circle 550px at 4% 92%, rgba(59, 130, 246, 0.16) 0%, transparent 65%),
          #FFFFFF
        `,
      }}
    >
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 relative z-10">
        {/* ========================================================= */}
        {/* Section Header (2-Column Layout: Heading & Subtitle)      */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start justify-between">
          {/* Left: Heading */}
          <div className="lg:col-span-6">
            <h2 className="text-[#040819] font-bold text-3xl sm:text-4xl lg:text-[44px] leading-[115%] tracking-[-0.02em]">
              Discover What Our <br />
              Community Is Saying
            </h2>
          </div>

          {/* Right: Descriptive Subtitle */}
          <div className="lg:col-span-6 flex lg:justify-end">
            <p className="text-[#82868E] text-xs sm:text-sm md:text-[15px] leading-[165%] font-['Satoshi',sans-serif] max-w-[540px]">
              At ByteSpace, our vibrant community of learners and creators is at
              the heart of what we do. Hear directly from those who have
              experienced the transformative journey of learning and creating on
              our platform. Explore testimonials that reflect the diverse
              perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 3 Testimonial Cards Grid                                  */}
        {/* ========================================================= */}
        <div className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-[28px] sm:rounded-[32px] p-6 sm:p-7 md:p-8 border border-[#E9ECEF] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Round Avatar Profile */}
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden shadow-xs shrink-0 ring-2 ring-slate-100">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    fill
                    sizes="64px"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Name & Role */}
                <div className="mt-5">
                  <h3 className="text-[#040819] font-bold text-base sm:text-lg leading-snug">
                    {item.name}
                  </h3>
                  <p className="text-[#0047FF] font-medium text-xs sm:text-sm mt-0.5">
                    {item.role}
                  </p>
                </div>

                {/* Quote Text */}
                <p className="mt-4 sm:mt-5 text-[#5E6470] text-xs sm:text-sm leading-[165%] font-['Satoshi',sans-serif]">
                  {item.quote}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
