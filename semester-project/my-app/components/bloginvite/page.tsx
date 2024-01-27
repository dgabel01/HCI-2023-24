import Link from "next/link";
import { BlogQueryResult } from "@/app/types";
import { createClient } from "contentful";
import Image from "next/image";
import cardPicture from "@/public/jason-goodman-Oalh2MojUuk-unsplash.jpg" 
import { FaBookOpen } from 'react-icons/fa'; 


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
      <h1 className="font-bold title-font xs:text-lg md:text-xl lg:text-3xl">
        <FaBookOpen className="inline-block mb-2 mr-2 text-blue-500" />
        Explore Our Insightful <Link href={`/blog`} className="hover:text-blue-400 hover:underline">Blog</Link>
      </h1>
      <p className="mt-4 mb-8 text-lg text-center md:text-xl">
        Discover the Latest Posts from the EasyShop Team
      </p>
    </div>

      <main className="flex flex-wrap justify-center gap-12 p-4 md:p-8 lg:p-12">
        {blogEntries.items.map((singlePost) => {
          const { slug, title, date, image, author } = singlePost.fields;
          let imageURL :any = cardPicture;
          if (image && image.fields && image.fields.file && image.fields.file.url) {
            imageURL = `https:${image.fields.file.url}`;
          }
          return (
            <div
              className=" rounded-xl w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4 m-4 hover:outline outline-blue-500 outline-2"
              key={slug}
            >
              <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={imageURL}
                  width={100}
                  height={100}
                  alt="card-picture"
                  className="w-full h-48 object-cover"
                />
                <div className="px-6 py-4">
                  <p className="tracking-widest text-xs title-font font-medium text-gray-400 mb-2 truncate">
                    {title}
                  </p>
                  <p>By: {author}</p>
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