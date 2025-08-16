import React, {Fragment} from 'react';
import Navbar2 from '../../components/Navbar2'
import PageTitle from '../../components/pageTitles/service-pagetitle'
import Services2 from '../../components/Services2'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'


const ServicePageS2 =() => {
    return(
        <Fragment>
            <Navbar2/>
            <PageTitle pageTitle={'Services'} pagesub={'Services'}/> 
            <Services2 srvClass={'wpo-service-section-s2'}/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default ServicePageS2;
