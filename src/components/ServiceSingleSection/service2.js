import React from 'react'
import ServiceSingleSidebar from './service-single-components/sidebar'
// import Solutions from './service-single-components/solution'
// import Benefits from './service-single-components/benefits'
// import WhyChoose from './service-single-components/whyChooseUs'
import ServiceFAQ2 from './service-single-components/serviceFaq2'
import WhyChoose2 from './service-single-components/whyChooseUs2'
import Solutions2 from './service-single-components/solution2'
import ctsImg from "../../images/services/service-cta-2.jpg"



const ServiceSingleSection2 = () => {
    const bulletList = {
        paddingLeft: "20px",
        marginBottom: "15px",
        listStyleType: "disc",
    };

    const bulletItem = {
        fontSize: "20px",
        lineHeight: "1.8",
        textAlign: "start",
        color: "#495057",
        fontWeight: "500",
        marginBottom: "0.5rem",
    };
    return (
        <section className="wpo-service-single-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12">
                        <div className="wpo-service-single-wrap">
                            <div className="wpo-service-single-content">
                                {/* <img src={service.images[0]} alt="" /> */}
                                <div className="wpo-service-single-content-des">
                                    <h2>Human Capital Development Services</h2>
                                    <p>At |<strong> Befirst HR & Management Consultancy, </strong> we specialise in helping businesses, entrepreneurs, and leaders in Kerala unlock the full potential of their workforce. From new employee onboarding to long-term retention strategies, our <strong> Human Capital Development solutions </strong>  empower companies to build a culture that retains talent, boosts productivity, and supports sustainable business growth.</p>
                                </div>

                                <div>
                                    <h2>Why Human Capital Development Matters</h2>
                                    <p>
                                        In today’s competitive business landscape, your people are your most asset. Whether you’re a startup in Kochi, an SME in Kozhikode, or a large enterprise in Trivandrum, retaining skilled employees and aligning them with your business goals is key to long-term success. Our expert HR consultants design customised frameworks to:
                                    </p>

                                    <ul style={bulletList}>
                                        <li style={bulletItem}>
                                            Increase employee engagement
                                        </li>
                                        <li style={bulletItem}>
                                            Reduce turnover
                                        </li>
                                        <li style={bulletItem}>
                                            Align HR strategies with business objectives
                                        </li>
                                        <li style={bulletItem}>
                                            Enhance leadership effectiveness
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <Solutions2 />
                            <WhyChoose2 />
                            <ServiceFAQ2 />
                        </div>
                    </div>
                    <ServiceSingleSidebar  CTAIMG={ctsImg}/>

                </div>
            </div>
        </section>
    )
}

export default ServiceSingleSection2;