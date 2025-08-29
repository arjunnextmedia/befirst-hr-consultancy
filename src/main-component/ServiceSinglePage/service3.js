import Navbar2 from '../../components/Navbar2';
import PageTitle from '../../components/pageTitles/service-details-pagetitle'
import Footer from '../../components/footer';
import Scrollbar from '../../components/scrollbar';

import SEO from '../../components/seo';
import ServiceSingleSection3 from '../../components/ServiceSingleSection/service3';

const ServiceSinglePage3 = () => {
    
    return (
        <>
            <SEO
                title="Management Consultancy in Kerala – Befirst HR & Management Consultancy"
                description="Boost your business growth with expert management consultancy in Kerala. Specializing in business process optimization, startup support, and HR strategy for companies in Kozhikode, Kochi, and Trivandrum."
                keywords={"management consultancy Kerala, business process optimization Kerala, startup operational support Kerala, HR leadership Kerala, organizational planning Kerala, Kozhikode management consultant, Kochi HR consultant, Trivandrum business consultancy, Kerala startup consultant, business growth Kerala"}
            />
            <Navbar2 />
            <PageTitle pageTitle={'Management Consultancy Services'} pagesub={'Services'} serviceTitle={'Management Consultancy Services'} />
            <ServiceSingleSection3  />
            <Footer />
            <Scrollbar />
        </>
    );
};

export default ServiceSinglePage3;

