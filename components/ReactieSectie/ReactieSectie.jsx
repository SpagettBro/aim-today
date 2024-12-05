import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";

const ReactieSectie = ({ blok }) => (
  <div {...storyblokEditable(blok)}>
    <div className="flex lg:w-1/2 lg:mx-auto  justify-between align-text-middle mx-2">
      <div className="text-base font-bold py-2">{render(blok.reactieKop)}</div>
      <div className=" bg-orange-500 text-white text-sm font-bold py-2 px-4 rounded">
        {render(blok.reactieButton)}
      </div>
    </div>
    <div></div>
  </div>
);

export default ReactieSectie;
