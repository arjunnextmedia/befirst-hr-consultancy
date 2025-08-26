import React from 'react';
import { CheckCircle } from 'lucide-react';

const Solutions5 = () => {
    return (
        <section className="solutions-section py-5">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-lg-8 mx-auto text-center">
                        <h2 className="display-6 fw-bold mb-3 text-dark">Why Choose Befirst Recruitment Services?</h2>
                        {/* <p className="lead text-muted">
We offer specialized consultancy services to ensure your business runs at its full potential:                            
</p> */}
                    </div>
                </div>

                <div className="row g-4">
                    {/* {points.map((point, index) => ( */}
                    <div className="col-lg-6 col-md-6" >
                        <div className="solution-card card h-100 border-0 shadow-sm p-4">
                            <div className="d-flex align-items-start">
                                <CheckCircle className="text-primary me-3 flex-shrink-0" size={28} />

                                <div>
                                    <h5 className="fw-bold mb-2 text-dark">Local Market Expertise</h5>
                                    <p className="text-muted mb-0">
                                        Deep understanding of Kerala’s job market and industry demands.
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6" >
                        <div className="solution-card card h-100 border-0 shadow-sm p-4">
                            <div className="d-flex align-items-start">
                                <CheckCircle className="text-primary me-3 flex-shrink-0" size={28} />
                                <div>
                                    <h5 className="fw-bold mb-2 text-dark">Fast & Efficient Hiring </h5>
                                    <p className="text-muted mb-0">
                                        We connect you with qualified candidates in days, not months.
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6" >
                        <div className="solution-card card h-100 border-0 shadow-sm p-4">
                            <div className="d-flex align-items-start">
                                <CheckCircle className="text-primary me-3 flex-shrink-0" size={28} />
                                <div>
                                    <h5 className="fw-bold mb-2 text-dark">Tailored Recruitment Solutions</h5>
                                    <p className="text-muted mb-0">
                                        From entry-level to C-suite roles.
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6" >
                        <div className="solution-card card h-100 border-0 shadow-sm p-4">
                            <div className="d-flex align-items-start">
                                <CheckCircle className="text-primary me-3 flex-shrink-0" size={28} />
                                <div>
                                    <h5 className="fw-bold mb-2 text-dark">Wide Industry Coverage</h5>
                                    <p className="text-muted mb-0">
                                        IT, manufacturing, healthcare, hospitality, finance, retail, and more.
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6" >
                        <div className="solution-card card h-100 border-0 shadow-sm p-4">
                            <div className="d-flex align-items-start">
                                <CheckCircle className="text-primary me-3 flex-shrink-0" size={28} />
                                <div>
                                    <h5 className="fw-bold mb-2 text-dark">Quality Over Quantity</h5>
                                    <p className="text-muted mb-0">
                                        We ensure candidates meet your skill and cultural requirements.
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <style jsx>{`
                .solutions-section {
                    background-color: #fafbfc;
                }
                .solution-card {
                    transition: all 0.3s ease;
                    background-color: #ffffff;
                }
                .solution-card:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 8px 25px rgba(0,0,0,0.08) !important;
                }
            `}</style>
        </section>
    );
};

export default Solutions5;
