// image
import Sep1 from "../../assets/Vector-IMG/sep-1.png";
import Sep2 from "../../assets/Vector-IMG/sep-2.png";

// imports
import Social from "../../components/Social";

function TeamSection() {
    return (
        <div className="w-full flex-col flex pb-10">
            <div className="h-10"/>
            <div className="w-full flex justify-start items-center pl-5 sm:pl-10 relative pb-4">
                <div className="w-auto text-2xl sm:text-3xl px-3 sm:px-5 py-2 h-16 sm:h-20 bg-[#fd9b40] rounded-full flex justify-center items-center text-[#290c06] font-medium z-10">
                    <span className="text-6xl font-semibold px-2 text-[#5e1c0e]">05</span> Meet Our Team
                </div>
                <div className="w-auto text-2xl sm:text-3xl px-3 sm:px-5 py-2 h-16 sm:h-20 bg-[#290c06] rounded-full flex justify-center items-center text-[#290c06] font-medium absolute top-2 left-13">
                    <span className="text-6xl font-semibold px-2 text-[#5e1c0e]">05</span> Meet Our Team
                </div>
            </div>
            <div className="">
                <img src={Sep1} alt="" className="w-[100vw] h-20" />
            </div>
            <div className="w-full bg-[#5ACEA1] p-5 h-auto flex justify-around items-center">
                <Social/>
            </div>
            <div className="">
                <img src={Sep2} alt="" className="w-[100vw] h-20" />
            </div>
        </div>
    );
}

export default TeamSection;
