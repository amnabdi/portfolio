// src/data/projects.ts
import rasadnegar1 from "../assets/images/projects/rasadnegar/about_us.png";
import rasadnegar2 from "../assets/images/projects/rasadnegar/category_page.png";
import rasadnegar3 from "../assets/images/projects/rasadnegar/contact_us.png";
import rasadnegar4 from "../assets/images/projects/rasadnegar/detail_page.png";
import rasadnegar5 from "../assets/images/projects/rasadnegar/home.png";
import rasadnegar6 from "../assets/images/projects/rasadnegar/home_with_navigation.png";
import rasadnegar7 from "../assets/images/projects/rasadnegar/search.png";
import rasadnegar8 from "../assets/images/projects/rasadnegar/gallery.png";
//
import iraninsurance1 from "../assets/images/projects/iranInsurance/insurance_detail_page.png";
import iraninsurance2 from "../assets/images/projects/iranInsurance/iran_insurance.png";
import iraninsurance3 from "../assets/images/projects/iranInsurance/main_page.png";
import iraninsurance4 from "../assets/images/projects/iranInsurance/mybime.png";
import iraninsurance5 from "../assets/images/projects/iranInsurance/q2316.png";
import iraninsurance6 from "../assets/images/projects/iranInsurance/r5.png";
import iraninsurance7 from "../assets/images/projects/iranInsurance/without_login.png";
//
import cms1 from "../assets/images/projects/cms/about_us.png";
import cms2 from "../assets/images/projects/cms/add_page.png";
import cms3 from "../assets/images/projects/cms/home.png";
import cms4 from "../assets/images/projects/cms/home_grid.png";
import cms5 from "../assets/images/projects/cms/modal.png";
import cms6 from "../assets/images/projects/cms/navigation.png";

import sibitec from "../assets/images/projects/sibitec/sibitec.png";

export const projects = [
  {
    id: 1,
    title: "Iran insurance",
    images: [
      iraninsurance1,
      iraninsurance2,
      iraninsurance3,
      iraninsurance4,
      iraninsurance5,
      iraninsurance6,
      iraninsurance7,
    ],
    highlights: [
      "Developing and maintaining Iran Insurance web platform",
      "Implemented new features & performance optimizations",
      "Refactored legacy code & improved UI/UX",
      "Collaborating with design and backend teams for secure, reliable features",
    ],
    tech: [
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Redux Toolkit",
      "PWA",
      "Leaflet",
      "SEO Optimization",
      "Swiper",
    ],
    url: "https://sib.iraninsurance.ir",
    linkName: "sib.iraninsurance.ir",
  },
  {
    id: 2,
    title: "Rasadnegar News Platform",
    images: [
      rasadnegar1,
      rasadnegar2,
      rasadnegar3,
      rasadnegar4,
      rasadnegar5,
      rasadnegar6,
      rasadnegar7,
      rasadnegar8,
    ],
    highlights: [
      "Advanced news platform built with Next.js 15 featuring SSR and dynamic architecture",
      "Customizable content layers with real-time updates via an intuitive admin panel",
      "SEO-optimized content and image optimization for Google indexing and performance",
      "Dynamic ad integration for a smooth and engaging user experience",
      "Contributed to frontend development and performance improvements following best practices",
    ],
    tech: [
      "TypeScript",
      "Next.js",
      "Material UI",
      "Zustand",
      "React Query",
      "SSR",
      "SEO Optimization",
      "Performance Optimization",
      "Leaflet",
      "Swiper",
    ],
  },
  {
    id: 3,
    title: "Enterprise News CMS",
    images: [cms1, cms2, cms3, cms4, cms5, cms6],
    highlights: [
      "Built a headless CMS for a news portal using React and Vite",
      "Dynamic sidebar navigation with nested routing",
      "Optimized data layer with React Query for efficient server-state management",
      "Reusable TypeScript table component for consistent data display across admin modules",
    ],
    tech: [
      "TypeScript",
      "React",
      "Material UI",
      "Zustand",
      "React Query",
      "React Hook Form",
      "Leaflet",
      "Swiper",
    ],
  },
  {
    id: 4,
    title: "Sibitec",
    images: [sibitec],
    highlights: [
      "Built a scalable Next.js 14 platform using TypeScript, MUI, and Redux",
      "Designed a custom Material UI design system for consistency",
      "Implemented SSR and SEO optimization for performance and visibility",
      "Integrated a CMS-driven news portal for content management",
    ],
    tech: [
      "TypeScript",
      "Next.js",
      "Material UI",
      "Redux",
      "SSR",
      "Leaflet",
      "SEO Optimization",
      "Swiper",
    ],
    linkName: "sibitec.ir",
  },
];
