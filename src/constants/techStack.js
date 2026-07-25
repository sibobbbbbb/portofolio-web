import {
  FaJava,
  FaNodeJs,
  FaPython,
  FaVuejs,
} from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import {
  SiMongodb,
  SiFlutter,
  SiDocker,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiDart,
  SiTailwindcss,
  SiPostgresql,
  SiTypescript,
  SiKotlin,
  SiSpringboot,
  SiNextdotjs,
  SiRabbitmq,
  SiNginx,
  SiBootstrap,
  SiApachekafka,
  SiKubernetes,
  SiPrometheus,
  SiGrafana,
  SiMinio,
  SiFlask,
  SiGo,
} from "react-icons/si";
import qt from "../assets/qt.png";
import javafx from "../assets/javafx.png";

export const TECH_CATEGORIES = [
  {
    title: "Frontend & Web",
    delay: 0,
    items: [
      { Icon: SiHtml5, className: "text-4xl text-orange-500", title: "HTML5" },
      { Icon: SiCss3, className: "text-4xl text-blue-600", title: "CSS3" },
      { Icon: SiJavascript, className: "text-4xl text-yellow-500", title: "JavaScript" },
      { Icon: SiTypescript, className: "text-4xl text-blue-500", title: "TypeScript" },
      { Icon: RiReactjsLine, className: "text-4xl text-cyan-400", title: "React" },
      { Icon: SiNextdotjs, className: "text-4xl text-white", title: "Next.js" },
      { Icon: FaVuejs, className: "text-4xl text-green-400", title: "Vue.js" },
      { Icon: SiTailwindcss, className: "text-4xl text-cyan-500", title: "Tailwind CSS" },
      { Icon: SiBootstrap, className: "text-4xl text-purple-600", title: "Bootstrap" },
    ],
  },
  {
    title: "Mobile",
    delay: 0.5,
    items: [
      { Icon: SiFlutter, className: "text-4xl text-blue-400", title: "Flutter" },
      { Icon: SiDart, className: "text-4xl text-blue-500", title: "Dart" },
      { Icon: SiKotlin, className: "text-4xl text-purple-500", title: "Kotlin" },
    ],
  },
  {
    title: "Desktop",
    delay: 0.5,
    items: [
      {
        src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/csharp-colored.svg",
        imgClassName: "w-10 h-10",
        title: "C#",
      },
      { src: qt, imgClassName: "w-10 h-10 object-contain", title: "PyQt" },
      { src: javafx, imgClassName: "w-16 h-6 object-contain", title: "JavaFX" },
    ],
  },
  {
    title: "Data Eng & AI",
    delay: 0.3,
    items: [
      { Icon: SiApachekafka, className: "text-4xl text-white", title: "Apache Kafka" },
      { Icon: SiRabbitmq, className: "text-4xl text-orange-500", title: "RabbitMQ" },
    ],
  },
  {
    title: "Backend & Database",
    delay: 0.1,
    items: [
      { Icon: FaNodeJs, className: "text-4xl text-green-500", title: "Node.js" },
      { Icon: SiGo, className: "text-4xl text-cyan-300", title: "Go" },
      { Icon: SiSpringboot, className: "text-4xl text-green-500", title: "Spring Boot" },
      { Icon: FaJava, className: "text-4xl text-red-500", title: "Java" },
      { Icon: FaPython, className: "text-4xl text-blue-500", title: "Python" },
      { Icon: SiFlask, className: "text-4xl text-white", title: "Flask" },
      { Icon: SiPostgresql, className: "text-4xl text-blue-400", title: "PostgreSQL" },
      { Icon: SiMongodb, className: "text-4xl text-green-500", title: "MongoDB" },
      { Icon: SiMinio, className: "text-4xl text-red-400", title: "MinIO Object Storage" },
    ],
  },
  {
    title: "DevOps & Infra",
    delay: 0.4,
    items: [
      { Icon: SiDocker, className: "text-4xl text-blue-500", title: "Docker" },
      { Icon: SiKubernetes, className: "text-4xl text-blue-600", title: "Kubernetes" },
      { Icon: SiNginx, className: "text-4xl text-green-500", title: "Nginx" },
      { Icon: SiPrometheus, className: "text-4xl text-orange-600", title: "Prometheus" },
      { Icon: SiGrafana, className: "text-4xl text-orange-400", title: "Grafana" },
    ],
  },
];
