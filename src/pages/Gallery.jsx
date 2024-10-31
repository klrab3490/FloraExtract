import GalleryImage from "../sections/GalleySection/GalleryImage"
import GalleryMeeting from "../sections/GalleySection/GalleryMeeting"

// Import Images: Visit to IFT, Chicago
import img1 from "../assets/Gallery/IFT/1.jpg"
import img3 from "../assets/Gallery/IFT/3.jpg"
import img4 from "../assets/Gallery/IFT/4.jpg"
import img5 from "../assets/Gallery/IFT/5.jpg"
import img6 from "../assets/Gallery/IFT/6.jpg"
import img7 from "../assets/Gallery/IFT/7.jpg"
import img8 from "../assets/Gallery/IFT/8.jpg"
import img9 from "../assets/Gallery/IFT/10.jpg"

// Import Images: Meeting with Companies
import img10 from "../assets/Gallery/Meeting/Bhoomi Natural Products and Exports Pvt.Ltd.jpg"
import img11 from "../assets/Gallery/Meeting/Bhoomi Natural Products and Exports Pvt.Ltd 2.jpg"
import img12 from "../assets/Gallery/Meeting/Cappacale Foods.jpg"
import img13 from "../assets/Gallery/Meeting/Plant Lipids.jpg"

// image Arrays
const images_Visit = [
    img1, img6, img7, img4, img8, img5, img9, img3
]
const meeting = [
    {
        id: 0,
        name: "1. Plant Lipids",
        images: [img13]
    }, {
        id: 1,
        name: "2. Bhoomi Natural Products and Exports Pvt.Ltd",
        images: [img10, img11]
    }, {
        id: 2,
        name: "3. Cappacale Foods",
        images: [img12]
    },
];


export default function Gallery() {

    return (
        <div className='py-5 px-4 sm:px-14'>
            <h1 className='text-3xl font-bold pb-3'>Events</h1>
            <div className="sm:px-10 px-5">
                <GalleryImage title={"1. Visit To IFT,Chicago"} images={images_Visit} />
            </div>

            <h1 className=" mt-3 text-3xl font-bold pb-3">Corporate Partnerships</h1>
            <div className="sm:px-10 px-5 flex flex-wrap gap-5">
                {meeting.map((item) => (
                    <GalleryMeeting key={item.id} title={item.name} images={item.images} />
                ))}
            </div>
        </div>
    )
}