import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";

const Reacties = ({ blok }) => (
  <div {...storyblokEditable(blok)}>
    <div>
        <div>
            {render(blok.categorietekst)} 
        </div>
        <div>
            {render(blok.categorietekst)} 
        </div>
    </div>
    <div>

    </div>
  </div>
);

export default Reacties;
