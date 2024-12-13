import { storyblokEditable } from "@storyblok/react/rsc";

const Home_header = ({ blok }) => (
  <div
    className="relative w-full md:mx-auto max-w-screen-xl pt-[50px] box-border"
    {...storyblokEditable(blok)}
  >
    <div className="relative w-full md:w-[1200px] h-auto mx-auto">
      {/* Oranje vlak - wordt onder de afbeelding geplaatst */}
      <div className="absolute w-[360px] h-[223px] sm:w-[1200px] sm:h-[450px] bg-orange-500 top-2 px-5 left-2 rounded-lg z-[-1]"></div>

      {/* Afbeelding - wordt verborgen op mobiel */}
      <img
        className="w-full h-auto sm:w-[1200px] sm:h-[450px] object-cover z-10 rounded-lg px-5 sm:px-0 hidden sm:block" // Verberg afbeelding op mobiel
        src={blok.artikelheaderfoto.filename}
        alt="header afbeelding"
      />

      {/* Tekst overlay voor mobiele weergave */}
      <div className="hidden sm:flex absolute inset-0 flex-col justify-center items-center w-full px-5 z-20 mt-[100px]">
        {/* Dit blijft verborgen op mobiel */}
      </div>

      {/* Tekst overlay voor grotere schermen (nu verborgen op mobiel) */}
      <div className="hidden sm:block absolute inset-0 flex flex-col justify-center w-[600px] px-10 pl-[120px] z-20 mt-[100px]">
        <h1 className="text-black font-dm text-3xl mb-4 font-bold">
          {blok.headertitel}
        </h1>
        <p className="text-black text-lg font-dm">{blok.headersubtekst}</p>
      </div>
    </div>
  </div>
);

export default Home_header;
