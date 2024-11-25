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
        >
          {/* Afbeelding */}
          <div className="relative">
            <img
              src={slide.image.filename}
              alt={slide.image.alt || "Slide afbeelding"}
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 border-r-[5px] border-b-[5px] border-[#E76F51]"></div>
          </div>

          {/* Informatie onder de afbeelding */}
          <div className="p-4">
            <p className="text-sm text-gray-600 mb-1">{slide.date}</p>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {slide.title}
            </h3>
            <p className="text-sm text-gray-600">{slide.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Slideshow;
