import Image from "next/image";
import Link from "next/link";
import logoImage from "@/public/logo-color.png"

export default function HamburgerLogo() {
    return (
        <Link href="/">
        <Image className="mix-blend-darken focus:outline-none focus:ring-inset focus:ring-gray-500 px-2"
            src={logoImage}
            alt="Logo"
            width={90} 
            height={40} 
        />
        </Link>
    );
}
