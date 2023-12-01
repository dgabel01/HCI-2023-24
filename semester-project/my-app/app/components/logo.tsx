import Image from "next/image";
import Link from "next/link";
import logoImage from "../logo-white.png"

export default function HeaderLogo() {
    return (
        <Link href="/">
        <Image className="mix-blend-lighten"
            src={logoImage}
            alt="Logo"
            width={135} 
            height={40} 
        />
        </Link>
    );
}
