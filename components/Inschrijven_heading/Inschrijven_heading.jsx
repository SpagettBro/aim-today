import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";

const Inschrijven_heading = ({ blok }) => (
  <div
    className="max-w-screen-lg ml-5 mt-8  text-[#2a3a4b] flex flex-col md:mx-auto"
    {...storyblokEditable(blok)}
  >
    <div className="text-2xl mb-1 font-bold font-dm">
      {render(blok.heading)}
    </div>
    <div className="text-sm font-montserrat">{render(blok.sentence)}</div>
  </div>
);

export default Inschrijven_heading;
