import type { Metadata, NextPage } from "next";
import fetchData from "@utils/fetch-data";
import StoryblokStory from "@storyblok/react/story";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
};

const Home: NextPage<Props> = async () => {
  const { data, status } = await fetchData("home");
  if (status === 404) {
    return notFound();
  }

  return (
    <div>
      <StoryblokStory story={data.story} />
      <h1>{data.story.name}</h1>
      <h2> test</h2>
    </div>
  );
};

export default Home;
