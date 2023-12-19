import { MdAccountCircle } from "react-icons/md";
import { FaCartArrowDown } from "react-icons/fa";
import { VscServerProcess } from "react-icons/vsc";


function Steps() {
  return (
    <>
    <div className="flex flex-col w-96 items-center xs:mb-20 sm:mb-20 md:mb-20">
        <MdAccountCircle size="40"/>
        <p className="my-4 xs:text-sm sm:tex-sm md:text-lg text-center">Register with a seller account and start selling</p>
        <button className="btn btn-outline btn-accent xs:mb-4 sm:mb-4 md:mb-2">Register now</button>
    </div>

    <div className="flex flex-col w-fit items-center   xs:mb-20 sm:mb-20 md:mb-20">
        <FaCartArrowDown size="40"/>
        <p className="my-4 xs:text-sm sm:tex-sm md:text-lg text-center">List your product for sale</p>
        <button className="btn btn-outline btn-accent">Add Product</button>
    </div>

    <div className="flex flex-col w-96 items-center xs:mb-20 sm:mb-20 md:mb-20">
        <VscServerProcess size="40"/>
        <p className="my-4 xs:text-sm sm:tex-sm md:text-lg text-center">Sit back and trust us to handle the rest</p>
        <button className="btn btn-outline btn-accent">Start Now</button>
    </div>
</>
  )
}

export default Steps;