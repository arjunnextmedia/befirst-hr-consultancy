import React, {Fragment} from 'react';
import Navbar2 from '../../components/Navbar2'
import PageTitle from '../../components/pageTitles/about-pagetitle'
import FunFact from '../../components/FunFact'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import AboutSection from '../../components/about/page';
import VisionMission from '../../components/visionMission';
import HRChatbot from '../../components/HR-chatbot';
import SEO from '../../components/seo';


const AboutPage =() => {
    return(
        <>
           <SEO
                title="About Befirst HR | Leading HR Consultancy in Calicut"
                description="Learn how Befirst HR helps businesses hire smarter, stay compliant & grow. Trusted HR partner in Kerala & GCC."
                keywords={"HR Consultancy Calicut,HR experts Calicut, HR solutions Kerala, HR agency Kozhikode"}
            />
            <Navbar2/>
            <PageTitle pageTitle={'About Us'} pagesub={'About Us'}/> 
            <AboutSection abClass={'wpo-about-section-s2'}/>
            {/* <VisionMission/> */}
            {/* <Services2 srvClass={'wpo-service-section-s3'}/> */}
            {/* <Pricing/> */}
            <Footer/>
            <Scrollbar/>
        </>
    )
};
export default AboutPage;
