import React, {Fragment} from 'react';
import Navbar2 from '../../components/Navbar2'
import PageTitle from '../../components/pageTitles/service-pagetitle'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Testimonial from '../../components/Testimonial'



const TestimonialPage =() => {
    return(
        <Fragment>
            <Navbar2/>
            <PageTitle pageTitle={'Testimonilal'} pagesub={'Testimonilal'}/> 
            <Testimonial tClass="style-2"/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default TestimonialPage;
