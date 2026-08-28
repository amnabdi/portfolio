import sibitecLogo from "../assets/images/sibitec_logo.svg";
import freelancerLogo from "../assets/images/freelancer.png";

export const experiences = [
  {
    id: 1,
    company: "Simorgh Intelligent Business Ideas",
    role: "Frontend Developer",
    location: "Tehran, Iran",
    link: "https://sibitec.ir",
    duration: "2023 — Present",
    period: "2y 5mos",
    logo: sibitecLogo,
    summary:
      "Modernising legacy insurance systems and building the scalable platforms and shared tooling that replaced them.",
    achievements: [
      "Rebuilt the Iran Insurance legacy system as a Progressive Web App in Next.js, hardening it to OWASP standards and moving it onto a micro-frontend architecture for modularity.",
      "Built a scalable enterprise platform that manages every insurance service dynamically, with two form-rendering approaches: an iframe-based renderer and a fully dynamic form generator.",
      "Developed a Form Builder that lets admins compose complex, data-driven forms with advanced logic, calculations, and full layout control. Forms and PDFs render in real time from Form Builder and PDF Builder configurations.",
      "Developed a React design system with TypeScript support, dynamic theming, and customisable Material UI components, packaged as a .tgz for reuse across projects.",
      "Rebuilt the Sibitec WordPress landing page in Next.js 14 on top of that design system, adding CMS-driven layout customisation, a news portal, and a content management system.",
      "Created a user management system in React covering secure authentication, role management, and access control.",
      "Replaced the Apex holding company panel with a React solution for shareholder information, organisational structures, and personnel data.",
    ],
  },
  {
    id: 2,
    company: "Freelancer",
    role: "Frontend Developer",
    location: "Remote",
    link: null,
    duration: "2022 — 2023",
    period: "1y",
    logo: freelancerLogo,
    summary:
      "Built modern, performant web applications for teams needing production-ready frontend work.",
    achievements: [
      "Delivered web applications in React, Next.js, and TypeScript, focusing on scalable frontend architecture.",
      "Redesigned legacy systems and built reusable UI libraries that teams could ship against.",
      "Helped teams ship clean, maintainable features, holding to standards for performance, accessibility, and scalability.",
    ],
  },
];
