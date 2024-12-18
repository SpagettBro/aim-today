import Link from "next/link";
import { storyblokEditable } from "@storyblok/react/rsc";

const ArtikelTeaser = ({ artikel }) => {
  if (!artikel) {
    console.error("Artikelgegevens ontbreken in ArtikelTeaser");
    return null;
  }

  return (
    <div
      className="flex flex-col justify-between bg-donkerOffWhite dark:bg-darkGrijs p-6 rounded-xl"
      {...storyblokEditable(artikel)}
    >
      {/* Afbeelding */}
      <div>
        <div className="relative mb-8">
          {/* Label rechtsboven */}
          {artikel.label && (
            <div className="absolute top-4 right-4 bg-donkerBlauw text-white text-sm font-montserrat py-1 px-4 rounded-lg border border-white z-20">
              {artikel.label}
            </div>
          )}
          <div className="absolute -bottom-2 -right-2 w-full h-full bg-donkerOranje rounded-xl z-0"></div>
          <img
            className="relative object-cover object-center w-full h-48 rounded-xl z-10"
            src={artikel.afbeelding?.filename || ""}
            alt={artikel.afbeelding?.alt || "Afbeelding"}
          />
        </div>

        {/* Datum en Auteur */}
        <div className="flex justify-between text-sm text-gray-500 font-montserrat mb-4">
          <span>{artikel.datum}</span>
          <span>{artikel.auteur}</span>
        </div>

        {/* Titel */}
        <h2 className="text-lg font-semibold font-dm leading-none text-donkerBlauw dark:text-donkerOffWhite mb-4">
          {artikel.titel || "Geen titel"}
        </h2>

        {/* Subtitel */}
        <p className="text-sm leading-relaxed text-gray-500 dark:text-offWhite dark:text-opacity-80 mb-4 font-inter">
          {artikel.subtitel || "Geen teaser beschikbaar"}
        </p>
      </div>

      {/* Lees meer link */}
      <div className="mt-auto">
        <Link
          href="/artikel"
          className="inline-block mt-4 font-semibold font-montserrat text-oranje hover:text-donkerBlauw dark:hover:text-donkerOffWhite"
          title="Lees meer"
        >
          Lees meer »
        </Link>
      </div>
    </div>
  );
};

export default ArtikelTeaser;
