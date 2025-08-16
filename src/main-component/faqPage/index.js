import React from 'react';
import Navbar2 from '../../components/Navbar2';
import Hero3 from '../../components/hero3';
import Footer from '../../components/footer';
import FAQs from '../../components/Faqs';
import PageTitle from '../../components/pageTitles/faq-pagetitle';

const FAQPage = () => {


    return (
        <>
            <Navbar2 />
            <PageTitle pageTitle={'Faqs'} pagesub={'Faqs'}/> 
            <FAQs />
            <Footer />

        </>
    );
};

export default FAQPage;