// icon
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { RiFacebookFill, } from "react-icons/ri";

// image
import Nixon from "../assets/Team/Nixon.JPG";

function Social() {
  const people = [
    {
      id: 1,
      name: "Dr. Nixon Kuruvilla",
      position: "CEO",
      image: Nixon,
      email: "nixonkuruvilak@gmail.com",
      phone: "+919446229344",
      linkedin: "https://www.linkedin.com/in/dr-nixon-kuruvila-5105b5274/",
      facebook: "https://m.facebook.com/nixonkuruvilaofficial/",
      desc: "Dr. Nixon Kuruvila, Principal of Sahrdaya College of Engineering and Technology. He has over 20 years of teaching experience and is also a Member of the Board of Studies at APJ Abdul Kalam Technological University. Dr.Nixon Kuruvila is well-known for his commitment to excellence in education and research. He has held important roles in academia, shaping the educational landscape. At Flora Extracts, Dr.Nixon Kuruvila leads a team dedicated to offering premium, natural plant extracts that enhance vitality. They focus on ethical sourcing and quality control to meet customers' unique needs. Dr.Nixon Kuruvila and his team were inspired by personal experiences with the adverse effects of chemical-laden foods. They believe in the power of natural remedies for well-being. Their mission is to provide innovative solutions for enhancing vitality and wellness."
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
      {people.map((person) => (
        <div key={person.id} className="pb-8 px-24">
          <div className="px-8 gap-8 rounded-lg flex xl:flex-row flex-col justify-center items-center">
            <div>
              <div className="h-auto w-80 rounded-lg">
                <img src={person.image} alt="" className="rounded-xl h-72 w-full object-cover"/>
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
    </>
  );
}

export default Social;