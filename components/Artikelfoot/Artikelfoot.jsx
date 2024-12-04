import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";
import Tags from "../Tags/Tags"
import Artikelshare from '../Artikelshare/Artikelshare'

const Artikelfoot= ({ blok }) => (
  <div className="flex h-20 lg:justify-between mx-4 my-8 text-sm lg:w-full lg:mx-auto lg:grid lg:columns-12" {...storyblokEditable(blok)}>
    <div className="h-fit" {...storyblokEditable(blok)}>
      {render(blok.artikelgrid)} 
    </div>
  </div>
);

export default Artikelfoot;