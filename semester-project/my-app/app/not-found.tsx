import Link from 'next/link'
import Image from 'next/image'
import errorImage from '@/public/sorry-page-not-found-404-error-emoticon-vector-23939139.jpg'
import { IoReturnUpBackOutline } from "react-icons/io5";
import type { Metadata } from 'next';

export const metadata:Metadata={
  title:'404 Not Found',
  description:'Custom 404 page for unregistered routes'
}

export default function NotFound() {
  return (
    <>
      <div className='flex flex-col items-center justify-center'>
        <Image
          src={errorImage}
          alt='errorimage'
          width={500}
          height={300}
        />
        <div className='flex flex-col items-center justify-center gap-12 text-xl text-center'>
          <p>The page you were looking for was moved or doesn&apos;t exist.</p>
          <p>Let&apos;s get you back.</p>
          <div className="flex items-center">
          <IoReturnUpBackOutline className="inline-block mb-2 mr-2 text-green-500"  size={34}/>
            <Link href={`/`} className='hover:text-green-500'>Go back</Link>
          </div>
        </div>
      </div>
    </>
  )
}
