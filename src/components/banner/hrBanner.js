import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import CountUp from 'react-countup';
import { Users, Award, CheckCircle, TrendingUp, Shield, Star, UserCheck, Briefcase } from 'lucide-react';

const HRBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [countersVisible, setCountersVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    setTimeout(() => setCountersVisible(true), 500);
  }, []);

  const stats = [
    {
      number: 850,
      title: 'Resolved Partner Cases',
      icon: <UserCheck className="stat-icon" />
    },
    {
      number: 125,
      title: 'Successful Placements',
      icon: <Award className="stat-icon" />
    },
    {
      number: 40,
      suffix: '+',
      title: 'Years Experience',
      icon: <TrendingUp className="stat-icon" />
    },
    {
      number: 2500,
      suffix: '+',
      title: 'Transformation Hours',
      icon: <Briefcase className="stat-icon" />
    }
  ];

  return (
    <div className="premium-hr-banner">
      {/* Background Elements */}
      <div className="bg-overlay"></div>
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
      </div>
      
      {/* Particle Effects */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className={`particle particle-${i + 1}`}></div>
        ))}
      </div>

      <Container className="banner-content h-100">
        <Row className="align-items-center h-100 banner-row">
          <Col lg={7} md={6} className="content-section">
            <div className={`mission-content ${isVisible ? 'fade-in-up' : ''}`}>
              <h1 className="mission-title">
                Mission: <span className="highlight">Safeguarding</span><br />
                Your <span className="highlight">Career</span> &<br />
                Beyond
              </h1>
              
              <p className="mission-description">
                Empowering professionals and businesses through strategic HR solutions, 
                comprehensive talent management, and transformative career guidance.
              </p>
            </div>
          </Col>

          <Col lg={5} md={6} className="visual-section">
            <Row className="stats-grid">
              {stats.map((stat, index) => (
                <Col xs={6} key={index} className="mb-3">
                  <div className={`stat-card-compact ${countersVisible ? 'visible' : ''}`}>
                    <div className="stat-icon-wrapper-compact">
                      {stat.icon}
                    </div>
                    <div className="stat-number-compact">
                      {countersVisible && (
                        <CountUp 
                          end={stat.number} 
                          duration={2.5}
                          enableScrollSpy={false}
                          preserveValue={true}
                        />
                      )}
                      <span className="suffix">{stat.suffix || ''}</span>
                    </div>
                    <div className="stat-title-compact">{stat.title}</div>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>

      <style jsx>{`
        .premium-hr-banner {
          background: linear-gradient(135deg, #3274DA 0%, #336BE1 50%, #3352EF 100%);
          height: 500px;
          position: relative;
          overflow: hidden;
          color: white;
          display: flex;
          align-items: center;
        }

        .bg-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><defs><radialGradient id="grad1" cx="50%" cy="50%" r="50%"><stop offset="0%" style="stop-color:%23ffffff;stop-opacity:0.1" /><stop offset="100%" style="stop-color:%23ffffff;stop-opacity:0" /></radialGradient></defs><ellipse cx="600" cy="400" rx="600" ry="400" fill="url(%23grad1)" /></svg>');
          opacity: 0.3;
        }

        .floating-shapes {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
        }

        .shape {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          animation: float-shape 8s ease-in-out infinite;
        }

        .shape-1 {
          width: 120px;
          height: 120px;
          top: 10%;
          right: 10%;
          animation-delay: 0s;
        }

        .shape-2 {
          width: 80px;
          height: 80px;
          top: 60%;
          left: 5%;
          animation-delay: 2s;
        }

        .shape-3 {
          width: 100px;
          height: 100px;
          top: 20%;
          left: 20%;
          animation-delay: 4s;
        }

        .shape-4 {
          width: 60px;
          height: 60px;
          bottom: 20%;
          right: 20%;
          animation-delay: 6s;
        }

        @keyframes float-shape {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.1; }
          50% { transform: translateY(-30px) rotate(180deg); opacity: 0.3; }
        }

        .particles {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
        }

        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: rgba(255, 255, 255, 0.6);
          border-radius: 50%;
          animation: particle-float 6s linear infinite;
        }

        ${[...Array(20)].map((_, i) => `
          .particle-${i + 1} {
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation-delay: ${Math.random() * 6}s;
            animation-duration: ${4 + Math.random() * 4}s;
          }
        `).join('')}

        @keyframes particle-float {
          0% { transform: translateY(0px) scale(1); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100px) scale(0.5); opacity: 0; }
        }

        .banner-content {
          position: relative;
          z-index: 2;
          height: 100%;
        }

        .banner-row {
          height: 100%;
        }

        .mission-content {
          opacity: 0;
          transform: translateY(30px);
          transition: all 1s ease-out;
        }

        .mission-content.fade-in-up {
          opacity: 1;
          transform: translateY(0);
        }

        .mission-title {
          font-size: 4.2rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1rem;
          color: white;
        }

        .highlight {
          background: linear-gradient(135deg, #fbbf24, #f59e0b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          position: relative;
        }

        .mission-description {
          font-size: 1rem;
          line-height: 1.5;
          margin-bottom: 1.5rem;
          color: rgba(255, 255, 255, 0.9);
          max-width: 450px;
        }

        .stats-grid {
          height: 100%;
          align-content: center;
        }

        .stat-card-compact {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(15px);
          border-radius: 16px;
          padding: 1.5rem 1rem;
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s ease-out;
          height: 140px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .stat-card-compact.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .stat-card-compact:nth-child(odd) { 
          transition-delay: 0.1s; 
          background: rgba(60, 137, 223, 0.2);
        }
        .stat-card-compact:nth-child(even) { 
          transition-delay: 0.2s; 
          background: rgba(51, 82, 239, 0.2);
        }

        .stat-icon-wrapper-compact {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.1));
          width: 40px;
          height: 40px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 0.75rem;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .stat-icon-wrapper-compact .stat-icon {
          color: #fbbf24;
          width: 18px;
          height: 18px;
        }

        .stat-number-compact {
          font-size: 1.8rem;
          font-weight: 800;
          color: white;
          margin-bottom: 0.5rem;
          line-height: 1;
        }

        .suffix {
          font-size: 1.2rem;
          color: #fbbf24;
        }

        .stat-title-compact {
          font-size: 0.8rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.2;
        }

        /* Large screens (1200px and up) */
        @media (max-width: 1199px) {
          .mission-title {
            font-size: 3.5rem;
          }
        }

        /* Medium screens (992px to 1199px) */
        @media (max-width: 1199px) and (min-width: 992px) {
          .mission-title {
            font-size: 3rem;
          }
          
          .mission-description {
            font-size: 0.95rem;
          }
        }

        /* Tablets (768px to 991px) */
        @media (max-width: 991px) {
          .premium-hr-banner {
            height: 600px;
          }

          .mission-title {
            font-size: 2.8rem;
          }
          
          .mission-description {
            font-size: 0.95rem;
          }
          
          .stat-card-compact {
            height: 130px;
            padding: 1.2rem 0.8rem;
          }
          
          .stat-number-compact {
            font-size: 1.6rem;
          }
          
          .stat-title-compact {
            font-size: 0.75rem;
          }
        }

        /* Small tablets and large phones (576px to 767px) */
        @media (max-width: 767px) {
          .premium-hr-banner {
            height: 700px;
            padding: 2rem 0;
          }
          
          .banner-row {
            flex-direction: column;
            height: auto;
          }
          
          .content-section {
            margin-bottom: 2rem;
            text-align: center;
          }
          
          .mission-title {
            font-size: 2.2rem;
            margin-bottom: 1rem;
            text-align: center;
          }
          
          .mission-description {
            margin-bottom: 1.5rem;
            font-size: 0.9rem;
            text-align: center;
            max-width: 100%;
          }
          
          .visual-section {
            margin-top: 1rem;
          }
          
          .stats-grid {
            margin-top: 0;
            align-content: flex-start;
          }
          
          .stat-card-compact {
            height: 120px;
            padding: 1rem 0.8rem;
            margin-bottom: 1rem;
          }
          
          .stat-number-compact {
            font-size: 1.4rem;
          }
          
          .stat-title-compact {
            font-size: 0.75rem;
          }
        }

        /* Mobile phones (up to 575px) */
        @media (max-width: 575px) {
          .premium-hr-banner {
            height: 750px;
            padding: 1.5rem 0;
          }
          
          .banner-content {
            padding: 0 15px;
          }
          
          .content-section {
            margin-bottom: 2rem;
          }
          
          .mission-title {
            font-size: 1.8rem;
            line-height: 1.2;
            margin-bottom: 1rem;
          }
          
          .mission-description {
            font-size: 0.85rem;
            line-height: 1.4;
            margin-bottom: 1.5rem;
          }
          
          .visual-section {
            width: 100%;
          }
          
          .stats-grid .col-6 {
            padding-left: 0.5rem;
            padding-right: 0.5rem;
          }
          
          .stat-card-compact {
            height: 110px;
            padding: 0.8rem 0.5rem;
            margin-bottom: 1rem;
          }
          
          .stat-icon-wrapper-compact {
            width: 35px;
            height: 35px;
            margin-bottom: 0.5rem;
          }
          
          .stat-icon-wrapper-compact .stat-icon {
            width: 16px;
            height: 16px;
          }
          
          .stat-number-compact {
            font-size: 1.3rem;
            margin-bottom: 0.3rem;
          }
          
          .stat-title-compact {
            font-size: 0.7rem;
            line-height: 1.1;
          }
        }

        /* Extra small phones (up to 375px) */
        @media (max-width: 375px) {
          .premium-hr-banner {
            height: 800px;
          }
          
          .mission-title {
            font-size: 1.5rem;
          }
          
          .mission-description {
            font-size: 0.8rem;
          }
          
          .stat-card-compact {
            height: 100px;
            padding: 0.7rem 0.4rem;
          }
          
          .stat-number-compact {
            font-size: 1.2rem;
          }
          
          .stat-title-compact {
            font-size: 0.65rem;
          }
        }
      `}</style>
    </div>
  );
};

export default HRBanner;