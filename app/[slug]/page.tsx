import { Metadata } from 'next';
import fetchData from "@utils/fetch-data";
import StoryblokStory from "@storyblok/react/story";
import { notFound } from "next/navigation";

interface PageProps {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function Page({ params }: PageProps) {
  const { data, status } = await fetchData(params.slug);

  if (status === 404) {
    return notFound();
  }

  return (
    <div>
      <StoryblokStory story={data.story} />
    </div>
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { data } = await fetchData(params.slug);

  return {
    title: data.story.name,
    // Add other metadata properties as needed
  };
}

