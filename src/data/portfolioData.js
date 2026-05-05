export const personalInfo = {
  name: "Nikhil Arora",
  title: "Full Stack Developer",
  email: "aroranikhil8184@gmail.com",
  phone: "+91-8699513778",
  location: "Chandigarh, India",
  linkedin: "https://www.linkedin.com/in/nikhilarora6541b91a4/",
  github: "https://github.com/NikhilArora5",
  portfolio: "https://aroranikhil.in",
};

export const typewriterSequence = [
  "MERN Stack Developer",
  2000,
  "React Native Engineer",
  2000,
  "Payment Systems Expert",
  2000,
  "Workflow Automation Builder",
  2000,
  "Open to Remote & Freelance",
  2000,
];

export const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "6+", label: "Projects Shipped" },
  { value: "2", label: "Companies" },
  { value: "8.56", label: "CGPA" },
];

export const skillGroups = [
  {
    category: "Frontend",
    icon: "FaReact",
    skills: [
      "React.js",
      "Next.js",
      "React Native",
      "Redux",
      "Redux Toolkit",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
    ],
  },
  {
    category: "Backend",
    icon: "FaNodeJs",
    skills: ["Node.js", "Express.js", "REST APIs", "Socket.io"],
  },
  {
    category: "Databases",
    icon: "SiMongodb",
    skills: ["MongoDB", "PostgreSQL", "SQL", "Firebase"],
  },
  {
    category: "Payments & APIs",
    icon: "SiStripe",
    skills: [
      "Stripe Connect OAuth",
      "Stripe Terminal (S700)",
      "Stripe Webhooks",
      "Stripe SDK",
    ],
  },
  {
    category: "Automation",
    icon: "FaCog",
    skills: ["n8n", "Playwright", "Web Scraping", "Cron Jobs"],
  },
  {
    category: "Cloud & DevOps",
    icon: "FaAws",
    skills: ["AWS EC2", "AWS S3", "Git", "GitHub", "Postman", "Jira"],
  },
];

export const experience = [
  {
    company: "Glocify Technologies",
    role: "Full Stack Developer",
    period: "Jan 2024 – Present",
    current: true,
    location: "Chandigarh, India",
    achievements: [
      "Architected React Native + Node.js mobile POS app with Stripe Terminal (S700) — secure in-person card payments with Wi-Fi & Bluetooth reader connectivity",
      "Engineered end-to-end automation pipeline (Playwright + n8n + AWS S3) — eliminated 100% of manual merchant portal report extraction",
      "Built multi-region slot booking platform with complex multi-timezone logic to prevent scheduling conflicts across global regions",
      "Developed custom business page builder with Stripe subscription plans and license key sharing for team access",
      "Delivered 4+ production apps across mobile and web in under 12 months",
    ],
  },
  {
    company: "Omva Data Solutions",
    role: "Software Developer (MERN Stack)",
    period: "Oct 2022 – Jan 2024",
    current: false,
    location: "Chandigarh, India",
    achievements: [
      "Built POS-integrated food ordering system with real-time order sync between online platform and in-house POS via Socket.io",
      "Optimized cron jobs reducing server load by ~70%; automated billing management and critical product reporting workflows",
      "Integrated third-party payment gateways and built bifurcated financial reports with dynamic deposit systems per client type",
      "Automated financial reporting (sales, refunds, cancellations, revenue) — eliminating manual reporting workflows",
    ],
  },
];

