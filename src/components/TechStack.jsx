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

const TechStack = () => {
  return (
    <div className="pb-24">
      <h2 className="my-20 text-center text-4xl">Tech Stack</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Web Development */}
        <div className="border p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-center">
            Web Development
          </h3>
          <p className="my-4 text-center text-gray-500">
            Teknologi yang digunakan untuk membangun website frontend dan
            backend.
          </p>
          <div className="flex justify-center flex-wrap gap-4 mt-6">
            <SiHtml5 className="text-7xl text-orange-500" title="HTML" />
            <SiCss3 className="text-7xl text-blue-600" title="CSS" />
            <SiJavascript className="text-7xl text-yellow-500" title="Javascript" />
            <FaNodeJs className="text-7xl text-green-500" title="NodeJs" />
            <RiReactjsLine className="text-7xl text-cyan-400" title="React" />
            <SiMongodb className="text-7xl text-green-400" title="MongoDb" />
            <SiSqlite className="text-7xl text-blue-600" title="Sqlite" />
            <SiDocker className="text-7xl text-blue-500" title="Docker" />
          </div>
        </div>

        {/* Software Development */}
        <div className="border p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-center">
            Software Development
          </h3>
          <p className="my-4 text-center text-gray-500">
            Tools dan framework untuk mengembangkan aplikasi desktop dan
            backend.
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <FaPython className="text-7xl text-blue-500" title="Python" />
            <FaJava className="text-7xl text-red-600" title="Java" />
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/csharp-colored.svg"
              className="text-7xl"
              alt="C#"
              title="C#"
              width={70}
            />
          </div>
        </div>

        {/* Mobile Development */}
        <div className="border p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-center">
            Mobile Development
          </h3>
          <p className="my-4 text-center text-gray-500">
            Teknologi untuk membangun aplikasi mobile native atau cross-platform.
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <SiFlutter className="text-7xl text-blue-400" title="Flutter" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
