import { MdAccountCircle } from "react-icons/md";
import { FaCartArrowDown } from "react-icons/fa";
import { VscServerProcess } from "react-icons/vsc";


function Steps() {
  return (
    <>
    <div className="flex flex-col w-96 items-center xs:my-4 sm:my-4 md:my-0">
        <MdAccountCircle size="40"/>
        <p className="my-4">Register with a seller account and start selling</p>
        <button className="btn btn-outline btn-accent">Register now</button>
    </div>

    <div className="flex flex-col w-fit items-center  xs:my-4 sm:my-4 md:my-0">
        <FaCartArrowDown size="40"/>
        <p className="my-4">List your product for sale</p>
        <button className="btn btn-outline btn-accent">Add Product</button>
    </div>

    <div className="flex flex-col w-96 items-center  xs:my-4 sm:my-4 md:my-0">
        <VscServerProcess size="40"/>
        <p className="my-4">Sit back and trust us to handle the rest</p>
        <button className="btn btn-outline btn-accent">Start Now</button>
    </div>
</>
  )
}

export default Steps;