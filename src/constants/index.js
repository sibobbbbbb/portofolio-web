import project1 from "../assets/projects/logoergo.jpg";
import project2 from "../assets/projects/notes-app-logo.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const PROJECTS = [
  {
    title: "Ergo Mobile",
    image: project1,
    description:
      "Ergo Mobile is a mobile application that designed to help users manage task lists for various projects. With Ergo Mobile, users can easily create, organize, and track the progress of tasks that need to be completed. The application allows users to set deadlines, add notes, and prioritize tasks based on urgency or importance. Thus, Ergo Mobile becomes a very useful tool for individuals to manage their time and projects more efficiently.",
    technologies: ["Dart", "Flutter"],
    github: "https://github.com/sibobbbbbb/ergo_mobile"
  },
  {
    title: "Notes App",
    image: project2,
    description:
      "Notes App is a simple mobile application for users to create, view, edit, and delete notes. It integrates with Firebase Authentication to allow users to sign in using their Google account. The app also stores notes locally on the device using Hive, a lightweight and fast local database.",
    technologies: ["Dart", "Flutter", "Firebase"],
    github: "https://github.com/sibobbbbbb/notes_app"
  },
];