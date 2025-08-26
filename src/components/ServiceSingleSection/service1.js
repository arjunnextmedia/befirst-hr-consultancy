import React from 'react'
import ServiceSingleSidebar from './service-single-components/sidebar'

import ServiceFAQ2 from './service-single-components/serviceFaq2'
import WhyChoose2 from './service-single-components/whyChooseUs2'
import Solutions1 from './service-single-components/solution'
import WhyChoose from './service-single-components/whyChooseUs'
import ServiceFAQ from './service-single-components/serviceFaq'
import ctsImg from "../../images/services/service-cta-1.jpg"



const ServiceSingleSection1 = () => {
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
                                    <h2>HR Consulting Services </h2>
                                    <p>
At <strong> Befirst HR & Management Consultancy, </strong>  we specialize in creating robust HR frameworks that empower businesses to operate smoothly, attract top talent, and maintain compliance with legal and organizational standards. Whether you are a <strong> startup finding your footing, </strong> an <strong> SME scaling up, </strong> or a <strong> corporate aiming for efficiency, </strong>  our HR solutions are tailored to your growth stage and long-term vision.                                       
 </p>
                                    <p>
We understand the unique HR challenges faced by <strong> Kerala-based entrepreneurs, companies, and leaders, </strong> and we design systems that balance performance, compliance, and employee satisfaction.
 </p>
                                </div>
                            </div>
                            <Solutions1 />
                            <WhyChoose />
                            <ServiceFAQ />

                            {/* <WhyChoose/>
                            <Benefits /> */}
                        </div>
                    </div>
                    <ServiceSingleSidebar  CTAIMG={ctsImg}/>

                </div>
            </div>
        </section>
    )
}

export default ServiceSingleSection1;