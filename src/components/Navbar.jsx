import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img className="rounded-full" src={logo} alt="Logo" width={70}></img>
        </a>
      </div>

      {/* Navigation Links */}
      <div className="flex gap-8">
        <a
          href="#profile"
          className="hover:text-cyan-400 transition duration-300"
        >
          Profile
        </a>
        <a
          href="#techstack"
          className="hover:text-cyan-400 transition duration-300"
        >
          Tech Stack
        </a>
        <a
          href="#projects"
          className="hover:text-cyan-400 transition duration-300"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="hover:text-cyan-400 transition duration-300"
        >
          Contact
        </a>
      </div>

      {/* Social Media Icons */}
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/farhan-raditya-aji/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="http://www.github.com/sibobbbbbb/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
        >
          <FaGithub />
        </a>
        <a
          href="http://www.instagram.com/farhan.raditya29"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
