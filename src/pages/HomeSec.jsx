import HeroSectionSec from '../sections/HomeSections/HeroSectionSec'
import HomeSlider from '../sections/HomeSections/HomeSlider'
import ProductJourney from '../sections/HomeSections/ProductJourney'
import TeamSection from '../sections/HomeSections/TeamSection'
import Exclusive from '../sections/HomeSections/Exclusive'
import WhatSet from '../sections/HomeSections/WhatSet'
import Certifications from '../sections/HomeSections/Certifications'
import RunningMarquee from '../components/RunningMarque'
import ImpNews from "../components/ImpNews";

function HomeSec() {
    return (
        <div>
            <HeroSectionSec/>
            <ImpNews>
                We are please to inform you that we are to present our products at the upcoming IFT Chicago Session at booth 952. We are looking forward to your presence.
            </ImpNews>
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