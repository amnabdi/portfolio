// src/data/projects.ts
import rasadnegar1 from "../assets/images/projects/rasadnegar/about_us.png";
import rasadnegar2 from "../assets/images/projects/rasadnegar/category_page.png";
import rasadnegar3 from "../assets/images/projects/rasadnegar/contact_us.png";
import rasadnegar4 from "../assets/images/projects/rasadnegar/detail_page.png";
import rasadnegar5 from "../assets/images/projects/rasadnegar/home.png";
import rasadnegar6 from "../assets/images/projects/rasadnegar/home_with_navigation.png";
import rasadnegar7 from "../assets/images/projects/rasadnegar/search.png";
import rasadnegar8 from "../assets/images/projects/rasadnegar/gallery.png";

export const projects = [
  {
    id: 1,
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
      "Led frontend architecture for Rasadnegar, a fully SSR Next.js 15 platform",
      "Designed a flexible, non-technical CMS with real-time content editing",
      "Optimized performance with fast loading, image optimization, and dynamic ads",
      "Implemented strong SEO practices for superior search engine visibility",
      "Ensured scalable, dynamic architecture for enterprise-level news delivery",
      "Delivered a seamless, high-performance user experience",
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
];
