import React from 'react'
import Navbar2 from '../../components/Navbar2'
import PageTitle from '../../components/pageTitles/about-pagetitle'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import VisionMission from '../../components/visionMission'
import FunFact from '../../components/FunFact'
import CoreValues from '../../components/CoreValues'

const VisionAndMission = () => {
    return (
        <>
            <Navbar2 />
            <PageTitle pageTitle={'Our Mission & Values'} pagesub={'Our Mission & Values'} />
            <VisionMission />
            <CoreValues />

            <FunFact fnClass={'section-padding'} />

            <Footer />
            <Scrollbar />
        </>
    )
}

export default VisionAndMission