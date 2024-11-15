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
        {/* Logo on the far left */}
        <div className="flex-shrink-0">
          <img
            src={blok.logo.filename}
            alt={blok.logo.alt || "News Logo"}
            className="h-[50px] w-auto"
          />
        </div>

        {/* Navigation and Buttons with Padding */}
        <div className="flex items-center justify-between flex-grow ml-[30px]">
          {/* Navigation */}
          <nav className="hidden lg:flex space-x-6">
            <a
              href="/world"
              className="text-gray-500 group hover:text-black transition duration-300 px-[10px]"
            >
              Nieuws
              <span className="block w-full h-[2px] bg-orange-500 opacity-0 group-hover:opacity-100 transition-all"></span>
            </a>
            <a
              href="/politics"
              className="text-gray-500 group hover:text-black transition duration-300 px-[10px]"
            >
              Interviews
              <span className="block w-full h-[2px] bg-orange-500 opacity-0 group-hover:opacity-100 transition-all"></span>
            </a>
            <a
              href="/business"
              className="text-gray-500 group hover:text-black transition duration-300 px-[10px]"
            >
              Artikelen
              <span className="block w-full h-[2px] bg-orange-500 opacity-0 group-hover:opacity-100 transition-all"></span>
            </a>
            <a
              href="/tech"
              className="text-gray-500 group hover:text-black transition duration-300 px-[10px]"
            >
              Evenementen
              <span className="block w-full h-[2px] bg-orange-500 opacity-0 group-hover:opacity-100 transition-all"></span>
            </a>
          </nav>

          {/* Subscription and Login Buttons (Hidden on Mobile) */}
          <div className="hidden lg:flex items-center space-x-4 ml-[225px]">
            <button className="text-gray-500 hover:text-black transition duration-300">
              Log In
            </button>
            <button className="text-white bg-DonkerBlauw px-[15px] py-[10px] rounded-md">
              Word Abbonee
            </button>
          </div>
        </div>

        {/* Hamburger Menu for Mobile */}
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

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="flex flex-col space-y-4 lg:hidden bg-white p-4 border-t border-gray-300">
          <a
            href="/"
            className="text-gray-500 hover:text-black hover:underline hover:text-orange-500 transition duration-300"
          >
            Home
          </a>
          <a
            href="/world"
            className="text-gray-500 hover:text-black hover:underline hover:text-orange-500 transition duration-300"
          >
            World
          </a>
          <a
            href="/politics"
            className="text-gray-500 hover:text-black hover:underline hover:text-orange-500 transition duration-300"
          >
            Politics
          </a>
          <a
            href="/business"
            className="text-gray-500 hover:text-black hover:underline hover:text-orange-500 transition duration-300"
          >
            Business
          </a>
          <a
            href="/tech"
            className="text-gray-500 hover:text-black hover:underline hover:text-orange-500 transition duration-300"
          >
            Tech
          </a>
          <a
            href="/sports"
            className="text-gray-500 hover:text-black hover:underline hover:text-orange-500 transition duration-300"
          >
            Sports
          </a>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
