import Link from "next/link";
import Image from "next/image";
import firstImage from "@/public/Top-10-Ranking-About-Us-Pages.webp"
import secondImage from '@/public/creative-team-people-working-project_278596-2.png'
import thirdImage from '@/public/ceo-chief-executive-officer-cartoon-illustration-businessman-work_2175-4836.jpg'
import Footer from "../components/footer/page";
import TestimonialCard from "./components/testimonialcard";
import Steps from "./components/steps";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Information about the history and purpose of EasyShop',
}



export default function About() {
    return (
    <>
      <div className="flex w-full xs:flex-col sm:flex-col md:flex-row ">
        <div className="flex flex-col m-20">
          <h2 className="font-extrabold mb-2 text-xl">ABOUT US</h2>
          <h1 className="font-extrabold text-3xl mb-4">EasyShop powers thousands of daily product sales</h1>
          <p className="mb-4 text-xl">The all-in-one commerce platform to list your products for sale</p>
          <button className="btn btn-active btn-accent w-32 hover:shadow-lg">Get Started</button>
        </div>
        <div className="flex flex-row">
          <Image
            src={firstImage}
            className="object-contain"
            alt="about-us-img"
          />
        </div>
      </div>

      <div className="w-full flex mt-8 xs:flex-col-reverse md:flex-row" >
        <div className="flex flex-row">
          <Image
            src={secondImage}
            width={1000}
            className="object-contain"
            alt="second-image"
          />
        </div>
        <div className="flex flex-col mt-12 xs:text-center ">
          <h2 className="font-extrabold text-xl p-4">OUR STORY</h2>
          <h1 className="font-extrabold text-3xl p-4">EasyShop powers thousands of daily product sales</h1>
          <p className=" p-4 text-xl">Over a decade ago, we started a customer oriented online shop. None of the ecommerce solutions at the time gave us the control we needed to be successful—so we built our own.</p>
          <p className="text-xl ml-4"> Today, businesses of all sizes use EasyShop, whether they are selling online, in retail stores, or on-the-go.</p>
        </div>
      </div>

      <div className="w-3/4 mx-auto flex flex-col items-center justify-center mt-16 p-4 mb-36 p-24">
        <h2 className="text-2xl font-extrabold mb-4 text-center">OUR MISSION</h2>
        <h1 className="text-3xl font-extrabold mb-2 text-center">Making commerce better for everyone</h1>
        <p className="text-xl text-center">We help people achieve independence by making it easier to start, run, and grow their product sales.</p>
        <p className="text-xl text-center">We believe the future of commerce has more voices, not fewer, so we are reducing the barriers to business ownership to make commerce better for everyone.</p>
      </div>
      
      <div className="w-full flex mt-8 xs:flex-col xs:text-center sm:flex-col text-center md:flex-row text-start" >
        <div className="flex flex-col mx-4 my-12 xs:text-center sm:text-center md:text-start">
          <h2 className="font-extrabold mb-2 text-xl p-4">OUR TEAM AND SOCIAL IMPACT</h2>
          <h1 className="font-extrabold text-3xl mb-2 p-4">Creating a community for impact</h1>
          <p className="mb-8 p-4 text-xl">EasyShop has grown from 2 people in a coffee shop to over a 1,000 across the globe. With hundreds of businesses powered by EasyShop, we invest in our people and our communities. Our Social Impact initiatives focus on enabling an equitable future by building products and programs to support our team and merchants.</p>
        </div>
        <div className="flex flex-row ">
          <Image
            src={thirdImage}
            width={2000}
            className="md:object-contain"
            alt="second-image"
          />
        </div>
      </div>


      <div className="flex flex-row items-center justify-center mt-24 xs:text-center sm:text-center">
        <h1 className="text-2xl font-bold">
          See what our clients say about us
        </h1>
      </div>

      <div className="flex gap-24 items-center justify-center my-24 xs:flex-col lg:flex-col">
        <TestimonialCard 
          name="John Doe"
          location = "Split"
          header = "Great Cusomer Service"
          review = "I absolutely loved working with the EasyShop team! Absolute experts at what they do!"
        />
          <TestimonialCard 
          name="Jane Doe"
          location = "Zagreb"
          header = "Easy to start and maintain"
          review = "The process to start using the platform and control the sales is incredibly easy!"
        />
          <TestimonialCard 
          name="Sam Wilson"
          location = "Rijeka"
          header = "Amazing platform"
          review = "The team drastically improved our online sales and user experience!"
        />
      </div>


      <div className="flex flex-col">
        <div>
          <p className="text-bold text-2xl text-center mb-12 font-bold xs:mt-4 mx-4 sm:mt-4 mx-4 md:mt-32">How to get started with our platform</p>
        </div>
        <div className="flex justify-evenly items-stretch xs:flex-col xs:items-center  sm:items-center lg:flex-row">
           <Steps/>
        </div>
      </div>
    </>
    );
  }
  