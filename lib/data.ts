export interface Lesson {
  title: string;
  duration: string;
}

export interface CurriculumSection {
  title: string;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  title: string;
  category: string;
  author: string;
  authorRole: string;
  authorAvatar: string;
  rating: number;
  reviewsCount: number;
  studentsCount: number;
  level: "Beginner" | "Intermediate" | "Advanced" | "All Levels";
  duration: string;
  lessonsCount: number;
  price: number;
  originalPrice: number;
  image: string;
  description: string;
  whatYouWillLearn: string[];
  curriculum: CurriculumSection[];
}

export interface Creator {
  id: string;
  name: string;
  handle: string;
  role: string;
  avatar: string;
  coverImage: string;
  rating: number;
  students: number;
  coursesCount: number;
  bio: string;
  skills: string[];
  courseIds: string[];
}

export const coursesData: Course[] = [
  {
    id: "1",
    title: "Learn Figma from Basic",
    category: "Design",
    author: "purepearl studio",
    authorRole: "Lead Product Designer",
    authorAvatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80",
    rating: 4.8,
    reviewsCount: 1240,
    studentsCount: 6850,
    level: "Beginner",
    duration: "14.5 hours",
    lessonsCount: 42,
    price: 25,
    originalPrice: 89,
    image: "/course-1.png",
    description:
      "Master the essentials of Figma from scratch. Learn interface fundamentals, vector tools, auto layout, component libraries, and interactive prototyping to build state-of-the-art digital products.",
    whatYouWillLearn: [
      "Master the Figma canvas, vector networks, and frames",
      "Harness the power of Auto Layout, constraints, and responsive grids",
      "Build scalable design systems with reusable components and variants",
      "Create high-fidelity interactive prototypes with Smart Animate",
      "Handoff production-ready assets and design specs to developers",
    ],
    curriculum: [
      {
        title: "Section 1: Getting Started with Figma",
        lessons: [
          { title: "Welcome & Figma Interface Tour", duration: "06:15" },
          { title: "Frames, Artboards & Basic Vector Shapes", duration: "12:30" },
          { title: "Pen Tool & Boolean Operations", duration: "18:45" },
        ],
      },
      {
        title: "Section 2: Layout & Typography Mastery",
        lessons: [
          { title: "Typography Hierarchies & Web Fonts", duration: "14:20" },
          { title: "Color Palettes, Styles & Color Variables", duration: "16:50" },
          { title: "Auto Layout 5.0 Deep Dive", duration: "25:10" },
        ],
      },
      {
        title: "Section 3: Components & Design Systems",
        lessons: [
          { title: "Creating Reusable Components & Instances", duration: "19:30" },
          { title: "Component Properties & Interactive Variants", duration: "22:40" },
          { title: "Publishing Team Libraries", duration: "15:15" },
        ],
      },
      {
        title: "Section 4: Clickable Prototyping & Handoff",
        lessons: [
          { title: "Interactive Connections & Transitions", duration: "13:25" },
          { title: "Smart Animate & Micro-interactions", duration: "21:00" },
          { title: "Dev Mode & Inspect Specifications", duration: "11:45" },
        ],
      },
    ],
  },
  {
    id: "2",
    title: "Build Digital Asset",
    category: "Design",
    author: "purepearl studio",
    authorRole: "3D & Motion Artist",
    authorAvatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
    rating: 4.7,
    reviewsCount: 890,
    studentsCount: 4200,
    level: "Intermediate",
    duration: "11.2 hours",
    lessonsCount: 34,
    price: 25,
    originalPrice: 79,
    image: "/course-2.png",
    description:
      "Learn how to create, package, and monetize high-demand digital assets including icon sets, 3D illustrations, UI kits, and design templates for global marketplaces.",
    whatYouWillLearn: [
      "Create high quality vector icon packages and illustration packs",
      "Optimize textures and lighting for 3D digital elements",
      "Package licensing guidelines and documentation for buyers",
      "Market digital products across top online creative stores",
    ],
    curriculum: [
      {
        title: "Section 1: Digital Asset Foundations",
        lessons: [
          { title: "Market Trends & In-Demand Asset Niches", duration: "08:40" },
          { title: "Asset Grid Systems & Consistency Rules", duration: "14:20" },
        ],
      },
      {
        title: "Section 2: Production Pipeline",
        lessons: [
          { title: "Iconography Vector Construction", duration: "22:15" },
          { title: "Exporting Multi-format Packages (SVG, PNG, AI)", duration: "17:30" },
        ],
      },
    ],
  },
  {
    id: "3",
    title: "The Power of Big Data",
    category: "Data Science",
    author: "Dr. Marcus Vance",
    authorRole: "Principal Data Scientist",
    authorAvatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80",
    rating: 4.9,
    reviewsCount: 2150,
    studentsCount: 9400,
    level: "Advanced",
    duration: "18.0 hours",
    lessonsCount: 56,
    price: 35,
    originalPrice: 110,
    image: "/course-3.png",
    description:
      "Unlock meaningful business intelligence with Big Data architectures, Apache Spark, distributed databases, real-time analytics streaming, and machine learning pipelines.",
    whatYouWillLearn: [
      "Understand modern distributed data architectures and lakes",
      "Process high-volume data streams with Apache Spark & Kafka",
      "Implement predictive analytics and automated clustering models",
      "Design enterprise-grade dashboards with real-time KPI metrics",
    ],
    curriculum: [
      {
        title: "Section 1: Big Data Landscape & Storage",
        lessons: [
          { title: "Distributed File Systems & Cloud Lakes", duration: "15:00" },
          { title: "NoSQL vs Columnar Databases", duration: "18:30" },
        ],
      },
      {
        title: "Section 2: Stream Processing & Insights",
        lessons: [
          { title: "Streaming Data Pipelines with Kafka", duration: "24:10" },
          { title: "Transforming Terabytes with Spark SQL", duration: "27:45" },
        ],
      },
    ],
  },
  {
    id: "4",
    title: "Balancing Productivity and Creativity",
    category: "Productivity",
    author: "Elena Rostova",
    authorRole: "Creative Director",
    authorAvatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80",
    rating: 4.6,
    reviewsCount: 740,
    studentsCount: 3100,
    level: "All Levels",
    duration: "8.5 hours",
    lessonsCount: 24,
    price: 20,
    originalPrice: 65,
    image: "/course-4.png",
    description:
      "Discover proven cognitive habits, focus rituals, and digital workflows that empower artists, founders, and designers to produce their finest work without burnout.",
    whatYouWillLearn: [
      "Design a sustainable creative schedule tailored to your peak energy",
      "Eliminate digital distractions and enter the deep work state effortlessly",
      "Frameworks for overcoming creative blocks and self-doubt",
      "Automate repetitive admin tasks to protect dedicated creation hours",
    ],
    curriculum: [
      {
        title: "Section 1: Designing Your Deep Work System",
        lessons: [
          { title: "Circadian Rhythms & Energy Mapping", duration: "10:15" },
          { title: "The Zero-Distraction Creative Sanctuary", duration: "13:40" },
        ],
      },
      {
        title: "Section 2: Momentum & Long-Term Output",
        lessons: [
          { title: "Managing Multi-project Deadlines", duration: "16:20" },
          { title: "Preventing Creative Burnout", duration: "19:00" },
        ],
      },
    ],
  },
  {
    id: "5",
    title: "Mastering Money Management",
    category: "Finance",
    author: "David Miller",
    authorRole: "Wealth Advisor & FinTech Consultant",
    authorAvatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&auto=format&fit=crop&q=80",
    rating: 4.8,
    reviewsCount: 1680,
    studentsCount: 7800,
    level: "Beginner",
    duration: "10.0 hours",
    lessonsCount: 30,
    price: 25,
    originalPrice: 85,
    image: "/course-5.png",
    description:
      "Gain full control of your personal and business finances with practical budgeting systems, tax optimization, index investing, and long-term wealth compounding strategies.",
    whatYouWillLearn: [
      "Construct cash flow systems that automatically save and invest",
      "Understand equity, index funds, dividends, and compound interest",
      "Tax efficiency strategies for freelancers, creators, and business owners",
      "Evaluate financial risk and build resilient safety reserves",
    ],
    curriculum: [
      {
        title: "Section 1: Financial Clarity & Cash Flow",
        lessons: [
          { title: "Auditing Your Net Worth & Outflows", duration: "11:20" },
          { title: "Automated Banking & Split Accounts", duration: "14:50" },
        ],
      },
      {
        title: "Section 2: Wealth Compounding Vehicles",
        lessons: [
          { title: "Passive Index Investing Explained", duration: "21:30" },
          { title: "Retirement Accounts & Tax Optimization", duration: "25:10" },
        ],
      },
    ],
  },
  {
    id: "6",
    title: "From Idea to Startup Success",
    category: "Business",
    author: "Alex Rivera",
    authorRole: "Serial Founder & Tech Angel",
    authorAvatar:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=120&auto=format&fit=crop&q=80",
    rating: 4.9,
    reviewsCount: 1950,
    studentsCount: 8900,
    level: "Intermediate",
    duration: "16.4 hours",
    lessonsCount: 48,
    price: 30,
    originalPrice: 99,
    image: "/course-6.png",
    description:
      "A complete roadmap to validate your product concepts, build an MVP, attract early adopters, raise funding, and scale your tech startup sustainably.",
    whatYouWillLearn: [
      "Validate customer pain points before writing a single line of code",
      "Rapidly build no-code and lightweight MVPs for fast testing",
      "Customer discovery interviews and product-market fit metrics",
      "Craft winning investor pitch decks and negotiate term sheets",
    ],
    curriculum: [
      {
        title: "Section 1: Ideation & Market Validation",
        lessons: [
          { title: "Identifying High-Value Problems", duration: "12:00" },
          { title: "Conducting 50 User Interviews That Reveal Truth", duration: "18:40" },
        ],
      },
      {
        title: "Section 2: Building the MVP & Launching",
        lessons: [
          { title: "The Lean MVP Feature Matrix", duration: "15:30" },
          { title: "Launch Playbook: Product Hunt & Viral Loops", duration: "22:15" },
        ],
      },
    ],
  },
];

