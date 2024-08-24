import { useState } from 'react';
import PropTypes from 'prop-types';

export default function GalleryMeeting({ title, images }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="max-w-md mx-auto bg-white shadow-md rounded-md overflow-hidden border border-gray-300">
            <div className="p-4">
                <h1 className="sm:text-3xl text-xl font-semibold text-center p-1">{title}</h1>
                <div className='flex flex-wrap gap-3'>
                    {/* Always display the first image */}
                    <img src={images[0]} alt="" className='w-full rounded-md' />
                    {isExpanded && images.slice(1).map((image, i) => (
                        <img key={i} src={image} alt="" className='w-full rounded-md' />
                    ))}
                </div>
            </div>
            {/* Only show the expand/collapse button if there is more than one image */}
            {images.length > 1 && (
                <div 
                    className="text-center p-2 cursor-pointer bg-gray-100 border-t border-gray-300" 
                    onClick={toggleExpand}
                >
                    {isExpanded ? 'Click to Collapse' : 'Click to Expand'}
                </div>
            )}
        </div>
    );
}

GalleryMeeting.propTypes = {
    title: PropTypes.string.isRequired,
    images: PropTypes.array.isRequired
};
