import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";

const Artikelinhoud= ({ blok }) => (
  <div {...storyblokEditable(blok)}>
    <div>
        <div>
          {render(blok.koptekst)}
        </div>
        <div>
          {render(blok.paragraaftekst)}
        </div>
    </div>
  </div>
);

export default Artikelinhoud;
