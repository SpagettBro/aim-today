import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";

const Inschrijven = ({ blok }) => (
  <div
    className="max-w-screen-lg m-5 mt-6 p-5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.15)] rounded-lg flex flex-col md:flex-row md:gap-12 md:p-10 md:mx-auto dark:bg-[#1E293B] dark:shadow-none"
    {...storyblokEditable(blok)}
  >
    {/* Event details */}
    <div className="flex-1">
      {/* Titel van het event */}
      <div
        className="text-2xl font-bold font-dm text-[#2a3a4b] mb-1 dark:text-white"
        {...storyblokEditable(blok.title)}
      >
        {render(blok.title)}
      </div>

      {/* Bijschrijving van het event */}
      <div
        className="text-[#2a3a4b] mb-4 md:mb-6 dark:text-gray-300"
        {...storyblokEditable(blok.add)}
      >
        {render(blok.add)}
      </div>

      {/* Afbeelding */}
      {blok.image && (
        <div
          className="mb-4 md:mb-8 rounded-lg shadow-[5px_5px_0_0_#e76f51] overflow-hidden dark:shadow-[5px_5px_0_0_#F97316]"
          {...storyblokEditable(blok.image)}
        >
          <img
            src={blok.image}
            alt={blok.image.alt || "Event afbeelding"}
            className="rounded-lg w-full h-auto object-cover"
          />
        </div>
      )}

      {/* Datum en Tijd */}
      <div className="mt-8">
        <p className="text-lg font-bold font-dm text-[#2a3a4b] dark:text-orange-400">
          Datum en tijd
        </p>
        <p className="text-[#2a3a4b] dark:text-gray-300" {...storyblokEditable(blok.date)}>
          {render(blok.date)}
        </p>
        <p className="text-[#2a3a4b] dark:text-gray-300" {...storyblokEditable(blok.time)}>
          {render(blok.time)}
        </p>
      </div>

      {/* Over dit evenement */}
      <div className="mt-8 mb-8">
        <p className="text-lg font-bold font-dm text-[#2a3a4b] dark:text-orange-400">
          Over dit evenement
        </p>
        <p className="text-[#2a3a4b] dark:text-gray-300" {...storyblokEditable(blok.about)}>
          {render(blok.about)}
        </p>
      </div>

      {/* Tags */}
      {blok.tags && blok.tags.length > 0 ? (
        <div className="" {...storyblokEditable(blok.tags)}>
          <p className="text-lg mb-2 font-dm font-bold text-[#2a3a4b] dark:text-orange-400">Tags</p>
          <div className="flex flex-wrap gap-2 md:gap-4">
            {blok.tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-[0.1rem] md:px-4 md:py-2 border border-[#e76f51] bg-[#ffd8ce] text-[#e76f51] text-sm font-montserrat rounded-full dark:border-[#F97316] dark:bg-[#F97316] dark:text-white"
              >
                {tag.name || tag}
              </span>
            ))}
          </div>
        </div>
      ) : (
        <div className="mb-4">
          <p className="text-lg mb-2 font-bold text-[#2a3a4b] dark:text-orange-400">Tags</p>
          <p className="text-[#2a3a4b] dark:text-gray-300">Geen tags beschikbaar.</p>
        </div>
      )}
    </div>

    {/* Inschrijf formulier */}
    <div
      className="flex-1 bg-[#EBEEF3] p-6 md:p-10 h-max mt-6 rounded-lg shadow-inner dark:bg-[#334155] dark:shadow-none"
      {...storyblokEditable(blok.form)}
    >
      <p className="text-lg font-bold font-dm text-[#2a3a4b] mb-4 dark:text-orange-400">
        Schrijf je in
      </p>
      <form className="space-y-6">
        <input
          type="text"
          name="first_name"
          placeholder="Voornaam *"
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 dark:border-gray-600 dark:bg-[#475569] dark:text-white dark:placeholder-gray-400"
        />
        <input
          type="text"
          name="last_name"
          placeholder="Achternaam *"
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 dark:border-gray-600 dark:bg-[#475569] dark:text-white dark:placeholder-gray-400"
        />
        <input
          type="email"
          name="email"
          placeholder="Email *"
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 dark:border-gray-600 dark:bg-[#475569] dark:text-white dark:placeholder-gray-400"
        />
        <div className="mt-4 flex items-center gap-3">
          <input
            type="checkbox"
            name="terms"
            id="terms"
            className="w-5 h-5 border border-gray-300 rounded focus:ring focus:ring-blue-500 dark:border-gray-600 dark:bg-[#475569]"
          />
          <label htmlFor="terms" className="text-sm text-[#2a3a4b] dark:text-gray-300">
            {render(blok.terms_text)}
          </label>
        </div>
        <div className="flex gap-2 mt-6">
          <button
            type="submit"
            className="px-4 py-[6px] bg-[#E76F51] text-white font-semibold rounded-md hover:bg-[#b75840] dark:bg-orange-600 dark:hover:bg-orange-500"
          >
            {render(blok.submit_text)}
          </button>
        </div>
      </form>
    </div>
  </div>
);

export default Inschrijven;
