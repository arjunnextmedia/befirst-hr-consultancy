import React, { Fragment } from 'react';
import Navbar2 from '../../components/Navbar2'
import PageTitle from '../../components/pageTitles/contact-pagetitle'
import Contactpage from '../../components/Contactpage'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import SEO from '../../components/seo';


const ContactPage = () => {
    return (
        <>
            <SEO
                title="Contact Befirst HR | HR Consultancy Calicut"
                description="Get in touch with Befirst HR for recruitment, payroll, training & consulting services. Call, email or book online today."
                keywords={"Contact HR consultancy Calicut,HR company phone Calicut, HR services enquiry Kerala"}
            />
            <Navbar2 />
            <PageTitle pageTitle={'Contact Us'} pagesub={'Contact Us'} />
            <Contactpage />
            <Footer />
            <Scrollbar />
        </>
    )
};
export default ContactPage;

