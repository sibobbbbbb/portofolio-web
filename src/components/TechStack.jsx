import { FaJava, FaNodeJs, FaPython } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import {
  SiMongodb,
  SiFlutter,
  SiDocker,
  SiSqlite,
  SiHtml5,
  SiCss3,
  SiJavascript,
} from "react-icons/si";
import { motion } from "framer-motion";
import { FaGolang } from "react-icons/fa6";

const TechStack = () => {
  return (
    <div className="pb-16">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Tech Stack
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Web Development */}
        <div className="border p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-center">
            Web Development
          </h3>
          <p className="my-4 text-center text-gray-500">
            The technology used to build frontend and backend websites.
          </p>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5 }}
            className="flex justify-center flex-wrap gap-4 mt-6"
          >
            <SiHtml5 className="text-7xl text-orange-500" title="HTML" />
            <SiCss3 className="text-7xl text-blue-600" title="CSS" />
            <SiJavascript
              className="text-7xl text-yellow-500"
              title="Javascript"
            />
            <FaNodeJs className="text-7xl text-green-500" title="NodeJs" />
            <FaGolang className="text-7xl text-blue-500" title="Golang" />
            <RiReactjsLine className="text-7xl text-cyan-400" title="React" />
            <SiMongodb className="text-7xl text-green-400" title="MongoDb" />
            <SiSqlite className="text-7xl text-blue-600" title="Sqlite" />
            <SiDocker className="text-7xl text-blue-500" title="Docker" />
          </motion.div>
        </div>

        {/* Software Development */}
        <div className="border p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-center">
            Software Development
          </h3>
          <p className="my-4 text-center text-gray-500">
            Tools and frameworks for developing desktop and backend
            applications.
          </p>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 1.5 }}
            className="flex justify-center gap-4 mt-6"
          >
            <FaPython className="text-7xl text-blue-500" title="Python" />
            <FaJava className="text-7xl text-red-600" title="Java" />
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/csharp-colored.svg"
              className="text-7xl"
              alt="C#"
              title="C#"
              width={70}
            />
          </motion.div>
        </div>

        {/* Mobile Development */}
        <div className="border p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-center">
            Mobile Development
          </h3>
          <p className="my-4 text-center text-gray-500">
            Technologies for building mobile applications
          </p>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1.5 }}
            className="flex justify-center gap-4 mt-6"
          >
            <SiFlutter className="text-7xl text-blue-400" title="Flutter" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
