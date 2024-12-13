import type { Metadata } from "next";
import fetchData from "@utils/fetch-data";
import StoryblokStory from "@storyblok/react/story";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
};

const Home = async ({ params }: Props) => {
  const { slug } = params; // Haal de slug uit params
  const { data, status } = await fetchData(slug); // Gebruik de slug dynamisch
  if (status === 404) {
    return notFound();
  }

  return (
    <div>
      <StoryblokStory story={data.story} />
    </div>
  );
};

export default Home;
