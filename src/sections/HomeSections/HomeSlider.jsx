import React from "react";
import Slider from "react-slick";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const imagesData = [
  {
    text: "We have a large laboratory to find out hybrid seeds",
    description:
      "Our state-of-the-art laboratory is equipped for researching and developing hybrid seeds to enhance crop quality and yield.",
    imageUrl:
      "https://cdn.pixabay.com/photo/2014/07/06/09/26/laboratory-385349_1280.jpg",
  },
  {
    text: "We have a large network of farmers",
    description:
      "Connecting with a vast network of farmers ensures collaboration and support throughout the agricultural community.",
    imageUrl:
      "https://cdn.pixabay.com/photo/2014/07/06/17/20/tractor-385681_960_720.jpg",
  },
  {
    text: "We have different schemes that help the farmers in building their farmlands",
    description:
      "Our diverse schemes provide farmers with valuable resources and assistance, fostering sustainable development of their farmlands.",
    imageUrl:
      "https://cdn.pixabay.com/photo/2016/02/16/12/19/indonesia-1203250_1280.jpg",
  },
];

function HomeSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <>
      <div className="w-full flex justify-start items-center pl-10 relative pb-6">
        <div className="w-auto text-3xl px-5 py-2 h-20 bg-[#fd9b40] rounded-full flex justify-center items-center text-[#290c06] font-medium z-10">
          <span className="text-6xl font-semibold px-2 text-[#5e1c0e]">01</span>{" "}
          Our Extracts
        </div>
        <div className="w-auto text-3xl px-5 py-2 h-20 bg-[#290c06] rounded-full flex justify-center items-center text-[#290c06] font-medium absolute top-2 left-13">
          <span className="text-6xl font-semibold px-2 text-[#5e1c0e]">01</span>{" "}
          Our Extracts
        </div>
      </div>
      <div className="relative overflow-hidden h-[80vh] w-auto mx-auto bg-[#5ACEA1] p-10">
        <Slider {...settings}>
          {imagesData.map((data, index) => (
            <div key={index} className="focus:outline-none relative">
              <img
                src={data.imageUrl}
                alt={`Slider Image ${index + 1}`}
                className="w-full h-[70vh] object-cover"
              />
              <div className="absolute inset-0 text-white p-8">
                <h3 className="text-xl font-bold mb-4">{data.text}</h3>
                <p>{data.description}</p>
              </div>
              {/* Custom Arrow Buttons with react-icons */}
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default HomeSlider;
