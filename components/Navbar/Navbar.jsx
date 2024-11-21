import { useState } from "react";
import { storyblokEditable } from "@storyblok/react/rsc";

const Navbar = ({ blok }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header
      className="bg-white w-full border-b border-gray-300 z-10"
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
              className="text-gray-500 group hover:text-black transition duration-300 px-[10px]"
            >
              Nieuws
              <span className="block w-full h-[2px] bg-orange-500 opacity-0 group-hover:opacity-100 transition-all"></span>
            </a>
            <a
              href="/interviews"
              className="text-gray-500 group hover:text-black transition duration-300 px-[10px]"
            >
              Interviews
              <span className="block w-full h-[2px] bg-orange-500 opacity-0 group-hover:opacity-100 transition-all"></span>
            </a>
            <a
              href="/artikelen"
              className="text-gray-500 group hover:text-black transition duration-300 px-[10px]"
            >
              Artikelen
              <span className="block w-full h-[2px] bg-orange-500 opacity-0 group-hover:opacity-100 transition-all"></span>
            </a>
            <a
              href="/evenementen"
              className="text-gray-500 group hover:text-black transition duration-300 px-[10px]"
            >
              Evenementen
              <span className="block w-full h-[2px] bg-orange-500 opacity-0 group-hover:opacity-100 transition-all"></span>
            </a>
          </nav>

          <div className="hidden lg:flex items-center space-x-4 ml-[225px]">
            <button className="text-gray-500 hover:text-black transition duration-300">
              Log In
            </button>
            <button className="text-white bg-DonkerBlauw px-[15px] py-[10px] rounded-md">
              Word Abonnee
            </button>
          </div>
        </div>

        <button
          className="lg:hidden p-2 text-gray-500 focus:outline-none"
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
        <nav className="flex flex-col bg-gray-100 text-left p-6 space-y-4 shadow-md border-t border-gray-300 w-full lg:hidden">
          <a
            href="/nieuws"
            className="text-gray-700 text-2xl hover:text-orange-500 transition-all flex justify-between items-center border-b border-gray-300 pb-6"
          >
            Nieuws
            <span className="text-black font-bold text-xl">+</span>
          </a>
          <a
            href="/interviews"
            className="text-gray-700 text-2xl hover:text-orange-500 transition-all border-b border-gray-300 pb-6"
          >
            Interviews
          </a>
          <a
            href="/artikelen"
            className="text-gray-700 text-2xl hover:text-orange-500 transition-all border-b border-gray-300 pb-6"
          >
            Artikelen
          </a>
          <a
            href="/evenementen"
            className="text-gray-700 text-2xl hover:text-orange-500 transition-all border-b border-gray-300 pb-6"
          >
            Evenementen
          </a>
          <button className="bg-DarkBlue text-white px-4 py-[243px] rounded-md mt-4 self-start">
            Word abonee
          </button>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
