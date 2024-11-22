import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";

const Inschrijven_heading = ({ blok }) => (
  <div className="pl-5 pr-5" {...storyblokEditable(blok)}>
    <div className="text-xl font-bold">{render(blok.heading)}</div>
    <div className="text-sm">{render(blok.sentence)}</div>
  </div>
);

export default Inschrijven_heading;
