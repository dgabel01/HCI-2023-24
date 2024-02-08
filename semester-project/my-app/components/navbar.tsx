"use client"
import React, { Fragment } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import {Popover, Transition} from "@headlessui/react"
import {Bars3Icon} from "@heroicons/react/24/solid"
import {XMarkIcon} from "@heroicons/react/20/solid"
import HeaderLogo from './logo';
import HamburgerLogo from './hamburgerlogo';
import { usePathname } from 'next/navigation'


const pages = {
    Home:"/",
    About:"/about",
    "Add a product" :"/add-new",
    Blog:"/blog",
    Contact:"/contact",
    Login: "/login",
    Cart:"/shopping-cart",
  };

  
type Props = {}

export default function Navbar({}: Props) {

const pathname = usePathname()
const isActiveRoute = (route: string) => pathname === route;


  return (
    <Popover 
    className={"xs:w-full flex items-center border-b-2 p-2 h-24 bg-header"}
    >
        <HeaderLogo></HeaderLogo>
        <div className="grow">
            <div className="hidden sm:flex items-center justify-center gap-2 md:gap-8">
                <Link className={`text-white ${isActiveRoute('/about') ? 'font-bold text-blue-500 bg-teal-500 p-2 rounded-md' : ''}`} href="/about">About us</Link>
                <Link className={`text-white ${isActiveRoute('/contact') ? 'font-bold text-blue-500 bg-teal-500 p-2 rounded-md' : ''}`} href="/contact">Contact us</Link>
                <Link className={`text-white ${isActiveRoute('/add-new') ? 'font-bold text-blue-500 bg-teal-500 p-2 rounded-md' : ''}`} href="/add-new">Add a product</Link>
                <Link className={`text-white ${isActiveRoute('/blog') ? 'font-bold text-blue-500 bg-teal-500 p-2 rounded-md' : ''}`} href="/blog">Blog</Link>
            </div>
        </div>
        <div className="flex grow items-center justify-end sm:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline.none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden = "true" />
            </Popover.Button>
        </div>
    <Popover.Overlay style={{ zIndex: 1000 }}className="sm:hidden fixed inset-0 bg-black opacity-30"/>
    <Transition
        as={Fragment}
        enter = "duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
    >
        <Popover.Panel
        focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
        style={{ zIndex: 1000 }}
        >
            <div className="rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50">
                <div className="px-5 pt-5 pb-6">
                    <div className="flex items-center justify-between">
                        <HamburgerLogo></HamburgerLogo>
                        <div className="mr-2">
                            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline.none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true"></XMarkIcon>
                            </Popover.Button>
                        </div>
                    </div>
                    <div className="mt-6">
                        {/*moze biti komponenta*/}
                        <nav className="grid gap-y-8">
                            <Popover.Button as={Link} href="/about" className ="focus:outline-none focus:ring-inset focus:ring-gray-500 px-2">
                                    About Us
                            </Popover.Button>
                            <Popover.Button as={Link} href="/contact" className ="focus:outline-none focus:ring-inset focus:ring-gray-500 px-2">
                                    Contact Us
                            </Popover.Button>
                            <Popover.Button as={Link} href="/add-new" className ="focus:outline-none focus:ring-inset focus:ring-gray-500 px-2">
                                    Add a Product
                            </Popover.Button>
                            <Popover.Button as={Link} href="/blog" className ="focus:outline-none focus:ring-inset focus:ring-gray-500 px-2">
                                    Blog
                            </Popover.Button>
                        </nav>
                    </div>
                    <div className="mt-2 flex flex-col items-start gap-2 ml-2 py-4">
                        <Popover.Button as={Link} href="/shopping-cart" className ="focus:outline-none focus:ring-inset focus:ring-gray-500 px-2"> 
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                        </Popover.Button>
                    
                    </div>
                </div>
            </div>
        </Popover.Panel>
    </Transition>
        <div className="hidden sm:flex flex-row md:flex items-center">
        <Link className={`text-white ${isActiveRoute('/shopping-cart') ? 'font-bold text-blue-500 bg-teal-500 p-2 rounded-md' : ''}`} href="/shopping-cart">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
        </Link>            
        </div>
    </Popover>
    
  );
};