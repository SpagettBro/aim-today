import { useEffect, useState } from "react";
import { storyblokEditable } from "@storyblok/react/rsc";

const Navbar = ({ blok }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false); // State voor Dark Mode

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Dark mode toevoegen of verwijderen van de <html> tag
    if (!darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    // Bij eerste render: Dark mode instellen op basis van opgeslagen voorkeur of systeemvoorkeur
    const userPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const savedDarkMode = localStorage.getItem("darkMode") === "true";

    if (savedDarkMode || (!savedDarkMode && userPrefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    // Opslaan van dark mode-voorkeur
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <header
      className={`w-full border-b z-10 px-6 ${darkMode
        ? "bg-gray-800 border-gray-600 text-white"
        : "bg-white border-gray-300 text-black"
        }`}
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
            <a href="/nieuws" className="nav-link">
              Nieuws
            </a>
            <a href="/interviews" className="nav-link">
              Interviews
            </a>
            <a href="/artikelen" className="nav-link">
              Artikelen
            </a>
            <a href="/events" className="nav-link">
              Evenementen
            </a>
          </nav>

          <div className="hidden lg:flex items-center space-x-4 ml-[225px]">
            <button className="text-current hover:text-black font-dm">
              Log In
            </button>
            <button className="text-white bg-donkerBlauw px-[15px] py-[10px] rounded-md font-dm">
              Word Abonnee
            </button>
          </div>
        </div>

        {/* Dark Mode Knop */}
        <button
          onClick={toggleDarkMode}
          className="p-2 focus:outline-none"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? (
            <span role="img" aria-label="Sun" className="text-yellow-500">
              🌞
            </span>
          ) : (
            <span role="img" aria-label="Moon" className="text-gray-500">
              🌙
            </span>
          )}
        </button>

        <button
          className="lg:hidden p-2 text-current focus:outline-none"
          onClick={toggleMenu}
        >
          {/* Hamburger menu */}
        </button>
      </div>

      {menuOpen && (
        <nav
          className={`fixed inset-0 ${darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
            } shadow-md z-50 overflow-y-auto`}
        >
          {/* Menu implementatie */}
        </nav>
      )}
    </header>
  );
};

export default Navbar;