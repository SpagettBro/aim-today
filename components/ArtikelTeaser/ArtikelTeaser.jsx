import Link from "next/link";
import { storyblokEditable } from "@storyblok/react/rsc";

const ArtikelTeaser = ({ artikel }) => {
  if (!artikel) {
    console.error("Artikelgegevens ontbreken in ArtikelTeaser");
    return null;
  }

  console.log(artikel);

  return (
    <div className="column feature" {...storyblokEditable(artikel)}>
      <div className="p-6">
        <img
          className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl"
          src={artikel.afbeelding?.filename || ""}
          alt={artikel.afbeelding?.alt || "Afbeelding"}
        />
        <h2 className="mx-auto mb-8 text-xl font-semibold leading-none tracking-tighter text-neutral-600">
          {artikel.titel || "Geen titel"}
        </h2>
        <div className="mx-auto text-base leading-relaxed text-gray-500 line-clamp-2">
          {artikel.subtitel || "Geen teaser beschikbaar"}
        </div>
        <div className="mt-4">
          <Link
            href={`/${artikel.slug}`}
            className="inline-flex items-center mt-4 font-semibold text-oranje lg:mb-0 hover:text-donkerBlauw"
            title="Lees meer"
          >
            Lees meer »
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArtikelTeaser;
