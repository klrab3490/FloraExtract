// images
import Sep1 from "../../assets/Vector-IMG/sep-1.png";
import Sep2 from "../../assets/Vector-IMG/sep-2.png";

const Research = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="flex xl:flex-row flex-col">
                <div className="sm:w-96 w-80 sm:h-64 h-auto p-5 text-xl rounded-xl border-[2px] border-black flex flex-col bg-[#f3f3df]">
                    <h1 className="text-2xl font-semibold underline text-center mb-1">Research</h1>
                    <ol className="list-decimal list-inside">
                        <li>Identifying herbs with potential compounds</li>
                        <li>Determining the active component</li>
                        <li>Creating the product & its process</li>
                    </ol>
                </div>
            </div>
        </div>
    );
}

const ClinicalValidation = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="flex xl:flex-row flex-col">
                <div className="sm:w-96 w-80 sm:h-64 h-auto p-5 text-xl rounded-xl border-[2px] border-black flex flex-col bg-[#f3f3df]">
                    <h1 className="text-2xl font-semibold underline text-center mb-1">Clinical Validation</h1>
                    <ol className="list-decimal list-inside">
                        <li>Designing comprehensive clinical studies</li>
                        <li>Undertaking clinical studies worldwide</li>
                        <li>Publishing scientific papers after peer review</li>
                    </ol>
                </div>
            </div>
        </div>
    )
}

const Manufacturing = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="flex xl:flex-row flex-col">
                <div className="sm:w-96 w-80 sm:h-64 h-auto p-5 text-xl rounded-xl border-[2px] border-black flex flex-col bg-[#f3f3df]">
                    <h1 className="text-2xl font-semibold underline text-center mb-1">Manufacturing</h1>
                    <ol className="list-decimal list-inside">
                        <li>Obtaining gathering herbs from sustainable sources</li>
                        <li>Extracting active component using gentle processes</li>
                        <li>Customising products as per customers&apos; needs</li>
                    </ol>
                </div>
            </div>
        </div>
    );
}

const QualityControl = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="flex xl:flex-row flex-col">
                <div className="sm:w-96 w-80 sm:h-64 h-auto p-5 text-xl rounded-xl border-[2px] border-black flex flex-col bg-[#f3f3df]">
                    <h1 className="text-2xl font-semibold underline text-center mb-1">Quality Control</h1>
                    <ol className="list-decimal list-inside">
                        <li>Testing to ensure the component efficacy</li>
                        <li>Testing to ensure the product&apos;s safety</li>
                        <li>Documenting the product&apos;s validations</li>
                    </ol>
                </div>
            </div>
        </div>
    );
}

const GlobalDelivery = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="flex xl:flex-row flex-col">
                <div className="sm:w-96 w-80 sm:h-64 h-auto p-5 text-xl rounded-xl border-[2px] border-black flex flex-col bg-[#f3f3df]">
                    <h1 className="text-2xl font-semibold underline text-center mb-1">Global Delivery</h1>
                    <ol className="list-decimal list-inside">
                        <li>Packaging the product safely</li>
                        <li>Collaborating with delivery partners</li>
                        <li>Delivering the order on time, every time</li>
                    </ol>
                </div>
            </div>
        </div>
    );
}

function ProductJourney() {
    return (
        <div className="flex flex-col w-full h-auto justify-center items-center pt-10">
            <div className="w-full flex justify-start items-center pl-5 sm:pl-10 relative pb-4">
                <div className="w-auto text-2xl sm:text-3xl px-3 sm:px-5 py-2 h-16 sm:h-20 bg-[#fd9b40] rounded-full flex justify-center items-center text-[#290c06] font-medium z-10">
                    <span className="text-6xl font-semibold px-2 text-[#5e1c0e]">01</span> Product Journey
                </div>
                <div className="w-auto text-2xl sm:text-3xl px-3 sm:px-5 py-2 h-16 sm:h-20 bg-[#290c06] rounded-full flex justify-center items-center text-[#290c06] font-medium absolute top-2 left-13">
                    <span className="text-6xl font-semibold px-2 text-[#5e1c0e]">01</span> Product Journey
                </div>
            </div>
            <div className="bg-[#fff]">
                <img src={Sep1} alt="" className="w-[100vw] h-20" />
            </div>
            <div className="flex flex-wrap justify-center items-center w-full h-auto bg-[#5ACEA1]">
                <div className="p-2">
                    <Research />
                </div>
                <div className="p-2">
                    <ClinicalValidation />
                </div>
                <div className="p-2">
                    <Manufacturing />
                </div>
                <div className="p-2">
                    <QualityControl />
                </div>
                <div className="p-2">
                    <GlobalDelivery />
                </div>
            </div>
            <div className="">
                <img src={Sep2} alt="" className="w-[100vw] h-24" />
            </div>
        </div>
    );
}


export default ProductJourney;
