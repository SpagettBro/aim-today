import { getStoryblokApi } from "@storyblok/react";
import Link from "next/link";

async function getArticles() {
  const storyblokApi = getStoryblokApi();
  const response = await storyblokApi.get("cdn/stories", {
    version: "draft",
    starts_with: "artikelen/",
    is_startpage: false,
  });
  return response.data.stories;
}

export default async function ArticlesPage() {
  const articles = await getArticles();

  return (
    <div>
      <h1>Artikelen</h1>
      <ul>
        {articles.map((article: any) => (
          <li key={article.uuid}>
            <Link href={`/artikelen/${article.slug}`}>
              {article.content.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
