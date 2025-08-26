import React from 'react';
import { Phone, Mail, Globe, Building2, Users, Briefcase, ArrowRight, Target, TrendingUp } from 'lucide-react';

const Blog4CTA = () => {
  return (
    <div className="container-fluid py-4 py-md-5 my-3 my-md-5 position-relative" style={{
      background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #1d4ed8 100%)'
    }}>
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-6 mb-3 mb-lg-0">
            <div className="text-white">
               <div className="mb-3 mb-md-4">
                <div className="d-flex align-items-start mb-3">
                  {/* <Phone size={35} className="me-3 text-warning" /> */}
                  <h2 className="mb-0 fw-bold" style={{
                    color:'white', 
                    fontWeight:'700',
                    fontSize: 'clamp(1.5rem, 4vw, 2.2rem)',
                    lineHeight: '1.2'
                  }}>
                  Ready to stay 100% HR compliant and stress-free?
                  </h2>
                </div>
                <p className="mb-0 opacity-90 lh-base" style={{
                  color:'#e0f2fe',
                  fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
                  fontWeight: '500'
                }}>
                  Contact <span className="text-warning fw-bold">Befirst HR & Management Consultancy</span> today for a free HR compliance consultation.
                </p>
              </div>
              
              {/* <div className="row g-3 mt-2">
                <div className="col-sm-6">
                  <div className="d-flex align-items-center bg-opacity-15 rounded-3 p-3 backdrop-blur" style={{backgroundColor:'#4865F1'}}>
                    <Target size={22} className="me-2 me-md-3 text-warning flex-shrink-0" />
                    <div>
                      <div className="fw-semibold small text-white">Targeted Hiring</div>
                      <small className="opacity-75 text-light" style={{fontSize: '0.75rem'}}>Quality Candidates</small>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center  bg-opacity-15 rounded-3 p-3 backdrop-blur" style={{backgroundColor:'#4865F1'}}>
                    <TrendingUp size={22} className="me-2 me-md-3 text-warning flex-shrink-0" />
                    <div>
                      <div className="fw-semibold small text-white">Faster Results</div>
                      <small className="opacity-75 text-light" style={{fontSize: '0.75rem'}}>50% Less Time</small>
                    </div>
                  </div>
                </div>
              </div> */}

            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="bg-white rounded-4 p-3 p-md-4 p-lg-5 shadow-xl border-0">
              <div className="text-center mb-3 mb-md-4">
                <h4 className="text-dark mb-2 fw-bold" style={{fontSize: 'clamp(1.1rem, 3vw, 1.5rem)'}}>
                  Get Started Today
                </h4>
                <p className="text-muted mb-0 small">Choose your preferred way to connect with our experts</p>
              </div>
              
              <div className="d-grid gap-2 gap-md-3">
                <a 
                  href="tel:+919400905954" 
                  className="btn btn-primary-custom btn-lg d-flex align-items-center justify-content-between text-decoration-none rounded-3 px-3 px-md-4 py-2 py-md-3 transition-all position-relative overflow-hidden"
                  style={{ 
                    backgroundColor: '#304FE9',
                    border: 'none',
                    color: 'white',
                    minHeight: '60px'
                  }}
                  onMouseEnter={(e) => {
                    if (window.innerWidth > 768) {
                      e.target.style.transform = 'translateY(-3px)';
                      e.target.style.boxShadow = '0 10px 25px rgba(48, 79, 233, 0.3)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  <div className="d-flex align-items-center flex-grow-1 min-width-0">
                    <Phone size={18} className="me-2 me-md-3 flex-shrink-0" />
                    <div className="text-start min-width-0">
                      <div className="fw-semibold" style={{fontSize: 'clamp(0.9rem, 2vw, 1rem)'}}>Call Us Now</div>
                      <small style={{ 
                        opacity: 0.8, 
                        fontSize: 'clamp(0.7rem, 1.5vw, 0.85rem)',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}>
                        +91 9400905954
                      </small>
                    </div>
                  </div>
                  <ArrowRight size={16} className="flex-shrink-0 ms-2" />
                </a>
                
                <a 
                  href="mailto:info@befirsthrm.com" 
                  className="btn btn-outline-primary-custom btn-lg d-flex align-items-center justify-content-between text-decoration-none rounded-3 px-3 px-md-4 py-2 py-md-3 transition-all"
                  style={{ 
                    border: '2px solid #304FE9',
                    color: '#304FE9',
                    backgroundColor: 'transparent',
                    minHeight: '60px'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#304FE9';
                    e.target.style.color = 'white';
                    if (window.innerWidth > 768) {
                      e.target.style.transform = 'translateY(-3px)';
                      e.target.style.boxShadow = '0 10px 25px rgba(48, 79, 233, 0.2)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = '#304FE9';
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  <div className="d-flex align-items-center flex-grow-1 min-width-0">
                    <Mail size={18} className="me-2 me-md-3 flex-shrink-0" />
                    <div className="text-start min-width-0">
                      <div className="fw-semibold" style={{fontSize: 'clamp(0.9rem, 2vw, 1rem)'}}>Send Email</div>
                      <small style={{ 
                        opacity: 0.7, 
                        fontSize: 'clamp(0.7rem, 1.5vw, 0.85rem)',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}>
                        info@befirsthrm.com
                      </small>
                    </div>
                  </div>
                  <ArrowRight size={16} className="flex-shrink-0 ms-2" />
                </a>
                
                <a 
                  href="https://www.befirsthrm.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-light-custom btn-lg d-flex align-items-center justify-content-between text-decoration-none rounded-3 px-3 px-md-4 py-2 py-md-3 transition-all"
                  style={{ 
                    backgroundColor: '#f8f9ff',
                    border: '2px solid #e8ecff',
                    color: '#304FE9',
                    minHeight: '60px'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#304FE9';
                    e.target.style.borderColor = '#304FE9';
                    e.target.style.color = 'white';
                    if (window.innerWidth > 768) {
                      e.target.style.transform = 'translateY(-3px)';
                      e.target.style.boxShadow = '0 10px 25px rgba(48, 79, 233, 0.15)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#f8f9ff';
                    e.target.style.borderColor = '#e8ecff';
                    e.target.style.color = '#304FE9';
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  <div className="d-flex align-items-center flex-grow-1 min-width-0">
                    <Globe size={18} className="me-2 me-md-3 flex-shrink-0" />
                    <div className="text-start min-width-0">
                      <div className="fw-semibold" style={{fontSize: 'clamp(0.9rem, 2vw, 1rem)'}}>Visit Website</div>
                      <small style={{ 
                        opacity: 0.7, 
                        fontSize: 'clamp(0.7rem, 1.5vw, 0.85rem)',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}>
                        www.befirsthrm.com
                      </small>
                    </div>
                  </div>
                  <ArrowRight size={16} className="flex-shrink-0 ms-2" />
                </a>
              </div>
              
              {/* <div className="text-center mt-3 mt-md-4 pt-3 pt-md-4" style={{ borderTop: '1px solid #f0f0f0' }}>
                <small className="text-muted d-block" style={{fontSize: 'clamp(0.7rem, 1.5vw, 0.8rem)'}}>
                  Available 24/7 for your business needs
                </small>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .min-width-0 {
          min-width: 0;
        }
        
        .bg-gradient-primary {
          background: linear-gradient(135deg, #304FE9 0%, #1e3ba8 50%, #162d7a 100%);
          position: relative;
          overflow: hidden;
        }
        
        .bg-gradient-primary::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
          pointer-events: none;
        }
        
        .transition-all {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .shadow-xl {
          box-shadow: 
            0 20px 25px -5px rgba(0, 0, 0, 0.1), 
            0 10px 10px -5px rgba(0, 0, 0, 0.04),
            0 0 0 1px rgba(48, 79, 233, 0.05);
        }
        
        .btn:hover {
          box-shadow: 0 15px 35px -8px rgba(48, 79, 233, 0.25);
        }
        
        .btn-primary-custom:hover::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          animation: shine 0.8s ease-in-out;
        }
        
        @keyframes shine {
          0% { left: -100%; }
          100% { left: 100%; }
        }
        
        /* Mobile optimizations */
        @media (max-width: 575.98px) {
          .container-fluid {
            padding-left: 15px;
            padding-right: 15px;
          }
          
          .btn {
            font-size: 0.9rem !important;
          }
          
          .btn small {
            font-size: 0.7rem !important;
          }
        }
        
        @media (max-width: 767.98px) {
          .bg-gradient-primary {
            text-align: center;
          }
          
          .btn:hover {
            transform: none !important;
            box-shadow: none !important;
          }
        }
        
        @media (min-width: 768px) and (max-width: 991.98px) {
          .btn {
            padding: 0.75rem 1rem !important;
          }
        }
        
        /* Prevent text overflow */
        .btn .text-start {
          overflow: hidden;
        }
        
        .btn .text-start div,
        .btn .text-start small {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          display: block;
        }
        
        /* Custom scrollbar */
        * {
          scrollbar-width: thin;
          scrollbar-color: #304FE9 #f1f1f1;
        }
        
        *::-webkit-scrollbar {
          width: 8px;
        }
        
        *::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 4px;
        }
        
        *::-webkit-scrollbar-thumb {
          background: #304FE9;
          border-radius: 4px;
        }
        
        *::-webkit-scrollbar-thumb:hover {
          background: #1e3ba8;
        }
        
        /* Focus states for accessibility */
        .btn:focus {
          outline: 2px solid #304FE9;
          outline-offset: 2px;
        }
        
        /* Improve button spacing on very small screens */
        @media (max-width: 374px) {
          .btn {
            min-height: 55px !important;
            padding: 0.5rem 0.75rem !important;
          }
          
          .btn .me-2,
          .btn .me-md-3 {
            margin-right: 0.5rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Blog4CTA;