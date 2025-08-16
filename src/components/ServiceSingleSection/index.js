import React from 'react'
import ServiceSingleSidebar from './service-single-components/sidebar'
import Solutions from './service-single-components/solution'
import Benefits from './service-single-components/benefits'
import WhyChoose from './service-single-components/whyChooseUs'



const ServiceSingleSection = ({ service }) => {
    return (
        <section className="wpo-service-single-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12">
                        <div className="wpo-service-single-wrap">
                            <div className="wpo-service-single-content">
                                <img src={service.images[0]} alt="" />
                                <div className="wpo-service-single-content-des">
                                    <h2>{service.title}</h2>
                                    <p>{service.body}</p>
                                </div>
                            </div>
                            <Solutions pointTitle={service.pointTitle} points={service.points} />                            
                            <WhyChoose/>
                            <Benefits />
                        </div>
                    </div>
                    <ServiceSingleSidebar />

                </div>
            </div>
        </section>
    )
}

export default ServiceSingleSection;