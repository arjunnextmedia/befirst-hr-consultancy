import React, {Fragment} from 'react';
import Navbar2 from '../../components/Navbar2'
import PageTitle from '../../components/pageTitles/service-pagetitle'
import Services from '../../components/Services'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'


const ServicePage =() => {
    return(
        <>
            <Navbar2/>
            <PageTitle pageTitle={'Services'} pagesub={'Services'}/> 
            <Services/>
            <Footer/>
            <Scrollbar/>
        </>
    )
};
export default ServicePage;
