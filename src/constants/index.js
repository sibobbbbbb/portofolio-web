import project1 from "../assets/projects/logoergo.jpg";
import project2 from "../assets/projects/notes-app-logo.jpg";
import project3 from "../assets/projects/Dot-Connect.png";
import project4 from "../assets/projects/Password.png";
import project6 from "../assets/projects/Farm.png";
import project7 from "../assets/projects/WikiPaddy.png";
import project8 from "../assets/projects/Resmi.png";

export const HERO_CONTENT = `I am an active student in the Informatics Engineering program at Institut Teknologi Bandung (ITB), class of 2022, currently in my fifth semester. I have a deep interest in software and mobile development and continually strive to enhance my skills in these areas through various academic and non-academic activities. Besides actively participating in technology competitions, I am also involved in several organizations and communities that support my career development and expertise.`;

export const PROJECTS = [
  {
    title: "Ergo Mobile",
    image: project1,
    description:
      "Ergo Mobile is a mobile application that designed to help users manage task lists for various projects. With Ergo Mobile, users can easily create, organize, and track the progress of tasks that need to be completed. The application allows users to set deadlines, add notes, and prioritize tasks based on urgency or importance. Thus, Ergo Mobile becomes a very useful tool for individuals to manage their time and projects more efficiently.",
    technologies: ["Dart", "Flutter"],
    github: "https://github.com/sibobbbbbb/ergo_mobile",
  },
  {
    title: "Notes App",
    image: project2,
    description:
      "Notes App is a simple mobile application for users to create, view, edit, and delete notes. It integrates with Firebase Authentication to allow users to sign in using their Google account. The app also stores notes locally on the device using Hive, a lightweight and fast local database.",
    technologies: ["Dart", "Flutter", "Firebase"],
    github: "https://github.com/sibobbbbbb/notes_app",
  },
  {
    title: "Dot Connect Game",
    image: project3,
    description:
      "Dot Connect Game is a puzzle game where players must connect dots on a grid. This game provides various levels of difficulty that can be played to make it more challenging. There are 2 types of modes in this game, manual mode where players will play the game themselves and bot mode where players will be assisted by bots to complete the game.",
    technologies: ["Node.js", " React.js", "Tailwind CSS", "MongoDB"],
    github: "https://github.com/sibobbbbbb/Dot-Connect-Game",
  },
  {
    title: "Password Game",
    image: project4,
    description:
      "Password Game is an interactive web application where players must create passwords that meet certain rules. In this game there are 20 rules that must be met by players in order to win this game. There are several conditions that can make this player lose. Players can get a total score that is obtained when the player has lost or won.",
    technologies: ["Node.js", " React.js", "Tailwind CSS", "SQLite", "Docker"],
    github: "https://github.com/sibobbbbbb/Password_Game",
  },
  {
    title: "Ergo Software",
    image: project1,
    description:
      "Ergo is a software designed to help users manage to-do lists for various projects they work on. With Ergo, users can easily create, organize, and track the progress of tasks that need to be completed. This application gives users the ability to set deadlines, add notes, and prioritize tasks based on urgency or importance. Thus, Ergo becomes a very useful tool for every individual in managing time and projects more efficiently.",
    technologies: ["Python", "PyQt"],
    github: "https://github.com/sibobbbbbb/IF2250-2024-K03-G04-Ergo",
  },
  {
    title: "Interactive Farm Simulation Game",
    image: project6,
    description:
      "This app is an interactive farm simulation game where players can grow crops and raise animals in a 4 x 5 plot. Players can drag and drop cards from their active deck onto the field to plant or raise them. Each plot can be given special items that have effects on the crops or animals there.",
    technologies: ["Java", "JavaFX"],
    github: "https://github.com/sibobbbbbb/Tubes3_ResmiTamatStima",
  },
  {
    title: "WikiPaddy",
    image: project7,
    description:
      "WikiRacer is a sophisticated online platform designed to navigate the vast network of Wikipedia articles using advanced graph traversal algorithms. It enables users to input start and end Wikipedia articles, then utilizes Breadth-First Search (BFS) and Iterative Deepening Search (IDS) techniques to discover the shortest path between them. The website offers a user-friendly interface where participants can directly submit their queries, watch the progress of the search in real-time, and view a visual representation of the path through interconnected articles.",
    technologies: ["Golang", "React", "Next.js"],
    github: "https://github.com/sibobbbbbb/Tubes2_WikiPaddy",
  },
  {
    title:
      "Biometric Based Individual Detection System Through Fingerprint Image",
    image: project8,
    description:
      "This application is an implementation of the string matching algorithm, namely KMP and Boyer-Moore. By utilizing this algorithm, an application can be created that can match a fingerprint with another fingerprint by converting the fingerprint image into a string for matching.",
    technologies: ["C#", "Sqlite"],
    github: "https://github.com/sibobbbbbb/Tubes3_ResmiTamatStima",
  },
];
