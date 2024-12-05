import { useState, useEffect } from "react";
import { getStoryblokApi, storyblokEditable } from "@storyblok/react";
import ArtikelTeaser from "../ArtikelTeaser/ArtikelTeaser";
 
const ArtikelContainer = ({ blok }) => {
  const [artikelen, setArtikelen] = useState([]);
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    const fetchArtikelen = async () => {
      try {
        const storyblokApi = getStoryblokApi();
        const { data } = await storyblokApi.get("cdn/stories", {
          version: "draft", // or 'published'
          starts_with: "artikelen/",
          is_startpage: false,
        });
 
        // Filter out the article with the name 'Home'
        const filteredArticles = data.stories.filter(
          (artikel) => artikel.name !== "Home"
        );
 
        const formattedArtikelen = filteredArticles.map((artikel) => ({
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
  }, []);
 
  return (
    <section className="p-6 lg:px-24" {...storyblokEditable(blok)}>
      <p className="text-h2-desktop font-bold mb-6">{blok.titel}</p>
      <div className="flex overflow-x-auto gap-6">
        {artikelen.map((artikel) => (
          <ArtikelTeaser
            artikel={artikel}
            key={artikel.slug}
            className="w-72 h-auto flex-shrink-0" // Ensure fixed width and height
            imgClassName="h-48"
          />
        ))}
      </div>
    </section>
  );
};
 
export default ArtikelContainer;