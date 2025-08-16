import React, { useState } from 'react';
import { Container, Row, Col, Card, CardBody, Collapse, Button } from 'reactstrap';
import { ChevronDown, ChevronUp, Phone, Mail, MapPin, Users, Award, Globe, HelpCircle } from 'lucide-react';

const FAQs = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const faqData = [
    {
      question: "What services does Befirst HR and Management Consultancy offer?",
      answer: "We provide end-to-end HR solutions including recruitment & executive search, HR outsourcing and payroll management, corporate training and development, HR compliance consulting, and business & management advisory services tailored for SMEs and corporates in Kerala, India, and GCC markets.",
      category: "services"
    },
    {
      question: "How can Befirst HRM help my SME grow?",
      answer: "By streamlining your HR processes, ensuring compliance with local labour laws, attracting and retaining the right talent, and providing training to boost employee performance, we help your business improve productivity and scale sustainably.",
      category: "growth"
    },
    {
      question: "Do you offer recruitment services for the GCC region?",
      answer: "Yes, we specialize in recruiting skilled professionals for companies operating in GCC countries, leveraging our extensive network and expertise to meet regional hiring standards.",
      category: "recruitment"
    },
    {
      question: "What industries do you serve?",
      answer: "Our clients span diverse sectors including IT, manufacturing, healthcare, retail, finance, energy, and utilities. We tailor HR strategies to fit each industry's unique needs.",
      category: "industries"
    },
    {
      question: "How does HR outsourcing work with Befirst HRM?",
      answer: "We handle your HR administrative tasks such as payroll processing, employee records management, attendance tracking, and compliance, allowing you to focus on core business activities while reducing HR overhead costs.",
      category: "outsourcing"
    },
    {
      question: "Can you help with employee training and development?",
      answer: "Absolutely! We offer customised corporate training programs covering leadership, soft skills, compliance, and technical skills designed to enhance workforce capabilities.",
      category: "training"
    },
    {
      question: "How do you ensure HR compliance for my business?",
      answer: "Our experts stay updated on Kerala and Indian labour laws and regulations, conducting audits, preparing HR policies, and guiding you to implement best practices to mitigate legal risks.",
      category: "compliance"
    },
    {
      question: "What size businesses do you work with?",
      answer: "We primarily serve small and medium-sized enterprises (SMEs) but also cater to startups and large organizations seeking specialised HR consultancy.",
      category: "business-size"
    },
    {
      question: "How do I get started with Befirst HR and Management Consultancy?",
      answer: "Simply contact us via our website's contact form, email, or phone to schedule a free consultation. We'll understand your business needs and propose tailored solutions.",
      category: "getting-started"
    },
    {
      question: "Where is Befirst HRM located?",
      answer: "Our headquarters are in Calicut, Kerala, India. We also serve clients across India and the GCC region.",
      category: "location"
    },
    {
      question: "What makes Befirst HRM different from other HR consultancies?",
      answer: "With over 40 years of leadership experience from our founder in multinational corporations and a deep understanding of local business culture, we deliver globally-informed, customised HR solutions focused on measurable business impact.",
      category: "differentiator"
    },
    {
      question: "Do you offer remote or virtual HR consulting services?",
      answer: "Yes, we provide flexible consulting options including remote and virtual services to support clients regardless of their location.",
      category: "remote"
    },
    {
      question: "How do you price your services?",
      answer: "Pricing depends on the scope and scale of the services required. We offer customised packages for SMEs with transparent pricing and no hidden fees.",
      category: "pricing"
    },
    {
      question: "Can Befirst HRM assist with setting up HR policies?",
      answer: "Yes, we develop and implement comprehensive HR policies tailored to your business, ensuring legal compliance and alignment with your company culture.",
      category: "policies"
    },
    {
      question: "How long does it take to fill a position through your recruitment services?",
      answer: "The timeline varies based on role complexity, but we strive to deliver qualified candidates efficiently, typically within 4 to 8 weeks.",
      category: "recruitment"
    }
  ];

  const highlights = [
    {
      icon: <Users size={24} />,
      title: "40+ Years Experience",
      description: "Multinational leadership expertise"
    },
    {
      icon: <Globe size={24} />,
      title: "India & GCC Markets",
      description: "Extensive regional coverage"
    },
    {
      icon: <Award size={24} />,
      title: "End-to-End Solutions",
      description: "Complete HR ecosystem"
    }
  ];

  return (
    <div className="faq-page">
      {/* Section 1: Hero with Highlights */}
      <section className="hero-highlights-section py-5" style={{backgroundColor: '#f8f9fa'}}>
        <Container>
          {/* Hero Content */}
          <Row className="mb-5">
            <Col lg={8} className="mx-auto text-center">
            <div className='d-flex justify-content-center '>

              <h1 className="h2 fw-bold text-dark" style={{fontSize:'2rem', fontWeight:'800px'}}>Frequently Asked Questions</h1>
              <div className="mb-4 ms-2">
                <HelpCircle size={35} className="text-primary mb-3" />
              </div>
            </div>
              <p className="lead text-muted mb-0">
                Find answers to common questions about our HR and management consultancy services
              </p>
            </Col>
          </Row>

          {/* Highlights Cards */}
  <Row className="g-4">
  {highlights.map((item, index) => (
    <Col md={4} key={index}>
      <Card
        className="h-100 border-0 shadow-sm bg-white"
        style={{
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-5px) scale(1.03)";
          e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0) scale(1)";
          e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.05)";
        }}
      >
        <CardBody className="p-4 text-center">
          <div className="text-primary mb-3">{item.icon}</div>
          <h6 className="fw-bold mb-2 text-dark">{item.title}</h6>
          <small className="text-muted">{item.description}</small>
        </CardBody>
      </Card>
    </Col>
  ))}
