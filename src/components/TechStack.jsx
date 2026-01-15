import { FaJava, FaNodeJs, FaPython, FaVuejs, FaEthereum } from "react-icons/fa";
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
  SiSolidity,   
  SiRabbitmq,   
  SiNginx,      
  SiBootstrap,
  SiGnubash,
  SiApachekafka,
  SiKubernetes,
  SiPrometheus,
  SiGrafana,
  SiMinio,
  SiPandas,
  SiScikitlearn,
  SiFlask,
  SiGo
} from "react-icons/si";
import { motion } from "framer-motion";
import qt from "../assets/qt.png";
import javafx from "../assets/javafx.png";

const TechStack = () => {
  return (
    <div className="pb-20">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl font-bold text-neutral-200"
      >
        Tech Stack
      </motion.h2>
      
      <div className="container mx-auto px-4 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* --- FRONTEND & WEB --- */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-neutral-600 transition-colors duration-300"
          >
            <h3 className="text-lg font-bold text-center text-neutral-200 mb-6">Frontend & Web</h3>
            <div className="flex justify-center flex-wrap gap-4">
              <SiHtml5 className="text-4xl text-orange-500" title="HTML5" />
              <SiCss3 className="text-4xl text-blue-600" title="CSS3" />
              <SiJavascript className="text-4xl text-yellow-500" title="JavaScript" />
              <SiTypescript className="text-4xl text-blue-500" title="TypeScript" />
              <RiReactjsLine className="text-4xl text-cyan-400" title="React" />
              <SiNextdotjs className="text-4xl text-white" title="Next.js" />
              <FaVuejs className="text-4xl text-green-400" title="Vue.js" />
              <SiTailwindcss className="text-4xl text-cyan-500" title="Tailwind CSS" />
              <SiBootstrap className="text-4xl text-purple-600" title="Bootstrap" />
            </div>
          </motion.div>

          {/* --- BACKEND & DATABASE --- */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-neutral-600 transition-colors duration-300"
          >
            <h3 className="text-lg font-bold text-center text-neutral-200 mb-6">Backend & Database</h3>
            <div className="flex justify-center flex-wrap gap-4">
              <FaNodeJs className="text-4xl text-green-500" title="Node.js" />
              <SiGo className="text-4xl text-cyan-300" title="Go" />
              <SiSpringboot className="text-4xl text-green-500" title="Spring Boot" />
              <FaJava className="text-4xl text-red-500" title="Java" />
              <FaPython className="text-4xl text-blue-500" title="Python" />
              <SiFlask className="text-4xl text-white" title="Flask" />
              <SiPostgresql className="text-4xl text-blue-400" title="PostgreSQL" />
              <SiMongodb className="text-4xl text-green-500" title="MongoDB" />
              <SiMinio className="text-4xl text-red-400" title="MinIO Object Storage" />
            </div>
          </motion.div>

           {/* --- 3. BLOCKCHAIN & WEB3 --- */}
           <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.3, delay: 0.2 }}
             className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-neutral-600 transition-colors duration-300"
           >
            <h3 className="text-lg font-bold text-center text-neutral-200 mb-6">Blockchain & Web3</h3>
            <div className="flex justify-center flex-wrap gap-4 items-center">
              <SiSolidity className="text-4xl text-gray-400" title="Solidity" />
              <FaEthereum className="text-4xl text-purple-400" title="Ethereum" />
              <div className="flex flex-col items-center justify-center w-10 h-10 bg-neutral-800 rounded shadow-sm border border-neutral-700" title="Hardhat">
                 <span className="text-xs font-bold text-yellow-400">HH</span>
              </div>
            </div>
          </motion.div>

          {/* --- DATA ENGINEERING & AI --- */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-neutral-600 transition-colors duration-300"
           >
            <h3 className="text-lg font-bold text-center text-neutral-200 mb-6">Data Eng & AI</h3>
            <div className="flex justify-center flex-wrap gap-4 items-center">
              <SiApachekafka className="text-4xl text-white" title="Apache Kafka" />
              <SiRabbitmq className="text-4xl text-orange-500" title="RabbitMQ" />
              <SiPandas className="text-4xl text-blue-800" title="Pandas" />
              <SiScikitlearn className="text-4xl text-orange-400" title="Scikit-Learn" />
              <div className="flex flex-col items-center justify-center w-10 h-10 bg-neutral-800 rounded shadow-sm border border-neutral-700" title="n8n Workflow">
                 <span className="text-xs font-bold text-red-500">n8n</span>
              </div>
            </div>
          </motion.div>

          {/* --- DEVOPS & INFRASTRUCTURE --- */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-neutral-600 transition-colors duration-300"
           >
            <h3 className="text-lg font-bold text-center text-neutral-200 mb-6">DevOps & Infra</h3>
            <div className="flex justify-center flex-wrap gap-4">
              <SiDocker className="text-4xl text-blue-500" title="Docker" />
              <SiKubernetes className="text-4xl text-blue-600" title="Kubernetes" />
              <SiNginx className="text-4xl text-green-500" title="Nginx" />
              <SiPrometheus className="text-4xl text-orange-600" title="Prometheus" />
              <SiGrafana className="text-4xl text-orange-400" title="Grafana" />
              <SiGnubash className="text-4xl text-white" title="Bash / CLI Tools" />
            </div>
          </motion.div>

          {/* --- MOBILE & DESKTOP --- */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-neutral-600 transition-colors duration-300"
           >
            <h3 className="text-lg font-bold text-center text-neutral-200 mb-6">Mobile & Desktop</h3>
            <div className="flex justify-center flex-wrap gap-4 items-center">
              <SiFlutter className="text-4xl text-blue-400" title="Flutter" />
              <SiDart className="text-4xl text-blue-500" title="Dart" />
              <SiKotlin className="text-4xl text-purple-500" title="Kotlin" />
              <div className="w-0.5 h-8 bg-neutral-700 mx-2" />
              <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/csharp-colored.svg" className="w-8 h-8" alt="C#" title="C#" />
              <img src={qt} alt="PyQt" title="PyQt" className="w-8 h-8 object-contain" />
              <img src={javafx} alt="JavaFX" title="JavaFX" className="w-10 h-6 object-contain" />
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default TechStack;