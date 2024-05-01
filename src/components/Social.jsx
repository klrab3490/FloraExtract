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
      email: "sales@floraextracts.in",
      linkedin: "",
      phone: "+1 (872) 302 3816",
      twitter: "https://twitter.com/PaulKundukulam",
      facebook: "https://www.facebook.com/anto.paul.735",
      desc: "Anto Paul, our business development manager, is responsible for identifying new business opportunities and building strategic partnerships. With a keen eye for market trends and a passion for connecting with clients, he is dedicated to driving the growth of Flora Extracts and steering the business in the right direction. Ensuring and focusing on client satisfaction is a crucial metric in securing success of Flora Extracts and Anto keeps it his top priority. His expertise at networking has been detrimental in growing client base for this thriving company.  Being performance driven, with more than 6 years of extensive experience in generating sales and creating and implementing new marketing initiatives, he is one of the leading forces of Flora Extracts."
    },
    {
      id: 2,
      name: "Ashlin T Antony",
      position: "US Operations",
      image: Ashlin,
      email: "sales@floraextracts.in",
      linkedin: "https://www.linkedin.com/",
      phone: "+1 (872) 203 2872",
      facebook: "https://www.facebook.com/ashlin.thomas.33",
      desc: "Ashlin serves as our Operations Manager for the US region. Adept at managing manufacturing operations, Ashlin oversees our production processes, supply chain, and logistics to ensure efficiency, quality, and compliance. As a crucial player in the growth of Flora Extracts, he holds the key to unlocking operational excellence through managing teams and resources. He analyzes and improves operational processes, identifies areas of enhancement, and implements strategies to increase the productivity and efficiency of Flora Extracts. Highly skilled and with a sharp business mind, he manages multiple departments at Flora Extracts enhancing productivity and thereby accelerating the company’s growth. Ashlin, with his unwavering desire and determination to always maintain top-notch quality of products and services, is truly an asset to Flora Extracts"
    },
  ];
  

  return (
    <div>
      {people.map((person) => (
        <div key={person.id} className="pb-8 px-0 sm:px-2 lg:px-24">
          <div className=" gap-8 rounded-lg flex xl:flex-row flex-col justify-center items-center">
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
      <div className="pb-8 px-0 sm:px-2 lg:px-24 flex md:flex-row justify-center items-center md:items-start flex-col gap-4">
        {team.map((person) => (
          <div key={person.id} className="md:w-1/2 w-full">
            <div className="px-8 rounded-lg flex flex-col justify-center items-center">
              <div>
                <div className="h-80 w-64 rounded-lg">
                  <img src={person.image} alt="" className="rounded-xl h-full w-full object-cover"/>
                </div>
              </div>
              <div className="text-center pt-2">
                <h1 className="text-3xl font-semibold">{person.name}</h1>
                <h2 className="text-xl font-medium">{person.position}<br/>Manager</h2>
                <p className="text-justify">{person.desc}</p>
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