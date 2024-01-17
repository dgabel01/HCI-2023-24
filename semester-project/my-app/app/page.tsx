import Image from 'next/image'
import About from './about/page'
import Link from 'next/link'
import Products from './products/page'
import Hero from './components/hero/page'
import Footer from './components/footer/page'
import BlogInvite from './components/bloginvite/page'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'EasyShop',
  description: 'HCI college course project home page',
}

const Home = ()=> {
  return (
    <main>
      <Hero/>
      <Products/>
      <BlogInvite/>
    </main>
  )
}

export default Home;