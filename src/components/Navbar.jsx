import logo from "../assets/logo.png";
import { SOCIAL_LINKS } from "../constants";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between pt-3 pb-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img className="rounded-full" src={logo} alt="Logo" width={70}></img>
        </a>
      </div>

      {/* Social Media Icons */}
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        {SOCIAL_LINKS.map(({ Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
          >
            <Icon />
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
