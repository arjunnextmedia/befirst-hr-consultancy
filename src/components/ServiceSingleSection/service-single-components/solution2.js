import React from 'react';
import { CheckCircle } from 'lucide-react';

const Solutions2 = ({ pointTitle = "Our Solutions", points = [] }) => {
    return (
        <section className="solutions-section py-5">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-lg-8 mx-auto text-center">
                        <h2 className="display-6 fw-bold mb-3 text-dark">Our Key Human Capital Development Programs</h2>
                        {/* <p className="lead text-muted">
                                Comprehensive HR solutions tailored to drive your business success
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
                                    <h5 className="fw-bold mb-2 text-dark">Orientation Frameworks</h5>
                                    <p className="text-muted mb-0">
                                        Smooth onboarding that accelerates productivity and builds loyalty from day one.
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
                                    <h5 className="fw-bold mb-2 text-dark">Employee Engagement Surveys</h5>
                                    <p className="text-muted mb-0">
                                        Data-driven insights to improve workplace satisfaction and performance.                                        </p>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6" >
                        <div className="solution-card card h-100 border-0 shadow-sm p-4">
                            <div className="d-flex align-items-start">
                                <CheckCircle className="text-primary me-3 flex-shrink-0" size={28} />
                                <div>
                                    <h5 className="fw-bold mb-2 text-dark">Retention Strategy Development</h5>
                                    <p className="text-muted mb-0">
Proven plans to keep your best talent motivated and committed.
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
                                    <h5 className="fw-bold mb-2 text-dark">HR Alignment with Business Goals</h5>
                                    <p className="text-muted mb-0">
Strategic HR planning to support your growth vision.                                         </p>

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

export default Solutions2;
