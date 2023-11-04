import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'EasyShop',
  description: 'HCI college course project',
}

const pages = {
  Home:"/",
  About:"/about",
  "Add a product" :"/add-new",
  Blog:"/blog",
  Contact:"/contact",
  Login: "/login",
  Cart:"/shopping-cart",
};




export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-yellow-500 p-4">
          <ul className="flex gap-8 justify-around">
            {Object.entries(pages).map(([name, path]) => (
            <li key={name}>
              <Link href={path}>{name}</Link>
            </li>
            ))}
          </ul>
        </nav>
        {children}
      </body>
    </html>
  )
}
