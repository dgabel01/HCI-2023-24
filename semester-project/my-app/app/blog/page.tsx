import Link from "next/link";
import { BlogQueryResult } from "@/app/types";
import { createClient } from "contentful";
import Image from "next/image";
import heroImage from "@/public/hero-illustration.png"
import getStartedPic from "@/public/hands-holding-tablet-with-forefinger-clicking-start-button-new-application-launch-flat-illustration_74855-20595.png"
import cardPicture from "@/public/jason-goodman-Oalh2MojUuk-unsplash.jpg" 
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'EasyShop Blog',
  description: 'Page where the EasyShop team posts new blog entries',
}


const client = createClient({
  space: process.env.SPACE_ID || "",
  accessToken: process.env.ACCESS_TOKEN || "",
});




const getBlogEntries = async (): Promise<BlogQueryResult> => {
  const entries = await client.getEntries({ content_type: "blog" });
  return entries as unknown as BlogQueryResult;

};

export default async function Blog() {
  const blogEntries = await getBlogEntries();
  return (
    <>
    <div className="flex justify-evenly gap-8 bg-stone-200 p-24 xs:flex-col-reverse md:flex-row">
      <div className="mt-8">
        <h1 className="font-extrabold text-3xl">Welcome to our Blog</h1>
        <p className="mt-8 text-lg">Master the art of ecommerce by launching your own business</p>
        <p className="mt-8 text-lg">Stay updated with the newest design and development ideas and insights shared by the EasyShop team, powered by Contentful CMS</p>
        <Link href={`/`}><button className="btn btn-success mt-8">Get Started</button></Link>
      </div>
      <div>
        <Image
          src={heroImage}
          alt="hero"
          width={450}
          height={300}
        />
      </div>
    </div>

    <div className="flex items-center justify-center font-extrabold text-3xl mt-8 text-center xs:text-xl md:text-3xl">
      <h1>Check out our latest blog posts</h1>
    </div>


    <main className="flex flex-col justify-center items-center gap-24 xs:m-auto lg:p-12">
        {blogEntries.items.map((singlePost) => {
          const { slug, title, date, image, author } = singlePost.fields;
          
          let imageURL :any = cardPicture;
          if(image){
            imageURL = `https:${(image as {fields:{file:{url:string}}}).fields.file.url}`;
          }
        
          return (
            <div
              className=" xs:w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4 m-4"
              key={slug}
            >
              <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={imageURL}
                  width={400}
                  height={300}
                  alt="card-picture"
                  className="w-full h-48 object-cover"
                />
                <div className="px-6 py-4">
                  <p className="tracking-widest text-xs title-font font-medium text-gray-400 mb-2">
                    {title}
                  </p>
                  <p>
                    By: {author}
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

    <div className="flex justify-evenly xs:flex-col sm:flex-col md:flex-row">
      <div>
        <Image
          src={getStartedPic}
          alt="bottom-pic"
          width={400}
          height={350}
          className="xs:m-auto"
        />
      </div>
      <div className="flex flex-col items-center gap-8 mt-28 xs:text-center md">
        <p className="text-2xl font-bold">Ready to try EasyShop?</p>
        <p>Get started by listing your products for sale</p>
        <Link href={`/add-new`}>
          <button className="btn btn-outline btn-accent w-32">Start Now</button>
        </Link>
      </div>
    </div>
    </>
  );
}