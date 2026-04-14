import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { LiaDownloadSolid } from "react-icons/lia";

const navLinks = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Services", link: "#services" },
  { name: "Skills", link: "#skills" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed left-1/2 top-6 z-50 w-[92%] sm:w-[95%] -translate-x-1/2 md:w-auto">
      <nav className="rounded-full border border-white/10 bg-white/5 px-6 py-3 shadow-lg backdrop-blur-lg md:px-8">
        <div className="flex items-center justify-between gap-6 md:justify-center">
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map(({ name, link }) => (
              <a
                key={name}
                href={link}
                className="relative text-gray-300 transition duration-300 hover:text-white
                after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-primary
                after:transition-all after:duration-300 hover:after:w-full"
              >
                {name}
              </a>
            ))}
            <a
              href="/Harsh_Ramani.pdf"
              target="_blank"
              download="resume.pdf"
              rel="noopener noreferrer"
              className="ml-2 px-5 py-2 rounded-full bg-primary text-white text-sm font-semibold flex items-center gap-2"
            >
              Resume
              <LiaDownloadSolid className="text-lg" />
            </a>
          </div>

          <div className="text-2xl text-white md:hidden">
            {menuOpen ? (
              <FaTimes onClick={() => setMenuOpen(false)} />
            ) : (
              <FaBars onClick={() => setMenuOpen(true)} />
            )}
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div className="mt-3 rounded-3xl border border-white/10 bg-white/5 py-6 text-center backdrop-blur-lg md:hidden">
          {navLinks.map(({ name, link }) => (
            <a
              key={name}
              href={link}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-gray-300 hover:text-white"
            >
              {name}
            </a>
          ))}

          <a
            href="/Harsh_Ramani.pdf"
            download="resume.pdf"
            className="mt-4 inline-block rounded-full bg-primary px-6 py-2 text-white"
          >
            Resume
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
