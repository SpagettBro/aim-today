import React from "react";
import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";

const EventsOverzicht = ({ blok }) => (
  <div
    className="max-w-screen-md mx-5 md:mx-auto my-8 text-[#2a3a4b]"
    {...storyblokEditable(blok)}
  >
    {/* Heading */}
    <div className="text-2xl font-bold mb-8">
      <h3>Aankomende events</h3>
    </div>

    {/* Events container */}
    <div className="flex flex-col gap-8">
      {blok.events.map((event, index) => (
        <div key={index} className="flex flex-col">
          <div
            className="flex flex-col md:flex-row items-start bg-white rounded-lg overflow-hidden group"
            {...storyblokEditable(event)}
          >
            {/* Afbeelding links*/}
            {event.image && (
              <div className="w-full md:w-1/2 mr-4 relative cursor-pointer group-hover:cursor-pointer">
                <div className="relative rounded-lg overflow-hidden shadow-[5px_5px_0_0_#e76f51] h-[200px]">
                  <img
                    src={event.image}
                    alt={event.image.alt || "Event afbeelding"}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </div>
            )}

            {/* Inhoud rechts */}
            <div className="flex flex-col justify-between p-4 md:p-6 w-full md:w-2/3">
              {/* Titel en organisator */}
              <div className="mb-4">
                <h3 className="text-xl font-bold font-dm mb-1 transition-all duration-300 group-hover:text-[#e76f51] cursor-pointer group-hover:underline">
                  {event.title ? render(event.title) : "Event Titel"}
                </h3>
                <p className="text-md font-light">
                  {event.organisator
                    ? render(event.organisator)
                    : "Door onbekende organisator"}
                </p>
              </div>

              {/* Tags en datum */}
              <div className="mt-4">
                {/* Tags */}
                {event.tags && event.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {event.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 border border-[#e76f51] bg-[#ffd8ce] text-[#e76f51] text-sm rounded-full"
                      >
                        {tag.name || tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Datum */}
                <p className="flex items-center text-[#2a3a4b] font-semibold font-montserrat">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-[#2a3a4b]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3M3 11h18M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  {event.date ? render(event.date) : "Geen datum beschikbaar"}
                </p>
              </div>
            </div>
          </div>

          {/* Grijze line */}
          {event.line && <div className="border-b border-gray-300 mt-7"></div>}
        </div>
      ))}
    </div>
  </div>
);

export default EventsOverzicht;
