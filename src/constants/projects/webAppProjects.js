import uiAher from "../../assets/projects/AHER.png";
import uiBeast from "../../assets/projects/Beast.png";
import uiLinkinpurry from "../../assets/projects/link-in-purry.png";
import uiDiagonalMagicCube from "../../assets/projects/diagonal-magic-cube-solver.png";
import logoDotConnect from "../../assets/projects/Dot-Connect.png";
import uiPasswordGame from "../../assets/projects/Password.png";
import uiWikiPaddy from "../../assets/projects/WikiPaddy.png";
import uiBlockTicket from "../../assets/projects/Blockticket.png";
import uiDireblo from "../../assets/projects/Direblo.png";
import uiGDGoC from "../../assets/projects/GDGOC.png";
import uiCitizenSystem from "../../assets/projects/Citizen.png";
import uiSecureChat from "../../assets/projects/SecureChat.png";

export const WEB_APP_PROJECTS = [
  {
    title: "Project Management Module (AHER)",
    category: "Web App",
    image: uiAher,
    alt: "Tampilan antarmuka Modul Manajemen Proyek pada aplikasi AHER",
    description:
      "A specialized module within the 'AHER' HR Super-App developed for PT Akhdani Reka Solusi. This project centralized the company's project tracking, replacing scattered tools. It features comprehensive Work Breakdown Structure (WBS) management, task monitoring, and employee performance tracking. The system was built with a focus on data consistency, role-based access control (RBAC), and seamless integration with existing HR modules.",
    technologies: [
      "Java Spring Boot",
      "PostgreSQL",
      "Thymeleaf",
      "Bootstrap",
      "LeafDB",
    ],
    github: "",
  },
  {
    title: "LMS GDGOC ITB",
    category: "Web App",
    image: uiGDGoC,
    alt: "Tampilan antarmuka Landing Page Learning Management System GDGOC ITB",
    description:
      "A website-based Learning Management System (LMS) designed for GDGOC ITB 2025 to provide an interactive, progressive, and fun learning experience. The platform allows users (Members, Buddies, and Guests) to follow roadmap-based courses, complete problem sets, browse and RSVP to professional and community events, track their progress via a personal dashboard, and receive certificates. It features differentiated access levels and supports various user roles including Curriculum Admin, Professional Development Admin, and Technical Admin for managing content and events.",
    technologies: ["Node.js", "Express.js", "React.js", "PostgreSQL", "JWT"],
    github: "https://github.com/GDGoC-ITB/GDGoC-ITB",
  },
  {
    title: "BEAST Community Platform",
    category: "Web App",
    image: uiBeast,
    alt: "Tampilan antarmuka Landing Page aplikasi BEAST Community Platform",
    description:
      "A web application designed to digitalize membership and administrative processes for the Bandung Tennis Enthusiast (BEAST) community. Features include a comprehensive member database with CRUD capabilities, event management, and trainer note-taking systems. The platform supports multiple user roles (Admin, Trainer, Member) and integrates secure authentication.",
    technologies: [
      "Vue.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma ORM",
      "Docker",
    ],
    github: "https://github.com/sibobbbbbb/beast-academy",
  },
  {
    title: "BlockTicket DApp",
    category: "Web App",
    image: uiBlockTicket,
    alt: "Tampilan antarmuka BlockTicket DApp, platform tiket berbasis blockchain",
    description:
      "A full-stack decentralized ticketing platform designed to eliminate scalping and fraud using Ethereum smart contracts. The system utilizes a restricted ERC-721 implementation where ticket transfers are enforced through a custom Marketplace contract. Key features include an off-chain Oracle service (built with Bun & Hono) for KYC verification and real-time exchange rates, an on-chain Event Registry, and strict anti-scalping logic (price caps, resale limits, and organizer royalties). The frontend interacts seamlessly with the blockchain for primary sales, secure secondary market trading, and QR-based ticket redemption.",
    technologies: [
      "Solidity",
      "Hardhat",
      "React.js",
      "TypeScript",
      "Bun",
      "Hono",
      "Ethers.js",
    ],
    github: "https://github.com/sibobbbbbb/blockticket-dapp",
  },
  {
    title: "Citizen Reporting System",
    category: "Web App",
    image: uiCitizenSystem,
    alt: "Tampilan antarmuka Dashboard Dinas dan Web Warga Citizen Reporting System",
    description:
      "A Proof of Concept (PoC) for a Citizen Reporting System built on a Microservices Architecture using Go (Golang). The system is designed for high concurrency, fault tolerance, and data privacy using AES-256 encryption. It utilizes RabbitMQ for asynchronous event-driven communication (dispatching reports), Server-Sent Events (SSE) for real-time notifications, and Nginx as a secure gateway. The infrastructure includes Polyglot Persistence (PostgreSQL & MongoDB), MinIO for object storage, and full observability with Prometheus & Grafana.",
    technologies: [
      "Go (Golang)",
      "React.js",
      "RabbitMQ",
      "PostgreSQL",
      "MongoDB",
      "Docker",
      "Nginx",
      "MinIO",
    ],
    github: "https://github.com/sibobbbbbb/citizen-reporting-system",
  },
  {
    title: "Direblo - Diploma Registry Blockchain",
    category: "Web App",
    image: uiDireblo,
    alt: "Tampilan antarmuka aplikasi Direblo, sistem verifikasi ijazah digital berbasis blockchain",
    description:
      "A blockchain-based digital diploma verification system deployed on the Ethereum Sepolia Testnet using IPFS for decentralized storage. Designed with a hybrid cryptographic approach, it ensures document integrity via SHA-256 hashing and data privacy through client-side AES-256 encryption. Key features include a secure issuance portal for universities, an 'unlisted' verification mechanism where decryption keys are embedded in URLs, dynamic QR code watermarking on verified PDFs, and a smart contract-based revocation system.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Solidity",
      "Ethereum (Hardhat)",
      "IPFS (Pinata)",
      "Tailwind CSS",
    ],
    github: "https://github.com/sibobbbbbb/diploma-registry-blockchain",
  },
  {
    title: "SecureChat",
    category: "Web App",
    image: uiSecureChat,
    alt: "Tampilan antarmuka aplikasi SecureChat, aplikasi pesan terenkripsi end-to-end",
    description:
      "A web-based secure chat application designed to guarantee Confidentiality, Integrity, and Authenticity. It implements End-to-End Encryption (E2EE) using a hybrid cryptosystem (ECC secp256k1 + AES-GCM) and Digital Signatures (ECDSA) for message verification. The system features Zero-Knowledge Authentication (Challenge-Response), ensuring the server never stores user passwords (trustless architecture). Built with a high-performance backend using Hono on Bun runtime and Drizzle ORM.",
    technologies: [
      "React.js",
      "TypeScript",
      "Hono (Bun)",
      "PostgreSQL",
      "Drizzle ORM",
      "Web Crypto API",
    ],
    github: "https://github.com/sibobbbbbb/end-to-end-encryption-chat-app",
  },
  {
    title: "LinkInPurry",
    category: "Web App",
    image: uiLinkinpurry,
    alt: "Tampilan antarmuka aplikasi LinkInPurry, aplikasi profil profesional",
    description:
      "A career-focused social media Single Page Application (SPA) built with React for the frontend and a Node.js/Express/PostgreSQL backend. Implements secure JWT authentication via cookies, user profiles with connection management and search, a dynamic post feed (CRUD operations, infinite scroll), real-time private chat using WebSocket, and push notifications for updates via Service Workers/SSE. Includes Docker-based stress testing, responsive design across devices, and detailed API documentation.",
    technologies: ["Node.js", "React.js", "PostgreSQL", "JWT"],
    github: "https://github.com/sibobbbbbb/if-3310-2024-2-k03-06",
  },
  {
    title: "Diagonal Magic Cube Solver",
    category: "Web App",
    image: uiDiagonalMagicCube,
    alt: "Tampilan antarmuka aplikasi Diagonal Magic Cube Solver, aplikasi untuk menyelesaikan masalah kubus ajaib diagonal",
    description:
      "A Web application,that focusing on implementing local search algorithms to solve the Diagonal Magic Cube problem (specifically 5x5x5). The project involves implementing three local search algorithms: a Hill-Climbing variant, Simulated Annealing, and Genetic Algorithm. The goal is to arrange numbers 1 to n³ in a cube such that the sum of numbers in all rows, columns, pillars, space diagonals, and plane diagonals equals a magic number. The primary operation is swapping numbers. The application conducts experiments comparing the performance (objective function value, duration, convergence, consistency) of these algorithms and visualizes the initial/final states of the cube and the experimental results.",
    technologies: ["Next.js", "Flask", "Python"],
    github: "https://github.com/sibobbbbbb/tubes-1-inteligensi-artifisial",
  },
  {
    title: "Dot Connect Game",
    category: "Web App",
    image: logoDotConnect,
    alt: "Logo Dot Connect Game, permainan puzzle menghubungkan titik",
    description:
      "Dot Connect Game is a puzzle game where players must connect dots on a grid. This game provides various levels of difficulty that can be played to make it more challenging. There are 2 types of modes in this game, manual mode where players will play the game themselves and bot mode where players will be assisted by bots to complete the game.",
    technologies: ["Node.js", " React.js", "Tailwind CSS", "MongoDB"],
    github: "https://github.com/sibobbbbbb/Dot-Connect-Game",
  },
  {
    title: "Password Game",
    category: "Web App",
    image: uiPasswordGame,
    alt: "Tampilan antarmuka Password Game, permainan web untuk membuat password",
    description:
      "The Password Game is a web-based game that challenges players to create passwords following complex rules using string matching algorithms like regex, KMP, or Boyer-Moore. The game features scoring, difficulty levels, and additional functionalities such as save/load, leaderboard, and multiplayer mode.",
    technologies: ["Node.js", " React.js", "Tailwind CSS", "SQLite", "Docker"],
    github: "https://github.com/sibobbbbbb/Password_Game",
  },
  {
    title: "WikiPaddy",
    category: "Web App",
    image: uiWikiPaddy,
    alt: "Tampilan antarmuka WikiPaddy, aplikasi untuk mencari jalur antar artikel Wikipedia",
    description:
      "WikiRacer is a sophisticated online platform designed to navigate the vast network of Wikipedia articles using advanced graph traversal algorithms. It enables users to input start and end Wikipedia articles, then utilizes Breadth-First Search (BFS) and Iterative Deepening Search (IDS) techniques to discover the shortest path between them. The website offers a user-friendly interface where participants can directly submit their queries, watch the progress of the search in real-time, and view a visual representation of the path through interconnected articles.",
    technologies: ["Golang", "React", "Next.js"],
    github: "https://github.com/sibobbbbbb/Tubes2_WikiPaddy",
  },
];
