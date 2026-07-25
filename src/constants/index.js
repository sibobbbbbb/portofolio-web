import { WEB_APP_PROJECTS } from "./projects/webAppProjects";
import { MOBILE_APP_PROJECTS } from "./projects/mobileAppProjects";
import { DESKTOP_APP_PROJECTS } from "./projects/desktopAppProjects";

export const CATEGORIES = ["All", "Web App", "Mobile App", "Desktop App"];

export const PROJECTS = [
  ...WEB_APP_PROJECTS,
  ...MOBILE_APP_PROJECTS,
  ...DESKTOP_APP_PROJECTS,
];

export { WEB_APP_PROJECTS, MOBILE_APP_PROJECTS, DESKTOP_APP_PROJECTS };

export { PROFILE, HERO_CONTENT } from "./profile";
export { EXPERIENCES } from "./experiences";
export { SOCIAL_LINKS } from "./navbar";
export { TECH_CATEGORIES } from "./techStack";
export { EMAILJS_CONFIG } from "./contact";