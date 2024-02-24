import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

function Social() {
  return (
    <div className="bg-[#5ACEA1] pb-8 rounded-lg">
      <div className="h-auto w-80 rounded-lg bg-[#5ACEA1] flex justify-center items-center">
        <img src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fHww" alt="" className=" rounded-t-lg h-72 w-80" />
      </div>
      <div className="text-center pt-2">
        <h1 className="text-2xl font-medium">CEO</h1>
        <h2 className="text-3xl font-semibold">John Doe</h2>
        <div className="flex items-center justify-center pt-2">
          <div className="p-2 bg-[#fd9b40] rounded-l-full hover:text-[#290c06] cursor-pointer">
            <FaPhoneAlt className="px-2" size={36} />
          </div>
          <div className="p-2 bg-[#fd9b40] hover:text-[#290c06] cursor-pointer">
            <FaLinkedinIn className="px-2" size={36} />
          </div>
          <div className="p-2 bg-[#fd9b40] hover:text-[#290c06] cursor-pointer">
            <MdOutlineEmail className="px-2" size={36} />
          </div>
          <div className="p-2 bg-[#fd9b40] rounded-r-full hover:text-[#290c06] cursor-pointer">
            <RiTwitterXFill className="px-2" size={36} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Social;
