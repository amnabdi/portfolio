import rasadnegar1 from "../assets/images/projects/rasadnegar/about_us.png?preset=screenshot";
import rasadnegar2 from "../assets/images/projects/rasadnegar/category_page.png?preset=screenshot";
import rasadnegar3 from "../assets/images/projects/rasadnegar/contact_us.png?preset=screenshot";
import rasadnegar4 from "../assets/images/projects/rasadnegar/detail_page.png?preset=screenshot";
import rasadnegar5 from "../assets/images/projects/rasadnegar/home.png?preset=screenshot";
import rasadnegar6 from "../assets/images/projects/rasadnegar/home_with_navigation.png?preset=screenshot";
import rasadnegar7 from "../assets/images/projects/rasadnegar/search.png?preset=screenshot";
import rasadnegar8 from "../assets/images/projects/rasadnegar/gallery.png?preset=screenshot";
//
import iraninsurance1 from "../assets/images/projects/iranInsurance/insurance_detail_page.png?preset=screenshot";
import iraninsurance2 from "../assets/images/projects/iranInsurance/iran_insurance.png?preset=screenshot";
import iraninsurance3 from "../assets/images/projects/iranInsurance/main_page.png?preset=screenshot";
import iraninsurance4 from "../assets/images/projects/iranInsurance/mybime.png?preset=screenshot";
import iraninsurance5 from "../assets/images/projects/iranInsurance/q2316.png?preset=screenshot";
import iraninsurance6 from "../assets/images/projects/iranInsurance/r5.png?preset=screenshot";
import iraninsurance7 from "../assets/images/projects/iranInsurance/without_login.png?preset=screenshot";
//
import cms1 from "../assets/images/projects/cms/about_us.png?preset=screenshot";
import cms2 from "../assets/images/projects/cms/add_page.png?preset=screenshot";
import cms3 from "../assets/images/projects/cms/home.png?preset=screenshot";
import cms4 from "../assets/images/projects/cms/home_grid.png?preset=screenshot";
import cms5 from "../assets/images/projects/cms/modal.png?preset=screenshot";
import cms6 from "../assets/images/projects/cms/navigation.png?preset=screenshot";

import sibitec from "../assets/images/projects/sibitec/sibitec.png?preset=screenshot";

export const projects = [
  {
    id: 1,
    title: "Iran Insurance",
    role: "Frontend Developer",
    outcome:
      "A legacy insurance platform rebuilt as a secure, installable progressive web app.",
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
    role: "Frontend Developer",
    outcome:
      "A server-rendered news platform with a real-time, admin-configurable content layer.",
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
    role: "Frontend Developer",
    outcome:
      "A headless admin for a news portal, built on a reusable typed component layer.",
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
];
