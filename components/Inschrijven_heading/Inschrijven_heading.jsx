import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";

const Inschrijven_heading = ({ blok }) => (
  <div
    className="max-w-screen-lg m-5 mt-6 text-[#2a3a4b] flex flex-col md:mx-auto"
    {...storyblokEditable(blok)}
  >
    <div className="text-2xl font-bold">{render(blok.heading)}</div>
    <div className="text-sm">{render(blok.sentence)}</div>
  </div>
);

export default Inschrijven_heading;
