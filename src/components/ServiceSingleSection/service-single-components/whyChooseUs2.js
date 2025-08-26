import React from 'react';
import { MapPin, Settings, ShieldCheck, TrendingUp } from 'lucide-react';

const WhyChoose2 = () => {
    const reasons = [
        {
            icon: <MapPin size={28} className="text-primary" />,
            title: "Local Expertise:",
            desc: "Deep understanding of Kerala’s business and workforce culture."
        },
        {
            icon: <Settings size={28} className="text-primary" />,
            title: "Custom Solutions",
            desc: "Tailored HR frameworks for startups, SMEs, and corporates."
        },
        {
            icon: <ShieldCheck size={28} className="text-primary" />,
            title: "End-to-End Support",
            desc: " From consultation to implementation and continuous improvement."
        },
        {
            icon: <TrendingUp size={28} className="text-primary" />,
            title: "Proven Results:",
            desc: " Helping businesses across Kozhikode, Kochi, and Trivandrum reduce attrition and improve team performance."
        }
    ];

    return (
        <section className="why-choose-section py-5 bg-light">
            <div className="container">
                {/* Section Header */}
                <div className="row mb-5">
                    <div className="col-lg-8 mx-auto text-center">
                        <h2 className="display-6 fw-bold mb-3 text-dark">
                            Why Choose Befirst for HR Consultancy?
                        </h2>
                        <p className="lead text-muted">
                            Partnering with us ensures you gain not just HR support, but a strategic edge in driving business growth.
                        </p>
                    </div>
                </div>

                {/* Timeline List */}
                <div className="why-list mx-auto" style={{maxWidth: '700px'}}>
                    {reasons.map((reason, index) => (
                        <div key={index} className="d-flex align-items-start mb-4">
                            <div className="why-icon me-3">{reason.icon}</div>
                            <div>
                                <h5 className="fw-bold text-dark mb-1">{reason.title}</h5>
                                <p className="text-muted mb-0">{reason.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .why-list .why-icon {
                    width: 50px;
                    height: 50px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    background: rgba(37, 99, 235, 0.1);
                }
                .why-list .why-icon svg {
                    width: 22px;
                    height: 22px;
                }
            `}</style>
        </section>
    );
};

export default WhyChoose2;
