import React, { Fragment } from 'react';
import Navbar2 from '../../components/Navbar2'
import PageTitle from '../../components/pageTitles/contact-pagetitle'
import Contactpage from '../../components/Contactpage'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Careers from '../../components/careers';
import SEO from '../../components/seo';


const CareersPage = () => {
    return (
        <>
            <SEO
                title="Jobs in Calicut & GCC | Befirst HR Careers"
                description="Explore current job openings or join our talent network. Befirst HR connects professionals with top employers."
                keywords={"Jobs in Calicut,GCC job vacancies, HR job portal Kerala, careers Kozhikode"}
            />
            <Navbar2 />
            <PageTitle pageTitle={'Careers'} pagesub={'Careers'} />
            <Careers />
            <Footer />
            <Scrollbar />
        </>
    )
};
export default CareersPage;

