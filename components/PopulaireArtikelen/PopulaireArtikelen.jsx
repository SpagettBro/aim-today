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
        }));

        setArtikelen(formattedArtikelen);
      } catch (error) {
        console.error("Failed to fetch articles", error);
      }
    };

    fetchArtikelen();
  }, [blok.artikelen]);

  return (
    <section className="p-6 lg:px-24" {...storyblokEditable(blok)}>
      {/* Render the headline */}
      <p className="text-h2-desktop font-bold mb-6">
        {blok.headline || "Populaire Artikelen"}
      </p>

      {/* Directly render articles */}
      {artikelen.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {artikelen.map((artikel, index) => (
            <ArtikelTeaser
              key={index}
              artikel={artikel}
              className={
                index === 0
                  ? "lg:col-span-2 w-full h-96" // First article's container height
                  : "lg:col-span-1 w-full h-48" // Others' container height
              }
              imgClassName={index === 0 ? "h-96" : "h-48"} // Dynamically adjust image height
            />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">Geen artikelen geselecteerd.</p>
      )}
    </section>
  );
};

export default PopulaireArtikelen;