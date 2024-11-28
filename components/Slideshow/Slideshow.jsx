import React, { useRef, useState, useEffect } from "react";
import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";

const Slideshow = ({ blok }) => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Zorg ervoor dat blok.slides altijd een array is
  const slides = Array.isArray(blok.slides) ? blok.slides : [];

  // Functie om de status van scrollen bij te werken
  const updateScrollState = () => {
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
  };

  // Functie om de slideshow te scrollen
  const scroll = (direction) => {
    const scrollAmount = 300; // Pas aan voor je layout
    if (direction === "left") {
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else if (direction === "right") {
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Effect om scroll status te updaten bij het laden en scrollen
  useEffect(() => {
    const scrollElement = scrollRef.current;
    updateScrollState();
    scrollElement.addEventListener("scroll", updateScrollState);

    return () => {
      scrollElement.removeEventListener("scroll", updateScrollState);
    };
  }, []);

  return (
    <div
      className="max-w-screen-lg m-5 mt-6 text-[#2a3a4b] flex flex-col md:mx-auto relative"
      {...storyblokEditable(blok)}
    >
      {/* Heading */}
      <div className="text-2xl font-bold mb-6 mt-8">
        {blok.heading2 ? render(blok.heading2) : null}
      </div>

      {/* Container met pijlen en gradient */}
      <div className="relative">
        {/* Linkse Gradient */}
        {canScrollLeft && (
          <div className="absolute left-0 top-0 h-full w-28 bg-gradient-to-r from-white to-transparent pointer-events-none z-20"></div>
        )}

        {/* Scroll knop links */}
        {canScrollLeft && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-1 top-1/3 transform -translate-y-1/2 bg-[#2a3a4b] text-white p-2 rounded-full shadow-md z-30"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        )}

        {/* Container voor de slideshow */}
        <div
          className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
          ref={scrollRef}
          style={{
            scrollbarWidth: "none", // Verbergt de scrollbar in Firefox
            msOverflowStyle: "none", // Verbergt de scrollbar in IE
          }}
        >
          {/* Slideshow slides */}
          {slides.map((slide, index) => (
            <div
              key={index}
              className="min-w-[calc(100%-1rem)] md:min-w-[calc(33.333%-1rem)] flex-shrink-0 rounded-lg bg-white snap-start"
            >
              {/* Container voor afbeelding en border */}
              <div className="relative rounded-lg shadow-[5px_5px_0_0_#e76f51] overflow-hidden">
                {/* Afbeelding */}
                <img
                  src={slide.image}
                  alt={slide.image.alt || "Slide afbeelding"}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </div>

              {/* Informatie onder de afbeelding */}
              <div className="p-4 pl-0">
                <p className="text-sm text-[#2a3a4b]-600 m-1 ml-0">
                  {slide.date ? render(slide.date) : null}
                </p>
                <h3 className="text-lg font-bold text-[#2a3a4b] max-w-[300px] m-2 ml-0">
                  {slide.title ? render(slide.title) : null}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Rechste Gradient */}
        {canScrollRight && (
          <div className="absolute right-0 top-0 h-full w-28 bg-gradient-to-l from-white to-transparent pointer-events-none z-20"></div>
        )}

        {/* Scroll knop rechts */}
        {canScrollRight && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-1 top-1/3 transform -translate-y-1/2 bg-[#2a3a4b] text-white p-2 rounded-full shadow-md z-30"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default Slideshow;
