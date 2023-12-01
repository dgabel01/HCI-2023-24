import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })
import Navbar from './components/navbar'

export const metadata: Metadata = {
  title: 'EasyShop',
  description: 'HCI college course project',
}




export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
