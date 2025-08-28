import Navbar2 from '../../components/Navbar2';
import PageTitle from '../../components/pageTitles/service-pagetitle'
import Footer from '../../components/footer';
import Scrollbar from '../../components/scrollbar';
import SEO from '../../components/seo';
import ServiceSingleSection6 from '../../components/ServiceSingleSection/service6';

const ServiceSinglePage6 = () => {
  
    return (
        <>
            <SEO
                title="Staff & Leadership Training in Kerala | Befirst HR & Management Consultancy"
                description="Boost your team’s productivity and leadership skills with Befirst HR & Management Consultancy. Expert corporate training in Kerala for companies, CEOs, managers, and startups. Serving Kozhikode, Kochi & Trivandrum."
                keywords={"staff training Kerala, leadership training Kerala, corporate training Kozhikode, management training Kochi, executive coaching Trivandrum, soft skills training Kerala, team building Kerala, C-suite leadership training, business training Kerala, HR consultancy Kozhikode"}
            />
            <Navbar2 />
            <PageTitle pageTitle={'Staff & Leadership Training'} pagesub={'Services'} serviceTitle={'Staff & Leadership Training'} />
            <ServiceSingleSection6 />
            <Footer />
            <Scrollbar />
        </>
    );
};

export default ServiceSinglePage6;

