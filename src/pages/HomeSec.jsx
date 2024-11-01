import WhatSet from '../sections/HomeSections/WhatSet'
import RunningMarquee from '../components/RunningMarque'
import Exclusive from '../sections/HomeSections/Exclusive'
import HomeSlider from '../sections/HomeSections/HomeSlider'
import TeamSection from '../sections/HomeSections/TeamSection'
import HeroSectionSec from '../sections/HomeSections/HeroSectionSec'
import ProductJourney from '../sections/HomeSections/ProductJourney'
import Certifications from '../sections/HomeSections/Certifications'

function HomeSec() {
    return (
        <div>
            <HeroSectionSec/>
            <ProductJourney/>
            <WhatSet/>
            <Exclusive/>
            <HomeSlider/>
            <TeamSection/>
            <Certifications/>
            <RunningMarquee/>
        </div>
    )
}

export default HomeSec