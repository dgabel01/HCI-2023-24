import React from "react";
import Link from "next/link";
import Image from "next/image";
import footerLogo from "@/public/logo-color.png"
import footerLogo2 from "@/public/logo-white.png"
import { SiGithub } from "react-icons/si";

export default function Footer() {
	return (
		<>
			<div className="bg-gray-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20 mt-20 bg-header">
				<div className="p-5 ">
					<ul>
						<li>
							<p className="text-white font-bold text-xl pb-6">EasyShop</p>
						</li>
						<p className="text-white font-bold text-xl pb-6">
							Your full circle marketplace
						</p>
						{/*<div className="flex gap-6 pb-5">
							<FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" />
							<FaTwitter className="text-2xl cursor-pointer hover:text-blue-600" />
							<FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
							<FaYoutube className="text-2xl cursor-pointer hover:text-red-600" />
						
						</div>*/}
						<li>
							<p className="text-white" >Addres: Shop Street 123</p>
						</li>
						<li>
							<p className="text-white" >Telephone: +123 456 789</p>
						</li>
						<li>
							<p className="text-white" >Email: easyshop@mail.com</p>
						</li>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-white font-bold text-2xl pb-4">Services</p>
						<li className="text-white text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							<Link href={"/products"}>Marketplace</Link>
						</li>
						<li className="text-white text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							<Link href={"/blog"}>Blog</Link>
						</li>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-white font-bold text-2xl pb-4">About</p>
						<li className="text-white text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
						<Link href={"/about"}>About us </Link>
						</li>
						<li className="text-white text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
						<Link href={"/contact"}>Contact us</Link>
						</li>
						<li className="text-white text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Careers
						</li>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-white font-bold text-2xl pb-4">Social</p>
						<li className="text-white text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							<a href="https://github.com/dgabel01/HCI-2023-24" target="_blank">GitHub</a>
						</li>
						<li className="text-white text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							LinkedIn
						</li>
						<li className="text-white text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Facebook
						</li>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-white font-bold text-2xl pb-4">Legal</p>
						<li className="text-white text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Terms
						</li>
						<li className="text-white text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Privacy
						</li>
						<li className="text-white text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Cookies
						</li>
					</ul>
				</div>				
			</div>
			<hr className="border-t-2"/>

			<div className="flex items-center justify-between p-5 bg-header">
   				<div className="flex flex-row ">
					<h1 className="text-white font-semibold mr-4">2023/24 HCI course project </h1>
					<Link aria-label="Visit the GitHub page for HCI" href={"http://marjan.fesb.hr/~mcagalj/HCI/"} target="_blank" className="mt-1"><SiGithub size={21} color = "white"/></Link>
				</div> 
   				 <Image src={footerLogo2} width={100} height={90} alt="logo" className="mix-blend-lighten"/>
			</div>
		</>
	);
}


