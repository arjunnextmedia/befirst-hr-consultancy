import React, {Fragment} from 'react';
import Navbar2 from '../../components/Navbar2'
import Hero3 from '../../components/hero3'
import Features from '../../components/Features'
import About from '../../components/about'
import Services2 from '../../components/Services2'
// import Pricing from '../../components/Pricing'
// import FunFact from '../../components/FunFact'
// import Projects from '../../components/Projects'
// import Testimonial from '../../components/Testimonial'
import Support from '../../components/Support'
import BlogSection from '../../components/BlogSection'
import Footer from '../../components/footer'
import ProfessionalBanner from '../../components/careers/banner';
import HRBanner from '../../components/banner/hrBanner';
import SEO from '../../components/seo';
// import Scrollbar from '../../components/scrollbar'
// import CoreValues from '../../components/CoreValues';


const HomePage3 =() => {
    return(
        <>
         <SEO
                title="HR Consultancy in Calicut | Befirst HR & Management"
                description="Expert HR, recruitment, payroll & training services for SMEs, startups & corporates in Calicut & GCC. Book a free consultation today."
                keywords={"HR consultancy Kerala, HR services Kerala,HR Consultancy Calicut,HR services Calicut, HR firm Kerala, HR company Kozhikode"}
            />
            <Navbar2/>
            {/* <Hero3/> */}
            <ProfessionalBanner/>
            <Features featuresClass="wpo-features-section-s2"/>
            <About/>
            <HRBanner/>
            <Services2 srvClass={'wpo-service-section-s3'}/>
            {/* <Pricing/> */}
            {/* <FunFact fnClass={'section-padding'}/> */}
            {/* <Projects/> */}
            {/* <Testimonial/> */}
            <Support/>
            {/* <CoreValues/> */}
            <BlogSection/>
            <Footer/>
        </>
    )
};
export default HomePage3;