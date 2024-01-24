/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: [
        "res.cloudinary.com",
        "picsum.photos",
        "via.placeholder.com",
        "unsplash.com",
        "source.unsplash.com",
        "images.ctfassets.net",
        "images.pexels.com" ,
        "grasphelp.org",
      ],
    },
  };
  
  module.exports = nextConfig;