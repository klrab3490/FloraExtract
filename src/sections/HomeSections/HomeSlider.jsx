import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import extract1 from "../../assets/HeroSlider/extract-1.jpg";
import extract2 from "../../assets/HeroSlider/extract-2.jpg";
import extract3 from "../../assets/HeroSlider/extract-3.jpg";

const imagesData = [
    {
        ProductName: "Ashwagandha Extract",
        Ingredients: "Withanolides glycosides 1.5-10% and Saponins 2.5%.",
        Benfits: [ "Help the body adapt to stress", "Protecting cells from various chronic diseases", "Enhance immune functions", ],
        Background: "https://eu-images.contentstack.com/v3/assets/blt2183a7e3152cc969/blt18cf4eb2daa2cfab/64b144702b0c386185a22ac1/2736145619fb42428f2e0b5cc5fefb80.jpg?width=850&auto=webp&quality=95&format=jpg&disable=upscale",
        ProductImage: extract1,
    },{
        ProductName: "Brahmi Extract",
        Ingredients: "Bacosides 25%",
        Benfits: [ "Improved memory, learning, and attention", "Protect brain cells from damage", "Enhance immune funcAdaptogenic qualities helping the body adapt to stress", ],
        Background: "https://media.istockphoto.com/id/1439452746/photo/closeup-shot-of-the-indian-pennywort-leaves.jpg?s=612x612&w=0&k=20&c=_UI9iR7MYLLsibeh0USFJRVC6-u0VlpmS5w5PMKCC3s=",
        ProductImage: extract2,
    },{
        ProductName: "Boswellia serratta Extract",
        Ingredients: "Boswellic Acid 65%-85%.",
        Benfits: [ "Inhibit the production of inflammatory leukotrienes", "Support joint health and mobility", "Pain relief in various conditions like osteoarthritis and rheumatoid arthritis", ],
        Background: "https://omniactives.com/wp-content/uploads/2021/05/Boswellia_Serrata.jpg",
        ProductImage: extract3,
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
            <div className="w-full flex justify-start items-center pl-5 sm:pl-10 relative pb-4">
                <div className="w-auto text-2xl sm:text-3xl px-3 sm:px-5 py-2 h-16 sm:h-20 bg-[#fd9b40] rounded-full flex justify-center items-center text-[#290c06] font-medium z-10">
                    <span className="text-6xl font-semibold px-2 text-[#5e1c0e]">01</span> Our Extracts
                </div>
                <div className="w-auto text-2xl sm:text-3xl px-3 sm:px-5 py-2 h-16 sm:h-20 bg-[#290c06] rounded-full flex justify-center items-center text-[#290c06] font-medium absolute top-2 left-13">
                    <span className="text-6xl font-semibold px-2 text-[#5e1c0e]">01</span> Our Extracts
                </div>
            </div>
            <div className="relative overflow-hidden w-auto mx-auto bg-[#5ACEA1] p-2 sm:p-10">
                <Slider {...settings}>
                    {imagesData.map((data, index) => (
                        <div key={index} className="focus:outline-none relative">
                            <img src={data.Background} alt={`Slider Image ${index + 1}`} className="w-full h-[80vh] object-cover" />
                            <div className="absolute inset-0 text-white p-4 sm:p-8">
                                <h3 className="text-4xl sm:text-6xl font-bold mb-4">{data.ProductName}</h3>
                                <div className="w-full sm:h-[400px] h-96 pt-2 sm:pt-5 flex flex-col justify-between px-2 sm:px-10">
                                    <div className="text-black p-4 sm:p-8 relative z-10  flex sm:flex-row flex-col justify-around items-center bg-slate-100 opacity-80 rounded-2xl">
                                        <div className="px-4 sm:px-10 py-2 sm:py-5">
                                            <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">Ingredients</h2>
                                            <p className="text-base sm:text-lg">{data.Ingredients}</p>
                                            <h2 className="text-xl sm:text-2xl font-bold mt-4 sm:mt-8">Benefits</h2>
                                            <ul className="list-disc text-base sm:text-lg pl-4 sm:pl-8">
                                                {data.Benfits.map((benefit, index) => (
                                                    <li key={index}>{benefit}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <img src={data.ProductImage} alt="" className="h-32 sm:h-64 w-32 sm:w-64" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
}

export default HomeSlider;
