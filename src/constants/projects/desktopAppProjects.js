import logoErgo from "../../assets/projects/logoergo.jpg";
import uiFarmGame from "../../assets/projects/Farm.png";
import uiResmiTamat from "../../assets/projects/Resmi.png";

export const DESKTOP_APP_PROJECTS = [
  {
    title: "Ergo Desktop",
    category: "Desktop App",
    image: logoErgo,
    alt: "Logo Ergo Desktop, aplikasi desktop untuk manajemen tugas",
    description:
      "Ergo is a software designed to help users manage to-do lists for various projects they work on. With Ergo, users can easily create, organize, and track the progress of tasks that need to be completed. This application gives users the ability to set deadlines, add notes, and prioritize tasks based on urgency or importance. Thus, Ergo becomes a very useful tool for every individual in managing time and projects more efficiently.",
    technologies: ["Python", "PyQt"],
    github: "https://github.com/sibobbbbbb/IF2250-2024-K03-G04-Ergo",
  },
  {
    title: "Interactive Farm Simulation Game",
    category: "Desktop App",
    image: uiFarmGame,
    alt: "Tampilan antarmuka Interactive Farm Simulation Game, permainan simulasi pertanian interaktif",
    description:
      "This app is an interactive farm simulation game where players can grow crops and raise animals in a 4 x 5 plot. Players can drag and drop cards from their active deck onto the field to plant or raise them. Each plot can be given special items that have effects on the crops or animals there.",
    technologies: ["Java", "JavaFX"],
    github: "https://github.com/sibobbbbbb/Tubes3_ResmiTamatStima",
  },
  {
    title:
      "Biometric Based Individual Detection System Through Fingerprint Image",
    category: "Desktop App",
    image: uiResmiTamat,
    alt: "Tampilan antarmuka aplikasi Biometric Based Individual Detection System Through Fingerprint Image, aplikasi untuk mendeteksi individu melalui sidik jari",
    description:
      "This application is an implementation of the string matching algorithm, namely KMP and Boyer-Moore. By utilizing this algorithm, an application can be created that can match a fingerprint with another fingerprint by converting the fingerprint image into a string for matching.",
    technologies: ["C#", "Sqlite"],
    github: "https://github.com/sibobbbbbb/Tubes3_ResmiTamatStima",
  },
];
