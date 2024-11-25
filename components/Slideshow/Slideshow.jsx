import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";

const Slideshow = ({ blok }) => (
  <div
    className="max-w-screen-lg m-5 mt-6 text-[#2a3a4b] flex flex-col md:mx-auto"
    {...storyblokEditable(blok)}
  >
    {/* Heading */}
    <div className="text-2xl font-bold">{render(blok.heading2)}</div>

    {/* Container voor de slideshow */}
    <div className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
      {/* Loop door de slides */}
      {blok.slides?.map((slide, index) => (
        <div
          key={index}
          className="min-w-[calc(100%-1rem)] md:min-w-[calc(33.333%-1rem)] flex-shrink-0 rounded-lg overflow-hidden bg-white shadow-lg snap-start"
        ></div>
      ))}
    </div>
  </div>
);

export default Slideshow;
