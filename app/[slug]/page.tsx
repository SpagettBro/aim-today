import fetchData from "@utils/fetch-data";
import StoryblokStory from "@storyblok/react/story";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
};

export default async function Page({ params: { slug } }: Props) {
  const { data, status } = await fetchData(slug);
  if (status === 404) {
    return notFound();
  }

  return (
    <div>
      <StoryblokStory story={data.story} />
    </div>
  );
}

export async function generateMetadata({ params }: Props) {
  const { data } = await fetchData(params.slug);

  return {
    title: data.story.name,
    // Voeg meer metadata toe indien nodig
  };
}
