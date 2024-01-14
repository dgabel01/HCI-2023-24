import React from 'react'
import Image from 'next/image'
import cardPicture from '@/public/jason-goodman-Oalh2MojUuk-unsplash.jpg'
import Link from 'next/link'
import BlogInviteCard from './bloginvitecard'
type Props = {}

export default function BlogInviteCards() {
  return (

      <div className="flex gap-8 flex-row xs:flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row">
         <BlogInviteCard
            name="John Doe"
            header="First steps in using EasyShop"
            review="Great platform for beginners! EasyShop has simplified the whole online shopping experience for me."
          />
         <BlogInviteCard
            name="Jane Smith"
            header="Exploring Advanced Features of EasyShop"
            review="Impressive features and customization options. EasyShop offers a wide range of tools for those who want to take their online store to the next level."
          />
         <BlogInviteCard
            name="Bob Johnson"
            header="EasyShop Tips and Tricks"
            review="As a seasoned user, I discovered some hidden gems in EasyShop. Sharing my tips and tricks to make your experience even smoother!"
          />
      </div>
    
  )
}