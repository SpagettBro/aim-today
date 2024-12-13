import { useState, useEffect } from "react";
import { getStoryblokApi, storyblokEditable } from "@storyblok/react";
import ArtikelTeaser from "../ArtikelTeaser/ArtikelTeaser";

const PopulaireArtikelen = ({ blok }) => {
  const [artikelen, setArtikelen] = useState([]);

  useEffect(() => {
    const fetchArtikelen = async () => {
      if (!blok.artikelen || blok.artikelen.length === 0) {
        return;
      }

      try {
        const storyblokApi = getStoryblokApi();

        // Fetch articles using their UUIDs
        const { data } = await storyblokApi.get("cdn/stories", {
          version: "draft", // or 'published'
          by_uuids: blok.artikelen.join(","), // Join the UUIDs into a comma-separated string
        });

        // Format the fetched articles
        const formattedArtikelen = data.stories.map((artikel) => ({
          titel: artikel.content.titel || artikel.name,
          subtitel: artikel.content.subtitel || "",
          afbeelding: artikel.content.afbeelding || null,
          slug: artikel.full_slug,
          datum: artikel.content.datum || "Geen datum", // Voeg datum toe
          auteur: artikel.content.auteur || "Geen auteur", // Voeg auteur toe
        }));

        setArtikelen(formattedArtikelen);
      } catch (error) {
        console.error("Failed to fetch articles", error);
      }
    };

    fetchArtikelen();
  }, [blok.artikelen]);

  // Dynamische klasse voor de tekstkleur op basis van blok.check
  const headlineTextColorClass = blok.check ? "text-oranje dark:text-donkerOffWhite" : "text-donkerBlauw dark:text-lijnDonker";

  return (
    <section className="p-4 lg:p-12" {...storyblokEditable(blok)}>
      <div className="w-full max-w-6xl mx-auto">
        {/* Render de headline */}
        <p
          className={`text-h2-desktop font-bold mb-2 ml-6 font-dm text-xl ${headlineTextColorClass}`}
        >
          {blok.headline || "Populaire Artikelen"}
        </p>

        {/* Render de artikelen */}
        {artikelen.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {artikelen.map((artikel, index) => (
              <ArtikelTeaser key={index} artikel={artikel} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center">Geen artikelen geselecteerd.</p>
        )}
      </div>
    </section>
  );
};

export default PopulaireArtikelen;
