import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";
import "app/globals.css";

const Advertentie = ({ blok }) => (
  <div
    className="background-donkerblauw flex justify-between"
    {...storyblokEditable(blok)}
  >
    {/* Linkerzijde */}
    <div className="links flex h-[600px] w-[25%] bg-blue w-[310px] h-[405px] flex-shrink-0">
      {blok.advertentie_image?.filename ? (
        <img
          className="object-cover"
          src={blok.advertentie_image.filename}
          alt="Workshop"
        />
      ) : (
        <div className="flex items-center justify-center text-gray-500">
          Afbeelding niet beschikbaar
        </div>
      )}
    </div>
  </div>
);

export default Advertentie;
