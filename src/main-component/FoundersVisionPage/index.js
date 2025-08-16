import React from 'react'
import Navbar2 from '../../components/Navbar2'
import PageTitle from '../../components/pageTitles/about-pagetitle'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import FoundersVision from '../../components/FoundersVision'

const FoundersVisionPage = () => {
    return (
        <>
            <Navbar2 />
<PageTitle pageTitle={"Founder's Vision"} pagesub={"Founder's Vision"} />
            <FoundersVision />
            <Footer />
            <Scrollbar />
        </>
    )
}

export default FoundersVisionPage