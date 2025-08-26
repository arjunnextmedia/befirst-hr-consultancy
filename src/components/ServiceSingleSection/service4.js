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
import ctsImg from "../../images/services/service-cta-4.jpg"



const ServiceSingleSection4 = () => {
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
                                    <h2>Payroll Setup, Management & Training Services </h2>
                                    <p>
                                        Running a business in Kerala means handling people, payments, and processes seamlessly. At <strong> Befirst HR & Management Consultancy, </strong> we specialize in <strong> Payroll Setup, Payroll Management, </strong> and  <strong> Payroll Training </strong>  for businesses of all sizes — from startups in Kozhikode to established enterprises in Kochi and Trivandrum.
                                    </p>
                                    <p>
                                        Our payroll solutions help you:
                                    </p>
                                    <ul style={bulletList}>
                                        <li style={bulletItem}>
                                            Automate salary processing
                                        </li>
                                        <li style={bulletItem}>
                                            Stay 100% compliant with Kerala labour laws
                                        </li>
                                        <li style={bulletItem}>
                                            Save time and avoid costly payroll errors
                                        </li>
                                        <li style={bulletItem}>
                                            Train your HR and finance teams to manage payroll confidently
                                        </li>
                                    </ul>
                                    <p>
                                        Whether you’re an <strong> entrepreneur, CEO, C-suite leader, </strong>  or <strong> business owner, </strong>  we provide end-to-end payroll services designed to boost efficiency and keep your workforce satisfied.
                                    </p>


  <h2>Our Payroll Services </h2>
                                    <h3>1. Payroll Setup</h3>
                                    <ul style={bulletList}>
                                        <li style={bulletItem}>
                                            Designing a payroll system tailored to your business structure
                                        </li>
                                        <li style={bulletItem}>
                                            Setting up salary structures, deductions, and allowances
                                        </li>
                                        <li style={bulletItem}>
                                            Integrating statutory compliances (EPF, ESI, Professional Tax)
                                        </li>
                                        <li style={bulletItem}>
                                            Choosing the right payroll software or tools for your needs
                                        </li>
                                    </ul>
                                    <h3>2. Payroll Management</h3>
                                    <ul style={bulletList}>
                                        <li style={bulletItem}>
                                           Monthly salary calculation and disbursement
                                        </li>
                                        <li style={bulletItem}>
                                           Tax computation and TDS filing
                                        </li>
                                        <li style={bulletItem}>
                                          Leave and attendance integration
                                        </li>
                                        <li style={bulletItem}>
                                            Employee payslip generation
                                        </li>
                                        <li style={bulletItem}>
                                            Compliance reporting and documentation
                                        </li>
                                    </ul>
                                    <h3>3. Payroll Training</h3>
                                    <ul style={bulletList}>
                                        <li style={bulletItem}>
                                           Hands-on training for HR, finance, and admin teams
                                        </li>
                                        <li style={bulletItem}>
                                            Payroll software training (customized per your chosen platform)
                                        </li>
                                        <li style={bulletItem}>
                                            Kerala-specific payroll compliance and best practices
                                        </li>
                                        <li style={bulletItem}>
                                           Troubleshooting common payroll issues
                                        </li>
                                    </ul>

                                </div>

                               
                            </div>
                            <Solutions4 />
                            {/* <WhyChoose2 /> */}
                            <ServiceFAQ4 />
                        </div>
                    </div>
                    <ServiceSingleSidebar CTAIMG={ctsImg} />

                </div>
            </div>
        </section>
    )
}

export default ServiceSingleSection4;