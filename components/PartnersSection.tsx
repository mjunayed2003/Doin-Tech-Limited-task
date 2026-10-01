import Image from "next/image";

export default function PartnersSection() {
  const logos = [
    { src: "/Frame1.png", alt: "Logoipsum Partner 1" },
    { src: "/Frame2.png", alt: "Logoipsum Partner 2" },
    { src: "/Frame3.png", alt: "Logoipsum Partner 3" },
    { src: "/Frame4.png", alt: "Logoipsum Partner 4" },
    { src: "/Frame5.png", alt: "Logoipsum Partner 5" },
  ];

  return (
    <section className="w-full bg-[#F5F6F8] py-8 sm:py-10 md:py-12 border-t border-slate-200/60 relative z-20">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="flex flex-wrap items-center justify-center sm:justify-between gap-5 sm:gap-8 md:gap-12 lg:gap-16">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center transition-all duration-300 hover:scale-105 opacity-85 hover:opacity-100 cursor-pointer px-2"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={160}
                height={38}
                priority
                className="h-6 sm:h-7 md:h-8 lg:h-9 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
