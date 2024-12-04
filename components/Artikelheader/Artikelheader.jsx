import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";
import "app/globals.css";

const Artikelheader = ({ blok }) => (
  <div
    className="w-auto mx-2 lg:w-1/2 lg:mx-auto lg:grid lg:columns-12"
    {...storyblokEditable(blok)}
  >
    <div className="font-bold text-orange-600 font-montserrat mt-4 mb-1 lg:mt-12">
      {render(blok.categorietekst)}
    </div>
    <div className="font-bold font-dm mb-4 text-lg lg:text-4xl">
      {render(blok.titeltekst)}
    </div>
    <div className="mt-2 mb-4 text-sm lg:text-base lg:mb-16">
      {render(blok.inleidingtekst)}
    </div>
    <div className="flex justify-between font-extralight text-xs mb-2 lg:text-base">
      {render(blok.auteurtekst)}
      {render(blok.datumtekst)}
      {render(blok.aantaltekst)}
    </div>
    <div>
      <img
        className="w-full rounded-md"
        src={blok.artikelfoto.filename}
        alt={blok.artikelfoto.alt || "over het artikel"}
      />
    </div>
  </div>
);

export default Artikelheader;
