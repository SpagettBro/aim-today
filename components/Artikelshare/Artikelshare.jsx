import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";

const Artikelshare= ({ blok }) => (
  <div className="mx-4 my-8 text-sm lg:my-1/4 lg:grid lg:columns-12" {...storyblokEditable(blok)}>
    <div>
        <div className="w-full flex mb-16">
          <img 
              className="h-[50px] absolute right-10"
              src={blok.sharefoto.filename}
              alt="share knop"
            />
        </div>
    </div>
  </div>
);

export default Artikelshare;
