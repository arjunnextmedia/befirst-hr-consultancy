import React from 'react'
import ServiceSingleSidebar from './service-single-components/sidebar'
// import Solutions from './service-single-components/solution'
// import Benefits from './service-single-components/benefits'
// import WhyChoose from './service-single-components/whyChooseUs'
import ServiceFAQ2 from './service-single-components/serviceFaq2'
import WhyChoose2 from './service-single-components/whyChooseUs2'
import Solutions2 from './service-single-components/solution2'
import ServiceFAQ3 from './service-single-components/serviceFaq3'
import Solutions3 from './service-single-components/solution3'
import Solutions4 from './service-single-components/solution4'
import ServiceFAQ4 from './service-single-components/serviceFaq4'
import ServiceFAQ5 from './service-single-components/serviceFaq5'
import Solutions5 from './service-single-components/solution5'
import RecruitmentProcess from './service-single-components/RecruitmentProcess'
import ctsImg from "../../images/services/service-cta-4.jpg"



const ServiceSingleSection5 = () => {
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
                                    <h2>Recruitment Services </h2>
                                    <p>
                                        At Befirst HR & Management Consultancy, we understand that the right people make the biggest difference in your business success. Whether you’re a startup in Kozhikode, a growing SME in Kochi, a corporate office in India, or a global business in the GCC our recruitment services help you find top talent that fits your company’s culture, goals, and growth plans.
                                    </p>
                                    <p>
                                        We don’t just fill positions — <strong> we build winning teams. </strong>
                                    </p>


                                </div>


                            </div>
                            <Solutions5 />
                            <RecruitmentProcess/>
                            <div className="wpo-service-single-content-des">
                                <h2>Industries We Serve</h2>
                                <ul style={bulletList}>
                                    <li style={bulletItem}>
                                        IT & Software Development
                                    </li>
                                    <li style={bulletItem}>
                                        Manufacturing & Engineering
                                    </li>
                                    <li style={bulletItem}>
                                        Healthcare & Pharmaceuticals
                                    </li>
                                    <li style={bulletItem}>
                                        Hospitality & Tourism
                                    </li>
                                    <li style={bulletItem}>
                                        Finance & Banking
                                    </li>
                                    <li style={bulletItem}>
                                        Education & Training
                                    </li>
                                    <li style={bulletItem}>
                                        Retail & E-commerce
                                    </li>
                                </ul>
                            </div>

                            {/* <WhyChoose2 /> */}
                            <ServiceFAQ5 />
                        </div>
                    </div>
                    <ServiceSingleSidebar CTAIMG={ctsImg} />

                </div>
            </div>
        </section>
    )
}

export default ServiceSingleSection5;