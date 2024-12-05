import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";

const Artikelinhoud = ({ blok }) => (
  <div
    className="mx-4 my-8 text-sm font-inter lg:w-1/2 lg:mx-auto lg:grid lg:columns-12"
    {...storyblokEditable(blok)}
  >
    <div>
      <div className="mb-4 lg:col-start-2">{render(blok.koptekst)}</div>
      <div>{render(blok.paragraaftekst)}</div>
    </div>
  </div>
);

export default Artikelinhoud;
