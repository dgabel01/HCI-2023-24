import BlogInviteCards from "../bloginvitecards";

export default function BlogInvite(){
    return (
        <>
          <div className="flex flex-col mt-24 bg-white">
            <div className="flex flex-col items-center">
                <h1 className="font-bold text-2xl title-font">Read our Blog</h1>
                <p className="mt-4 mb-4">Check out our latest blog entries</p>
            </div>
            <BlogInviteCards/>
          </div>
        </>
    )
}