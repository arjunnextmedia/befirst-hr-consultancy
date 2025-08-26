// import React, { Fragment } from 'react';
import Navbar2 from '../../components/Navbar2';
import PageTitle from '../../components/pageTitles/service-pagetitle'
// import ServiceSingleSection from '../../components/ServiceSingleSection';
import Footer from '../../components/footer';
import Scrollbar from '../../components/scrollbar';
// import { useParams, Link } from 'react-router-dom';
// import { service } from '../../components/data/dummyService';
import SEO from '../../components/seo';
import ServiceSingleSection1 from '../../components/ServiceSingleSection/service1';

const ServiceSinglePage1 = () => {
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
            <PageTitle pageTitle={'HR Consulting Services'} pagesub={'Services'} serviceTitle={'HR Consulting Services'} />
            <ServiceSingleSection1  />
            <Footer />
            <Scrollbar />
        </>
    );
};

export default ServiceSinglePage1;

// const styles = {
//     container: {
//         minHeight: '60vh',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         padding: '20px',
//         background: '#f8f9fa',
//     },
//     card: {
//         background: '#fff',
//         padding: '40px',
//         borderRadius: '10px',
//         boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
//         maxWidth: '500px',
//         textAlign: 'center',
//     },
//     heading: {
//         fontSize: '24px',
//         marginBottom: '15px',
//         color: '#dc3545',
//     },
//     text: {
//         fontSize: '16px',
//         color: '#555',
//         marginBottom: '25px',
//     },
//     button: {
//         display: 'inline-block',
//         padding: '10px 20px',
//         background: '#007bff',
//         color: '#fff',
//         borderRadius: '5px',
//         textDecoration: 'none',
//         transition: 'background 0.3s ease',
//     },
// };
