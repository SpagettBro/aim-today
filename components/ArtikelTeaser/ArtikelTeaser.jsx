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
          <div className="absolute -bottom-2 -right-2 w-full h-full bg-donkerOranje rounded-xl z-0"></div>
          <img
            className="relative object-cover object-center w-full h-48 rounded-xl z-10"
            src={artikel.afbeelding?.filename || ""}
            alt={artikel.afbeelding?.alt || "Afbeelding"}
          />
        </div>

        {/* Titel */}
        <h2 className="text-lg font-semibold font-dm leading-none text-donkerBlauw dark:text-donkerOffWhite mb-4">
          {artikel.titel || "Geen titel"}
        </h2>

        {/* Subtitel */}
        <p className="text-sm leading-relaxed text-lijnDonker dark:text-offWhite dark:text-opacity-80	 mb-4 font-inter">
          {artikel.subtitel || "Geen teaser beschikbaar"}
        </p>
      </div>

      {/* Lees meer link */}
      <div className="mt-auto">
        <Link
          href={`/${artikel.slug}`}
          className="inline-block mt-4 font-semibold font-montserrat text-donkerOranje hover:text-donkerBlauw dark:hover:text-donkerOffWhite"
          title="Lees meer"
        >
          Lees meer »
        </Link>
      </div>
    </div>
  );
};

export default ArtikelTeaser;
