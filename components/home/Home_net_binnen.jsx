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

    <div className="mt-8 px-4">
      <div className="relative w-full max-w-[350px] mx-auto mt-4 flex gap-4">
        <div className="absolute inset-0 rounded-md transform translate-x-2 translate-y-2"></div>
        {/*Linker afbeelding*/}
        <div className="w-1/2">
          <Image
            src={blok.netBinnen_img_links.filename}
            alt={blok.netBinnen_img_links.alt || "afbeelding artikel links"}
            width={350}
            height={215}
            className="relative w- h-auto"
          />
        </div>

        {/*Linker tekst*/}
        <div className="w-1/2">
          <p className="font-montserrat text-xs font-normal pt-5 ml-2">
            {blok.netBinnen_accent_links}
          </p>
          <p className="font-dm-sans text-sm font-bold pt-2 ml-2 leading-5">
            {blok.netBinnen_titel_links}
          </p>
        </div>
      </div>

      <div className="flex gap-4 mt-8">
        {/*Rechter afbeelding*/}
        <div className="w-1/2">
          <Image
            src={blok.netBinnen_img_rechts.filename}
            alt={blok.netBinnen_img_rechts.alt || "afbeelding artikel rechts"}
            width={350}
            height={215}
            className="relative w- h-auto"
          />
        </div>

        {/*Rechter tekst*/}
        <div className="w-1/2">
          <p className="font-montserrat text-xs font-normal pt-5 ml-2">
            {blok.netBinnen_accent_rechts}
          </p>
          <p className="font-dm-sans text-sm font-bold pt-2 ml-2 leading-5">
            {blok.netBinnen_titel_rechts}
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Home_net_binnen;
