import { Metadata } from 'next';
import fetchData from "@utils/fetch-data";
import StoryblokStory from "@storyblok/react/story";
import { notFound } from "next/navigation";

interface PageProps {
  params: { slug?: string };
}

export default async function Page({ params }: PageProps) {
  const slug = params.slug || 'home'; // Default to 'home' if no slug is provided
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

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const slug = params.slug || 'home';
  const { data } = await fetchData(slug);

  return {
    title: data.story.name,
    // Add other metadata properties as needed
  };
}

