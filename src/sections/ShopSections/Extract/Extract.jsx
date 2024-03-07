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
            ingredients: 'Total bitters as andrographolides 5-50%',
            benefit: 'Treatment of common cold, Hepato protective effects, Anti-bacterial and Anti- parasitic, Supports Healthy Inflammatory Response.',
            img: AndrographisPaniculata
        },{
            id: 2,
            name: "Ashwagandha Extract",
            ingredients: "Withanolide glycosides 1.5 -8%, Saponins 2.5%",
            benefit: "Antioxidant, anti-stress, rejuvenating effect, immunomodulatory effect",
            img: Ashwagandha
        },{
            id: 3,
            name: "Boswellia Serratta Extract",
            ingredients: "Boswellic Acid 65%-85%",
            benefit: "Supports Healthy Inflammatory Response, Supports Joint Health",
            img: BoswelliaSerratta
        },{
            id: 4,
            name: "Brahmi Extract",
            ingredients: "Bacosides 25%",
            benefit: "Memory Booster",
            img: Brahmi
        },{
            id: 5,
            name: "Curcumin – Stain Free",
            ingredients: "Curcuminiods 95%",
            benefit: "Easy free flowing Stain Free granules",
            img: CurcuminStainFree
        },{
            id: 6,
            name: "Curcumin Powder",
            ingredients: "Curcuminiods 95%",
            benefit: "Powder",
            img: CurcuminPowder
        },{
            id: 7,
            name: "Curcumin Powder(Water Dispersible)",
            ingredients: "Curcuminiods 45%",
            benefit: "Water dispersible powder",
            img: CurcuminPowderWaterDispersible
        },{
            id: 8,
            name: "Curcumin - High Density",
            ingredients: "Curcuminiods 95%",
            benefit: "Easy to fill in capsules, maximum loading ensured. Low wastage during encapsulation.",
            img: CurcuminHighDensity
        },{
            id: 9,
            name: "Curcumin - Effervescent",
            ingredients: "Curcuminiods 37.5%",
            benefit: "Free flowing effervescent granules",
            img: CurcuminEffervescen
        },{
            id: 10,
            name: "Curcumin Oil Soluble",
            ingredients: "Curcuminiods 28.5%",
            benefit: "Easily soluble with MCT oil or Hemp oil",
            img: CurcuminOilSoluble
        },{
            id: 11,
            name: "Curcumin Ethanol",
            ingredients: "Curcuminiods 95%",
            benefit: "Extraction Solvent- Ethanol",
            img: CurcuminEthanol
        },{
            id: 12,
            name: "Cinnamon Extract",
            ingredients: "Total Polyphenols 10-30%",
            benefit: "Memory Booster",
            img: Cinnamon
        },{
            id: 13,
            name: "Essential Oil of Mustard",
            ingredients: "AITC 95% , BITC 85%",
            benefit: "Flavouring Agent",
            img: Mustard
        },{
            id: 14,
            name: "Fenugreek Extract",
            ingredients: "Saponins 30-60%",
            benefit: "Supports immune system, lowers blood glucose, Supports healthy cholesterol levels",
            img: Fenugreek
        },{
            id: 15,
            name: "Garcinia Cambogia Extract",
            ingredients: "HCA 50-60% powder, granules",
            benefit: "Weight control, obesity satiety",
            img: GarciniaCambogia
        },{
            id: 16,
            name: "Ginger Extract",
            ingredients: "Gingerol 5-10%",
            benefit: "Supports Healthy Inflammatory Response, improves digestion, anti-emetic",
            img: Ginger
        },{
            id: 17,
            name: "Green Coffee Extract",
            ingredients: "Chlorogenic acid 45%-50%",
            benefit: "Weight loss agent, effective antioxidant reduces the risk of diabetes",
            img: GreenCoffee
        },{
            id: 18,
            name: "Green Tea Extract",
            ingredients: "30% EGCG, 75% polyphenols,15% EGCG & 50% polyphenols(water soluble)",
            benefit: "Weight control, antioxidant, anti-carcinogenic",
            img: GreenTea
        },{
            id: 19,
            name: "Guggul Lipid Extract",
            ingredients: "Guggul Sterones 2.5-10%",
            benefit: "Inhibits platelet aggregation",
            img: Guggul
        },{
            id: 20,
            name: "Gymnema Sylvestre Extract",
            ingredients: "Gymnemic Acid 25% & 75%",
            benefit: "Support healthy blood glucose levels",
            img: Gymnema
        },{
            id: 21,
            name: "Pterocarpus Marsupium Extract",
            ingredients: "Pterostilbene 5%",
            benefit: "Support healthy blood glucose levels",
            img: Pterocarpus
        },{
            id: 22,
            name: "Sesame Seed Extract",
            ingredients: "Total lignans 70%",
            benefit: "Antioxidant, healthy blood glucose, enhances the metabolism of omega-3 fatty acids, protects liver from alcohol toxicity, reduces hangover",
            img: Sesame
        },{
            id: 23,
            name: "Tribulus Terrestris",
            ingredients: "Saponins 40%-90%",
            benefit: "Sports medicine, libido enhancer, suitable for beverages",
            img: Tribulus
        },
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
        <div className='grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 py-5'>
            {extracts.map((data,index) => (
                <div key={index} className='sm:p-5 p-2'>
                    <div className='flex flex-col border-[2px] border-black h-full p-5 rounded-xl group transition-transform transform xl:hover:scale-105'>
                        <div className='flex justify-center items-center'>
                            <img src={data.img} className='w-full h-[300px] rounded-xl object-cover' />
                        </div>
                        <div className='w-full font-normal text-2xl sm:rpx-4 px-2'>
                            <div className="text-4xl font-bold mb-2 text-center">{data.name}</div>
                            <div className="flex flex-col"> 
                                <span className="font-medium">Ingredients : </span> 
                                <span className="pl-3">{data.ingredients}</span>
                            </div>
                            <div className="flex flex-col"> 
                                <span className="font-medium">Benefits : </span>
                                {show !== data.id && <div className="flex justify-end cursor-pointer hover:underline" onClick={() => see(data.id)}>See More</div>}
                                {show === data.id && <div>
                                    <span className="pl-3">{data.benefit}</span>
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