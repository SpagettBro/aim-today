import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";

const Inschrijven_heading = ({ blok }) => (
  <div className="blok-feature" {...storyblokEditable(blok)}>
    {blok.name}
    
  </div>
);

export default Inschrijven_heading;
