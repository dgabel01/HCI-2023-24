import React from 'react'
import Image from 'next/image'
import cardPicture from '@/public/jason-goodman-Oalh2MojUuk-unsplash.jpg'
import Link from 'next/link'
import BlogInviteCard from './bloginvitecard'
type Props = {}

export default function BlogInviteCards() {
  return (

      <div className="flex items-row gap-4">
         <BlogInviteCard/>
         <BlogInviteCard/>
         <BlogInviteCard/>
      </div>
    
  )
}