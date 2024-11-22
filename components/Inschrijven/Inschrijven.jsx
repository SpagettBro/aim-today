import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";

const Inschrijven = ({ blok }) => (
  <div
    className="max-w-screen-lg m-5 p-5 bg-white shadow-lg rounded-lg flex flex-col md:flex-row gap-6"
    {...storyblokEditable(blok)}
  >
    {/*Event details */}
    <div className="flex-1">
      {/* Titel van het event */}
      <div
        className="text-2xl font-bold text-gray-800 mb-1"
        {...storyblokEditable(blok.title)}
      >
        {render(blok.title)}
      </div>

      {/* Bijschrijving van het event */}
      <div className="text-gray-600 mb-4" {...storyblokEditable(blok.add)}>
        {render(blok.add)}
      </div>

      {/* Afbeelding */}
      {blok.image && (
        <div className="mb-4" {...storyblokEditable(blok.image)}>
          <img
            src={blok.image}
            alt={blok.image.alt || "Event afbeelding"}
            className="rounded-lg w-full h-auto object-cover"
          />
        </div>
      )}

      {/* Datum en Tijd */}
      <div className="mb-4">
        <p className="text-lg font-semibold text-gray-700">Datum en tijd</p>
        <p className="text-gray-600" {...storyblokEditable(blok.date)}>
          {render(blok.date)}
        </p>
        <p className="text-gray-600" {...storyblokEditable(blok.time)}>
          {render(blok.time)}
        </p>
      </div>

      {/* Over dit evenement */}
      <div className="mb-4">
        <p className="text-lg font-semibold text-gray-700">
          Over dit evenement
        </p>
        <p className="text-gray-600" {...storyblokEditable(blok.about)}>
          {render(blok.about)}
        </p>
      </div>

      {/* Tags */}
      {blok.tags && blok.tags.length > 0 ? (
        <div className="mb-4" {...storyblokEditable(blok.tags)}>
          <p className="text-lg font-semibold text-gray-700">Tags</p>
          <div className="flex flex-wrap gap-2">
            {blok.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded-full"
              >
                {tag.name || tag}{" "}
                {/* Gebruik 'name' als tags objecten bevatten */}
              </span>
            ))}
          </div>
        </div>
      ) : (
        <div className="mb-4">
          <p className="text-lg font-semibold text-gray-700">Tags</p>
          <p className="text-gray-600">Geen tags beschikbaar.</p>
        </div>
      )}
    </div>

    {/* Inschrijf formulier */}
    <div
      className="flex-1 bg-gray-100 p-6 h-fit rounded-lg shadow-inner"
      {...storyblokEditable(blok.form)}
    >
      <p className="text-lg font-semibold text-gray-700 mb-4">Schrijf je in</p>
      <form className="space-y-4">
        <input
          type="text"
          name="first_name"
          placeholder="Voornaam *"
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500"
        />
        <input
          type="text"
          name="last_name"
          placeholder="Achternaam *"
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Email *"
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500"
        />
        <div className="flex items-center">
          <input type="checkbox" name="terms" id="terms" className="mr-2" />
          <label htmlFor="terms" className="text-sm text-gray-600">
            {render(blok.terms_text)}
          </label>
        </div>
        <div className="flex gap-2">
          <button
            type="submit"
            className="px-4 py-2 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600"
          >
            {render(blok.submit_text)}
          </button>
          <button
            type="button"
            className="px-4 py-2 bg-gray-300 text-gray-700 font-bold rounded-lg hover:bg-gray-400"
          >
            {render(blok.cancel_text)}
          </button>
        </div>
      </form>
    </div>
  </div>
);

export default Inschrijven;
