import { useState } from "react";

// images
import AndrographisPaniculata from "../../../assets/Extract/AndrographisPaniculata.jpg";
import Ashwagandha from "../../../assets/Extract/Ashwagandha.png";
import BoswelliaSerratta from "../../../assets/Extract/BoswelliaSerratta.png";
import Brahmi from "../../../assets/Extract/Brahmi.jpg";
import Cinnamon from "../../../assets/Extract/Cinnamon.jpg";
import CurcuminEffervescen from "../../../assets/Extract/CurcuminEffervescen.png";
import CurcuminEthanol from "../../../assets/Extract/CurcuminEthanol.jpg";
import CurcuminHighDensity from "../../../assets/Extract/CurcuminHighDensity.jpeg";
import CurcuminOilSoluble from "../../../assets/Extract/CurcuminOilSoluble.png";
import CurcuminPowder from "../../../assets/Extract/CurcuminPowder.jpg";
import CurcuminPowderWaterDispersible from "../../../assets/Extract/CurcuminPowderWaterDispersible.jpg";
import CurcuminStainFree from "../../../assets/Extract/CurcuminStainFree.jpg";
import Fenugreek from "../../../assets/Extract/Fenugreek.png";
import GarciniaCambogia from "../../../assets/Extract/GarciniaCambogia.jpg";
import Ginger from "../../../assets/Extract/Ginger.jpg";
import GreenCoffee from "../../../assets/Extract/GreenCoffee.png";
import GreenTea from "../../../assets/Extract/GreenTea.png";
import Guggul from "../../../assets/Extract/Guggul.png";
import Gymnema from "../../../assets/Extract/Gymnema.jpg";
import Mustard from "../../../assets/Extract/Mustard.png";
import Pterocarpus from "../../../assets/Extract/Pterocarpus.png";
import Sesame from "../../../assets/Extract/Sesame.png";
import Tribulus from "../../../assets/Extract/Tribulus.png";

