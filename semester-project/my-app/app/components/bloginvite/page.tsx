import Link from "next/link";
import { BlogQueryResult } from "@/app/types";
import { createClient } from "contentful";
import Image from "next/image";
import cardPicture from "@/public/jason-goodman-Oalh2MojUuk-unsplash.jpg" 

const client = createClient({
  space: process.env.SPACE_ID || "",
  accessToken: process.env.ACCESS_TOKEN || "",
});

const getBlogEntries = async (): Promise<BlogQueryResult> => {
  const entries = await client.getEntries({ content_type: "blog", order:["fields.date"],limit:3 });
  return entries as unknown as BlogQueryResult;
};

export default async function BlogInvite (){
  const blogEntries = await getBlogEntries();

  return (
    <>
      <div className="flex flex-col items-center mt-8">
        <h1 className="font-bold text-3xl title-font xs:text-xl md:text-3xl">Explore Our Insightful <Link href={`/blog`}>Blog</Link></h1>
        <p className="mt-4 mb-8 text-xl text-center xs:text-md mx-2 mt-4md:text-xl">Discover the Latest Posts from the EasyShop Team</p>
      </div>

      <main className="flex flex-wrap justify-center gap-12 p-4 md:p-8 lg:p-12">
        {blogEntries.items.map((singlePost) => {
          const { slug, title, date } = singlePost.fields;
          return (
            <div
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4 m-4"
              key={slug}
            >
              <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={cardPicture}
                  alt="card-picture"
                  className="w-full h-48 object-cover"
                />
                <div className="px-6 py-4">
                  <p className="tracking-widest text-xs title-font font-medium text-gray-400 mb-2 truncate">
                    {title}
                  </p>
                  <div className="title-font text-lg font-medium mb-2"></div>
                  <span>
                    Posted on{" "}
                    {new Date(date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-purple-700 text-white px-3 py-1 text-sm font-semibold mr-2 mb-3 cursor-pointer tracking-widest rounded-full hover:bg-purple-600">
                    <Link href={`/blog/${slug}`}>See more</Link>
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </main>
    </>
  );
};