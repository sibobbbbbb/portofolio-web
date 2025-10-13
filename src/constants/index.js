import logoErgo from "../assets/projects/logoergo.jpg";
import logoNotesApp from "../assets/projects/notes-app-logo.jpg";
import logoDotConnect from "../assets/projects/Dot-Connect.png";
import uiPasswordGame from "../assets/projects/Password.png";
import uiFarmGame from "../assets/projects/Farm.png";
import uiWikiPaddy from "../assets/projects/WikiPaddy.png";
import uiResmiTamat from "../assets/projects/Resmi.png";
import uiGDGoC from "../assets/projects/GDGOC.png";
import uiPurrytify from "../assets/projects/purrytify.png";
import uiBeast from "../assets/projects/Beast.png";
import uiLinkinpurry from "../assets/projects/link-in-purry.png";
import uiDiagonalMagicCube from "../assets/projects/diagonal-magic-cube-solver.png";

export const HERO_CONTENT = `I am an active third-year student in the Informatics Engineering program at Bandung Institute of Technology (ITB). I have a deep interest in web and mobile development and continually strive to enhance my skills in these areas through various academic and non-academic activities. Besides actively participating in technology competitions, I am also involved in several organizations and communities that support my career development and expertise.`;

export const PROJECTS = [
  {
    title: "LMS GDGOC ITB",
    image: uiGDGoC,
    alt: "Tampilan antarmuka Landing Page Learning Management System GDGOC ITB",
    description:
      "A website-based Learning Management System (LMS) designed for GDGOC ITB 2025 to provide an interactive, progressive, and fun learning experience. The platform allows users (Members, Buddies, and Guests) to follow roadmap-based courses, complete problem sets, browse and RSVP to professional and community events, track their progress via a personal dashboard, and receive certificates. It features differentiated access levels and supports various user roles including Curriculum Admin, Professional Development Admin, and Technical Admin for managing content and events.",
    technologies: ["Node.js", "Express.js","React.js", "PostgreSQL", "JWT"], 
    github: "https://github.com/GDGoC-ITB/GDGoC-ITB",
  },
  {
    title: "Purrytify",
    image: uiPurrytify,
    alt: "Tampilan antarmuka aplikasi Purritify, aplikasi streaming musik Android",
    description: "An Android music streaming application developed. Features include user authentication (Login/Logout) with JWT token management, display of recently played and new songs on the Home screen, a Library with 'All Songs' and 'Liked Songs', a full-featured music Player with navigation and progress control, and a Mini Player. Users can add songs from external storage, with metadata extraction and storage in a Room Database, and edit/delete added songs. The Profile page displays user data and song statistics. Includes a background service for JWT expiration check and network sensing to handle offline states.",
    technologies: ["Android", "Kotlin/Java", "RecyclerView", "Room Database", "Retrofit/OkHttp", "JWT"],
    github: "https://github.com/sibobbbbbb/Purritify",
  },
  {
    title: "BEAST Community Platform",
    image: uiBeast,
    alt: "Tampilan antarmuka Landing Page aplikasi BEAST Community Platform, platform komunitas tenis Bandung",
    description: "A web application designed to digitalize the membership and administrative processes for the Bandung Tennis Enthusiast (BEAST) community. Key features include a comprehensive member database for administrators (with CRUD, filtering, searching, and export capabilities), event management (viewing, details, joining, liking), user profiles (viewing, editing, changing password), a system for trainers to manage schedules and record member progress notes, and a section for articles/news. The platform supports different user roles (Admin, Trainer, Member, Visitor) with appropriate routing and includes features like login, image uploads to cloud storage, and CI/CD integration.",
    technologies: ["Node.js", "Express.js", "Docker", "Gitlab CI/CD", "PostgreSQL", "Prisma ORM"],
    github: "https://github.com/sibobbbbbb/beast-academy"
  },
  {
    title: "Ergo Mobile",
    image: logoErgo,
    alt: "Logo Ergo Mobile, aplikasi mobile untuk manajemen tugas",
    description:
      "Ergo Mobile is a mobile application that designed to help users manage task lists for various projects. With Ergo Mobile, users can easily create, organize, and track the progress of tasks that need to be completed. The application allows users to set deadlines, add notes, and prioritize tasks based on urgency or importance. Thus, Ergo Mobile becomes a very useful tool for individuals to manage their time and projects more efficiently.",
    technologies: ["Dart", "Flutter"],
    github: "https://github.com/sibobbbbbb/ergo_mobile",
  },
  {
    title: "LinkInPurry",
    image: uiLinkinpurry,
    alt: "Tampilan antarmuka aplikasi LinkInPurry, aplikasi profil profesional",
    description: "A career-focused social media Single Page Application (SPA) built with React for the frontend and a Node.js/Express/PostgreSQL backend. Implements secure JWT authentication via cookies, user profiles with connection management and search, a dynamic post feed (CRUD operations, infinite scroll), real-time private chat using WebSocket, and push notifications for updates via Service Workers/SSE. Includes Docker-based stress testing, responsive design across devices, and detailed API documentation.",
    technologies: ["Node.js", "React.js", "PostgreSQL", "JWT"],
    github: "https://github.com/sibobbbbbb/if-3310-2024-2-k03-06",
  },
  {
    title: "Diagonal Magic Cube Solver",
    image: uiDiagonalMagicCube,
    alt: "Tampilan antarmuka aplikasi Diagonal Magic Cube Solver, aplikasi untuk menyelesaikan masalah kubus ajaib diagonal",
    description: "A Web application,that focusing on implementing local search algorithms to solve the Diagonal Magic Cube problem (specifically 5x5x5). The project involves implementing three local search algorithms: a Hill-Climbing variant, Simulated Annealing, and Genetic Algorithm. The goal is to arrange numbers 1 to n³ in a cube such that the sum of numbers in all rows, columns, pillars, space diagonals, and plane diagonals equals a magic number. The primary operation is swapping numbers. The application conducts experiments comparing the performance (objective function value, duration, convergence, consistency) of these algorithms and visualizes the initial/final states of the cube and the experimental results.",
    technologies: ["Next.js", "Flask", "Python"],
    github: "https://github.com/sibobbbbbb/tubes-1-inteligensi-artifisial",
  },
  {
    title: "Notes App",
    image: logoNotesApp,
    alt: "Logo Notes App, aplikasi mobile untuk catatan",
    description:
      "Notes App is a simple mobile application for users to create, view, edit, and delete notes. It integrates with Firebase Authentication to allow users to sign in using their Google account. The app also stores notes locally on the device using Hive, a lightweight and fast local database.",
    technologies: ["Dart", "Flutter", "Firebase", "Hive"],
    github: "https://github.com/sibobbbbbb/notes_app",
  },
  {
    title: "Dot Connect Game",
    image: logoDotConnect,
    alt: "Logo Dot Connect Game, permainan puzzle menghubungkan titik",
    description:
      "Dot Connect Game is a puzzle game where players must connect dots on a grid. This game provides various levels of difficulty that can be played to make it more challenging. There are 2 types of modes in this game, manual mode where players will play the game themselves and bot mode where players will be assisted by bots to complete the game.",
    technologies: ["Node.js", " React.js", "Tailwind CSS", "MongoDB"],
    github: "https://github.com/sibobbbbbb/Dot-Connect-Game",
  },
  {
    title: "Password Game",
    image: uiPasswordGame,
    alt: "Tampilan antarmuka Password Game, permainan web untuk membuat password",
    description:
      "The Password Game is a web-based game that challenges players to create passwords following complex rules using string matching algorithms like regex, KMP, or Boyer-Moore. The game features scoring, difficulty levels, and additional functionalities such as save/load, leaderboard, and multiplayer mode.",
    technologies: ["Node.js", " React.js", "Tailwind CSS", "SQLite", "Docker"],
    github: "https://github.com/sibobbbbbb/Password_Game",
  },
  {
    title: "Ergo Software",
    image: logoErgo,
    alt: "Logo Ergo Software, aplikasi desktop untuk manajemen tugas",
    description:
      "Ergo is a software designed to help users manage to-do lists for various projects they work on. With Ergo, users can easily create, organize, and track the progress of tasks that need to be completed. This application gives users the ability to set deadlines, add notes, and prioritize tasks based on urgency or importance. Thus, Ergo becomes a very useful tool for every individual in managing time and projects more efficiently.",
    technologies: ["Python", "PyQt"],
    github: "https://github.com/sibobbbbbb/IF2250-2024-K03-G04-Ergo",
  },
  {
    title: "Interactive Farm Simulation Game",
    image: uiFarmGame,
    alt: "Tampilan antarmuka Interactive Farm Simulation Game, permainan simulasi pertanian interaktif",
    description:
      "This app is an interactive farm simulation game where players can grow crops and raise animals in a 4 x 5 plot. Players can drag and drop cards from their active deck onto the field to plant or raise them. Each plot can be given special items that have effects on the crops or animals there.",
    technologies: ["Java", "JavaFX"],
    github: "https://github.com/sibobbbbbb/Tubes3_ResmiTamatStima",
  },
  {
    title: "WikiPaddy",
    image: uiWikiPaddy,
    alt: "Tampilan antarmuka WikiPaddy, aplikasi untuk mencari jalur antar artikel Wikipedia",
    description:
      "WikiRacer is a sophisticated online platform designed to navigate the vast network of Wikipedia articles using advanced graph traversal algorithms. It enables users to input start and end Wikipedia articles, then utilizes Breadth-First Search (BFS) and Iterative Deepening Search (IDS) techniques to discover the shortest path between them. The website offers a user-friendly interface where participants can directly submit their queries, watch the progress of the search in real-time, and view a visual representation of the path through interconnected articles.",
    technologies: ["Golang", "React", "Next.js"],
    github: "https://github.com/sibobbbbbb/Tubes2_WikiPaddy",
  },
  {
    title: "Biometric Based Individual Detection System Through Fingerprint Image",
    image: uiResmiTamat,
    alt: "Tampilan antarmuka aplikasi Biometric Based Individual Detection System Through Fingerprint Image, aplikasi untuk mendeteksi individu melalui sidik jari",
    description:
      "This application is an implementation of the string matching algorithm, namely KMP and Boyer-Moore. By utilizing this algorithm, an application can be created that can match a fingerprint with another fingerprint by converting the fingerprint image into a string for matching.",
    technologies: ["C#", "Sqlite"],
    github: "https://github.com/sibobbbbbb/Tubes3_ResmiTamatStima",
  },
];
