import Image from 'next/image'
import About from './about/page'
import Link from 'next/link'
import Products from './products/page'
import Hero from './components/hero/page'
import Footer from './components/footer/page'
import BlogInvite from './components/bloginvite/page'

export default function Home() {
  return (
    <main>
      <Hero/>
      <Products/>
      <BlogInvite/>
      <Footer/>
    </main>
  )
}
