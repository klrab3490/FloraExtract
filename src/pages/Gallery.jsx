import GalleryImage from "../sections/GalleySection/GalleryImage"

// Import Images: Visit to IFT, Chicago
import img1 from "../assets/Gallery/IFT/1.jpg"
import img2 from "../assets/Gallery/IFT/2.jpg"
import img3 from "../assets/Gallery/IFT/3.jpg"
import img4 from "../assets/Gallery/IFT/4.jpg"
import img5 from "../assets/Gallery/IFT/5.jpg"
import img6 from "../assets/Gallery/IFT/6.jpg"
import img7 from "../assets/Gallery/IFT/7.jpg"
import img8 from "../assets/Gallery/IFT/8.jpg"

// Import Images: Our Stall at IFT, Chicago
import img10 from "../assets/Gallery/IFT/10.jpg"
import img11 from "../assets/Gallery/IFT/11.jpg"
import img12 from "../assets/Gallery/IFT/12.jpg"
import img13 from "../assets/Gallery/IFT/13.jpg"
import img14 from "../assets/Gallery/IFT/14.jpg"
import img15 from "../assets/Gallery/IFT/15.jpg"
import img16 from "../assets/Gallery/IFT/16.jpg"
import img17 from "../assets/Gallery/IFT/17.jpg"
import img18 from "../assets/Gallery/IFT/18.jpg"
import img19 from "../assets/Gallery/IFT/19.jpg"
import img20 from "../assets/Gallery/IFT/20.jpg"
import img21 from "../assets/Gallery/IFT/21.jpg"
import img22 from "../assets/Gallery/IFT/22.jpg"
import img23 from "../assets/Gallery/IFT/23.jpg"
import img24 from "../assets/Gallery/IFT/24.jpg"
import img25 from "../assets/Gallery/IFT/25.jpg"
import img26 from "../assets/Gallery/IFT/26.jpg"
import video1 from "../assets/Gallery/IFT/video1.mp4"

// Import Images: Meeting with Companies
import imgM1 from "../assets/Gallery/Meeting/Bhoomi Natural Products and Exports Pvt.Ltd.jpg"
import imgM21 from "../assets/Gallery/Meeting/Bhoomi Natural Products and Exports Pvt.Ltd 2.jpg"
import imgM22 from "../assets/Gallery/Meeting/Cappacale Foods.jpg"
import imgM3 from "../assets/Gallery/Meeting/Plant Lipids Private Limited.jpg"

// image Arrays
const images_Visit = [
    {
        id: 0,
        name: "Visit To IFT,Chicago",
        images: [img1, img6, img7, img4, img8, img5, img2, img3]
    }, {
        id: 1,
        name: "Our Stall at IFT,Chicago",
        images: [img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, img25, img26],
        video: video1
    }
].reverse();

const images_Meeting = [
    imgM1, imgM21, imgM22, imgM3
]

// const images_Visit = [
//     img1, img6, img7, img4, img8, img5, img9, img3
// ];
// const meeting = [
//     {
//         id: 0,
//         name: "1. Plant Lipids Private Limited",
//         images: [img13]
//     }, {
//         id: 1,
//         name: "2. Bhoomi Natural Products and Exports Pvt.Ltd",
//         images: [img10, img11]
//     }, {
//         id: 2,
//         name: "3. Cappacale Foods",
//         images: [img12]
//     },
// ];

export default function Gallery() {
    return (
        <div className='py-5 px-4 sm:px-14'>
            <h1 className='text-3xl font-bold pb-3'>Events</h1>
            {images_Visit.map((image) => (
                <div className="sm:px-10 px-5" key={image.id}>
                    <GalleryImage title={image.name} images={image.images} video={image.video} />
                </div>
            ))}
            
            <h1 className=" mt-3 text-3xl font-bold pb-3">Corporate Partnerships</h1>
            <div className="sm:px-10 px-5">
                <GalleryImage title={""} images={images_Meeting} />
            </div>
        </div>
    )
}