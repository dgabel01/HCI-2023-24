import Link from "next/link";
import { BlogQueryResult } from "@/types";
import { createClient } from "contentful";

//https://www.printful.com/blog - page look

const client = createClient({
  space: process.env.SPACE_ID || "",
  accessToken: process.env.ACCESS_TOKEN || "",
});

const getBlogEntries = async (): Promise<BlogQueryResult> => {
  const entries = await client.getEntries({ content_type: "blog" });
  return entries;
};

export default async function Blog() {
  const blogEntries = await getBlogEntries();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      {blogEntries.items.map((singlePost) => {
        const { slug, title, date } = singlePost.fields;
        return (
          <div key={slug} className="flex flex-col bg-sky-200 p-4 rounded-xl shadow-lg mb-16">
            <Link href={`/blog/${slug}`}>
              <h2 className="font-extrabold text-xl hover:text-blue-500 transition-colors mb-4">{title}</h2>
              <span>
                Posted on{" "}
                {new Date(date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </Link>
          </div>
        );
      })}
    </main>
  );
}