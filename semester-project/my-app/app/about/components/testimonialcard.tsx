import testimonialprofilepic from '@/public/360_F_233462402_Fx1yke4ng4GA8TJikJZoiATrkncvW6Ib.jpg'
import { PiStarFill } from "react-icons/pi";
import Image from 'next/image'

interface TestimonialCardProps {
  name: string;
  location: string;
  header: string;
  review: string;
}

function TestimonialCard({name, location,header, review}:TestimonialCardProps) {
  return (
  <div className="p-4">
  <figure className="md:flex max-w-3xl bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
    <Image
      src={testimonialprofilepic}
      alt='testpic'
      className='w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto object-cover'
    />
    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
      <blockquote>
        <p className="text-lg font-medium">
          &quot;{review}&quot;
        </p>
      </blockquote>
      <figcaption className="font-medium">
        <div className="text-sky-500 dark:text-sky-400 mb-2">
         {name}
        </div>
        <div className="text-slate-700 dark:text-slate-500">
         {location}
        </div>
      </figcaption>
    </div>
  </figure>
</div>

  );
}

export default TestimonialCard