</Row>

        </Container>
      </section>

      {/* Section 2: FAQ + Contact */}
      <section className="faq-contact-section py-5">
        <Container>
          <Row>
            {/* FAQ Column */}
            <Col lg={8}>
              <div className="mb-4">
                <h3 className="fw-bold mb-3 text-dark">Your Questions Answered</h3>
                <p className="text-muted mb-4">Everything you need to know about Befirst HR and Management Consultancy</p>
              </div>
              
              <div className="faq-accordion">
                {faqData.map((item, index) => (
                  <div key={index} className="faq-item mb-3">
                    <div 
                      className="faq-question p-3 bg-light rounded cursor-pointer d-flex justify-content-between align-items-center"
                      onClick={() => toggleItem(index)}
                      style={{cursor: 'pointer', transition: 'all 0.3s ease'}}
                      onMouseEnter={(e) => e.target.style.backgroundColor = '#e9ecef'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = '#f8f9fa'}
                    >
                      <h6 className="mb-0 fw-semibold text-dark">{item.question}</h6>
                      {openItems[index] ? 
                        <ChevronUp className="text-primary" size={18} /> : 
                        <ChevronDown className="text-primary" size={18} />
                      }
                    </div>
                    <Collapse isOpen={openItems[index]}>
                      <div className="faq-answer p-3 bg-white border border-light rounded-bottom">
                        <p className="text-muted mb-0 lh-lg">{item.answer}</p>
                      </div>
                    </Collapse>
                  </div>
                ))}
              </div>
            </Col>

            {/* Contact Sidebar */}
            <Col lg={4}>
              <div className="sticky-top" style={{top: '20px'}}>
                <Card className="border-0 shadow-sm  text-dark">
                  <CardBody className="p-4">
                    <h5 className="fw-bold mb-3">Still have questions?</h5>
                    <p className="mb-4">Our team is ready to help you find the perfect HR solutions for your business.</p>
                    
                    {/* <Button color="primary" className="w-100 mb-3">
                      <Mail size={16} className="me-2" />
                      Get Free Consultation
                    </Button> */}
                    
                    <hr className="border-secondary my-4" />
                    
                    <div className="contact-info">
                      <div className="d-flex align-items-center  mb-3">
                        <Mail className="text-primary me-3" size={18} />
                        <div>
                          <span className="small">
                            <a href='mailto:info@befirsthr.com' target='_blank' className=" text-dark text-decoration-none"  rel="noreferrer">
                                info@befirsthr.com
                            </a>
                            </span>
                        </div>
                      </div>
                      
                      <div className="d-flex align-items-center mb-3">
                        <Phone className="text-primary me-3" size={18} />
                        <div>
                          <span className="small">
                            <a href='tel:+919400905954' className="text-dark text-decoration-none">

                            +91 9400905954
                            </a>
                            </span>
                        </div>
                      </div>
                      
                      <div className="d-flex align-items-center">
                        <MapPin className="text-primary me-3" size={18} />
                        <div>
                          <span className="small">Calicut, Kerala, India</span>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>

                {/* Quick Stats */}
                <Card className="border-0 shadow-sm mt-4">
                  <CardBody className="p-4 text-center">
                    <h6 className="fw-bold mb-3 text-dark">Why Choose Us?</h6>
                    <div className="row g-3">
                      <div className="col-6">
                        <div className="text-primary fw-bold h5">40+</div>
                        <small className="text-muted">Years Experience</small>
                      </div>
                      <div className="col-6">
                        <div className="text-primary fw-bold h5">500+</div>
                        <small className="text-muted">Clients Served</small>
                      </div>
                      <div className="col-6">
                        <div className="text-primary fw-bold h5">24/7</div>
                        <small className="text-muted">Support</small>
                      </div>
                      <div className="col-6">
                        <div className="text-primary fw-bold h5">100%</div>
                        <small className="text-muted">Satisfaction</small>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <style jsx>{`
        .faq-page {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        
        .hero-highlights-section {
          border-bottom: 1px solid #e9ecef;
        }
        
        .faq-item {
          border-radius: 8px;
          overflow: hidden;
          border: 1px solid #e9ecef;
        }
        
        .faq-question:hover {
          background-color: #e9ecef !important;
        }
        
        .faq-answer {
          border-top: 1px solid #e9ecef;
          margin-top: -1px;
        }
        
        .lead {
          font-size: 1.1rem;
          line-height: 1.6;
        }
        
        .contact-info .small {
          font-size: 0.875rem;
        }
        
        .sticky-top {
          position: sticky;
        }
        
        @media (max-width: 991px) {
          .sticky-top {
            position: relative;
            top: auto !important;
          }
        }
        
        .cursor-pointer {
          cursor: pointer;
        }
        
        .bg-light:hover {
          background-color: #e9ecef !important;
        }
      `}</style>
    </div>
  );
};

export default FAQs;