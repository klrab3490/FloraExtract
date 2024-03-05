import HeroSectionSec from '../sections/HomeSections/HeroSectionSec'
import HomeSlider from '../sections/HomeSections/HomeSlider'
import ProductJourney from '../sections/HomeSections/ProductJourney'
import TeamSection from '../sections/HomeSections/TeamSection'
import Exclusive from '../sections/HomeSections/Exclusive'
import WhatSet from '../sections/HomeSections/WhatSet'
import Certifications from '../sections/HomeSections/Certifications'
import RunningMarquee from '../components/RunningMarque'

function HomeSec() {
    return (
        <div>
            <HeroSectionSec/>
            <ProductJourney/>
            <TeamSection/>
            <Exclusive/>
            <HomeSlider/>
            <WhatSet/>
            <Certifications/>
            <RunningMarquee/>
        </div>
    )
}

export default HomeSec