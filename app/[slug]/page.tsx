import { Metadata } from 'next';
import fetchData from "@utils/fetch-data";
import StoryblokStory from "@storyblok/react/story";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug?: string }>;
}

const Page = async ({ params }: PageProps) => {
  const resolvedParams = await params;
  const slug = resolvedParams.slug || 'home'; // Default to 'home' if no slug is provided
  const { data, status } = await fetchData(slug);

  if (status === 404) {
    return notFound();
  }

  return (
    <div>
      <StoryblokStory story={data.story} />
    </div>
  );
};

export default Page;

// If you need to generate metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug || 'home';
  const { data } = await fetchData(slug);

  return {
    title: data.story.name,
    // Add other metadata properties as needed
  };
}

