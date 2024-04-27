// icon
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { RiFacebookFill, } from "react-icons/ri";

// image
import Nixon from "../assets/Team/Nixon.JPG";
import Anto from "../assets/Team/Anto.jpg";
import Ashlin from "../assets/Team/Ashlin.jpg";

function Social() {
  const people = [
    {
      id: 1,
      name: "Dr. Nixon Kuruvila",
      position: "CEO",
      image: Nixon,
      email: "nixonkuruvilak@gmail.com",
      phone: "+919446229344",
      linkedin: "https://www.linkedin.com/in/dr-nixon-kuruvila-5105b5274/",
      facebook: "https://m.facebook.com/nixonkuruvilaofficial/",
      desc: "Dr. Nixon Kuruvila, Principal of Sahrdaya College of Engineering and Technology. He has over 20 years of teaching experience and is also a Member of the Board of Studies at APJ Abdul Kalam Technological University. Dr. Kuruvila is well-known for his commitment to excellence in education and research. He has held important roles in academia, shaping the educational landscape. At Flora Extracts, Dr. Kuruvila leads a team dedicated to offering premium, natural plant extracts that enhance vitality. They focus on ethical sourcing and quality control to meet customers' unique needs. Dr. Kuruvila and his team were inspired by personal experiences with the adverse effects of chemical-laden foods. They believe in the power of natural remedies for well-being. Their mission is to provide innovative solutions for enhancing vitality and wellness."
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
  
  const team = [
    {
      id: 1,
      name: "Anto Paul",
      position: "Business Development",
      image: Anto,
      email: "nixon@example.com",
      linkedin: "https://www.linkedin.com/in/nixonkuruvilla/",
      phone: "",
      twitter: "https://twitter.com/nixonkuruvilla",
      desc: "Anto Paul is our Business Development Manager, responsible for identifying new business opportunities and building strategic partnerships. With a keen eye for market trends and a passion for connecting with clients, Anto is dedicated to driving the growth of Flora Extracts."
    },
    {
      id: 2,
      name: "Ashlin T Antony",
      position: "US Operations",
      image: Ashlin,
      email: "nixon@example.com",
      linkedin: "https://www.linkedin.com/in/nixonkuruvilla/",
      phone: "+1 (872) 203 2872",
      twitter: "https://twitter.com/nixonkuruvilla",
      desc: "Ashlin T Antony serves as our Operations Manager for the US region. With extensive experience in managing manufacturing operations, Ashlin oversees our production processes, supply chain, and logistics to ensure efficiency, quality, and compliance."
    },
  ];
  

  return (
    <div>
      {people.map((person) => (
        <div key={person.id} className="pb-8 px-0 sm:px-24">
          <div className="px-8 gap-8 rounded-lg flex xl:flex-row flex-col justify-center items-center">
            <div>
              <div className="sm:h-72 sm:w-80 w-60 h-60 rounded-lg">
                <img src={person.image} alt="" className="rounded-xl h-full w-full object-cover"/>
              </div>
            </div>
            <div className="text-justify pt-2">
              <h1 className="text-3xl font-semibold">{person.name}</h1>
              <h2 className="text-xl font-medium">{person.position}</h2>
              <p>{person.desc}</p>
            </div>
          </div>
          <div className="flex items-center justify-center pt-2 gap-2 text-[#290c06]">
            <div className="p-2 bg-[#fd9b40] flex items-center justify-center rounded-full hover:text-[#5ACEA1] cursor-pointer">
              <a href={`tel:${person.phone}`}>
                <FaPhoneAlt className="px-2" size={36} />
              </a>
            </div>
            <div className="p-2 bg-[#fd9b40] flex items-center justify-center rounded-full hover:text-[#5ACEA1] cursor-pointer">
              <a href={person.linkedin}>
                <FaLinkedinIn className="px-2" size={36} />
              </a>
            </div>
            <div className="p-2 bg-[#fd9b40] flex items-center justify-center rounded-full hover:text-[#5ACEA1] cursor-pointer">
              <a href={person.facebook}>
                <RiFacebookFill className="px-2" size={36} />
              </a>
            </div>
            <div className="p-2 bg-[#fd9b40] flex items-center justify-center rounded-full hover:text-[#5ACEA1] cursor-pointer">
              <a href={`mailto:${person.email}`}>
                <MdOutlineEmail className="px-2" size={36} />
              </a>
            </div>
          </div>
        </div>
      ))}
      <div className="pb-8 px-0 sm:px-24 flex md:flex-row justify-center items-center md:items-start flex-col">
        {team.map((person) => (
          <div key={person.id} className="w-1/2">
            <div className="px-8 rounded-lg flex flex-col justify-center items-center">
              <div>
                <div className="h-80 w-64 rounded-lg">
                  <img src={person.image} alt="" className="rounded-xl h-full w-full object-cover"/>
                </div>
              </div>
              <div className="text-center pt-2">
                <h1 className="text-3xl font-semibold">{person.name}</h1>
                <h2 className="text-xl font-medium">{person.position}<br/>Manager</h2>
                <p>{person.desc}</p>
              </div>
            </div>
            <div className="flex items-center justify-center pt-2 gap-2 text-[#290c06]">
              <div className="p-2 bg-[#fd9b40] flex items-center justify-center rounded-full hover:text-[#5ACEA1] cursor-pointer">
                <a href={`tel:${person.phone}`}>
                  <FaPhoneAlt className="px-2" size={36} />
                </a>
              </div>
              <div className="p-2 bg-[#fd9b40] flex items-center justify-center rounded-full hover:text-[#5ACEA1] cursor-pointer">
                <a href={person.linkedin}>
                  <FaLinkedinIn className="px-2" size={36} />
                </a>
              </div>
              <div className="p-2 bg-[#fd9b40] flex items-center justify-center rounded-full hover:text-[#5ACEA1] cursor-pointer">
                <a href={person.facebook}>
                  <RiFacebookFill className="px-2" size={36} />
                </a>
              </div>
              <div className="p-2 bg-[#fd9b40] flex items-center justify-center rounded-full hover:text-[#5ACEA1] cursor-pointer">
                <a href={`mailto:${person.email}`}>
                  <MdOutlineEmail className="px-2" size={36} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Social;