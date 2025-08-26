// import React, { Fragment } from 'react';
import Navbar2 from '../../components/Navbar2';
import PageTitle from '../../components/pageTitles/service-pagetitle'
// import ServiceSingleSection from '../../components/ServiceSingleSection';
import Footer from '../../components/footer';
import Scrollbar from '../../components/scrollbar';
// import { useParams, Link } from 'react-router-dom';
// import { service } from '../../components/data/dummyService';
import SEO from '../../components/seo';
// import ServiceSingleSection2 from '../../components/ServiceSingleSection/service2';
import ServiceSingleSection3 from '../../components/ServiceSingleSection/service3';
import ServiceSingleSection4 from '../../components/ServiceSingleSection/service4';
import ServiceSingleSection5 from '../../components/ServiceSingleSection/service5';

const ServiceSinglePage5 = () => {
    // const { id } = useParams();
    // const serviceData = service.find(item => item.id === parseInt(id));

    // if (!serviceData) {
    //     return (
    //         <>
    //             <Navbar2 />
    //             <div style={styles.container}>
    //                 <div style={styles.card}>
    //                     <h2 style={styles.heading}>🚫 Service Not Found</h2>
    //                     <p style={styles.text}>
    //                         The service you’re looking for doesn’t exist or may have been removed.
    //                     </p>
    //                     <Link to="/" style={styles.button}>
    //                         Back to Home
    //                     </Link>
    //                 </div>
    //             </div>
    //             <Footer />
    //             <Scrollbar />
    //         </>
    //     );
    // }

    return (
        <>
            <SEO
                title="Human Capital Development Services in Kerala | Befirst HR & Management Consultancy"
                description="Boost employee engagement, retention, and productivity with Befirst HR & Management Consultancy’s Human Capital Development services in Kerala. Serving Kozhikode, Kochi, Trivandrum & beyond."
                keywords={"human capital development Kerala, employee engagement Kerala, HR consultancy Kozhikode, HR consulting Kochi, HR strategy Kerala, retention strategy Kerala, employee orientation Kerala, HR solutions Trivandrum, business HR consultancy Kerala, leadership HR services Kerala"}
            />
            <Navbar2 />
            <PageTitle pageTitle={'Recrutment Services'} pagesub={'Services'} serviceTitle={'Recrutment Services'} />
            <ServiceSingleSection5 />
            <Footer />
            <Scrollbar />
        </>
    );
};

export default ServiceSinglePage5;

