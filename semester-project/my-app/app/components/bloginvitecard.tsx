import React from 'react'
import Image from 'next/image'
import cardPicture from '@/public/jason-goodman-Oalh2MojUuk-unsplash.jpg'
import Link from 'next/link'
type Props = {}



export default function BlogInviteCard(){
    return(

        <div className="lg:p-4 md:w-full flex justify-center">
        <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg">
           <Image
           src={cardPicture}
           alt = "card-picture"
           />
           <div className="px-6 py-4">
             <span className="tracking-widest text-xs title-font font-medium text-gray-400 mb-2">John Doe</span>
             <div className="title-font text-lg font-medium mb-2">
              <Link href={"#"}>What we learned from starting a webshop</Link>
             </div>
             <p>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
             </p>
           </div>
           <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-purple-700 text-white px-4 py-2 text-sm font-semibold mr-2 mb-3 cursor-pointer tracking-widest rounded-full hover:bg-purple-600">Read More</span>
           </div>
        </div>
     </div>

    )


}