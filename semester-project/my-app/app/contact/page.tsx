"use client"
import React, {useState} from 'react'
import Image from "next/image"
import heroimg from "@/public/hero-contact-f6fac17c.webp"
import { IoIosSend } from "react-icons/io";
import customerserviceimg from "@/public/Customer-Service-Management.png"
import Form from './components/form';




export default function Contact() {
  return (
<main className="flex flex-col items-center justify-center">
  <div className="relative w-full">
      {/* Hero Image */}
      <div className="w-full h-0" style={{ paddingBottom: "8%",}}>
        <Image
          className="absolute inset-0"
          src={heroimg}
          layout="fill"
          objectFit="cover"
          alt="hero-picture"
        />
      </div>

      <div className="flex items-center justify-center">   
        <div className="relative z-10 text-white text-center p-4 md:p-8 lg:p-12">
          <div className="max-w-screen-md mb-40 rounded-xl p-8 bg-opacity-50">
            <h1 className="text-5xl sm:text-xl mt-4 md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 decoration-white subpixel-antialiased">
              Contact Us
            </h1>
            <p className="text-2xl xs:text-md sm:text-md md:text-2xl lg:text-xl xl:text-2xl mb-6 font-bold decoration-white subpixel-antialiased">
            Drop us a line through the form below and we&apos;ll get back to you as soon as possible
            </p>
          </div>
        </div>
      </div>
    </div>

      <Form/>


    <div className="flex flex-col gap-8 ml-4 xs:text-center lg:text-start">
      <h1 className="text-2xl font-bold my-8 mx-2">If you need to contact us for any other matters, please use the following contact channels:</h1>
      <div className="flex flex-col xs:flex-row xs:text-center md:text-start">
        <p className="text-xl mb-2">For security incidents, email security@easyshop.com.</p>
      </div>
      <div className="flex flex-col xs:flex-row xs:text-center md:text-start">
        <p className="text-xl mb-2">For any complaints (e.g. related to sustainability, human rights, or environmental law), please send an email to complaints@easyshop.com.</p>
      </div>
      <div className="flex flex-col xs:flex-row xs:text-center md:text-start">
        <p className="text-xl mb-2">For any other issues, please send an email to hello@easyshop.com.</p>
      </div>
    </div>
    <div>  
       <Image
          src={customerserviceimg}
          alt="img"
          width={900}
       />
      </div>

    </main>
  );
}
