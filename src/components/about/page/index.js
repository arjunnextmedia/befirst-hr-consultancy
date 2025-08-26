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

    const impactStats = [
        { number: "40%", label: "Reduced Employee Turnover", description: "Through structured hiring & retention strategies" },
        { number: "30%", label: "Improved Productivity", description: "Via training & process optimization" },
        { number: "100%", label: "Legal Compliance", description: "Full adherence to Kerala & Indian labour laws" },
        { number: "50%", label: "Faster Hiring", description: "Reduced vacancy impact on business performance" }
    ];

    const coreValues = [
        {
            title: "Integrity",
            description: "Transparent, ethical practices committed to your success",
            icon: "🤝"
        },
        {
            title: "Excellence",
            description: "Corporate-standard HR solutions tailored for SMEs",
            icon: "⭐"
        },
        {
            title: "Innovation",
            description: "Modern HR technology and global best practices",
            icon: "🚀"
        },
        {
            title: "Partnership",
            description: "We don't work for you, we work with you",
            icon: "🤝"
        }
    ];

    const whyChooseUs = [
        {
            title: "Local roots, global perspective",
            description: "Understanding Kerala’s business culture while applying proven HR practices from around the world"
        },
        {
            title: "End-to-end HR solutions",
            description: "From recruitment to payroll, compliance, and training"
        },
        {
            title: "SME-Focused Approach",
            description: "Tailored solutions designed for small & mid-sized business budgets and goals"
        },
        {
            title: "Proven Track Record",
            description: "Decades of business experience translated into actionable HR strategies"
        }
    ];


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
        <section className={`wpo-about-section ${props.abClass}`}>
            <div className="container">
                {/* Hero Section */}
                <div className="row align-items-start" style={{ marginBottom: '60px' }}>
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="wpo-about-wrap">
                            <div className="wpo-about-img">
                                <img src={abimg} alt="Befirst HRM Consultancy" />
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
                                <span style={{
                                    color: '#007bff',
                                    fontWeight: '600',
                                    fontSize: '1rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px'
                                }}>About Befirst HRM</span>
                                <h2 style={{
                                    fontSize: '2.5rem',
                                    fontWeight: '700',
                                    lineHeight: '1.2',
                                    margin: '15px 0 20px 0',
                                    color: '#2c3e50'
                                }}>Building Stronger Businesses Through Smarter People Management</h2>
                                <p style={{
                                    fontSize: '20px',
                                    lineHeight: '1.7',
                                    color: '#6c757d',
                                    marginBottom: '20px'
                                }}>
                                    Leading HR consultancy in Calicut, Kerala, dedicated to helping SMEs across Kerala and India build, grow, and scale with the power of the right people.
                                </p>
                                <p style={{
                                    fontSize: '20px',
                                    lineHeight: '1.7',
                                    color: '#6c757d'
                                }}>
                                    Befirst HR & Management Consultancy is a <strong> leading HR consultancy in Calicut, Kerala, </strong>  dedicated to helping <strong> SMEs in Kerala and India </strong>  build, grow, and scale with the power of the right people.
                                </p>
                                <p style={{
                                    fontSize: '20px',
                                    lineHeight: '1.7',
                                    color: '#6c757d'
                                }}>
                                    We believe that <strongh> people are the backbone of every successful business. </strongh> Our mission is simple — equip growing businesses with world-class <strong> HR solutions, recruitment services, training, and compliance support </strong>  so they can focus on what they do best: running and expanding their business.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* The Story Behind Befirst */}
                {/* <div className="row" style={{ marginBottom: '60px' }}>
                    <div className="col-12">
                        <div style={{
                            backgroundColor: '#f0f5fa',
                            padding: '50px 40px',
                            borderRadius: '15px',
                            border: '1px solid #e9ecef'
                        }}>
                            <div className="text-center" style={{ marginBottom: '40px' }}>
                                <h3 style={{
                                    fontSize: '2.2rem',
                                    fontWeight: '600',
                                    color: '#2c3e50',
                                    marginBottom: '15px'
                                }}>The Idea Behind Befirst HRM</h3>
                                <div style={{
                                    width: '60px',
                                    height: '3px',
                                    backgroundColor: '#007bff',
                                    margin: '0 auto'
                                }}></div>
                            </div>

                            <div className="row">
                                <div className="col-lg-12 mx-auto">
                                    <p style={{
                                        fontSize: '1.1rem',
                                        lineHeight: '1.8',
                                        textAlign: 'start',
                                        color: '#495057',
                                        marginBottom: '30px'
                                    }}>
                                        The concept of Befirst HR & Management Consultancy was born out of a clear gap in the market: while Kerala is home to thousands of ambitious entrepreneurs and fast-growing SMEs, <strong> most struggle to find, manage, and retain the right talent.  </strong>
                                    </p>
                                    <p style={{
                                        fontSize: '1.1rem',
                                        lineHeight: '1.8',
                                        textAlign: 'start',
                                        color: '#495057',
                                        fontWeight: '500'
                                    }}>
                                        Without the right HR systems, policies, and skilled people, even the most promising businesses hit growth roadblocks. Our goal is to <strong> bridge that gap </strong> — bringing <strong> corporate-grade HR expertise </strong>  to small and medium-sized enterprises at a scale and cost that works for them.                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

                {/* Leadership Section */}
                {/* <div className="row" style={{ marginBottom: '80px' }}>
                    <div className="col-12">
                        <div className="text-center" style={{ marginBottom: '50px' }}>
                            <h2 style={{
                                fontSize: '2.5rem',
                                fontWeight: '700',
                                color: '#2c3e50',
                                marginBottom: '20px',
                                lineHeight: '1.3'
                            }}>40 Years of Proven Business Expertise</h2>
                            <div style={{
                                width: '80px',
                                height: '4px',
                                backgroundColor: '#007bff',
                                margin: '0 auto 25px auto',
                                borderRadius: '2px'
                            }}></div>
                            <p style={{
                                fontSize: '1.2rem',
                                lineHeight: '1.8',
                                color: '#495057',
                                maxWidth: '800px',
                                margin: '0 auto',
                                padding: '0 20px'
                            }}>
                                At the heart of Befirst HRM is <strong style={{ color: '#0062cc' }}>Mr. Abdurahman</strong>, whose four decades of experience in business management, operations, and entrepreneurship form the backbone of our approach.
                            </p>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-lg-12 col-xl-10">
                                <div style={{
                                    backgroundColor: '#fff',
                                    padding: '40px 30px',
                                    borderRadius: '15px',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    border: '1px solid #e9ecef'
                                }}>
                                    <div className="row g-4">
                                        <div className="col-md-4">
                                            <div style={{
                                                backgroundColor: '#f8faff',
                                                padding: '30px 20px',
                                                borderRadius: '12px',
                                                height: '100%',
                                                borderLeft: '4px solid #007bff',
                                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                                border: '1px solid #e3f2fd'
                                            }} className="hover-effect">
                                                <div style={{
                                                    width: '55px',
                                                    height: '55px',
                                                    backgroundColor: '#e6f0ff',
                                                    borderRadius: '50%',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    margin: '0 auto 20px auto',
                                                    boxShadow: '0 4px 15px rgba(0,123,255,0.1)'
                                                }}>
                                                    <i className="bi bi-360" style={{ fontSize: '1.6rem', color: '#007bff' }}></i>
                                                </div>
                                                <h4 style={{
                                                    color: '#0062cc',
                                                    marginBottom: '15px',
                                                    fontWeight: '600',
                                                    textAlign: 'center',
                                                    fontSize: '1.3rem'
                                                }}>360° Business Perspective</h4>
                                                <p style={{
                                                    fontSize: '1rem',
                                                    color: '#6c757d',
                                                    margin: '0',
                                                    textAlign: 'center',
                                                    lineHeight: '1.7'
                                                }}>
                                                    Career spanning multiple industries providing comprehensive understanding of business challenges across sectors.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <div style={{
                                                backgroundColor: '#f8faff',
                                                padding: '30px 20px',
                                                borderRadius: '12px',
                                                height: '100%',
                                                borderLeft: '4px solid #007bff',
                                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                                border: '1px solid #e3f2fd'
                                            }} className="hover-effect">
                                                <div style={{
                                                    width: '55px',
                                                    height: '55px',
                                                    backgroundColor: '#e6f0ff',
                                                    borderRadius: '50%',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    margin: '0 auto 20px auto',
                                                    boxShadow: '0 4px 15px rgba(0,123,255,0.1)'
                                                }}>
                                                    <i className="bi bi-graph-up-arrow" style={{ fontSize: '1.6rem', color: '#007bff' }}></i>
                                                </div>
                                                <h4 style={{
                                                    color: '#0062cc',
                                                    marginBottom: '15px',
                                                    fontWeight: '600',
                                                    textAlign: 'center',
                                                    fontSize: '1.3rem'
                                                }}>Real-World Results</h4>
                                                <p style={{
                                                    fontSize: '1rem',
                                                    color: '#6c757d',
                                                    margin: '0',
                                                    textAlign: 'center',
                                                    lineHeight: '1.7'
                                                }}>
                                                    Actionable insights that create HR strategies delivering measurable business outcomes.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <div style={{
                                                backgroundColor: '#f8faff',
                                                padding: '30px 20px',
                                                borderRadius: '12px',
                                                height: '100%',
                                                borderLeft: '4px solid #007bff',
                                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                                border: '1px solid #e3f2fd'
                                            }} className="hover-effect">
                                                <div style={{
                                                    width: '55px',
                                                    height: '55px',
                                                    backgroundColor: '#e6f0ff',
                                                    borderRadius: '50%',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    margin: '0 auto 20px auto',
                                                    boxShadow: '0 4px 15px rgba(0,123,255,0.1)'
                                                }}>
                                                    <i className="bi bi-lightbulb" style={{ fontSize: '1.6rem', color: '#007bff' }}></i>
                                                </div>
                                                <h4 style={{
                                                    color: '#0062cc',
                                                    marginBottom: '15px',
                                                    fontWeight: '600',
                                                    textAlign: 'center',
                                                    fontSize: '1.3rem'
                                                }}>Growth Solutions</h4>
                                                <p style={{
                                                    fontSize: '1rem',
                                                    color: '#6c757d',
                                                    margin: '0',
                                                    textAlign: 'center',
                                                    lineHeight: '1.7'
                                                }}>
                                                    Beyond HR services — comprehensive strategies that drive sustainable business growth.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div style={{
                                        position: 'absolute',
                                        bottom: '0',
                                        left: '0',
                                        right: '0',
                                        textAlign: 'center',
                                        padding: '25px 0',
                                        fontSize: '1rem',
                                        color: '#6c757d',
                                        fontStyle: 'italic',
                                        backgroundColor: 'rgba(240, 245, 250, 0.3)',
                                        borderTop: '1px solid #e9ecef'
                                    }}>
                                        This legacy ensures we don't just offer HR services — we offer transformational business solutions.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="row" style={{ marginBottom: '80px' }}>
                    <div className="col-12">
                        <div style={{
                            backgroundColor: '#f0f5fa',
                            padding: '50px 40px',
                            borderRadius: '15px',
                            border: '1px solid #e9ecef',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            {/* The Idea Behind Befirst HRM section */}
                            <div className="text-center" style={{ marginBottom: '40px' }}>
                                <h3 style={{
                                    fontSize: '2.5rem',
                                    fontWeight: '600',
                                    color: '#2c3e50',
                                    marginBottom: '15px',
                                    lineHeight: '1.3'
                                }}>The Idea Behind Befirst HRM</h3>
                                <div style={{
                                    width: '60px',
                                    height: '3px',
                                    backgroundColor: '#007bff',
                                    margin: '0 auto',
                                    borderRadius: '2px'
                                }}></div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-lg-10 mx-auto">
                                    <div style={{
                                        backgroundColor: '#fff',
                                        padding: '35px 30px',
                                        borderRadius: '12px',
                                        boxShadow: '0 8px 25px rgba(0,0,0,0.04)',
                                        border: '1px solid #e3f2fd'
                                    }}>
                                        <p style={{
                                            fontSize: '20px',
                                            lineHeight: '1.8',
                                            textAlign: 'start',
                                            color: '#495057',
                                            marginBottom: '25px'
                                        }}>
                                            The concept of Befirst HR & Management Consultancy was born out of a clear gap in the market: while Kerala is home to thousands of ambitious entrepreneurs and fast-growing SMEs, <strong style={{ color: '#0062cc' }}>most struggle to find, manage, and retain the right talent.</strong>
                                        </p>
                                        <p style={{
                                            fontSize: '20px',
                                            lineHeight: '1.8',
                                            textAlign: 'start',
                                            color: '#495057',
                                            fontWeight: '500',
                                            margin: '0'
                                        }}>
                                            Without the right HR systems, policies, and skilled people, even the most promising businesses hit growth roadblocks. Our goal is to <strong style={{ color: '#0062cc' }}>bridge that gap</strong> — bringing <strong style={{ color: '#0062cc' }}>corporate-grade HR expertise</strong> to small and medium-sized enterprises at a scale and cost that works for them.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* 40 Years of Proven Business Expertise section */}
                            <div className="text-center" style={{ marginBottom: '40px' }}>
                                <h3 style={{
                                    fontSize: '2.5rem',
                                    fontWeight: '600',
                                    color: '#2c3e50',
                                    marginBottom: '15px',
                                    marginTop: '40px',
                                    lineHeight: '1.3'
                                }}>40 Years of Proven Business Expertise</h3>
                                <div style={{
                                    width: '60px',
                                    height: '3px',
                                    backgroundColor: '#007bff',
                                    margin: '0 auto',
                                    borderRadius: '2px'
                                }}></div>
                            </div>

                            <div className="row justify-content-center">
                                <div className="col-lg-10 mx-auto">
                                    <div style={{
                                        backgroundColor: '#fff',
                                        padding: '35px 30px',
                                        borderRadius: '12px',
                                        boxShadow: '0 8px 25px rgba(0,0,0,0.04)',
                                        border: '1px solid #e3f2fd'
                                    }}>
                                        <p style={{
                                            fontSize: '20px',
                                            lineHeight: '1.8',
                                            textAlign: 'start',
                                            color: '#495057',
                                            marginBottom: '25px'
                                        }}>
                                            At the heart of Befirst HRM is <strong style={{ color: '#0062cc' }}>Mr. Abdurahman</strong>, whose four decades of experience in business management, operations, and entrepreneurship form the backbone of our approach.
                                        </p>
                                        <ul style={bulletList}>
                                            <li style={bulletItem}>
                                                His career spans multiple industries, giving us a 360-degree understanding of business challenges.
                                            </li>
                                            <li style={bulletItem}>
                                                His insights help us design HR strategies that don’t just work on paper but deliver measurable results in the real world.
                                            </li>
                                            <li style={{ ...bulletItem, marginBottom: 0 }}>
                                                This legacy ensures we don’t just offer HR services — we offer business growth solutions.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* Decorative background element */}
                            <div style={{
                                position: 'absolute',
                                top: '-50px',
                                right: '-50px',
                                width: '150px',
                                height: '150px',
                                backgroundColor: 'rgba(0, 123, 255, 0.05)',
                                borderRadius: '50%',
                                zIndex: '0'
                            }}></div>
                            <div style={{
                                position: 'absolute',
                                bottom: '-30px',
                                left: '-30px',
                                width: '100px',
                                height: '100px',
                                backgroundColor: 'rgba(0, 123, 255, 0.03)',
                                borderRadius: '50%',
                                zIndex: '0'
                            }}></div>
                            {/* Decorative background element */}
                            <div style={{
                                position: 'absolute',
                                top: '-50px',
                                right: '-50px',
                                width: '150px',
                                height: '150px',
                                backgroundColor: 'rgba(0, 123, 255, 0.05)',
                                borderRadius: '50%',
                                zIndex: '0'
                            }}></div>
                            <div style={{
                                position: 'absolute',
                                bottom: '-30px',
                                left: '-30px',
                                width: '100px',
                                height: '100px',
                                backgroundColor: 'rgba(0, 123, 255, 0.03)',
                                borderRadius: '50%',
                                zIndex: '0'
                            }}></div>
                        </div>

                    </div>
                </div>

                {/* The Idea Behind Section */}
                {/* <div className="row" style={{ marginBottom: '80px' }}>
                    <div className="col-12">
                        <div style={{
                            backgroundColor: '#f0f5fa',
                            padding: '50px 40px',
                            borderRadius: '15px',
                            border: '1px solid #e9ecef',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            <div className="text-center" style={{ marginBottom: '40px' }}>
                                <h3 style={{
                                    fontSize: '2.2rem',
                                    fontWeight: '600',
                                    color: '#2c3e50',
                                    marginBottom: '15px',
                                    lineHeight: '1.3'
                                }}>The Idea Behind Befirst HRM</h3>
                                <div style={{
                                    width: '60px',
                                    height: '3px',
                                    backgroundColor: '#007bff',
                                    margin: '0 auto',
                                    borderRadius: '2px'
                                }}></div>
                            </div>

                            <div className="row justify-content-center">
                                <div className="col-lg-10 mx-auto">
                                    <div style={{
                                        backgroundColor: '#fff',
                                        padding: '35px 30px',
                                        borderRadius: '12px',
                                        boxShadow: '0 8px 25px rgba(0,0,0,0.04)',
                                        border: '1px solid #e3f2fd'
                                    }}>
                                        <p style={{
                                            fontSize: '1.15rem',
                                            lineHeight: '1.8',
                                            textAlign: 'start',
                                            color: '#495057',
                                            marginBottom: '25px'
                                        }}>
                                            The concept of Befirst HR & Management Consultancy was born out of a clear gap in the market: while Kerala is home to thousands of ambitious entrepreneurs and fast-growing SMEs, <strong style={{ color: '#0062cc' }}>most struggle to find, manage, and retain the right talent.</strong>
                                        </p>
                                        <p style={{
                                            fontSize: '1.15rem',
                                            lineHeight: '1.8',
                                            textAlign: 'start',
                                            color: '#495057',
                                            fontWeight: '500',
                                            margin: '0'
                                        }}>
                                            Without the right HR systems, policies, and skilled people, even the most promising businesses hit growth roadblocks. Our goal is to <strong style={{ color: '#0062cc' }}>bridge that gap</strong> — bringing <strong style={{ color: '#0062cc' }}>corporate-grade HR expertise</strong> to small and medium-sized enterprises at a scale and cost that works for them.
                                        </p>
                                    </div>
                                </div>
                            </div> */}

                {/* Decorative background element */}
                {/* <div style={{
                                position: 'absolute',
                                top: '-50px',
                                right: '-50px',
                                width: '150px',
                                height: '150px',
                                backgroundColor: 'rgba(0, 123, 255, 0.05)',
                                borderRadius: '50%',
                                zIndex: '0'
                            }}></div>
                            <div style={{
                                position: 'absolute',
                                bottom: '-30px',
                                left: '-30px',
                                width: '100px',
                                height: '100px',
                                backgroundColor: 'rgba(0, 123, 255, 0.03)',
                                borderRadius: '50%',
                                zIndex: '0'
                            }}></div>
                        </div>
                    </div>
                </div> */}

                {/* Core Values */}
                <div className="row" style={{ marginBottom: '80px' }}>
                    <div className="col-12">
                        <div className="text-center" style={{ marginBottom: '50px' }}>
                            <h2 style={{
                                fontSize: '2.5rem',
                                fontWeight: '700',
                                color: '#2c3e50',
                                marginBottom: '10px',
                                lineHeight: '1.3'
                            }}>What Befirst HRM Stands For</h2>
                            <div style={{
                                width: '80px',
                                height: '4px',
                                backgroundColor: '#007bff',
                                margin: '0 auto 25px auto',
                                borderRadius: '2px'
                            }}></div>
                            <p style={{
                                fontSize: '20px',
                                lineHeight: '1.8',
                                color: '#495057',
                                maxWidth: '800px',
                                margin: '0 auto',
                                padding: '0 20px'
                            }}>
                                Our core values define who we are and how we deliver exceptional HR solutions to our clients.
                            </p>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-lg-12 col-xl-10">
                                <div style={{
                                    backgroundColor: '#fff',
                                    padding: '40px 20px',
                                    borderRadius: '12px',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                                    position: 'relative'
                                }}>
                                    <div className="row g-4">
                                        {coreValues.map((value, index) => (
                                            <div key={index} className="col-md-6 col-lg-3">
                                                <div style={{
                                                    backgroundColor: '#f8faff',
                                                    padding: '30px 20px',
                                                    borderRadius: '10px',
                                                    height: '100%',
                                                    borderLeft: '4px solid #007bff',
                                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                                                }} className="hover-effect">
                                                    <div style={{
                                                        width: '60px',
                                                        height: '60px',
                                                        backgroundColor: '#e6f0ff',
                                                        borderRadius: '50%',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        margin: '0 auto 20px auto'
                                                    }}>
                                                        {getValueIcon(value.title)}
                                                    </div>
                                                    <h4 style={{
                                                        color: 'black',
                                                        marginBottom: '15px',
                                                        fontWeight: '600',
                                                        textAlign: 'center',
                                                        minHeight: '60px',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center'
                                                    }}>{value.title}</h4>
                                                    <p style={{
                                                        fontSize: '18px',
                                                        marginBottom: '0px',
                                                        color: '#6c757d',
                                                        margin: '0',
                                                        textAlign: 'center',
                                                        lineHeight: '1.4'
                                                    }}>
                                                        {value.description}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div style={{
                                        textAlign: 'center',
                                        padding: '30px 0 10px 0',
                                        fontSize: '18px',
                                        color: '#6c757d',
                                        fontStyle: 'italic',
                                        marginTop: '20px'
                                    }}>
                                        These principles guide every decision we make and every solution we deliver.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Impact Statistics */}
                <div className="row" style={{ marginBottom: '60px' }}>
                    <div className="col-12">
                        <div style={{
                            backgroundColor: '#F0F5FA',
                            padding: '60px 40px',
                            borderRadius: '15px',
                            color: '#fff'
                        }}>
                            <div className="text-center" style={{ marginBottom: '50px' }}>
                                <h3 style={{
                                    fontSize: '2.5rem',
                                    fontWeight: '600',
                                    color: '#2c3e50',
                                    marginBottom: '15px'
                                }}>The Impact We Create</h3>
                                <div style={{
                                    width: '80px',
                                    height: '4px',
                                    backgroundColor: '#007bff',
                                    margin: '0 auto 25px auto',
                                    borderRadius: '2px'
                                }}></div>
                            </div>

                            <div className="row">
                                {impactStats.map((stat, index) => (
                                    <div key={index} className="col-lg-3 col-md-6 col-sm-6" style={{ marginBottom: '30px' }}>
                                        <div className="text-center">
                                            <h2 style={{
                                                fontSize: '3rem',
                                                fontWeight: '700',
                                                color: '#007bff',

                                                marginBottom: '10px'
                                            }}>{stat.number}</h2>
                                            <h5 style={{
                                                fontSize: '1.2rem',
                                                fontWeight: '600',
                                                color: '#007bff',

                                                marginBottom: '10px'
                                            }}>{stat.label}</h5>
                                            <p style={{
                                                fontSize: '0.9rem',
                                                color: 'rgba(255,255,255,0.8)',
                                                margin: '0'
                                            }}>{stat.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Why Choose Us */}
                <div className="row" style={{ marginBottom: '60px' }}>
                    <div className="col-12">
                        <div className="text-center" style={{ marginBottom: '50px' }}>
                            <h3 style={{
                                fontSize: '2.5rem',
                                fontWeight: '600',
                                color: '#2c3e50',
                                marginBottom: '15px'
                            }}>Why Choose Befirst HRM</h3>
                            <div style={{
                                width: '60px',
                                height: '3px',
                                backgroundColor: '#007bff',
                                margin: '0 auto'
                            }}></div>
                        </div>

                        <div className="row">
                            {whyChooseUs.map((reason, index) => (
                                <div key={index} className="col-lg-6 col-md-6" style={{ marginBottom: '30px' }}>
                                    <div style={{
                                        backgroundColor: '#f8f9fa',
                                        padding: '30px',
                                        borderRadius: '15px',
                                        border: '1px solid #e9ecef',
                                        height: '100%'
                                    }}>
                                        <h5 style={{
                                            fontSize: '1.3rem',
                                            fontWeight: '600',
                                            color: '#2c3e50',
                                            marginBottom: '15px'
                                        }}>{reason.title}</h5>
                                        <p style={{
                                            fontSize: '20px',
                                            lineHeight: '1.7',
                                            color: '#6c757d',
                                            margin: '0'
                                        }}>{reason.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="row">
                    <div className="col-12">
                        <div style={{
                            background: 'linear-gradient(135deg, #007bff 0%, #0056b3 100%)',
                            padding: '50px 40px',
                            borderRadius: '20px',
                            color: '#fff',
                            textAlign: 'center'
                        }}>
                            <h3 style={{
                                fontSize: '2.2rem',
                                fontWeight: '600',
                                marginBottom: '20px',
                                color: '#fff'
                            }}>Ready to Build Your Dream Team?</h3>
                            <p style={{
                                fontSize: '1.2rem',
                                lineHeight: '1.7',
                                marginBottom: '30px',
                                color: 'rgba(255,255,255,0.9)',
                                maxWidth: '800px',
                                margin: '0 auto 30px auto'
                            }}>
                                Whether you're a startup in Kozhikode or an established SME in Kerala, we'll help you attract, manage, and retain the right people so your business can grow faster and scale sustainably.
                            </p>

                            <div style={{ marginTop: '30px' }}>
                                <Link
                                    onClick={ClickHandler}
                                    to="/contact"
                                    className="btn"
                                    style={{
                                        backgroundColor: '#fff',
                                        color: '#007bff',
                                        padding: '15px 40px',
                                        fontSize: '1.1rem',
                                        fontWeight: '600',
                                        borderRadius: '50px',
                                        textDecoration: 'none',
                                        display: 'inline-block',
                                        transition: 'all 0.3s ease',
                                        border: 'none',
                                        boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
                                    }}
                                >
                                    Get Expert Assistance
                                </Link>
                            </div>

                            <p style={{
                                fontSize: '1rem',
                                marginTop: '20px',
                                color: 'rgba(255,255,255,0.8)',
                                margin: '20px 0 0 0'
                            }}>
                                Transform your business with expert HR solutions today
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;



const getValueIcon = (title) => {
    const icons = {
        "Integrity": (
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#007bff" viewBox="0 0 16 16">
                <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
        ),
        "Excellence": (
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#007bff" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
        ),
        "Innovation": (
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#007bff" viewBox="0 0 16 16">
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM8 1.5a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13zm3.352 2.234l.384 1.125a.633.633 0 0 1-.304.723l-1.055.503.03 1.138a.638.638 0 0 1-.57.657l-1.132.082-.393 1.066a.637.637 0 0 1-.888.332l-.962-.562-.962.562a.637.637 0 0 1-.888-.332l-.393-1.066-1.132-.082a.638.638 0 0 1-.57-.657l.03-1.138-1.055-.503a.633.633 0 0 1-.304-.723l.384-1.125a.637.637 0 0 1 .73-.397l1.103.212.615-1.015a.637.637 0 0 1 .904-.143l.832.636.832-.636a.637.637 0 0 1 .904.143l.615 1.015 1.103-.212a.637.637 0 0 1 .73.397z" />
            </svg>
        ),
        "Partnership": (
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#007bff" viewBox="0 0 16 16">
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                <path fillRule="evenodd" d="M15.5 12a1.5 1.5 0 0 1-1.5 1.5H13v-1h1.5a.5.5 0 0 0 .5-.5V12h.5zm-5-5a.5.5 0 0 1 .5-.5h.5V6h-.5a.5.5 0 0 1-.5-.5V5h-.5a.5.5 0 0 1 0-1h.5v-.5A.5.5 0 0 1 11 3h.5v-.5a.5.5 0 0 1 1 0V3h.5a.5.5 0 0 1 0 1h-.5v.5a.5.5 0 0 1-.5.5H11v.5h.5a.5.5 0 0 1 .5.5V7h.5a.5.5 0 0 1 0 1h-.5v.5a.5.5 0 0 1-.5.5H11v.5h.5a.5.5 0 0 1 0 1h-.5v.5a1.5 1.5 0 0 1-1.5 1.5H8v-1h1.5a.5.5 0 0 0 .5-.5V12h-.5a.5.5 0 0 1 0-1h.5v-.5a.5.5 0 0 0-.5-.5H8v-1h1.5a.5.5 0 0 0 .5-.5V8h-.5a.5.5 0 0 1 0-1h.5v-.5a.5.5 0 0 0-.5-.5H8v-1h1.5a.5.5 0 0 0 .5-.5V4h-.5a.5.5 0 0 1 0-1h.5v-.5A1.5 1.5 0 0 1 11.5 1H13v1h-1.5a.5.5 0 0 0-.5.5V3h.5a.5.5 0 0 1 0 1h-.5v.5a.5.5 0 0 0 .5.5H13v1h-1.5a.5.5 0 0 0-.5.5V7h.5a.5.5 0 0 1 0 1h-.5v.5a.5.5 0 0 0 .5.5H13v1h-1.5a.5.5 0 0 0-.5.5V12h.5a.5.5 0 0 1 0 1h-.5v.5a1.5 1.5 0 0 1-1.5 1.5H8v1h1.5a2.5 2.5 0 0 0 2.5-2.5V12a.5.5 0 0 1 .5-.5h.5a2.5 2.5 0 0 0 2.5-2.5V8a.5.5 0 0 1 .5-.5h.5a2.5 2.5 0 0 0 2.5-2.5V4a.5.5 0 0 1 .5-.5h.5a2.5 2.5 0 0 0 2.5-2.5V1h-1v.5A1.5 1.5 0 0 1 15.5 3H15v1h.5a1.5 1.5 0 0 1 1.5 1.5V8a1.5 1.5 0 0 1-1.5 1.5H15v1h.5a1.5 1.5 0 0 1 1.5 1.5V12a1.5 1.5 0 0 1-1.5 1.5H15v1h.5a1.5 1.5 0 0 1 1.5 1.5V16h-1v-.5a.5.5 0 0 0-.5-.5H15a.5.5 0 0 1-.5-.5V14a.5.5 0 0 0-.5-.5h-.5a.5.5 0 0 1-.5-.5V12a.5.5 0 0 0-.5-.5h-.5a.5.5 0 0 1-.5-.5V10a.5.5 0 0 0-.5-.5h-.5a.5.5 0 0 1-.5-.5V8a.5.5 0 0 0-.5-.5h-.5a.5.5 0 0 1-.5-.5V6a.5.5 0 0 0-.5-.5h-.5a.5.5 0 0 1-.5-.5V4a.5.5 0 0 0-.5-.5h-.5a.5.5 0 0 1-.5-.5V2a.5.5 0 0 0-.5-.5H8a.5.5 0 0 1-.5-.5V1H6v.5a1.5 1.5 0 0 1-1.5 1.5H4v1h.5A1.5 1.5 0 0 1 6 4.5V8a1.5 1.5 0 0 1-1.5 1.5H4v1h.5A1.5 1.5 0 0 1 6 12.5V16H5v-.5A1.5 1.5 0 0 0 3.5 14H3v-1h.5a.5.5 0 0 1 .5.5v.5H5v-.5a2.5 2.5 0 0 1 2.5-2.5H8v-1H7.5a.5.5 0 0 1-.5-.5V10a.5.5 0 0 0-.5-.5h-.5a.5.5 0 0 1-.5-.5V8a.5.5 0 0 0-.5-.5h-.5a.5.5 0 0 1-.5-.5V6a.5.5 0 0 0-.5-.5h-.5a.5.5 0 0 1-.5-.5V4a.5.5 0 0 0-.5-.5h-.5a.5.5 0 0 1-.5-.5V2a.5.5 0 0 0-.5-.5H1v1h.5A1.5 1.5 0 0 1 3 3.5V7a.5.5 0 0 1-.5.5H1v1h1.5A1.5 1.5 0 0 1 3 10.5V14a.5.5 0 0 1-.5.5H1v1h1.5A2.5 2.5 0 0 0 5 12.5V12a.5.5 0 0 1 .5-.5h.5a.5.5 0 0 0 .5-.5V10a.5.5 0 0 1 .5-.5h.5a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 .5-.5h.5a.5.5 0 0 0 .5-.5V6a.5.5 0 0 1 .5-.5h.5a.5.5 0 0 0 .5-.5V4a.5.5 0 0 1 .5-.5h.5a.5.5 0 0 0 .5-.5V2a.5.5 0 0 1 .5-.5h.5a.5.5 0 0 0 .5-.5V1H8v.5a.5.5 0 0 1-.5.5h-.5a.5.5 0 0 0-.5.5V3a.5.5 0 0 1-.5.5h-.5a.5.5 0 0 0-.5.5V5a.5.5 0 0 1-.5.5h-.5a.5.5 0 0 0-.5.5V7a.5.5 0 0 1-.5.5h-.5a.5.5 0 0 0-.5.5V9a.5.5 0 0 1-.5.5h-.5a.5.5 0 0 0-.5.5v1.5a.5.5 0 0 1-.5.5H3z" />
            </svg>
        )
    };
    return icons[title] || null;
};