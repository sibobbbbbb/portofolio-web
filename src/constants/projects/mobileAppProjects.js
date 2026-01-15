import uiPurrytify from "../../assets/projects/purrytify.png";
import logoErgo from "../../assets/projects/logoergo.jpg";
import logoNotesApp from "../../assets/projects/notes-app-logo.jpg";

export const MOBILE_APP_PROJECTS = [
  {
    title: "Purrytify",
    category: "Mobile App",
    image: uiPurrytify,
    alt: "Tampilan antarmuka aplikasi Purritify, aplikasi streaming musik Android",
    description:
      "An Android music streaming application developed. Features include user authentication (Login/Logout) with JWT token management, display of recently played and new songs on the Home screen, a Library with 'All Songs' and 'Liked Songs', a full-featured music Player with navigation and progress control, and a Mini Player. Users can add songs from external storage, with metadata extraction and storage in a Room Database, and edit/delete added songs. The Profile page displays user data and song statistics. Includes a background service for JWT expiration check and network sensing to handle offline states.",
    technologies: [
      "Android",
      "Kotlin/Java",
      "RecyclerView",
      "Room Database",
      "Retrofit/OkHttp",
      "JWT",
    ],
    github: "https://github.com/sibobbbbbb/Purritify",
  },
  {
    title: "Ergo Mobile",
    category: "Mobile App",
    image: logoErgo,
    alt: "Logo Ergo Mobile, aplikasi mobile untuk manajemen tugas",
    description:
      "Ergo Mobile is a mobile application that designed to help users manage task lists for various projects. With Ergo Mobile, users can easily create, organize, and track the progress of tasks that need to be completed. The application allows users to set deadlines, add notes, and prioritize tasks based on urgency or importance. Thus, Ergo Mobile becomes a very useful tool for individuals to manage their time and projects more efficiently.",
    technologies: ["Dart", "Flutter"],
    github: "https://github.com/sibobbbbbb/ergo_mobile",
  },
  {
    title: "Notes App",
    category: "Mobile App",
    image: logoNotesApp,
    alt: "Logo Notes App, aplikasi mobile untuk catatan",
    description:
      "Notes App is a simple mobile application for users to create, view, edit, and delete notes. It integrates with Firebase Authentication to allow users to sign in using their Google account. The app also stores notes locally on the device using Hive, a lightweight and fast local database.",
    technologies: ["Dart", "Flutter", "Firebase", "Hive"],
    github: "https://github.com/sibobbbbbb/notes_app",
  },
];
