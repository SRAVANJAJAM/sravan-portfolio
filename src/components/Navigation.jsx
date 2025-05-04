import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed w-full bg-[#2c3e50]/90 backdrop-blur-sm z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="hidden md:flex space-x-4">
            <a
              href="https://github.com/SRAVANJAJAM"
              className="text-[#3498db] hover:text-[#2ecc71] transition-colors duration-300"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/sravanjajam/"
              className="text-[#3498db] hover:text-[#2ecc71] transition-colors duration-300"
            >
              <FaLinkedin size={24} />
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#3498db] hover:text-[#2ecc71] transition-colors duration-300"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>

          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-3 py-2 text-lg ${
                  location.pathname === link.path
                    ? "text-[#2ecc71] border-b-2 border-[#2ecc71]"
                    : "text-[#3498db] hover:text-[#2ecc71] transition-colors duration-300"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col items-center space-y-4">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`${
                    location.pathname === link.path
                      ? "text-[#2ecc71]"
                      : "text-[#3498db] hover:text-[#2ecc71] transition-colors duration-300"
                  } px-3 py-2 text-lg`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex space-x-6 mt-4">
                <a
                  href="https://github.com"
                  className="text-[#3498db] hover:text-[#2ecc71] transition-colors duration-300"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="https://linkedin.com"
                  className="text-[#3498db] hover:text-[#2ecc71] transition-colors duration-300"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href="https://twitter.com"
                  className="text-[#3498db] hover:text-[#2ecc71] transition-colors duration-300"
                >
                  <FaTwitter size={24} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
