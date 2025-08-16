import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import Hero2 from '../../components/hero2'
import Features from '../../components/Features'
import About from '../../components/about'
import Services2 from '../../components/Services2'
import Pricing from '../../components/Pricing'
import FunFact from '../../components/FunFact'
import Projects from '../../components/Projects'
import Testimonial from '../../components/Testimonial'
import Support from '../../components/Support'
import BlogSection from '../../components/BlogSection'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'


const HomePage2 =() => {
    return(
        <Fragment>
            <Navbar/>
            <Hero2/>
            <Features/>
            <About/>
            <Services2 srvClass={'wpo-service-section-s2'}/>
            <Pricing/>
            <FunFact fnClass={'section-padding'}/>
            <Projects/>
            <Testimonial/>
            <Support/>
            <BlogSection/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default HomePage2;