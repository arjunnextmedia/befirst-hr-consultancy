import Navbar2 from '../../components/Navbar2';
import PageTitle from '../../components/pageTitles/service-details-pagetitle'
import Footer from '../../components/footer';
import Scrollbar from '../../components/scrollbar';

import SEO from '../../components/seo';

import ServiceSingleSection5 from '../../components/ServiceSingleSection/service5';

const ServiceSinglePage5 = () => {
  
    return (
        <>
            <SEO
                title="Recruitment Agency in Kerala | Befirst HR & Management Consultancy – Kozhikode, Kochi, Trivandrum"
                description="Befirst HR & Management Consultancy offers professional recruitment services in Kerala for startups, SMEs, and corporates. Find the right talent fast in Kozhikode, Kochi, and Trivandrum."
                keywords={"recruitment agency Kerala, recruitment agency Kozhikode, recruitment agency Kochi, recruitment agency Trivandrum, best recruitment agency Kerala, manpower consultancy Kerala, executive search Kerala, hiring agency Kerala, staffing agency Kerala, HR consultancy Kerala"}
            />
            <Navbar2 />
            <PageTitle pageTitle={'Recruitment Services'} pagesub={'Services'} serviceTitle={'Recruitment Services'} />
            <ServiceSingleSection5 />
            <Footer />
            <Scrollbar />
        </>
    );
};

export default ServiceSinglePage5;

