// icon 
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

// image
import Nixon from "../assets/Team/Nixon.JPG";

function Social() {
  const people = [
    {
      id: 1,
      name: "Dr. Nixon Kuruvilla",
      position: "CEO",
      image: Nixon,
      email: "nixon@gmail.com",
      linkedin: "https://www.linkedin.com/in/nixonkuruvilla/",
      phone: "+919446229344",
      twitter: "https://twitter.com/nixonkuruvilla",
    },
    // {
    //   id: 1,
    //   name: "Dr. Nixon Kuruvilla",
    //   position: "CEO",
    //   image: ,
    //   email: "nixon@example.com",
    //   linkedin: "https://www.linkedin.com/in/nixonkuruvilla/",
    //   phone: "+1234567890",
    //   twitter: "https://twitter.com/nixonkuruvilla",
    // },
  ];

  return (
    <>
    {people.map(person => (
      <div key={person.id} className="bg-[#5ACEA1] pb-8 rounded-lg hover:scale-105 hover:group hover:transition-all">
        <div>
          <div className="h-auto w-80 rounded-lg bg-[#5ACEA1] flex justify-center items-center">
            <img src={person.image} alt="" className="rounded-t-lg h-72 w-full object-cover" />
          </div>
          <div className="text-center pt-2">
            <h1 className="text-3xl font-semibold">{person.name}</h1>
            <h2 className="text-xl font-medium">{person.position}</h2>
            <div className="flex items-center justify-center pt-2 text-[#290c06]">
              <div className="p-2 bg-[#fd9b40] rounded-l-full hover:text-[#1b3d30] cursor-pointer">
                <a href={`tel:${person.phone}`}>
                  <FaPhoneAlt className="px-2" size={36} />
                </a>
              </div>
              <div className="p-2 bg-[#fd9b40] hover:text-[#5ACEA1] cursor-pointer">
                <a href={person.linkedin}>
                  <FaLinkedinIn className="px-2" size={36} />
                </a>
              </div>
              <div className="p-2 bg-[#fd9b40] hover:text-[#5ACEA1] cursor-pointer">
                <a href={`mailto:${person.email}`}>
                <MdOutlineEmail className="px-2" size={36} />
                </a>
              </div>
              <div className="p-2 bg-[#fd9b40] rounded-r-full hover:text-[#5ACEA1] cursor-pointer">
                <a href={person.twitter}>
                  <RiTwitterXFill className="px-2" size={36} />
                </a>
              </div>
            </div>
          </div>
        </div>
    </div>
      ))}
        </>
  );
}

export default Social;
