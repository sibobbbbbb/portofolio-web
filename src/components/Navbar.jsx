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
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/farhan-raditya-aji/"
          target="_blank"
          rel="noopener noreferrer"
          arial-label="LinkedIn"
        >
            <FaLinkedin />
        </a>
        <a
          href="http://www.github.com/sibobbbbbb/"
          target="_blank"
          rel="noopener noreferrer"
          arial-label="Github"
        >
            <FaGithub/>
        </a>
        <a
          href="http://www.instagram.com/farhan.raditya29"
          target="_blank"
          rel="noopener noreferrer"
          arial-label="Instagram"
        >
            <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
