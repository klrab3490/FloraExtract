import { motion } from "framer-motion";
import PropTypes from 'prop-types';

const MenuButton = ({ isOpen = false, width = 24, height = 24, strokeWidth = 1, color = "#000", transition = null, lineProps = null, ...props }) => {
    const variant = isOpen ? "opened" : "closed";
    const top = {
        closed: { rotate: 0, translateY: 0, },
        opened: { rotate: 45, translateY: 2, },
    };
    const center = {
        closed: { opacity: 1, },
        opened: { opacity: 0, },
    };
    const bottom = {
        closed: { rotate: 0, translateY: 0, },
        opened: { rotate: -45, translateY: -2, },
    };
    lineProps = { stroke: color, strokeWidth: strokeWidth, vectorEffect: "non-scaling-stroke", initial: "closed", animate: variant, transition: transition, ...lineProps, };
    const unitHeight = 4;
    const unitWidth = (unitHeight * width) / height;

    return (
        <svg viewBox={`0 0 ${unitWidth} ${unitHeight}`} overflow="visible" preserveAspectRatio="none" width={width} height={height} {...props} >
            <motion.line x1="0" x2={unitWidth} y1="0" y2="0" variants={top} {...lineProps} />
            <motion.line x1="0" x2={unitWidth} y1="2" y2="2" variants={center} {...lineProps} />
            <motion.line x1="0" x2={unitWidth} y1="4" y2="4" variants={bottom} {...lineProps} />
        </svg>
    );
};

MenuButton.propTypes = {
    isOpen: PropTypes.bool,
    width: PropTypes.number,
    height: PropTypes.number,
    strokeWidth: PropTypes.number,
    color: PropTypes.string,
    transition: PropTypes.string,
    lineProps: PropTypes.object,
};

export { MenuButton };