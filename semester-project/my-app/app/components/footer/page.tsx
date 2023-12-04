import React from "react";
import Link from "next/link";
import Image from "next/image";
import footerLogo from "@/app/logo-color.png"


export default function Footer() {
	return (
		<>
			<div className="bg-gray-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20 mt-20">
				<div className="p-5 ">
					<ul>
						<p className="text-gray-800 font-bold text-xl pb-6">
							Your full circle marketplace
						</p>
						{/*<div className="flex gap-6 pb-5">
							<FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" />
							<FaTwitter className="text-2xl cursor-pointer hover:text-blue-600" />
							<FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
							<FaYoutube className="text-2xl cursor-pointer hover:text-red-600" />
						
	</div>*/}
				<p>Addres: Neka ulica 123</p>
				<p>Telephone: +123 456 789</p>
				<p>Email: easyshop@mail.com</p>
				<p></p>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-gray-800 font-bold text-2xl pb-4">Services</p>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Marketplace
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							<Link href={"/blog"}>Blog</Link>
						</li>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-gray-800 font-bold text-2xl pb-4">About</p>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
						<Link href={"/about"}>About us </Link>
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Contact us
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Careers
						</li>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-gray-800 font-bold text-2xl pb-4">Social</p>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
						<Link href="https://github.com/dgabel01/HCI-2023-24" rel="noopener noreferrer" target="_blank"> GitHub </Link>
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							LinkedIn
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Facebook
						</li>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-gray-800 font-bold text-2xl pb-4">Legal</p>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Terms
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Privacy
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Cookies
						</li>
					</ul>
				</div>				
			</div>
			<hr className="border-t-2"/>

			<div className="flex items-center justify-between p-5 bg-gray-50">
   				 <h1 className="text-gray-800 font-semibold">2023/24 HCI course project</h1>
   				 <Image src={footerLogo} width={100} height={90} alt="logo" className="mix-blend-darken"/>
			</div>

		</>
	);
}


