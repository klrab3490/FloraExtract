import PropTypes from 'prop-types';

function ImpNews({ children }) {
    return (
        <div className="overflow-hidden w-full bg-[#fd9b40]">
            <marquee direction="left" className="text-lg flex justify-center items-center h-10 font-medium text-[#290c06]">
                {children}
            </marquee>
        </div>
    );
}

ImpNews.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ImpNews;
