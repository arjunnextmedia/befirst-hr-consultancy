import React, { useState, useEffect } from 'react';
import { 
  Users, 
  TrendingUp, 
  BarChart3, 
  Award, 
  UserCheck, 
  GraduationCap
} from 'lucide-react';
import { service as dummyServices } from '../data/dummyService';
import { Link } from 'react-router-dom';

// Map the dummy services to the format expected by the component
const serviceData = dummyServices.map((service, index) => {
  // Assign appropriate icons based on service ID or title
  let iconComponent;
  switch(service.id) {
    case 1:
      iconComponent = Users;
      break;
    case 2:
      iconComponent = TrendingUp;
      break;
    case 3:
      iconComponent = BarChart3;
      break;
    case 4:
      iconComponent = Award;
      break;
    case 5:
      iconComponent = UserCheck;
      break;
    case 6:
      iconComponent = GraduationCap;
      break;
    default:
      iconComponent = Users;
  }
  
  return {
    id: service.id,
    link: service.Link,
    icon: iconComponent,
    title: service.title,
    des: service.des,
    delay: index * 100 
  };
});

const ServiceCard = ({ service, index }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const IconComponent = service.icon;

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, service.delay);

        return () => clearTimeout(timer);
    }, [service.delay]);

    const cardStyle = {
        transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.95)',
        opacity: isVisible ? 1 : 0,
        transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        transitionDelay: `${service.delay}ms`,
    };

    const hoverStyle = {
        transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
        boxShadow: isHovered 
            ? '0 25px 50px rgba(51, 83, 239, 0.25)' 
            : '0 10px 30px rgba(51, 83, 239, 0.1)',
        transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    };

    return (
        <div className="col-lg-4 col-md-6 col-12 mb-4">
      <Link
        to={service.link}
        style={{ textDecoration: 'none' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="service-card h-100" style={{ ...cardStyle, ...hoverStyle }}>
          <div className="service-card-inner">
            {/* Icon Section */}
            <div className="service-icon-wrapper">
              <div
                className="service-icon"
                style={{
                  transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                  transition: 'all 0.3s ease'
                }}
              >
                <IconComponent size={28} color="white" />
              </div>
              <div className="icon-pulse"></div>
            </div>

            {/* Content Section */}
            <div className="service-content">
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.des}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
    );
};

const Services = () => {
    const [headerVisible, setHeaderVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setHeaderVisible(true);
        }, 200);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <style jsx>{`
                .wpo-service-section {
                    padding: 100px 0;
                    background: linear-gradient(135deg, #f8f9ff 0%, #e8edff 100%);
                    position: relative;
                    overflow: hidden;
                }

                .wpo-service-section::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="%233353EF" opacity="0.05"/></pattern></defs><rect width="100" height="100" fill="url(%23dots)"/></svg>');
                    pointer-events: none;
                }

                .wpo-section-title {
                    text-align: center;
                    margin-bottom: 60px;
                    transform: ${headerVisible ? 'translateY(0)' : 'translateY(-30px)'};
                    opacity: ${headerVisible ? 1 : 0};
                    transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                }

                .wpo-section-title span {
                    display: inline-block;
                    background: #3353EF;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    font-size: 16px;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    margin-bottom: 15px;
                    position: relative;
                }

                .wpo-section-title span::after {
                    content: '';
                    position: absolute;
                    bottom: -8px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 60px;
                    height: 3px;
                    background: #3353EF;
                    border-radius: 2px;
                }

                .wpo-section-title h2 {
                    font-size: 42px;
                    font-weight: 700;
                    color: #2c3e50;
                    margin: 0;
                    line-height: 1.2;
                }

                .service-card {
                    background: rgba(255, 255, 255, 0.9);
                    backdrop-filter: blur(15px);
                    border-radius: 20px;
                    border: 1px solid rgba(51, 83, 239, 0.1);
                    overflow: hidden;
                    position: relative;
                    height: 100%;
                    cursor: pointer;
                }

                .service-card::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 4px;
                    background: #3353EF;
                    z-index: 3;
                }

                .service-card-inner {
                    padding: 40px 30px;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    position: relative;
                    z-index: 2;
                    min-height: 280px;
                }

                .service-icon-wrapper {
                    position: relative;
                    margin-bottom: 25px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .service-icon {
                    width: 80px;
                    height: 80px;
                    background: #3353EF;
                    border-radius: 20px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                    z-index: 2;
                 
                }

                .icon-pulse {
                    position: absolute;
                    width: 80px;
                    height: 80px;
                    background: #3353EF;
                    border-radius: 20px;
                    opacity: 0.3;
                    animation: pulse 2s infinite;
                    z-index: 1;
                }

                @keyframes pulse {
                    0% {
                        transform: scale(1);
                        opacity: 0.3;
                    }
                    50% {
                        transform: scale(1.1);
                        opacity: 0.1;
                    }
                    100% {
                        transform: scale(1.2);
                        opacity: 0;
                    }
                }

                .service-content {
                    flex: 1;
                    text-align: center;
                }

                .service-title {
                    font-size: 24px;
                    font-weight: 700;
                    margin-bottom: 20px;
                    line-height: 1.3;
                    color: #2c3e50;
                    transition: all 0.3s ease;
                }

                .service-card:hover .service-title {
                    color: #3353EF;
                }

                .service-description {
                    color: #6c757d;
                    font-size: 15px;
                    line-height: 1.7;
                    margin: 0;
                }

                /* Responsive Design */
                @media (max-width: 768px) {
                    .wpo-service-section {
                        padding: 60px 0;
                    }
                    
                    .wpo-section-title h2 {
                        font-size: 32px;
                    }
                    
                    .service-card-inner {
                        padding: 30px 25px;
                        min-height: 260px;
                    }
                    
                    .service-title {
                        font-size: 20px;
                    }

                    .service-icon {
                        width: 70px;
                        height: 70px;
                    }

                    .icon-pulse {
                        width: 70px;
                        height: 70px;
                    }
                }

                @media (max-width: 576px) {
                    .service-card-inner {
                        padding: 25px 20px;
                        min-height: 240px;
                    }
                    
                    .service-icon {
                        width: 60px;
                        height: 60px;
                    }
                    
                    .icon-pulse {
                        width: 60px;
                        height: 60px;
                    }

                    .service-title {
                        font-size: 18px;
                    }

                    .service-description {
                        font-size: 14px;
                    }
                }
            `}</style>

            <section className="wpo-service-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="wpo-section-title">
                                <span>Our Services</span>
                                <h2>Explore Our Services</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {serviceData.map((service, index) => (
                            <ServiceCard 
                                key={service.id} 
                                service={service} 
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Services;