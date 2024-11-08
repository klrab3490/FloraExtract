import PropTypes from "prop-types";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function GalleryImage({ title, images, video }) {
    return (
        <div>
            <h1 className="sm:text-3xl text-xl font-semibold text-center p-1"> {title} </h1>
            <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}} >
                <Masonry gutter="10px">
                    {video && <video src={video} controls style={{width: "100%", display: "block"}} />}
                    {images.map((image, i) => (
                        <img key={i} src={image} style={{width: "100%", display: "block"}} alt="" />
                    ))}
                </Masonry>
            </ResponsiveMasonry>
        </div>
    )
}

GalleryImage.propTypes = {
    title: PropTypes.string.isRequired,
    images: PropTypes.array.isRequired,
    video: PropTypes.string
};