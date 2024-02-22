// Components

// Sections
import OurVision from '../sections/AboutSections/OurVision'
import OurStory from '../sections/AboutSections/OurStory'
import WhyChooseUs from '../sections/AboutSections/WhyChooseUs'

function About() {
    return (
        <div className='mt-10'>
            {/* 01 - Our Story */} <OurStory />
            {/* <Running /> */}
            {/* 02 - Our Vision */} <OurVision />
            {/* 03 - Why Choose Us */} <WhyChooseUs /> 
        </div>
    )
}

export default About