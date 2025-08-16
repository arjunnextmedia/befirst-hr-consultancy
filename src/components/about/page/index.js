import React from 'react';
import { Link } from 'react-router-dom';
import abimg from '../../../images/home/about-img.jpg';
import spimg1 from '../../../images/ab-shape-1.png';
import spimg2 from '../../../images/ab-shape-2.png';
import spicon from '../../../images/icon/badge.svg';
import sign from '../../../images/signeture.png';

const AboutSection = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    return (
        <section className={`wpo-about-section ${props.abClass}`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="wpo-about-wrap">
                            <div className="wpo-about-img">
                                <img src={abimg} alt="" />
                                <div className="wpo-ab-shape-1"><img src={spimg1} alt="" /></div>
                                <div className="wpo-ab-shape-2"><img src={spimg2} alt="" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="wpo-about-text">
                            <div className="wpo-about-icon">
                                <div className="icon">
                                    <img src={spicon} alt="" />
                                </div>
                            </div>
                            <div className="wpo-about-icon-content">
                                <h2>About Us</h2>
                                <h5>Building Stronger Businesses Through Smarter People Management</h5>
                                <p>Befirst HR & Management Consultancy is a leading HR consultancy in Calicut, Kerala, dedicated to helping SMEs in Kerala and India build, grow, and scale with the power of the right people.</p>
                                <p>We believe that people are the backbone of every successful business. Our mission is simple — equip growing businesses with world-class HR solutions, recruitment services, training, and compliance support so they can focus on what they do best: running and expanding their business.</p>
                                
                                <h5>The Idea Behind Befirst HRM</h5>
                                <p>The concept of Befirst HR & Management Consultancy was born out of a clear gap in the market: while Kerala is home to thousands of ambitious entrepreneurs and fast-growing SMEs, most struggle to find, manage, and retain the right talent.</p>
                                <p>Without the right HR systems, policies, and skilled people, even the most promising businesses hit growth roadblocks. Our goal is to bridge that gap — bringing corporate-grade HR expertise to small and medium-sized enterprises at a scale and cost that works for them.</p>
                                
                                <h5>40 Years of Proven Business Expertise</h5>
                                <p>At the heart of Befirst HRM is Mr. Abdurahman, whose 40 years of experience in business management, operations, and entrepreneurship form the backbone of our approach.</p>
                                <ul>
                                    <li>His career spans multiple industries, giving us a 360-degree understanding of business challenges.</li>
                                    <li>His insights help us design HR strategies that deliver measurable results in the real world.</li>
                                    <li>This legacy ensures we don’t just offer HR services — we offer business growth solutions.</li>
                                </ul>

                                <h5>What Befirst HRM Stands For</h5>
                                <ul>
                                    <li><strong>Integrity:</strong> Transparent, ethical, and committed to your success.</li>
                                    <li><strong>Excellence:</strong> Delivering corporate-standard HR solutions to SMEs.</li>
                                    <li><strong>Innovation:</strong> Bringing modern HR technology and best practices to local businesses.</li>
                                    <li><strong>Partnership:</strong> We don’t work for you, we work with you.</li>
                                </ul>

                                <h5>The Impact We Create</h5>
                                <ul>
                                    <li>Reduced employee turnover by up to 40% with structured hiring & retention plans.</li>
                                    <li>Improved productivity by 20–30% through training & process optimisation.</li>
                                    <li>Full compliance with Kerala & Indian labour laws, avoiding legal risks.</li>
                                    <li>Faster hiring cycles, reducing vacancy impact on business performance.</li>
                                </ul>

                                <h5>Why Choose Befirst HRM</h5>
                                <ul>
                                    <li>Local roots, global perspective – understanding Kerala’s business culture while applying proven HR practices from around the world.</li>
                                    <li>End-to-end HR solutions – from recruitment to payroll, compliance, and training.</li>
                                    <li>SME-focused approach – tailored to small & mid-sized business budgets and goals.</li>
                                    <li>Proven track record – decades of business experience turned into actionable HR strategies.</li>
                                </ul>

                                <h5>Ready to Build Your Dream Team?</h5>
                                <p>Whether you’re a startup in Kozhikode or an established SME in Kerala, we’ll help you attract, manage, and retain the right people so your business can grow faster and scale sustainably.</p>
                                <p>📞 Call us now or book your free consultation to see how Befirst HRM can transform your business.</p>

                                {/* <div className="signeture">
                                    <span><img src={sign} alt="" /></span>
                                    <p>Robert William, CEO</p>
                                </div> */}
                                {/* <Link onClick={ClickHandler} to="/about" className="btn theme-btn">More About</Link> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