export const projects = [
  {
    id: 1,
    name: "Pokato",
    subtitle: "Mobile POS Payment Application",
    description:
      "Mobile POS app enabling secure in-person card payments via Stripe Terminal (S700 hardware). Features merchant onboarding via Stripe Connect OAuth, Wi-Fi & Bluetooth reader connectivity, and an analytics dashboard tracking transaction volumes, payment statuses, and revenue trends.",
    stack: ["React Native", "Node.js", "Stripe Terminal", "PostgreSQL", "React.js"],
    categories: ["payments", "mobile"],
    highlight: "Stripe Terminal S700 integration",
    company: "Glocify Technologies",
    color: "#3b82f6",
  },
  {
    id: 2,
    name: "Allaypay Automation",
    subtitle: "Merchant Portal Web Automation & Data Pipeline",
    description:
      "End-to-end automation pipeline using Playwright (Node.js) to programmatically log into merchant portals with no public API and extract payment reports. Data flows: Playwright → AWS S3 → n8n webhook → PostgreSQL. Fully automated daily reconciliation replacing 100% of manual work.",
    stack: ["Node.js", "Playwright", "n8n", "AWS S3", "PostgreSQL"],
    categories: ["automation"],
    highlight: "100% manual work eliminated",
    company: "Glocify Technologies",
    color: "#06b6d4",
  },
  {
    id: 3,
    name: "Broodbox App",
    subtitle: "Multi-Region Slot Booking Platform",
    description:
      "Cross-platform slot booking app (React Native + Node.js) with complex multi-timezone logic to prevent scheduling conflicts across global regions. Stripe SDK & webhooks manage payments and dynamically update user booking quotas on booking/cancellation events.",
    stack: ["React Native", "Node.js", "Stripe", "PostgreSQL", "Tailwind CSS"],
    categories: ["payments", "mobile"],
    highlight: "Multi-timezone conflict prevention",
    company: "Glocify Technologies",
    color: "#8b5cf6",
  },
  {
    id: 4,
    name: "CrownPages",
    subtitle: "Custom Business Page Builder",
    description:
      "Platform for creating branded business pages with unique slugs and 7+ pre-built section templates (Hero, About, Gallery, FAQ, Features, Contact). Stripe subscription plans with license key sharing for team-based access control.",
    stack: ["Next.js", "Node.js", "Stripe"],
    categories: ["payments"],
    highlight: "7+ customizable templates",
    company: "Glocify Technologies",
    color: "#f59e0b",
  },
  {
    id: 5,
    name: "A-Board / Tree Drive",
    subtitle: "Restaurant POS & Online Ordering",
    description:
      "Real-time POS-integrated food ordering system with Socket.io for instant order sync between the online platform and in-house POS. Automated financial reporting (sales, refunds, revenue) via scheduled cron jobs — eliminating all manual reporting.",
    stack: ["Node.js", "React.js", "Socket.io", "MongoDB", "Cron Jobs"],
    categories: ["professional"],
    highlight: "Real-time Socket.io sync",
    company: "Omva Data Solutions",
    color: "#10b981",
  },
  {
    id: 6,
    name: "ZeroPrint",
    subtitle: "Automated URL Scanner",
    description:
      "Scheduled URL scanning application with randomized fetching intervals. Features an in-app browser with automated scan execution via cron jobs.",
    stack: ["Node.js", "React Native", "Cron Jobs"],
    categories: ["automation", "mobile"],
    highlight: "Automated scheduled scanning",
    company: "Glocify Technologies",
    color: "#ef4444",
  },
];

export const freelanceServices = [
  {
    icon: "code",
    title: "Full Stack Web Development",
    description: "React + Node.js apps — from MVPs to production-ready platforms",
  },
  {
    icon: "mobile",
    title: "Mobile App Development",
    description: "Cross-platform React Native apps for iOS and Android",
  },
  {
    icon: "payment",
    title: "Payment Gateway Integration",
    description: "Stripe Connect, Stripe Terminal, subscriptions & webhooks",
  },
  {
    icon: "automation",
    title: "Workflow Automation",
    description: "n8n pipelines, Playwright scrapers, cron jobs & data flows",
  },
  {
    icon: "api",
    title: "API Development",
    description: "RESTful APIs, third-party integrations, real-time with Socket.io",
  },
  {
    icon: "scraping",
    title: "Web Scraping & Data Pipelines",
    description: "Automated extraction, transformation & cloud storage (AWS S3)",
  },
];

export const processSteps = [
  { step: "01", label: "Brief", desc: "Tell me what you need" },
  { step: "02", label: "Scope", desc: "We align on stack & timeline" },
  { step: "03", label: "Build", desc: "I ship clean, tested code" },
  { step: "04", label: "Ship", desc: "Live and production-ready" },
];
