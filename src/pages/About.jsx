// Sections
import OurMission from '../sections/AboutSections/OurMission'
import OurVision from '../sections/AboutSections/OurVision'
import OurStory from '../sections/AboutSections/OurStory'
import WhyChooseUs from '../sections/AboutSections/WhyChooseUs'

function About() {
    return (
        <div className='mt-10'>
            {/* 00 - Our Mission */} <OurMission />
            {/* 01 - Our Vision */} <OurVision />
            {/* 02 - Our Story */} <OurStory />
            {/* 03 - Why Choose Us */} <WhyChooseUs /> 
        </div>
    )
}

export default About