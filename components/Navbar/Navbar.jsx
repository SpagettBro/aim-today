import { useEffect, useState } from "react";
import { storyblokEditable } from "@storyblok/react/rsc";

const Navbar = ({ blok }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className="bg-white w-full border-b border-gray-300 z-10 px-6"
      {...storyblokEditable(blok)}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto py-3">
        <div className="flex-shrink-0">
          <img
            src={blok.logo.filename}
            alt={blok.logo.alt || "News Logo"}
            className="h-[50px] w-auto"
          />
        </div>

        <div className="flex items-center justify-between flex-grow ml-[30px]">
          <nav className="hidden lg:flex space-x-6">
            <a
              href="/nieuws"
              className="text-[#2A3A4B] group hover:text-black transition duration-300 px-[10px] font-dm"
            >
              Nieuws
              <span className="block w-full h-[2px] bg-oranje opacity-0 group-hover:opacity-100 transition-all"></span>
            </a>
            <a
              href="/interviews"
              className="text-[#2A3A4B] group hover:text-black transition duration-300 px-[10px] font-dm"
            >
              Interviews
              <span className="block w-full h-[2px] bg-oranje opacity-0 group-hover:opacity-100 transition-all"></span>
            </a>
            <a
              href="/artikelen"
              className="text-[#2A3A4B] group hover:text-black transition duration-300 px-[10px] font-dm"
            >
              Artikelen
              <span className="block w-full h-[2px] bg-oranje opacity-0 group-hover:opacity-100 transition-all"></span>
            </a>
            <a
              href="/events"
              className="text-[#2A3A4B] group hover:text-black transition duration-300 px-[10px] font-dm"
            >
              Evenementen
              <span className="block w-full h-[2px] bg-oranje opacity-0 group-hover:opacity-100 transition-all"></span>
            </a>
          </nav>

          <div className="hidden lg:flex items-center space-x-4 ml-[225px]">
            <button className="text-[#2A3A4B] hover:text-black transition duration-300 font-dm">
              Log In
            </button>
            <button className="text-white bg-donkerBlauw px-[15px] py-[10px] rounded-md font-dm">
              Word Abonnee
            </button>
          </div>
        </div>

        <button
          className="lg:hidden p-2 text-[#2A3A4B] focus:outline-none"
          onClick={toggleMenu}
        >
          <span
            className={`block w-6 h-0.5 bg-gray-500 mb-1 transition-all duration-300 ${
              menuOpen ? "transform rotate-45" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-gray-500 mb-1 transition-all duration-300 ${
              menuOpen ? "hidden" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-gray-500 transition-all duration-300 ${
              menuOpen ? "-rotate-45" : ""
            }`}
          ></span>
        </button>
      </div>

      {menuOpen && (
        <nav className="fixed inset-0 bg-gray-100 shadow-md z-50 overflow-y-auto">
          <div className="flex items-center justify-between max-w-7xl mx-auto py-3 px-6 border-b border-gray-300">
            <img
              src={blok.logo.filename}
              alt={blok.logo.alt || "News Logo"}
              className="h-[50px] w-auto"
            />
            <button
              onClick={toggleMenu}
              className="text-[#2A3A4B] hover:text-black transition duration-300 focus:outline-none"
            >
              <span className="block w-6 h-0.5 bg-gray-500 mb-1 transform rotate-45"></span>
              <span className="block w-6 h-0.5 bg-gray-500 transform -rotate-45"></span>
            </button>
          </div>

          <div className="p-6 space-y-4">
            <a
              href="/nieuws"
              className="block text-[#2a3a4b] text-2xl hover:text-oranje transition-all border-b border-gray-300 pb-6"
            >
              Nieuws
            </a>
            <a
              href="/interviews"
              className="block text-[#2a3a4b] text-2xl hover:text-oranje transition-all border-b border-gray-300 pb-6"
            >
              Interviews
            </a>
            <a
              href="/artikelen"
              className="block text-[#2a3a4b] text-2xl hover:text-oranje transition-all border-b border-gray-300 pb-6"
            >
              Artikelen
            </a>
            <a
              href="/evenementen"
              className="block text-[#2a3a4b] text-2xl hover:text-oranje transition-all border-b border-gray-300 pb-6"
            >
              Evenementen
            </a>
            <button className="bg-DarkBlue text-white px-4 py-3 rounded-md mt-4">
              Word Abonnee
            </button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
