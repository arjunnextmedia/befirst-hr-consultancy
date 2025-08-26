import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, TrendingUp, Briefcase } from 'lucide-react';
import './PremiumCTA.scss';
// import ctsImg from '../../images/blog/cta-img-3.jpg'

const PremiumCTA = ({ CTAIMG }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    const handleImageError = () => {
        setImageError(true);
    };

    return (
        <div className="sidebar-cta-widget">
            <div className="cta-background">
                <div className="gradient-overlay"></div>
                <div className="pattern-overlay"></div>
            </div>

            <div className="business-image-section">
                <div className="image-container">
                    {!imageError ? (
                        <img
                            src={CTAIMG}
                            alt="HR Consultant Professional"
                            className="business-img"
                            onLoad={handleImageLoad}
                            onError={handleImageError}
                            style={{ display: imageLoaded ? 'block' : 'none' }}
                        />
                    ) : null}

                    {(!imageLoaded || imageError) && (
                        <div className="placeholder-business-image">
                            <Briefcase className="business-icon" />
                            <div className="image-overlay"></div>
                        </div>
                    )}
                </div>
                <div className="floating-badge">
                    <TrendingUp size={12} />
                    <span>HR Expert</span>
                </div>
            </div>

            <div className="cta-content">
                <div className="cta-header">
                    <div className="icon-wrapper">
                        <Users className="main-icon" />
                    </div>
                </div>

                <h3 className="cta-title">
                    How We Can
                    <span className="highlight"> Help You!</span>
                </h3>

                <p className="cta-description" style={{ color: 'whitesmoke' }}>
                    Need a compliant and performance-driven HR system?
                </p>

                <div className="stats-row">
                    <div className="stat">
                        <span className="number">10+</span>
                        <span className="label">qualified staff</span>
                    </div>
                    <div className="divider"></div>
                    <div className="stat">
                        <span className="number">40+</span>
                        <span className="label">Years</span>
                    </div>
                    <div className="divider"></div>
                    <div className="stat">
                        <span className="number">98%</span>
                        <span className="label">Success</span>
                    </div>
                </div>

                <div className="cta-actions">
                    <Link
                        onClick={ClickHandler}
                        to="/contact"
                        className="primary-btn"
                    >
                        Contact Us
                        <ArrowRight className="btn-icon" />
                    </Link>

                    <Link
                        onClick={ClickHandler}
                        to="/services"
                        className="secondary-link"
                    >
                        View Services
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PremiumCTA;