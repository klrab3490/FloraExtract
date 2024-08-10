import GalleryImage from "../sections/GalleySection/GalleryImage"

// import images
import img1 from "../assets/Gallery/IFT/1.jpg"
import img2 from "../assets/Gallery/IFT/2.jpg"
import img3 from "../assets/Gallery/IFT/3.jpg"
import img4 from "../assets/Gallery/IFT/4.jpg"
import img5 from "../assets/Gallery/IFT/5.jpg"
import img6 from "../assets/Gallery/IFT/6.jpg"
import img7 from "../assets/Gallery/IFT/7.jpg"
import img8 from "../assets/Gallery/IFT/8.jpg"
import img9 from "../assets/Gallery/IFT/9.jpg"

// image Arrays
const images1 = [
    img1, img6, img7, img4, img8, img5, img9, img2, img3
]

export default function Gallery() {

    return (
        <div className='py-5 px-4 sm:px-14'>
            <GalleryImage title={"Gallery 1"} images={images1} />
        </div>
    )
}