import React, {Fragment} from 'react';
import Navbar2 from '../../components/Navbar2'
import PageTitle from '../../components/pageTitles/contact-pagetitle'
import Contactpage from '../../components/Contactpage'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Careers from '../../components/careers';


const CareersPage =() => {
    return(
        <>
            <Navbar2/>
            <PageTitle pageTitle={'Careers'} pagesub={'Careers'}/> 
            <Careers/>
            <Footer/>
            <Scrollbar/>
        </>
    )
};
export default CareersPage;

