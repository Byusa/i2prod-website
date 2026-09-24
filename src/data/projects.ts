import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "hills-props-rwanda",
    name: "Hills Props Rwanda",
    eyebrow: "PropTech · Rwanda",
    description:
      "A digital real estate marketplace connecting property buyers with houses and land across Rwanda through modern web and mobile experiences.",
    categories: ["PropTech", "Platform", "Web", "Mobile", "Cloud"],
    technologies: [
      "Next.js",
      "TypeScript",
      "Firebase",
      "React Native",
      "Cloud",
    ],
    platforms: {
      web: "https://hillsprops.com",
      // Add the App Store and Google Play URLs here.
    },
    featured: true,
  },
  {
    slug: "hills-props-uganda",
    name: "Hills Props Uganda",
    eyebrow: "PropTech · Uganda",
    description:
      "A localized property marketplace engineered for the Ugandan market with scalable infrastructure and country-specific operations.",
    categories: ["PropTech", "Platform", "Web", "Cloud"],
    technologies: ["Next.js", "TypeScript", "Firebase", "Vercel"],
    platforms: {
      web: "https://hillsprops.co.ug",
    },
    featured: true,
  },
  {
    slug: "eanpay",
    name: "EANPay",
    eyebrow: "FinTech · Remittance",
    description:
      "A digital remittance product designed to make international money transfers simple and accessible across web and mobile experiences.",
    categories: ["FinTech", "Platform", "Web", "Mobile", "Cloud"],
    technologies: [
      "FinTech",
      "Payments",
      "Web",
      "Mobile",
      "Cloud",
    ],
    platforms: {
      web: "https://eanpay.netlify.app/",
      // Add iOS and Android URLs when available.
    },
    featured: true,
  },
  {
    slug: "tourifique",
    name: "Tourifique",
    eyebrow: "Travel · Events · Experiences",
    description:
      "A discovery platform for events and experiences, designed to help people find activities, explore destinations and engage with experiences through web and mobile products.",
    categories: ["Travel", "Platform", "Web", "Mobile", "Cloud"],
    technologies: [
      "AI",
      "Web",
      "Mobile",
      "Cloud",
    ],
    platforms: {
      web: "https://tourifique.ai",
      // Add iOS and Android URLs when available.
    },
    featured: true,
  },
];