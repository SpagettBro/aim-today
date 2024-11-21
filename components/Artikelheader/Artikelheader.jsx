import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";

const Artikelheader = ({ blok }) => (
  <div {...storyblokEditable(blok)}>
    <div>
      <div className="font-bold text-orange-600 font-montserrat">
        {render(blok.categorietekst)} 
      </div>
      <div className="font-bold font-dm-sans" >
        {render(blok.titeltekst)}
      </div>
      <div className="flex font-extralight">
        {render(blok.auteurtekst)}
        {render(blok.datumtekst)}
        {render(blok.aantaltekst)}
      </div>
      <div>
        <img
            className="w-full"
            src={blok.artikelfoto.filename}
            alt={blok.artikelfoto.alt || "over het artikel"}
          />
      </div>
    </div>
  </div>
);

export default Artikelheader;
