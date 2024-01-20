import { BlogItem } from "@/app/types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { createClient } from "contentful";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'EasyShop Blog',
  description: 'Page where the EasyShop team posts new blog entries',
}


const client = createClient({
  space: process.env.SPACE_ID || "",
  accessToken: process.env.ACCESS_TOKEN || "",
});

type BlogPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const queryOptions = {
    content_type: "blog",
    select: "fields.slug",
  };

  const articles = await client.getEntries(queryOptions);
  return articles.items.map((article) => ({
    slug: article.fields.slug,
  }));
}

const fetchBlogPost = async (slug: string): Promise<BlogItem> => {
  const queryOptions = {
    content_type: "blog",
    "fields.slug[match]": slug,
  };
  const queryResult = await client.getEntries(queryOptions);
  return queryResult.items[0] as unknown as BlogItem;
};

export default async function BlogPage(props: BlogPageProps) {
  const { params } = props;
  const { slug } = params;
  const article = await fetchBlogPost(slug);
  const { title, date, content, image,author} = article.fields;
  //console.log(article.fields.image);

  return (
    <main className="min-h-screen p-24 flex justify-center">
      <div className="max-w-2xl text-center">
        <p>Slika</p>
        <h1 className="font-extrabold text-3xl mb-8">{title}</h1>
        <p>By:{author}</p>
        <p className="mb-6 text-slate-400 ">
          Posted on{" "}
          {new Date(date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <div className="[&>p]:mb-8 [&>h2]:font-extrabold">
          {documentToReactComponents(content)}
        </div>
        <p>Video i code snippet</p>
      </div>
    </main>
  );
}