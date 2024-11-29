import React from "react";
import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";

const EventsOverzicht = ({ blok }) => (
  <div
    className="max-w-screen-lg m-5 mt-6 text-[#2a3a4b] flex flex-col md:mx-auto relative"
    {...storyblokEditable(blok)}
  >
    {/* Heading */}
    <div className="text-2xl font-bold mb-6 mt-8">
      {blok.heading2 ? render(blok.heading2) : "Events"}
    </div>

    {/* Container voor events */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {blok.events.map((event, index) => (
        <div
          key={index}
          className="rounded-lg bg-white shadow-md overflow-hidden"
          {...storyblokEditable(event)}
        >
          {/* Afbeelding */}
          {event.image && (
            <img
              src={event.image.filename}
              alt={event.image.alt || "Event afbeelding"}
              className="w-full h-48 object-cover"
            />
          )}

          {/* Titel en datum */}
          <div className="p-4">
            <h3 className="text-lg font-bold text-[#2a3a4b] mb-2">
              {event.title ? render(event.title) : "Event Titel"}
            </h3>
            <p className="text-sm text-gray-500">
              {event.date ? render(event.date) : "Geen datum opgegeven"}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default EventsOverzicht;
