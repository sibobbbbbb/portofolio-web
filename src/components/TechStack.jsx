import { FaJava, FaNodeJs, FaPhp, FaPython, FaVuejs } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import {
  SiMongodb,
  SiFlutter,
  SiDocker,
  SiSqlite,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiDart,
  SiTailwindcss,
  SiExpress,
  SiPostgresql,
  SiTypescript,
  SiKotlin,
  SiFlask
} from "react-icons/si";
import { motion } from "framer-motion";
import { FaGolang } from "react-icons/fa6";
import qt from "../assets/qt.png";
import javafx from "../assets/javafx.png";

const TechStack = () => {
  return (
    <div className="pb-16">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="my-20 text-center text-4xl"
      >
        Tech Stack
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Web Development */}
        <div className="border p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-center">
            Web Development
          </h3>
          <p className="my-4 text-center text-gray-500">
            Technologies to build web applications
          </p>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5 }}
            className="flex justify-center flex-wrap gap-4 mt-6"
            viewport={{ once: true }}
          >
            <SiHtml5
              className="text-4xl sm:text-5xl md:text-6xl text-orange-500"
              title="HTML5"
            />
            <SiCss3
              className="text-4xl sm:text-5xl md:text-6xl text-blue-600"
              title="CSS"
            />
            <SiJavascript
              className="text-4xl sm:text-5xl md:text-6xl text-yellow-500"
              title="Javascript"
            />
            <SiTypescript
              className="text-4xl sm:text-5xl md:text-6xl text-blue-600"
              title="Typescript"
            />
            <SiTailwindcss
              className="text-4xl sm:text-5xl md:text-6xl text-cyan-500"
              title="Tailwind"
            />
            <RiReactjsLine
              className="text-4xl sm:text-5xl md:text-6xl text-cyan-400"
              title="React"
            />
            <FaVuejs
              className="text-4xl sm:text-5xl md:text-6xl text-green-400"
              title="Vue"
            />
          </motion.div>
        </div>

        {/* Desktop Development */}
        <div className="border p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-center">
            Desktop Development
          </h3>
          <p className="my-4 text-center text-gray-500">
            Technologies to build desktop applications.
          </p>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="flex justify-center flex-wrap gap-4 mt-6"
          >
            <FaPython
              className="text-4xl sm:text-5xl md:text-6xl text-blue-500"
              title="Python"
            />
            <img src={qt} alt="PyQt" title="PyQt" className="w-16 h-14" />
            <FaJava
              className="text-4xl sm:text-5xl md:text-6xl"
              title="Java"
            />
            <img
              src={javafx}
              alt="JavaFX"
              title="JavaFX"
              className="w-18 h-12"
            />
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/csharp-colored.svg"
              className="text-4xl sm:text-5xl md:text-6xl"
              alt="C#"
              title="C#"
              width={48}
            />
          </motion.div>
        </div>

        {/* Mobile Development */}
        <div className="border p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-center">
            Mobile Development
          </h3>
          <p className="my-4 text-center text-gray-500">
            Technologies to build mobile applications.
          </p>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="flex justify-center flex-wrap gap-4 mt-6"
          >
            <SiDart
              className="text-4xl sm:text-5xl md:text-6xl text-blue-500"
              title="Dart"
            />
            <SiFlutter
              className="text-4xl sm:text-5xl md:text-6xl text-blue-400"
              title="Flutter"
            />
            <SiKotlin
              className="text-4xl sm:text-5xl md:text-6xl text-blue-500"
              title="Kotlin"
            />
          </motion.div>
        </div>

        {/* Backend Development */}
        <div className="border p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-center">
            Backend Development
          </h3>
          <p className="my-4 text-center text-gray-500">
            Technologies to build backend applications.
          </p>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="flex justify-center flex-wrap gap-4 mt-6"
          >
            <FaNodeJs
              className="text-4xl sm:text-5xl md:text-6xl text-green-500"
              title="NodeJs"
            />
            <SiExpress
              className="text-4xl sm:text-5xl md:text-6xl text-green-500"
              title="Express"
            />
            <FaPhp
              className="text-4xl sm:text-5xl md:text-6xl text-blue-600"
              title="PHP"
            />
            <FaGolang
              className="text-4xl sm:text-5xl md:text-6xl text-blue-500"
              title="Golang"
            />
            <FaPython
              className="text-4xl sm:text-5xl md:text-6xl text-blue-500"
              title="Python"
            />
            <SiFlask
              className="text-4xl sm:text-5xl md:text-6xl text-red-500"
              title="Flask"
            />
            <SiMongodb
              className="text-4xl sm:text-5xl md:text-6xl text-green-400"
              title="MongoDb"
            />
            <SiSqlite
              className="text-4xl sm:text-5xl md:text-6xl text-blue-600"
              title="Sqlite"
            />
            <SiPostgresql
              className="text-4xl sm:text-5xl md:text-6xl text-blue-600"
              title="PostgreSQL"
            />
            <SiDocker
              className="text-4xl sm:text-5xl md:text-6xl text-blue-500"
              title="Docker"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;