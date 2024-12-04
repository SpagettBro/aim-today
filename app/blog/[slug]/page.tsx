import { getStoryblokApi } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";
import Article from "@components/Article/Article";
 
export async function getData(slug: string) {
  const storyblokApi = getStoryblokApi();
  const response = await storyblokApi.get(`cdn/stories/blog/${slug}`, {
    version: "draft",
    cv: Date.now(),
  });
  console.log("Storyblok response:", response.data.story);
  return response.data.story;
}
 
export default async function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const story = await getData(slug);
  const blok = story.content;
 
  return (
    <div>
      <Article blok={blok} />
    </div>
  );
}
 
 