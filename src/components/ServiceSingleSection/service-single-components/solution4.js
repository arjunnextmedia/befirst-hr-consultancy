import React from 'react';
import { CheckCircle } from 'lucide-react';

const Solutions4 = () => {
    return (
        <section className="solutions-section py-5">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-lg-8 mx-auto text-center">
                        <h2 className="display-6 fw-bold mb-3 text-dark">Why Choose Befirst for Payroll Solutions in Kerala?</h2>
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
                                    <h5 className="fw-bold mb-2 text-dark">Kerala-Focused Expertise</h5>
                                    <p className="text-muted mb-0">
We understand the unique compliance and payroll needs of businesses in Kozhikode, Kochi, and Trivandrum.
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
                                    <h5 className="fw-bold mb-2 text-dark">End-to-End Support </h5>
                                    <p className="text-muted mb-0">
From setting up to managing and training your team.
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
                                    <h5 className="fw-bold mb-2 text-dark">Error-Free & Compliant</h5>
                                    <p className="text-muted mb-0">
Avoid penalties with accurate payroll processing.                                         
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
                                    <h5 className="fw-bold mb-2 text-dark">Custom Solutions</h5>
                                    <p className="text-muted mb-0">
Scalable payroll systems for startups, SMEs, and large enterprises. 
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
                                    <h5 className="fw-bold mb-2 text-dark">Confidential & Secure</h5>
                                    <p className="text-muted mb-0">
Your employee data is protected with strict data security measures.
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

export default Solutions4;
