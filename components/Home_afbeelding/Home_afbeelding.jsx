import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";
import Image from "next/image";

const Home_net_binnen = ({ blok }) => (
  <div
    className="relative w-full flex flex-col items-start justify-start"
    {...storyblokEditable(blok)}
  >
    {/* Container voor de afbeelding */}
    <div className="relative w-full max-w-[800px] mx-auto">
      {/* Oranje achtergrondvlak */}
      <div className="absolute inset-0 bg-orange-500 rounded-md transform translate-x-4 translate-y-4 w-full h-full z-0"></div>

      {/* Hoofdafbeelding */}
      <Image
        src={blok.home_hoofdartikel_img.filename}
        alt={blok.home_hoofdartikel_img.alt || "Hoofd artikel img"}
        width={800}
        height={400}
        className="relative z-10 rounded-md"
      />
    </div>

    {/* Tekstsectie */}
    <div className="mt-6 px-2 w-full max-w-[800px]">
      {/* Accent tekst */}
      <p className="font-montserrat text-sm font-normal text-gray-600 mb-2">
        {blok.hoofdartikel_accent}
      </p>

      {/* Hoofdtitel */}
      <h1 className="font-dm-sans text-3xl font-black leading-tight text-gray-900">
        {render(blok.hoofdartikel_titel)}
      </h1>

      {/* Onderliggende tekst */}
      <p className="mt-4 text-base text-gray-700">
        {render(blok.hoofdartikel_paragraaf)} {/* Voeg extra veld toe als nodig */}
      </p>
    </div>
  </div>
);

export default Home_net_binnen;
