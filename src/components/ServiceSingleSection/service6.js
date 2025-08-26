import React from 'react'
import ServiceSingleSidebar from './service-single-components/sidebar'
import ServiceFAQ6 from './service-single-components/serviceFaq6'
import Solutions6 from './service-single-components/solution6'
import ctsImg from "../../images/services/service-cta-4.jpg"



const ServiceSingleSection6 = () => {
    const bulletList = {
        paddingLeft: "30px",
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
                                    <h2>Staff & Leadership Training </h2>
                                    <p>
                                        At <strong> Befirst HR & Management Consultancy, </strong> we believe that great businesses are built by great people. Our <strong> Staff & Leadership Training programs </strong> are designed to empower teams, inspire leaders, and align workplace skills with your organization’s growth goals.
                                    </p>
                                    <p>
                                        Whether you are a <strong> startup founder in Kochi, </strong> a <strong> CEO in Kozhikode, </strong>  or a <strong>  corporate manager in Trivandrum, </strong>  our expert-led training sessions provide practical tools and strategies that deliver measurable results.
                                    </p>

                                    <h2>Why Staff & Leadership Training Matters </h2>
                                    <p>
                                        In today’s competitive business environment, companies need <strong>  well-trained staff and strong leaders  </strong>to stay ahead. Investing in professional training helps you:
                                    </p>
                                    <ul style={bulletList}>
                                        <li style={bulletItem}>
                                            Improve employee productivity and engagement
                                        </li>
                                        <li style={bulletItem}>
                                            Develop decision-making and problem-solving skills
                                        </li>
                                        <li style={bulletItem}>
                                            Build strong team collaboration
                                        </li>
                                        <li style={bulletItem}>
                                            Reduce turnover and improve retention
                                        </li>
                                        <li style={bulletItem}>
                                            Prepare future leaders for key roles
                                        </li>
                                    </ul>


                                    <h2>Our Training Programs</h2>
                                    <p>
                                        We offer tailored programs that fit your industry, team size, and business objectives:
                                    </p>
                                    <h3>1. Staff Training & Development</h3>
                                    <ul style={bulletList}>
                                        <li style={bulletItem}>
                                            Communication & Soft Skills
                                        </li>
                                        <li style={bulletItem}>
                                            Customer Service Excellence
                                        </li>
                                        <li style={bulletItem}>
                                            Time & Task Management
                                        </li>
                                        <li style={bulletItem}>
                                            Teamwork & Collaboration
                                        </li>
                                    </ul>
                                    <h3>2. Leadership Development</h3>
                                    <ul style={bulletList}>
                                        <li style={bulletItem}>
                                            C-Suite & Executive Leadership Skills
                                        </li>
                                        <li style={bulletItem}>
                                            Decision-Making & Strategic Thinking
                                        </li>
                                        <li style={bulletItem}>
                                            Emotional Intelligence for Leaders
                                        </li>
                                        <li style={bulletItem}>
                                            Conflict Resolution & People Management
                                        </li>
                                    </ul>

                                    <h3>3. Specialized Business Workshops</h3>
                                    <ul style={bulletList}>
                                        <li style={bulletItem}>
                                            Change Management
                                        </li>
                                        <li style={bulletItem}>
                                            Goal Setting & Performance Coaching
                                        </li>
                                        <li style={bulletItem}>
                                            Business Ethics & Workplace Culture
                                        </li>

                                    </ul>

                                </div>

                            </div>
                            <Solutions6 />
                            {/* <RecruitmentProcess/> */}


                            {/* <WhyChoose2 /> */}
                            <ServiceFAQ6 />
                        </div>
                    </div>
                    <ServiceSingleSidebar CTAIMG={ctsImg}/>

                </div>
            </div>
        </section>
    )
}

export default ServiceSingleSection6;