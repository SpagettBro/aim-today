import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";

const Artikelheader = ({ blok }) => (
  <div className="mx-2"{...storyblokEditable(blok)}>
    <div>
      <div className="font-bold text-orange-600 font-montserrat mt-4 mb-1">
        {render(blok.categorietekst)} 
      </div>
      <div className="font-bold font-dm-sans mb-4 text-lg" >
        {render(blok.titeltekst)}
      </div>
      <div className="mt-2 mb-4 text-sm">
        {render(blok.inleidingtekst)}
      </div>
      <div className="flex justify-between font-extralight text-xs mb-2">
        {render(blok.auteurtekst)}
        {render(blok.datumtekst)}
        {render(blok.aantaltekst)}
      </div>
      <div>
        <img 
            className="w-full rounded-none"
            src={blok.artikelfoto.filename}
            alt={blok.artikelfoto.alt || "over het artikel"}
          />
      </div>
    </div>
  </div>
);

export default Artikelheader;
