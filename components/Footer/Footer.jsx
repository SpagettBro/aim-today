import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";

const Footer = ({ blok }) => (
  <div className="" {...storyblokEditable(blok)}>
    {blok.name}
  </div>
);

export default Footer;
