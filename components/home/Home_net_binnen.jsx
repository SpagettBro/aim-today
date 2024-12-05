import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";
import Image from "next/image";
<link
  href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@900&family=Montserrat:wght@400&display=swap"
  rel="stylesheet"
/>;

const Home_net_binnen = ({ blok }) => (
  <div className="relative w-full px-4" {...storyblokEditable(blok)}>
    <div className="relative w-full max-w-[350px] mx-auto mt-4">
      {/* Oranje achtergrondvlak achter de afbeelding */}
      <div className="absolute inset-0 bg-orange-500 rounded-md transform translate-x-2 translate-y-2"></div>

      {/* Hoofdafbeelding */}
      <Image
        src={blok.home_hoofdartikel_img.filename}
        alt={blok.home_hoofdartikel_img.alt || "Hoofd artikel img"}
        width={350}
        height={215}
        className="relative w- h-auto" // Afbeelding breedte instellen op 100% van de container
      />
    </div>
    {/* Hoofdartikel accent met Montserrat font en 12px grootte */}
    <p className="hoofdartikel_accent font-montserrat text-xs font-normal pt-5 ml-2">
      {blok.hoofdartikel_accent}
    </p>
    {/* Hoofdartikel titel met DM Sans font en 20px grootte */}
    <div className="hoofdartikel_titel font-dm-sans text-xl font-black pt-2 ml-2 leading-5">
      {render(blok.hoofdartikel_titel)}
    </div>
  </div>
);

export default Home_net_binnen;
