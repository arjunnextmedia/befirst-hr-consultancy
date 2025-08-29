import Navbar2 from '../../components/Navbar2';
import PageTitle from '../../components/pageTitles/service-details-pagetitle'
import Footer from '../../components/footer';
import Scrollbar from '../../components/scrollbar';

import SEO from '../../components/seo';
import ServiceSingleSection2 from '../../components/ServiceSingleSection/service2';

const ServiceSinglePage2 = () => {
   

    return (
        <>
            <SEO
                title="Human Capital Development Services in Kerala | Befirst HR & Management Consultancy"
                description="Boost employee engagement, retention, and productivity with Befirst HR & Management Consultancy’s Human Capital Development services in Kerala. Serving Kozhikode, Kochi, Trivandrum & beyond."
                keywords={"human capital development Kerala, employee engagement Kerala, HR consultancy Kozhikode, HR consulting Kochi, HR strategy Kerala, retention strategy Kerala, employee orientation Kerala, HR solutions Trivandrum, business HR consultancy Kerala, leadership HR services Kerala"}
            />
            <Navbar2 />
            <PageTitle pageTitle={'Human Capital Development'} pagesub={'Services'} serviceTitle={'Human Capital Development'} />
            <ServiceSingleSection2  />
            <Footer />
            <Scrollbar />
        </>
    );
};

export default ServiceSinglePage2;


