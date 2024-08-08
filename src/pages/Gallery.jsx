import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

import SambarPowder from "../assets/Spices/SambarPowder.jpg"
import RasamPowder from "../assets/Spices/RasamPowder.jpg"
import MeatMasala from "../assets/Spices/MeatMasala.jpg"
import ChickenMasala from "../assets/Spices/ChickenMasala.jpg"
import FishMasala from "../assets/Spices/FishMasala.jpg"
import GaramMasala from "../assets/Spices/GaramMasala.jpg"
import BiriyaniMasala from "../assets/Spices/BiriyaniMasala.jpeg"
import ChilliPowder from "../assets/Spices/ChilliPowder.jpg"
import TurmericPowder from "../assets/Spices/TurmericPowder.jpg"
import CorianderPowder from "../assets/Spices/CorianderPowder.jpg"
import KashmiriChilliPowder from "../assets/Spices/KashmiriChilliPowder.jpg"
import BlackPepper from "../assets/Spices/BlackPepper.jpg"
import SplitCassia from "../assets/Spices/SplitCassia.jpg"
import Cloves from "../assets/Spices/Cloves.jpg"
import StarAnise from "../assets/Spices/StarAnise.jpg"
import GreenCardamom from "../assets/Spices/GreenCardamom.jpg"
import Masalas from "../assets/Spices/Masalas.jpg"
import Spice from "../assets/Spices/Spices.jpg"
import WholeSpices from "../assets/Spices/WholeSpices.jpg"
import Customize from "../assets/Spices/Customize.png"

const images1 = [
    "https://picsum.photos/200/300?image=1050",
    "https://picsum.photos/300/300?image=206",
    "https://picsum.photos/200/300?image=1050",
    "https://picsum.photos/300/300?image=206",
    "https://picsum.photos/200/300?image=1050",
    "https://picsum.photos/300/300?image=206",
    "https://picsum.photos/200/300?image=1050",
    "https://picsum.photos/300/300?image=206",
]

const images2 = [
    SambarPowder,
    RasamPowder,
    MeatMasala,
    ChickenMasala,
    FishMasala,
    GaramMasala,
    BiriyaniMasala,
    ChilliPowder,
    TurmericPowder,
    CorianderPowder,
    KashmiriChilliPowder,
    BlackPepper,
    SplitCassia,
    Cloves,
    StarAnise,
    GreenCardamom,
    Masalas,
    Spice,
    WholeSpices,
    Customize,
]

export default function Gallery() {

    return (
        <div className='py-5 px-4 sm:px-14'>
            <div>
                <h1 className="sm:text-3xl text-xl font-semibold text-center p-1">1. Visit To IFT 2024, Chicago</h1>
                <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}} >
                    <Masonry gutter="10px">
                        {images1.map((image, i) => (
                            <img key={i} src={image} style={{width: "100%", display: "block"}} alt="" />
                        ))}
                    </Masonry>
                </ResponsiveMasonry>
            </div>
            <div>
                <h1 className="sm:text-3xl text-xl font-semibold text-center p-1">2. Spices</h1>
                <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}} >
                    <Masonry gutter="10px">
                        {images2.map((image, i) => (
                            <img key={i} src={image} style={{width: "100%", display: "block"}} alt="" />
                        ))}
                    </Masonry>
                </ResponsiveMasonry>
            </div>
        </div>
    )
}