import BlogInviteCards from "../bloginvitecards";
import { GoDot } from "react-icons/go";
import { GoDotFill } from "react-icons/go";


export default function BlogInvite(){
    return (
        <>
          <div className="flex flex-col mt-24 bg-white">
            <div className="flex flex-col items-center">
                <h1 className="font-bold text-2xl title-font">Read our Blog</h1>
                <p className="mt-4 mb-4">Check out our latest blog entries</p>
            </div>
            <BlogInviteCards/>
            <div className="flex items-row items-center align-center m-auto">
            <GoDotFill size={30} color="#cf182c"/><GoDot size={30}/><GoDot size={30}/>
            </div>
          </div>
        </>
    )
}
