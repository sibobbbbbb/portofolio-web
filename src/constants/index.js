import { WEB_APP_PROJECTS } from "./projects/webAppProjects";
import { MOBILE_APP_PROJECTS } from "./projects/mobileAppProjects";
import { DESKTOP_APP_PROJECTS } from "./projects/desktopAppProjects";

export const HERO_CONTENT = `Final-year Informatics Engineering student at Institut Teknologi Bandung (ITB) specializing in Software Engineering. Experienced in developing scalable backend systems and full-stack applications using Java (Spring Boot), Go, and Node.js. Proven track record in delivering enterprise solutions through professional internship and complex academic projects. Passionate about cloud infrastructure, microservices, and blockchain technology.`;

export const EXPERIENCES = [
  {
    role: "Software Engineer Intern",
    company: "PT. Akhdani Reka Solusi",
    period: "June 2025 - September 2025",
    description: "Designed and engineered the Project Management Module for the company's internal HR Super-App. Collaborated closely with Senior Engineers and UI/UX designers to migrate legacy manual processes into a centralized digital system using Java Spring Boot and PostgreSQL."
  },
  {
    role: "IT Associates",
    company: "Google Developer Groups on Campus ITB",
    period: "April 2025 - October 2025",
    description: "Developed and implemented the entire RESTful API backend for the Google Developer Groups on Campus (GDGoC) ITB Learning Management System (LMS), supporting core functionalities like user management, course delivery, and event handling. Designed and built a task submission system, including a Command Line Interface (CLI) tool published globally via npm, to facilitate efficient and standardized problem set submissions for users."
  },
  {
    role: "Full Stack Developer",
    company: "Bandung Tennis Enthusiast (BEAST)",
    period: "January 2025 - May 2025",
    description: "Designed and developed a scalable web platform to digitally transform the community's membership system. Collaborated in the SDLC process, from gathering requirements with the client to deploying the solution using Vue.js and Node.js, which has been successfully deployed to support the community's daily operations."
  }
];

export const CATEGORIES = ["All", "Web App", "Mobile App", "Desktop App"];

export const PROJECTS = [
  ...WEB_APP_PROJECTS,
  ...MOBILE_APP_PROJECTS,
  ...DESKTOP_APP_PROJECTS,
];

export { WEB_APP_PROJECTS, MOBILE_APP_PROJECTS, DESKTOP_APP_PROJECTS };