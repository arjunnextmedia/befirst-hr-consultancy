import React, { useState } from 'react';
import { Users, TrendingUp, Heart, Clock, DollarSign, Award, MapPin, Calendar, Mail, ExternalLink, ChevronRight, Building, Briefcase } from 'lucide-react';
import { jobOpenings } from '../data/dummyCareers';
import { useNavigate } from 'react-router-dom';
import ProfessionalBanner from './banner';

const Careers = () => {
    const [activeJob, setActiveJob] = useState(null);
    const navigate = useNavigate();
    const benefits = [
        {
            icon: <TrendingUp className="brand-primary" size={24} />,
            title: "Impactful Work",
            description: "Transform HR practices for diverse clients across Kerala and India"
        },
        {
            icon: <Award className="text-success" size={24} />,
            title: "Growth Opportunities",
            description: "Advance your career with ongoing training and mentorship"
        },
        {
            icon: <Heart className="text-danger" size={24} />,
            title: "Collaborative Culture",
            description: "Join a supportive team that values innovation and integrity"
        },
        {
            icon: <Clock className="brand-primary" size={24} />,
            title: "Flexible Work Options",
            description: "Blend of in-office and remote work for work-life balance"
        },
        {
            icon: <DollarSign className="text-warning" size={24} />,
            title: "Competitive Compensation",
            description: "Attractive packages with performance-based incentives"
        }
    ];

    // const jobOpenings = [
    //     {
    //         id: 1,
    //         title: "HR Executive",
    //         location: "Calicut",
    //         type: "Full-time",
    //         experience: "1-3 years",
    //         department: "Human Resources",
    //         responsibilities: [
    //             "Manage recruitment processes from job posting to candidate onboarding",
    //             "Assist in payroll administration and employee record management",
    //             "Support HR compliance and policy implementation",
    //             "Coordinate training programs and employee engagement activities"
    //         ],
    //         requirements: [
    //             "Bachelor's degree in HR, Business Administration, or related field",
    //             "1–3 years of HR experience preferred",
    //             "Strong communication and organizational skills",
    //             "Proficiency in HR software and MS Office"
    //         ]
    //     },
    //     {
    //         id: 2,
    //         title: "Business Development Manager",
    //         location: "Calicut",
    //         type: "Full-time",
    //         experience: "3-5 years",
    //         department: "Business Development",
    //         responsibilities: [
    //             "Identify and develop new business opportunities in Kerala and GCC markets",
    //             "Build and maintain strong client relationships",
    //             "Collaborate with consultancy team to design customized HR solutions",
    //             "Achieve sales targets and contribute to company growth"
    //         ],
    //         requirements: [
    //             "Proven sales experience in B2B services, preferably HR or consulting",
    //             "Excellent negotiation and interpersonal skills",
    //             "Ability to work independently and as part of a team",
    //             "Knowledge of GCC markets is an advantage"
    //         ]
    //     },
    //     {
    //         id: 3,
    //         title: "Sales Manager",
    //         location: "Calicut",
    //         type: "Full-time",
    //         experience: "2-4 years",
    //         department: "Sales",
    //         responsibilities: [
    //             "Manage client accounts and generate new business leads in India and GCC region",
    //             "Present and promote company services to potential clients",
    //             "Coordinate with project team to deliver client solutions",
    //             "Maintain CRM and sales reporting"
    //         ],
    //         requirements: [
    //             "Experience in sales or business development in Indian markets",
    //             "Knowledge of HR consultancy services is an advantage",
    //             "Strong communication and client management skills",
    //             "Proven track record of meeting sales targets"
    //         ]
    //     }
    // ];

    const toggleJobDetails = (jobId) => {
        setActiveJob(activeJob === jobId ? null : jobId);
    };

    return (
        <>
            {/* Mission Statement Section */}
            <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 text-center">
                            <h2 className="display-5 fw-bold mb-4" style={{ color: '#1a202c' }}>
                                Shape the Future of HR in Kerala and India
                            </h2>
                            <p className="lead mb-4" style={{ color: '#4a5568', fontSize: '1.1rem' }}>
                                At <span className="fw-bold" style={{ color: '#3454F1' }}>Befirst HR and Management Consultancy</span>, we believe that great businesses are built by great people.
                                We are on a mission to empower SMEs and growing companies with innovative HR solutions that help them attract, develop, and retain top talent.
                            </p>
                            <p className="fs-5" style={{ color: '#718096' }}>
                                If you are passionate about people, driven by excellence, and eager to make a difference in the world of HR and management consultancy, we want to hear from you.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Work With Us Section - Using Old Code Structure */}
            <section className="py-5 bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center mb-5">
                            <h2 className="h1 fw-bold text-dark mb-3">Why Work With Us?</h2>
                            <p className="lead text-muted">
                                Discover the benefits of being part of our innovative HR consultancy team
                            </p>
                        </div>
                    </div>
                    <div className="row g-4">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="col-lg-4 col-md-6">
                                <div className="card h-100 shadow-sm border-0 hover-lift bg-white">
                                    <div className="card-body p-4">
                                        <div className="d-flex align-items-center mb-3">
                                            <div className="bg-light rounded-circle p-3 me-3">
                                                {benefit.icon}
                                            </div>
                                            <h5 className="card-title mb-0 fw-bold">{benefit.title}</h5>
                                        </div>
                                        <p className="card-text text-muted">{benefit.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Current Openings Section */}
            <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center mb-5">
                            <h2 className="display-5 fw-bold mb-3" style={{ color: '#1a202c' }}>Current Openings</h2>
                            <p className="lead" style={{ color: '#4a5568' }}>
                                Explore exciting career opportunities and find your perfect role
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        {jobOpenings.map((job) => (
                            <div key={job.id} className="col-12 mb-4">
                                <div className="card border-0 shadow-sm job-card" style={{ backgroundColor: '#ffffff' }}>
                                    <div
                                        className="card-header border-0 p-4 cursor-pointer"
                                        onClick={() => toggleJobDetails(job.id)}
                                        style={{ cursor: 'pointer', backgroundColor: '#ffffff' }}
                                    >
                                        <div className="row align-items-center">
                                            <div className="col-lg-8">
                                                <h4 className="mb-2 fw-bold" style={{ color: '#3454F1' }}>{job.title}</h4>
                                                <div className="d-flex flex-wrap gap-3" style={{ color: '#4a5568' }}>
                                                    <div className="d-flex align-items-center">
                                                        <MapPin size={16} className="me-2" />
                                                        <span>{job.location}</span>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <Briefcase size={16} className="me-2" />
                                                        <span>{job.type}</span>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <Calendar size={16} className="me-2" />
                                                        <span>{job.experience}</span>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <Building size={16} className="me-2" />
                                                        <span>{job.department}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 text-end">
                                                <button
                                                    className="btn me-3 px-4 py-2"
                                                    style={{
                                                        backgroundColor: 'transparent',
                                                        border: '2px solid #3454F1',
                                                        color: '#3454F1',
                                                        fontWeight: '600'
                                                    }}
                                                    onMouseOver={(e) => {
                                                        e.target.style.backgroundColor = '#3454F1';
                                                        e.target.style.color = 'white';
                                                    }}
                                                    onMouseOut={(e) => {
                                                        e.target.style.backgroundColor = 'transparent';
                                                        e.target.style.color = '#3454F1';
                                                    }}
                                                    onClick={() => window.open('/careers/careers-form', '_blank', 'noopener,noreferrer')}
                                                >
                                                    Apply Now
                                                </button>

                                                <ChevronRight
                                                    size={20}
                                                    style={{
                                                        transform: activeJob === job.id ? 'rotate(90deg)' : 'rotate(0deg)',
                                                        transition: 'transform 0.3s ease',
                                                        color: '#4a5568'
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {activeJob === job.id && (
                                        <div className="card-body p-4" style={{ backgroundColor: '#f8f9fa', borderTop: '1px solid #e2e8f0' }}>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <h6 className="fw-bold mb-3" style={{ color: '#3454F1' }}>Responsibilities</h6>
                                                    <ul className="list-unstyled">
                                                        {job.responsibilities.map((resp, index) => (
                                                            <li key={index} className="mb-2 d-flex">
                                                                <ChevronRight size={16} className="mt-1 me-2 flex-shrink-0" style={{ color: '#3454F1' }} />
                                                                <span style={{ color: '#4a5568' }}>{resp}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div className="col-md-6">
                                                    <h6 className="fw-bold mb-3" style={{ color: '#059669' }}>Requirements</h6>
                                                    <ul className="list-unstyled">
                                                        {job.requirements.map((req, index) => (
                                                            <li key={index} className="mb-2 d-flex">
                                                                <ChevronRight size={16} className="mt-1 me-2 flex-shrink-0" style={{ color: '#059669' }} />
                                                                <span style={{ color: '#4a5568' }}>{req}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="mt-4 pt-3" style={{ borderTop: '1px solid #e2e8f0' }}>
                                                <button
                                                    className="btn btn-lg px-4 py-2"
                                                    style={{
                                                        backgroundColor: '#3454F1',
                                                        border: 'none',
                                                        color: 'white',
                                                        fontWeight: '600'
                                                    }}
                                                    onMouseOver={(e) => {
                                                        e.target.style.backgroundColor = '#2c47d1';
                                                    }}
                                                    onMouseOut={(e) => {
                                                        e.target.style.backgroundColor = '#3454F1';
                                                    }}
                                                    onClick={() => window.open('/careers/careers-form', '_blank', 'noopener,noreferrer')}

                                                >
                                                    <Mail size={20} className="me-2" />
                                                    Apply for this Position
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How to Apply Section */}
            <section className="py-5" style={{ backgroundColor: '#ffffff' }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <h2 className="display-5 fw-bold mb-4 text-center" style={{ color: '#1a202c' }}>How to Apply</h2>
                            <div className="card border-0 shadow-sm" style={{ backgroundColor: '#f8f9fa' }}>
                                <div className="card-body p-5">
                                    <div className="row align-items-center">
                                        <div className="col-md-8">
                                            <h5 className="fw-bold mb-3" style={{ color: '#1a202c' }}>Ready to Join Our Team?</h5>
                                            <p className="mb-3" style={{ color: '#4a5568' }}>
                                                Interested candidates can send their CVs along with a cover letter to
                                                <span className="fw-bold" style={{ color: '#3454F1' }}>
                                                    <a href="mailto:careers@befirsthr.com " target='_blank' rel="noopener noreferrer" style={{ textDecoration: 'none' }}> careers@befirsthr.com
                                                    </a>
                                                </span> or use our online application form.
                                            </p>
                                            <p className="mb-0" style={{ color: '#718096' }}>
                                                We review every application carefully and will contact shortlisted candidates for interviews.
                                            </p>
                                        </div>
                                        <div className="col-md-4 text-center">
                                            <button
                                                className="btn btn-lg px-4 mb-3 w-100"
                                                style={{
                                                    backgroundColor: '#3454F1',
                                                    border: 'none',
                                                    color: 'white',
                                                    fontWeight: '600'
                                                }}
                                                onMouseOver={(e) => {
                                                    e.target.style.backgroundColor = '#2c47d1';
                                                }}
                                                onMouseOut={(e) => {
                                                    e.target.style.backgroundColor = '#3454F1';
                                                }}
                                                    onClick={() => window.open('/careers/careers-form', '_blank', 'noopener,noreferrer')}
                                            >
                                                <ExternalLink size={20} className="me-2" />
                                                Apply Online
                                            </button>
                                            <a href="mailto:careers@befirsthr.com " target='_blank' rel="noopener noreferrer" style={{ textDecoration: 'none' }}>

                                                <button
                                                    className="btn w-100"
                                                    style={{
                                                        backgroundColor: 'transparent',
                                                        border: '2px solid #3454F1',
                                                        color: '#3454F1',
                                                        fontWeight: '600'
                                                    }}
                                                    onMouseOver={(e) => {
                                                        e.target.style.backgroundColor = '#3454F1';
                                                        e.target.style.color = 'white';
                                                    }}
                                                    onMouseOut={(e) => {
                                                        e.target.style.backgroundColor = 'transparent';
                                                        e.target.style.color = '#3454F1';
                                                    }}
                                                >
                                                    <Mail size={20} className="me-2" />
                                                    Email CV
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            {/* <ProfessionalBanner/> */}

            <style jsx>{`
        /* Brand Colors updated to #3454F1 */
        .brand-primary {
          color: #3454F1 !important;
        }
        
        .btn-brand {
          background-color: #3454F1;
          border-color: #3454F1;
          color: white;
          transition: all 0.3s ease;
        }
        
        .btn-brand:hover {
          background-color: #2c47d1;
          border-color: #2c47d1;
          color: white;
          transform: translateY(-2px);
        }
        
        .btn-brand-outline {
          border: 2px solid #3454F1;
          color: #3454F1;
          background-color: transparent;
          transition: all 0.3s ease;
        }
        
        .btn-brand-outline:hover {
          background-color: #3454F1;
          border-color: #3454F1;
          color: white;
          transform: translateY(-2px);
        }
        
        /* Interactive Elements */
        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-lift:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(52, 84, 241, 0.15) !important;
        }
        
        .job-card {
          transition: all 0.3s ease;
        }
        
        .job-card:hover {
          box-shadow: 0 8px 25px rgba(52, 84, 241, 0.1) !important;
        }
        
        .cursor-pointer {
          cursor: pointer;
        }
        
        /* Improved spacing and typography */
        .card-header h4 {
          font-size: 1.5rem;
          font-weight: 700;
        }
        
        .card-body h6 {
          font-size: 1.1rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        /* Email CV Button Hover Effect */
        .email-cv-btn:hover {
          background-color: #3454F1 !important;
          border-color: #3454F1 !important;
          color: white !important;
        }
        
        .email-cv-btn:hover .lucide {
          color: white !important;
        }
        
        /* Responsive improvements */
        @media (max-width: 768px) {
          .col-lg-4.text-end {
            text-align: center !important;
            margin-top: 1rem;
          }
          
          .display-5 {
            font-size: 2rem !important;
          }
        }
      `}</style>
        </>
    );
};

export default Careers;