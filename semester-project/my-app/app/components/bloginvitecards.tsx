import React from 'react'
import Image from 'next/image'
import cardPicture from '@/public/jason-goodman-Oalh2MojUuk-unsplash.jpg'
import Link from 'next/link'
import BlogInviteCard from './bloginvitecard'
type Props = {}

export default function BlogInviteCards() {
  return (

      <div className="flex gap-8 flex-row xs:flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row">
         <BlogInviteCard/>
         <BlogInviteCard/>
         <BlogInviteCard/>
      </div>
    
  )
}