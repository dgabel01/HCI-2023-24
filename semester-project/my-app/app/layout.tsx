import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
const space = Space_Grotesk({ subsets: ['latin'] });
import Navbar from '../components/navbar'
import Footer from '../components/footer/page';
import ProductContextProvider from '@/context/ProductContextProvider';
import { Toaster } from "react-hot-toast";
import { SpeedInsights } from "@vercel/speed-insights/next"


export const metadata: Metadata = {
  title: 'EasyShop',
  description: 'HCI college course project root layout ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={space.className}>
        <SpeedInsights/>
        <Navbar/>
        <Toaster position="top-center" />
        <ProductContextProvider> {children}</ProductContextProvider>
        <Footer/>
      </body>
    </html>
  )
}
