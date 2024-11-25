import React from "react";

const Footer = ({ blok }) => {
  return (
    <footer className="bg-footerKleur text-donkerBlauw relative h-[337px]">
      <div className="container mx-auto h-full">
        {/* Logo links onder */}
        <div className="absolute bottom-4 left-[216px]">
          {blok.logo && (
            <img src={blok.logo.filename} alt="Logo" className="h-12" />
          )}
        </div>

        {/* Tabbladen linksboven */}
        <div className="absolute top-4 left-[216px]">
          <div className="flex space-x-20">
            {/* Eerste kolom */}
            <ul>
              <li className="text-sm font-semibold py-2.5">{blok.tabblad1}</li>
              <li className="text-sm font-semibold py-2.5">{blok.tabblad2}</li>
              <li className="text-sm font-semibold py-2.5">{blok.tabblad3}</li>
              <li className="text-sm font-semibold py-2.5">{blok.tabblad4}</li>
              <li className="text-sm font-semibold py-2.5">{blok.tabblad5}</li>
            </ul>
            {/* Tweede kolom */}
            <ul>
              <li className="text-sm font-semibold py-2.5">{blok.tabblad6}</li>
              <li className="text-sm font-semibold py-2.5">{blok.tabblad7}</li>
              <li className="text-sm font-semibold py-2.5">{blok.tabblad8}</li>
              <li className="text-sm font-semibold py-2.5">{blok.tabblad9}</li>
              <li className="text-sm font-semibold py-2.5">{blok.tabblad10}</li>
            </ul>
          </div>
        </div>

        {/* Nieuwsbrief */}
        <div className="absolute top-[64px] right-[223px]">
          <p className="text-lg font-semibold mb-2">
            Meld je aan voor de nieuwsbrief
          </p>
          <form className="flex h-[50px] w-[436px]">
            <input
              type="email"
              placeholder="email@gmail.com"
              className="border border-gray-300 rounded-l-md px-4 py-2 text-sm w-full h-full focus:outline-none"
            />
            <button
              type="submit"
              className="bg-orange-500 text-white flex items-center justify-center w-[50px] h-full rounded-r-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </form>
        </div>

        {/* Horizontale lijn */}
        <div
          className="absolute left-0 w-full border-t border-gray-300"
          style={{ top: "calc(337px - 22px - 48px)" }}
        ></div>

        {/* Socials rechtsonder */}
        <div className="absolute bottom-4 right-[223px]">
          <div className="flex space-x-[40px]">
            {blok.image1 && (
              <img
                src={blok.image1.filename}
                alt="Image 1"
                className="h-[29px] w-[29px]"
              />
            )}
            {blok.image2 && (
              <img
                src={blok.image2.filename}
                alt="Image 2"
                className="h-[29px] w-[29px]"
              />
            )}
            {blok.image3 && (
              <img
                src={blok.image3.filename}
                alt="Image 3"
                className="h-[29px] w-[29px]"
              />
            )}
            {blok.image4 && (
              <img
                src={blok.image4.filename}
                alt="Image 4"
                className="h-[29px] w-[29px]"
              />
            )}
            {blok.image5 && (
              <img
                src={blok.image5.filename}
                alt="Image 5"
                className="h-[29px] w-[29px]"
              />
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