export const creatorsData: Creator[] = [
  {
    id: "1",
    name: "Sarah Jenkins",
    handle: "@sarahdesigns",
    role: "Lead Product Designer & Figma Evangelist",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=160&auto=format&fit=crop&q=80",
    coverImage:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&auto=format&fit=crop&q=80",
    rating: 4.9,
    students: 26400,
    coursesCount: 5,
    bio: "Product designer with 10+ years shaping top consumer apps in Silicon Valley. Passionate about empowering the next generation of creative minds with design systems.",
    skills: ["Figma", "UI/UX Design", "Design Systems", "Prototyping"],
    courseIds: ["1", "2"],
  },
  {
    id: "2",
    name: "Dr. Marcus Vance",
    handle: "@vance_data",
    role: "Principal Data Scientist & AI Architect",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=160&auto=format&fit=crop&q=80",
    coverImage:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80",
    rating: 4.9,
    students: 18900,
    coursesCount: 4,
    bio: "Ex-Google AI researcher, author, and conference keynote speaker. Specializing in big data pipelines, machine learning, and scalable cloud compute.",
    skills: ["Big Data", "Python", "Apache Spark", "Machine Learning"],
    courseIds: ["3"],
  },
  {
    id: "3",
    name: "Elena Rostova",
    handle: "@elena_creative",
    role: "Creative Director & Executive Productivity Coach",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=160&auto=format&fit=crop&q=80",
    coverImage:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop&q=80",
    rating: 4.8,
    students: 14200,
    coursesCount: 3,
    bio: "Guiding creators, studio founders, and digital nomads to achieve extraordinary creative output without sacrificing mental wellbeing or family time.",
    skills: ["Productivity", "Mindfulness", "Creative Flow", "Workflow"],
    courseIds: ["4"],
  },
  {
    id: "4",
    name: "David Miller",
    handle: "@david_fintech",
    role: "Wealth Advisor & FinTech Founder",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=160&auto=format&fit=crop&q=80",
    coverImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
    rating: 4.8,
    students: 21500,
    coursesCount: 6,
    bio: "Certified financial strategist dedicated to demystifying capital growth, compounding returns, and tax strategy for modern professionals.",
    skills: ["Finance", "Investing", "Tax Strategy", "Wealth Planning"],
    courseIds: ["5"],
  },
  {
    id: "5",
    name: "Alex Rivera",
    handle: "@alex_startups",
    role: "Serial Entrepreneur & Angel Investor",
    avatar:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=160&auto=format&fit=crop&q=80",
    coverImage:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80",
    rating: 4.9,
    students: 31200,
    coursesCount: 7,
    bio: "Built and scaled 3 SaaS companies to acquisition. Now investing in early-stage tech ventures and sharing the blueprint with ambitious builders.",
    skills: ["Startups", "Growth", "Product-Market Fit", "Fundraising"],
    courseIds: ["6"],
  },
];
