import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";

const Artikelshare = ({ blok }) => (
  <div
    className="mx-4 my-8 text-sm lg:w-1/2 lg:mx-auto  lg:my-1/4 lg:grid lg:columns-12"
    {...storyblokEditable(blok)}
  >
    <div>
      <div className="w-full flex justify-end">
        <img
          className="h-[50px]"
          src={blok.sharefoto.filename}
          alt="share knop"
        />
      </div>
    </div>
  </div>
);

export default Artikelshare;
