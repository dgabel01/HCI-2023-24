import Image from "next/image";
import heroImage from "@/public/photo-1579190520010-4226162a0cb5.webp";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative w-full">
      {/* Hero Image */}
      <div className="w-full h-0" style={{ paddingBottom: "8%" }}>
        <Image
          className="absolute inset-0"
          src={heroImage}
          alt="hero-picture"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      {/* Overlay Container with Blurred Background */}
      <div className="flex items-center justify-center">
        {/* Blurred Background */}
        <div
          className="absolute inset-0 bg-no-repeat bg-center bg-cover filter flex items-center"
          style={{
            backgroundImage: `url(${heroImage.src})`,
          }}
        ></div>

        {/* Content Container */}
        <div className="relative z-10 text-white text-center p-4 md:p-8 lg:p-12">
          <div className="max-w-screen-md mb-40 bg-neutral-700 rounded-xl p-8 backdrop-blur-md backdrop-filter bg-opacity-50">
            <h1 className="text-5xl sm:text-xl mt-4 md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 decoration-white subpixel-antialiased">
              Start selling today!
            </h1>
            <p className="text-2xl xs:text-md sm:text-md md:text-2xl lg:text-xl xl:text-2xl mb-6 font-bold decoration-white subpixel-antialiased">
              Not sure how to make money from your craft? We have you covered, register as a seller today and list your items for sale. We will handle the rest.
            </p>

            {/* Buttons */}
            <div className="flex flex-row justify-center gap-2">
              <Link href="/add-new">
                <button className="bg-blue-500 mr-4 text-white px-3 py-2 rounded-md hover:bg-blue-800 font-medium">
                  Start Selling
                </button>
              </Link>
              <Link href="/about">
                <button className="bg-green-500 text-white px-3 py-2 rounded-md hover:bg-green-700 font-medium">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
