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
    <div className="flex flex-col w-content rounded-lg shadow-lg p-12 w-96 h-96">
    <div className="flex flex-row gap-4">
      <Image
        src={testimonialprofilepic}
        width={100}
        height={100}
        className=""
        alt="testimonial-pic"
      />
      <div className="flex flex-col gap-2 p-4">
          <p>{name}</p>
          <p>{location}</p>
          <div className="flex flex-row"><PiStarFill color  ="yellow"/><PiStarFill color  ="yellow"/><PiStarFill color  ="yellow" /><PiStarFill color  ="yellow"/><PiStarFill color  ="yellow"/></div>
      </div>
    </div>
    <div className="flex flex-col mt-4 p-4">
      <h2 className="ml-4 text-2xl font-bold mb-2">{header}</h2>
      <p className="ml-4 text-lg">{review}</p>
    </div>
  </div>

  )
}

export default TestimonialCard