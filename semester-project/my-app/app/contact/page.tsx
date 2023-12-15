import Image from "next/image"
import heroimg from "@/public/hero-contact-f6fac17c.webp"
import { IoIosSend } from "react-icons/io";
import customerserviceimg from "@/public/Customer-Service-Management.png"

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

      {/* Overlay Container with Blurred Background */}
      <div className="flex items-center justify-center">
        {/* Blurred Background */}
        <div
          className="absolute inset-0 bg-no-repeat bg-center bg-cover filter flex items-center"
          style={{
            backgroundImage: `url(${heroimg.src})`,
          }}
        ></div>

        {/* Content Container */}
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


      <div className="">
        <form action="" className="flex flex-col justify-center items-center p-4">
          <div className="flex gap-8 my-12 xs:flex-col sm:flex-col md:flex-row">
            <input type="text" placeholder="First name*" className="rounded-xl p-2 border-2 hover:shadow-lg"/>
            <input type="text" placeholder="Last name*" className="rounded-xl p-2 border-2 hover:shadow-lg"/>
          </div>
          <input type="text" placeholder="Email address*" className="p-2 rounded-xl w-80 border-2 hover:shadow-lg" />

          <div className="flex gap-8 mt-8 xs:flex-col md:flex-row">
            <select id="" name="" placeholder="Role*" className="rounded-xl p-2 border-2 hover:shadow-lg">
              <option>Buyer</option>
              <option>Seller</option>
            </select>
            <input type="text" name="" id="" placeholder="EasyShop account name" className="rounded-xl p-2 border-2 hover:shadow-lg"/>
          </div>
          
          <div className="flex items-center justify-center">
            <textarea placeholder="Tell us more about your issue" name="" id="" className="my-8 xs:w-64 sm:w-64 md:w-96 h-28 w-auto rounded-xl p-2 outline-none border-2 hover:shadow-lg"></textarea>
          </div>
        </form>
        <div className="flex flex-row justify-center items-center">
          <button className="btn btn-success px-4">Send</button>
        </div>
      </div>


      <div className="flex flex-col">
          <h1 className="text-2xl font-bold my-8">If you need to contact us for any other matters, please use the following contact channels:</h1>
          <div className="flex flex-row">
            <IoIosSend />
            <p className="text-xl mb-2">For security incidents, email security@easyshop.com.</p>
          </div>
          <div className="flex flex-row">
            <IoIosSend/>
            <p className="text-xl mb-2">For any complaints (e.g. related to sustainability, human rights, or environmental law), please send an email to  complaints@easyshop.com.</p>
          </div>
          <div className="flex flex-row">
          <IoIosSend />
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
