import Navbar2 from '../../components/Navbar2';
import PageTitle from '../../components/pageTitles/service-pagetitle'
import Footer from '../../components/footer';
import Scrollbar from '../../components/scrollbar';

import SEO from '../../components/seo';

import ServiceSingleSection4 from '../../components/ServiceSingleSection/service4';

const ServiceSinglePage4 = () => {
  

    return (
        <>
            <SEO
                title="Payroll Setup, Management & Training in Kerala | Befirst HR & Management Consultancy"
                description="Expert payroll setup, management, and training services for companies, startups, and entrepreneurs in Kerala. Serving Kozhikode, Kochi & Trivandrum. Ensure compliance, accuracy, and efficiency."
                keywords={"payroll setup Kerala, payroll management Kerala, payroll training Kerala, salary processing Kerala, HR payroll services Kozhikode, Kochi, Trivandrum, payroll outsourcing Kerala, payroll system setup Kerala"}
            />
            <Navbar2 />
            <PageTitle pageTitle={'Payroll Setup & Training'} pagesub={'Services'} serviceTitle={'Payroll Setup & Training'} />
            <ServiceSingleSection4  />
            <Footer />
            <Scrollbar />
        </>
    );
};

export default ServiceSinglePage4;

