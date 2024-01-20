import Image from "next/image";
import Link from "next/link";
import logoImage from "@/public/logo-color.png"

export default function HamburgerLogo() {
    return (
        <Link href="/">
        <Image className="mix-blend-darken"
            src={logoImage}
            alt="Logo"
            width={90} 
            height={40} 
        />
        </Link>
    );
}