export default function Extracts() {
    const extracts = [
        {
            id: 1,
            name: "Andrographis Paniculata Extract",
            desc: "",
            ingredients: 'Total bitters as andrographolides 5-50%',
            benefit: 'Treatment of common cold, Hepato protective effects, Anti-bacterial and Anti- parasitic, Supports Healthy Inflammatory Response.',
            img: AndrographisPaniculata
        },{
            id: 2,
            name: "Ashwagandha Extract",
            desc: "",
            ingredients: "Withanolide glycosides 1.5 -8%, Saponins 2.5%",
            benefit: "Antioxidant, anti-stress, rejuvenating effect, immunomodulatory effect",
            img: Ashwagandha
        },{
            id: 3,
            name: "Boswellia Serratta Extract",
            desc: "",
            ingredients: "Boswellic Acid 65%-85%",
            benefit: "Supports Healthy Inflammatory Response, Supports Joint Health",
            img: BoswelliaSerratta
        },{
            id: 4,
            name: "Brahmi Extract",
            desc: "",
            ingredients: "Bacosides 25%",
            benefit: "Memory Booster",
            img: Brahmi
        },{
            id: 5,
            name: "Curcumin – Stain Free",
            desc: "",
            ingredients: "Curcuminiods 95%",
            benefit: "Easy free flowing Stain Free granules",
            img: CurcuminStainFree
        },{
            id: 6,
            name: "Curcumin Powder",
            desc: "",
            ingredients: "Curcuminiods 95%",
            benefit: "Powder",
            img: CurcuminPowder
        },{
            id: 7,
            name: "Curcumin Powder(Water Dispersible)",
            desc: "",
            ingredients: "Curcuminiods 45%",
            benefit: "Water dispersible powder",
            img: CurcuminPowderWaterDispersible
        },{
            id: 8,
            name: "Curcumin – High Density",
            desc: "",
            ingredients: "Curcuminiods 95%",
            benefit: "Easy to fill in capsules, maximum loading ensured. Low wastage during encapsulation.",
            img: CurcuminHighDensity
        },{
            id: 9,
            name: "Curcumin – Effervescent",
            desc: "",
            ingredients: "Curcuminiods 37.5%",
            benefit: "Free flowing effervescent granules",
            img: CurcuminEffervescen
        },{
            id: 10,
            name: "Curcumin Oil Soluble",
            desc: "",
            ingredients: "Curcuminiods 28.5%",
            benefit: "Easily soluble with MCT oil or Hemp oil",
            img: CurcuminOilSoluble
        },{
            id: 11,
            name: "Curcumin Ethanol",
            desc: "",
            ingredients: "Curcuminiods 95%",
            benefit: "Extraction Solvent- Ethanol",
            img: CurcuminEthanol
        },{
            id: 12,
            name: "Cinnamon Extract",
            desc: "",
            ingredients: "Total Polyphenols 10-30%",
            benefit: "Memory Booster",
            img: Cinnamon
        },{
            id: 13,
            name: "Essential Oil of Mustard",
            desc: "",
            ingredients: "AITC 95% , BITC 85%",
            benefit: "Flavouring Agent",
            img: Mustard
        },{
            id: 14,
            name: "Fenugreek Extract",
            desc: "",
            ingredients: "Saponins 30-60%",
            benefit: "Supports immune system, lowers blood glucose, Supports healthy cholesterol levels",
            img: Fenugreek
        },{
            id: 15,
            name: "Garcinia Cambogia Extract",
            desc: "",
            ingredients: "HCA 50-60% powder, granules",
            benefit: "Weight control, obesity satiety",
            img: GarciniaCambogia
        },{
            id: 16,
            name: "Ginger Extract",
            desc: "",
            ingredients: "Gingerol 5-10%",
            benefit: "Supports Healthy Inflammatory Response, improves digestion, anti-emetic",
            img: Ginger
        },{
            id: 17,
            name: "Green Coffee Extract",
            desc: "",
            ingredients: "Chlorogenic acid 45%-50%",
            benefit: "Weight loss agent, effective antioxidant reduces the risk of diabetes",
            img: GreenCoffee
        },{
            id: 18,
            name: "Green Tea Extract",
            desc: "",
            ingredients: "30% EGCG, 75% polyphenols,15% EGCG & 50% polyphenols(water soluble)",
            benefit: "Weight control, antioxidant, anti-carcinogenic",
            img: GreenTea
        },{
            id: 19,
            name: "Guggul Lipid Extract",
            desc: "",
            ingredients: "Guggul Sterones 2.5-10%",
            benefit: "Inhibits platelet aggregation",
            img: Guggul
        },{
            id: 20,
            name: "Gymnema Sylvestre Extract",
            desc: "",
            ingredients: "Gymnemic Acid 25% & 75%",
            benefit: "Support healthy blood glucose levels",
            img: Gymnema
        },{
            id: 21,
            name: "Pterocarpus Marsupium Extract",
            desc: "",
            ingredients: "Pterostilbene 5%",
            benefit: "Support healthy blood glucose levels",
            img: Pterocarpus
        },{
            id: 22,
            name: "Sesame Seed Extract",
            desc: "",
            ingredients: "Total lignans 70%",
            benefit: "Antioxidant, healthy blood glucose, enhances the metabolism of omega-3 fatty acids, protects liver from alcohol toxicity, reduces hangover",
            img: Sesame
        },
        // {
        //     id: 23,
        //     name: "Tribulus Terrestris",
        //     desc: "",
        //     ingredients: "Saponins 40%-90%",
        //     benefit: "Sports medicine, libido enhancer, suitable for beverages",
        //     img: Tribulus
        // },
        // {
        //   id:,
        //   name:"",
        //   desc:"",
        //   ingredients:"",
        //   benefit:"",
        //   img:bcm95
        // },
    ];

    const [show,setShow] = useState(null);
    const see = (id) => {
        setShow(show === id ? null : id);
    }

    return (
        <div className='grid sm:grid-cols-3 grid-cols-1 py-5'>
            {extracts.map((data,index) => (
                <div key={index} className='sm:p-5 p-2'>
                    <div className='flex flex-col border-[2px] border-black h-full p-5 rounded-xl group transition-transform transform xl:hover:scale-105'>
                        <div className='flex justify-center items-center'>
                            <img src={data.img} className='w-full h-[300px] rounded-xl object-cover' />
                        </div>
                        <div className='w-full font-normal text-2xl sm:rpx-4 px-2'>
                            <div className="text-4xl font-bold mb-2 text-center">{data.name}</div>
                            <div>{data.desc}</div>
                            <div className="flex flex-col"> <span className="font-medium">Ingredients : </span> {data.ingredients}</div>
                            <div className="flex flex-col"> 
                                <span className="font-medium">Benefits : </span>
                                {show !== data.id && <div className="flex justify-end cursor-pointer hover:underline" onClick={() => see(data.id)}>See More</div>}
                                {show === data.id && <div>
                                    {data.benefit}
                                    <div className="flex justify-end cursor-pointer hover:underline" onClick={() => setShow(null)}>See Less</div>
                                </div>}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}