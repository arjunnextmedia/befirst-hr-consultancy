import React, {Fragment} from 'react';
import Navbar2 from '../../components/Navbar2'
import PageTitle from '../../components/pageTitles/contact-pagetitle'
import Contactpage from '../../components/Contactpage'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'


const ContactPage =() => {
    return(
        <>
            <Navbar2/>
            <PageTitle pageTitle={'Contact Us'} pagesub={'Contact'}/> 
            <Contactpage/>
            <Footer/>
            <Scrollbar/>
        </>
    )
};
export default ContactPage;

