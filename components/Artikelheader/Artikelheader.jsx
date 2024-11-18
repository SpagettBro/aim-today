import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";

const Artikelheader = ({ blok }) => (
  <div {...storyblokEditable(blok)}>
    <div>
      <div>
        {render(blok.categorietekst)} 
      </div>
      <div>
        {render(blok.titeltekst)}
      </div>
      <div className="flex">
        {render(blok.auteurtekst)}
        {render(blok.datumtekst)}
        {render(blok.aantaltekst)}
      </div>
      <div>
        <img
            className="artikelFoto"
            src={blok.artikelfoto.filename}
            alt={blok.artikelfoto.alt || "over het artikel"}
          />
      </div>
    </div>
  </div>
);

export default Artikelheader;
