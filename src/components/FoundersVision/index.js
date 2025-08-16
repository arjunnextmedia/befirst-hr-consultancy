import React, { useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Award, Users, Globe, TrendingUp, Target, Heart, Zap, Brain } from 'lucide-react';
import img1 from '../../images/about2/founderImg.png'; // Update with the correct path to your image

const FoundersVision = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .founder-hero {
        background: white;
        padding: 70px 0 12px 0;
        color: #1e293b;
        position: relative;
        overflow: hidden;
      }
      
      .founder-image-container {
        position: relative;
        max-width: 400px;
        margin: 0 auto;
        z-index: 2;
      }
      
      .founder-image {
        width: 100%;
        height: 450px;
        background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
        border-radius: 20px;
        border: 4px solid #e2e8f0;
        box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        color: #64748b;
        transition: transform 0.3s ease;
        overflow: hidden;
        position: relative;
      }
      
      .founder-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 16px; /* Slightly less than the container to account for border */
      }
      
      .founder-content {
        z-index: 2;
        position: relative;
      }
      
      .founder-name {
        font-size: 4rem;
        font-weight: 800;
        margin-bottom: 20px;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        line-height: 1.1;
      }
      
      .founder-title {
        font-size: 1.5rem;
        opacity: 0.95;
        margin-bottom: 30px;
        font-weight: 300;
        letter-spacing: 0.5px;
      }
      
      .founder-subtitle {
        font-size: 2rem;
        font-weight: 800;
        margin-bottom: 30px;
        opacity: 0.9;
        line-height: 1.3;
        color: #1e293b;
      }
      
      .experience-highlights {
        background: #f8fafc;
        padding: 30px;
        border-radius: 15px;
        margin: 40px 0;
        border: 2px solid #e2e8f0;
      }
      
      .experience-item {
        display: flex;
        align-items: center;
        margin-bottom: 15px;
        font-size: 1.1rem;
        font-weight: 500;
        color: #1e293b;
      }
      
      .experience-item:last-child {
        margin-bottom: 0;
      }
      
      .experience-icon {
        margin-right: 15px;
        color: #3b82f6;
      }
      
      .story-section {
        padding: 100px 0;
        background: white;
      }
      
      .section-title {
        font-size: 3.2rem;
        font-weight: 700;
        color: #1e293b;
        margin-bottom: 20px;
        line-height: 1.2;
      }
      
      .section-subtitle {
        font-size: 1.3rem;
        color: #64748b;
        margin-bottom: 8px;
        font-weight: 400;
        line-height: 1.6;
      }
      
      .story-content {
        font-size: 1.2rem;
        line-height: 1.8;
        color: #475569;
        margin-bottom: 40px;
      }
      
      .story-content p {
        margin-bottom: 30px;
      }
      
      .highlight-text {
        background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
        padding: 30px;
        border-left: 5px solid #3b82f6;
        border-radius: 0 15px 15px 0;
        margin: 40px 0;
        font-size: 1.25rem;
        line-height: 1.7;
        color: #1e40af;
        font-weight: 500;
      }
      
      .bringing-expertise-section {
        background: #fafafa;
        padding: 20px 0 100px 0;
      }
      
      .expertise-grid {
        margin-top: 60px;
      }
      
      .expertise-item {
        background: white;
        padding: 40px 30px;
        border-radius: 15px;
        margin-bottom: 30px;
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.06);
        border-left: 4px solid #3b82f6;
        transition: all 0.3s ease;
      }
      
      .expertise-item:hover {
        transform: translateY(-5px);
        box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
      }
      
      .expertise-item h4 {
        color: #1e3a8a;
        font-size: 1.4rem;
        font-weight: 600;
        margin-bottom: 15px;
        display: flex;
        align-items: center;
      }
      
      .expertise-item p {
        color: #64748b;
        font-size: 1.1rem;
        line-height: 1.6;
        margin-bottom: 0;
      }
      
      .expertise-icon {
        margin-right: 15px;
        color: #3b82f6;
      }
      
      .mission-section {
        background: white;
        padding: 20px 0 100px 0;
        color: #1e293b;
        text-align: center;
      }
      
      .mission-content {
        max-width: 800px;
        margin: 0 auto;
      }
      
      .mission-icon {
        width: 100px;
        height: 100px;
        background: #f8fafc;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 40px;
        border: 2px solid #e2e8f0;
      }
      
      .cta-section {
        background: #fafafa;
        padding: 80px 0;
        text-align: center;
      }
      
      .cta-button {
        background: linear-gradient(135deg, #3b82f6, #1e40af);
        color: white;
        padding: 18px 45px;
        border-radius: 50px;
        font-weight: 600;
        text-decoration: none;
        display: inline-block;
        transition: all 0.3s ease;
        border: none;
        font-size: 1.2rem;
        box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);
      }
      
      .cta-button:hover {
        background: linear-gradient(135deg, #2563eb, #1d4ed8);
        color: white;
        transform: translateY(-3px);
        box-shadow: 0 12px 35px rgba(59, 130, 246, 0.4);
        text-decoration: none;
      }
      
      .stats-row {
        margin-top: 40px;
        text-align: center;
      }
      
      .stat-item {
        margin-bottom: 20px;
      }
      
      .stat-number {
        display: block;
        font-size: 3rem;
        font-weight: 700;
        color: #1e293b;
        margin-bottom: 5px;
      }
      
      .stat-label {
        font-size: 1.1rem;
        color: #64748b;
      }
      
      @media (max-width: 768px) {
        .founder-hero {
          padding: 80px 0;
        }
        
        .founder-name {
          font-size: 2.8rem;
        }
        
        .section-title {
          font-size: 2.4rem;
        }
        
        .story-section, .bringing-expertise-section, .mission-section {
          padding: 70px 0;
        }
        
        .expertise-item {
          margin-bottom: 20px;
        }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="founder-page">
      {/* Hero Section */}
      <section className="founder-hero">
        <Container>
          <Row className="align-items-center">
            <Col lg={5} className="mb-5 mb-lg-0">
              <div className="founder-image-container">
                <div className="founder-image">
                  {/* Replace this div with your actual image */}
                  <img 
                    src={img1}
                    alt="Mr. Abdurahman Charummal" 
                    className="img-fluid"
                  />
                </div>
                <div className="text-center mt-4">
                  <h3 style={{fontSize: '2rem', fontWeight: '700', color: '#1e293b', marginBottom: '8px'}}>
                    Mr. Abdurahman Charummal
                  </h3>
                  <p style={{fontSize: '1.2rem', color: '#64748b', fontWeight: '500', marginBottom: '0'}}>
                    Founder & CEO
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={7}>
              <div className="founder-content">
                <div className="text-center text-lg-start mb-4">
                  <p className="founder-subtitle">A Legacy of Leadership and Excellence in Global Energy and Utilities</p>
                </div>
                
                <div className="experience-highlights">
                  <div className="experience-item">
                    <Award className="experience-icon" size={24} />
                    <span>Over 40 Years of Corporate Excellence</span>
                  </div>
                  <div className="experience-item">
                    <Globe className="experience-icon" size={24} />
                    <span>Key Executive Roles at Qatar Energy and Kahramaa</span>
                  </div>
                  <div className="experience-item">
                    <Users className="experience-icon" size={24} />
                    <span>Led Multinational Corporations with 10,000+ Employees</span>
                  </div>
                  <div className="experience-item">
                    <TrendingUp className="experience-icon" size={24} />
                    <span>Master of Complex, High-Impact Operations</span>
                  </div>
                </div>
                
                <Row className="stats-row">
                  <Col sm={3} xs={6}>
                    <div className="stat-item">
                      <span className="stat-number">40+</span>
                      <span className="stat-label">Years</span>
                    </div>
                  </Col>
                  <Col sm={3} xs={6}>
                    <div className="stat-item">
                      <span className="stat-number">10K+</span>
                      <span className="stat-label">Employees</span>
                    </div>
                  </Col>
                  <Col sm={3} xs={6}>
                    <div className="stat-item">
                      <span className="stat-number">2</span>
                      <span className="stat-label">Major Corps</span>
                    </div>
                  </Col>
                  <Col sm={3} xs={6}>
                    <div className="stat-item">
                      <span className="stat-number">∞</span>
                      <span className="stat-label">Impact</span>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="text-center mb-5">
                <h2 className="section-title">Our Founder's Story</h2>
                <p className="section-subtitle">A visionary leader with unparalleled experience in global energy and utilities management</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={10} className="mx-auto">
              <div className="story-content">
                <p>
                  With an illustrious career spanning <strong>over 40 years</strong>, Mr. Abdurahman stands as a beacon of leadership and expertise in the corporate world. Having held <strong>key executive roles at Qatar Energy and Kahramaa (Qatar General Water and Electricity Corporation)</strong>, he has been at the helm of some of the most complex, high-impact operations in the Middle East.
                </p>
                
                <div className="highlight-text">
                  Leading multinational corporations with more than 10,000 employees, Mr. Abdurahman mastered the art of people management, organizational development, and strategic growth on a massive scale. His proven ability to drive operational excellence, nurture talent, and build resilient teams has earned him respect across industries and geographies.
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Bringing Expertise Section */}
      <section className="bringing-expertise-section">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="text-center mb-5">
                <h2 className="section-title">Bringing World-Class Expertise to Kerala and India</h2>
                <p className="section-subtitle">Empowering SMEs and growing businesses with the same strategic HR leadership that fuels global giants</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={10} className="mx-auto">
              <div className="story-content">
                <p>
                  Leveraging this unparalleled experience, Mr. Abdurahman founded <strong>Befirst HR and Management Consultancy</strong> with a clear mission: to empower <strong>SMEs and growing businesses in Kerala and India</strong> with the same level of strategic HR leadership that fuels global giants.
                </p>
                
                <p>
                  He understands that every business, regardless of size, thrives when guided by sound people management practices — from recruitment to compliance, training, and leadership development. His global insights, combined with a deep appreciation for local business culture, enable Befirst HRM to deliver tailored, impactful solutions.
                </p>
              </div>
              
              <div className="expertise-grid">
                <h3 className="text-center mb-5" style={{fontSize: '2.5rem', color: '#1e3a8a', fontWeight: '700'}}>
                  Why Mr. Abdurahman is a Major Asset to Befirst HRM
                </h3>
                
                <Row>
                  <Col md={6} className="mb-4">
                    <div className="expertise-item">
                      <h4><Target className="expertise-icon" size={28} />Strategic Vision</h4>
                      <p>Proven ability to align HR with business objectives in complex environments.</p>
                    </div>
                  </Col>
                  <Col md={6} className="mb-4">
                    <div className="expertise-item">
                      <h4><Heart className="expertise-icon" size={28} />People-Centric Leadership</h4>
                      <p>Expertise in building diverse, motivated, and high-performing teams.</p>
                    </div>
                  </Col>
                  <Col md={6} className="mb-4">
                    <div className="expertise-item">
                      <h4><Zap className="expertise-icon" size={28} />Operational Excellence</h4>
                      <p>Skilled in streamlining processes to improve efficiency and productivity.</p>
                    </div>
                  </Col>
                  <Col md={6} className="mb-4">
                    <div className="expertise-item">
                      <h4><Brain className="expertise-icon" size={28} />Cultural Intelligence</h4>
                      <p>Navigates global corporate frameworks while embracing local nuances.</p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="mission-content">
                <h2 className="section-title mb-4">A Partner in Your Growth Journey</h2>
                <p className="lead" style={{fontSize: '1.4rem', lineHeight: '1.7', color: '#64748b'}}>
                  At Befirst HR, Mr. Abdurahman leads a dedicated team committed to transforming HR from a business cost to a growth catalyst. His story is not just about decades of leadership — it's about <strong style={{color: '#1e293b'}}>bringing that leadership to you</strong>, to help your business attract the right talent, develop effective teams, and scale sustainably in today's competitive markets.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default FoundersVision;