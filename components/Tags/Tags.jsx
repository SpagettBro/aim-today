import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";

const Tags= ({ blok }) => (
  <div className="mx-4 my-8 text-sm lg:w-1/2 lg:mx-auto  lg:my-1/4 lg:grid lg:columns-12" {...storyblokEditable(blok)}>
    <div>
          {blok.tags && blok.tags.length > 0 ? (
          <div>
            <p className="text-lg mb-2 font-dm-sans font-bold text-[#2a3a4b]">
              Tags
            </p>
            <div className="flex flex-wrap gap-2 md:gap-4">
              {blok.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-[0.1rem] md:px-4 md:py-2  border border-[#e76f51] bg-[#ffd8ce] text-[#e76f51] text-sm font-montserrat rounded-full"
                >
                  {tag.name || tag}
                </span>
              ))}
            </div>
          </div>
        ) : (
          <div className="mb-4">
            <p className="text-lg mb-2 font-bold text-[#2a3a4b]">Tags</p>
            <p className="text-[#2a3a4b]">Geen tags beschikbaar.</p>
          </div>
        )}
        </div>
  </div>
);

export default Tags;
