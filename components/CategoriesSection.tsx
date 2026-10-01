import Image from "next/image";

interface CategoryItem {
  id: string;
  name: string;
  image: string;
}

export default function CategoriesSection() {
  const categories: CategoryItem[] = [
    {
      id: "design",
      name: "Design",
      image: "/images/emoji1.png",
    },
    {
      id: "development",
      name: "Development",
      image: "/images/emoji2.png",
    },
    {
      id: "it-software",
      name: "IT & Software",
      image: "/images/emoji3.png",
    },
    {
      id: "business",
      name: "Business",
      image: "/images/emoji4.png",
    },
    {
      id: "marketing",
      name: "Marketing",
      image: "/images/emoji5.png",
    },
    {
      id: "photography",
      name: "Photography",
      image: "/images/emoji6.png",
    },
  ];

  return (
    <section className="w-full bg-white py-16 sm:py-20 md:py-24 text-slate-900 border-t border-slate-100">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Subtitle */}
        <div className="text-center max-w-[917px] mx-auto px-2">
          <h2 className="text-[#040819] font-semibold text-2xl xs:text-3xl sm:text-3xl md:text-[36px] leading-[120%] tracking-[-0.01em] max-w-[792px] mx-auto">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="mt-3 sm:mt-4 text-xs sm:text-base md:text-[18px] text-[#82868E] max-w-[917px] mx-auto leading-[160%] font-normal tracking-normal font-['Satoshi',sans-serif]">
            At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there&apos;s something for everyone. Unleash your potential and explore our carefully curated categories.
          </p>
        </div>

        {/* 6 Category Cards Grid */}
        <div className="mt-10 sm:mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-5 lg:gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-[20px] sm:rounded-[28px] py-5 sm:py-8 px-2.5 sm:px-4 border border-[#E9ECEF] shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-xl hover:border-slate-300 hover:-translate-y-1 active:scale-95 transition-all duration-300 flex flex-col items-center justify-center text-center cursor-pointer group"
            >
              {/* Exact Figma Emoji Image */}
              <div className="relative w-12 h-12 sm:w-16 sm:h-16 group-hover:scale-110 transition-transform duration-300 shrink-0">
                <Image
                  src={category.image}
                  alt={category.name}
                  width={64}
                  height={64}
                  priority
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Category Name */}
              <h3 className="mt-3 sm:mt-5 text-[#040819] font-semibold text-xs sm:text-base leading-snug group-hover:text-[#0047FF] transition-colors line-clamp-1">
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

