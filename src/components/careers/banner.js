import React, { useState, useEffect } from 'react';
import { Users, TrendingUp, Award, ArrowRight, Briefcase, Target, Star, Shield, Globe, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProfessionalBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentText, setCurrentText] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const navigate=useNavigate()

  const heroMessages = [
    {
      title: "Transform Your Business Future",
      subtitle: "Expert HR Solutions That Drive Success"
    },
    {
      title: "Elevate Your Career Journey",
      subtitle: "Premium Recruitment & Consulting Services"
    },
    {
      title: "Partner with Industry Leaders",
      subtitle: "Where Talent Meets Opportunity"
    }
  ];

  const achievements = [
    { number: "500+", text: "Successful Placements", icon: Target },
    { number: "98%", text: "Client Satisfaction", icon: Star },
    { number: "50+", text: "Corporate Partners", icon: Shield },
    { number: "5+", text: "Years Excellence", icon: Award }
  ];

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
    
    const textInterval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % heroMessages.length);
    }, 5000);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      clearInterval(textInterval);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section 
      className="position-relative overflow-hidden"
      style={{ 
        minHeight: '100vh',
        background: '#0a0e1a'
      }}
    >
      {/* Premium Background with Multiple Layers */}
      <div
        className="position-absolute w-100 h-100"
        style={{
          backgroundImage: `
            linear-gradient(
              135deg, 
              rgba(10, 14, 26, 0.95) 0%, 
              rgba(26, 32, 44, 0.85) 25%,
              rgba(45, 55, 72, 0.75) 50%,
              rgba(26, 32, 44, 0.85) 75%,
              rgba(10, 14, 26, 0.95) 100%
            ),
            url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          transform: `scale(1.05) translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      />

      {/* Dynamic Mesh Gradient Overlay */}
      <div
        className="position-absolute w-100 h-100"
        style={{
          background: `
            radial-gradient(circle at 20% 50%, rgba(66, 153, 225, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(49, 130, 206, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(66, 153, 225, 0.08) 0%, transparent 50%)
          `,
          animation: 'meshMove 15s ease-in-out infinite alternate'
        }}
      />

      {/* Animated Premium Particles */}
      <div className="position-absolute w-100 h-100">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="position-absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              background: `linear-gradient(45deg, rgba(66, 153, 225, ${0.4 + Math.random() * 0.4}), rgba(255, 255, 255, ${0.2 + Math.random() * 0.3}))`,
              borderRadius: '50%',
              animation: `premiumParticle ${8 + Math.random() * 12}s ease-in-out infinite ${Math.random() * 5}s`,
              filter: 'blur(0.5px)'
            }}
          />
        ))}
      </div>

      {/* Geometric Premium Elements */}
      <div className="position-absolute w-100 h-100">

        {/* Large rotating rings - Positioned on the right side */}
        <div
          className="position-absolute d-none d-lg-block"
          style={{
            top: '15%',
            right: '8%',
            width: '300px',
            height: '300px',
            border: '1px solid rgba(66, 153, 225, 0.1)',
            borderRadius: '50%',
            animation: 'premiumRotate 25s linear infinite'
          }}
        >
          <div
            className="position-absolute"
            style={{
              top: '50px',
              left: '50px',
              width: '200px',
              height: '200px',
              border: '1px solid rgba(66, 153, 225, 0.15)',
              borderRadius: '50%',
              animation: 'premiumRotate 20s linear infinite reverse'
            }}
          />
        </div>

        {/* Premium hexagon elements */}
        <div
          className="position-absolute d-none d-md-block"
          style={{
            bottom: '20%',
            left: '5%',
            width: '120px',
            height: '120px',
            background: 'linear-gradient(135deg, rgba(66, 153, 225, 0.05), rgba(255, 255, 255, 0.02))',
            clipPath: 'polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)',
            animation: 'premiumFloat 8s ease-in-out infinite',
            backdropFilter: 'blur(10px)'
          }}
        />
      </div>

      {/* Main Content */}
      <div 
        className="container-fluid position-relative" 
        style={{ 
          paddingTop: '20px', 
          paddingBottom: '120px', 
          zIndex: 10,
          paddingLeft: 'clamp(0px, 5vw, 80px)',
          paddingRight: 'clamp(20px, 5vw, 80px)'
        }}
      >
        <div className="row align-items-center min-vh-100">
          {/* Main Content - Left Positioned with Controlled Spacing */}
          <div className="col-12 col-lg-8 col-xl-7" style={{ marginLeft: 'clamp(10px, 8vw, 10px)' }}>
            <div 
              className="position-relative"
              style={{
                paddingLeft: 'clamp(0px, 4vw, 80px)',
                paddingRight: 'clamp(20px, 6vw, 120px)',
                maxWidth: '900px' // Controls maximum content width
              }}
            >
              {/* Hero Title */}
              <div
                className="mb-4"
                style={{
                  transform: isVisible ? 'translateX(0)' : 'translateX(80px)',
                  opacity: isVisible ? 1 : 0,
                  transition: 'all 1.2s cubic-bezier(0.165, 0.84, 0.44, 1) 0.3s'
                }}
              >
                <h1
                  className="display-2 fw-bold mb-3"
                  style={{
                    background: 'linear-gradient(135deg, #ffffff 0%, #4299e1 40%, #ffffff 80%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'white',
                    backgroundClip: 'text',
                    fontSize: 'clamp(2.2rem, 6vw, 4.5rem)',
                    lineHeight: '1.1',
                    textShadow: '0 4px 12px rgba(0,0,0,0.3)',
                    minHeight: 'clamp(120px, 15vw, 160px)',
                    display: 'flex',
                    alignItems: 'center',
                    letterSpacing: '-0.02em',
                    textAlign: 'left'
                  }}
                >
                  <span
                    key={currentText}
                    style={{
                      animation: 'premiumTextReveal 1s cubic-bezier(0.165, 0.84, 0.44, 1)'
                    }}
                  >
                    {heroMessages[currentText].title}
                  </span>
                </h1>
                
                <p
                  className="lead mb-0"
                  style={{
                    color: '#cbd5e0',
                    fontSize: 'clamp(1.1rem, 2.8vw, 1.5rem)',
                    fontWeight: '400',
                    lineHeight: '1.4',
                    animation: 'premiumSubtitleSlide 1s ease-out 0.5s both',
                    textAlign: 'left'
                  }}
                >
                  {heroMessages[currentText].subtitle}
                </p>
              </div>

              {/* Premium Description */}
              <div
                style={{
                  transform: isVisible ? 'translateX(0)' : 'translateX(80px)',
                  opacity: isVisible ? 1 : 0,
                  transition: 'all 1.4s cubic-bezier(0.165, 0.84, 0.44, 1) 0.6s'
                }}
              >
                <p
                  className="mb-5"
                  style={{
                    color: '#a0aec0',
                    fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
                    maxWidth: '580px',
                    lineHeight: '1.7',
                    textShadow: '0 1px 3px rgba(0,0,0,0.5)',
                    textAlign: 'left'
                  }}
                >
                  We don't just connect talent with opportunity — we architect career transformations 
                  and business excellence. Join Kerala's most trusted HR consultancy where your 
                  professional aspirations meet unparalleled expertise.
                </p>
              </div>

              {/* Premium Feature Grid */}
              <div
                className="row g-3 mb-5"
                style={{
                  transform: isVisible ? 'translateY(0)' : 'translateY(60px)',
                  opacity: isVisible ? 1 : 0,
                  transition: 'all 1.6s cubic-bezier(0.165, 0.84, 0.44, 1) 0.9s'
                }}
              >
                {[
                  { icon: Users, text: "Expert Team", desc: "Industry Veterans" },
                  { icon: TrendingUp, text: "Career Growth", desc: "Exponential Progress" },
                  { icon: Globe, text: "Global Network", desc: "International Reach" }
                ].map((item, index) => (
                  <div key={index} className="col-12 col-md-4">
                    <div
                      className="d-flex align-items-center p-3"
                      style={{
                        background: 'linear-gradient(135deg, rgba(66, 153, 225, 0.08), rgba(255, 255, 255, 0.02))',
                        border: '1px solid rgba(66, 153, 225, 0.15)',
                        borderRadius: '16px',
                        backdropFilter: 'blur(20px)',
                        animation: `premiumFeatureSlide 0.8s ease-out ${1.2 + index * 0.2}s both`,
                        cursor: 'pointer',
                        transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateX(10px) scale(1.02)';
                        e.currentTarget.style.backgroundColor = 'rgba(66, 153, 225, 0.12)';
                        e.currentTarget.style.borderColor = 'rgba(66, 153, 225, 0.3)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateX(0) scale(1)';
                        e.currentTarget.style.backgroundColor = 'rgba(66, 153, 225, 0.08)';
                        e.currentTarget.style.borderColor = 'rgba(66, 153, 225, 0.15)';
                      }}
                    >
                      <div
                        className="p-3 rounded-3 me-3 flex-shrink-0"
                        style={{
                          background: 'linear-gradient(135deg, #3656F4, #3182ce)',
                          boxShadow: '0 8px 25px rgba(66, 153, 225, 0.3)'
                        }}
                      >
                        <item.icon size={20} color="white" />
                      </div>
                      <div className="flex-grow-1">
                        <h6 className="mb-1" style={{ color: '#ffffff', fontWeight: '700', fontSize: 'clamp(0.9rem, 1.5vw, 1rem)' }}>
                          {item.text}
                        </h6>
                        <p className="mb-0" style={{ color: '#a0aec0', fontSize: 'clamp(0.8rem, 1.2vw, 0.9rem)' }}>
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Premium CTA Buttons */}
              <div
                className="d-flex flex-column flex-sm-row gap-3 gap-sm-4"
                style={{
                  transform: isVisible ? 'translateY(0)' : 'translateY(60px)',
                  opacity: isVisible ? 1 : 0,
                  transition: 'all 1.8s cubic-bezier(0.165, 0.84, 0.44, 1) 1.2s'
                }}
              >
                <button
                  className="btn btn-lg px-5 py-3 position-relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, #3656F4 0%, #3656F4 50%, #2c5aa0 100%)',
                    border: 'none',
                    color: 'white',
                    fontWeight: '700',
                    fontSize: 'clamp(0.5rem, 2vw, 1.2rem)',
                    borderRadius: '60px',
                    boxShadow: '0 15px 40px rgba(66, 153, 225, 0.4)',
                    transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)',
                    cursor: 'pointer',
                    minWidth: 'clamp(180px, 30vw, 220px)',
                    letterSpacing: '0.5px'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-8px) scale(1.05)';
                    e.target.style.boxShadow = '0 25px 50px rgba(66, 153, 225, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0) scale(1)';
                    e.target.style.boxShadow = '0 15px 40px rgba(66, 153, 225, 0.4)';
                  }}
                  onClick={()=> navigate('/contact')}
                >
                  <span className="d-flex align-items-center justify-content-center">
                    <Zap size={18} className="me-2" />
                    Get Started Now
                    <ArrowRight
                      size={18}
                      className="ms-2"
                      style={{
                        transition: 'transform 0.3s ease'
                      }}
                    />
                  </span>
                </button>

                <button
                  className="btn btn-lg btn-outline-light px-5 py-3"
                  style={{
                    borderWidth: '2px',
                    fontWeight: '600',
                    fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                    borderRadius: '60px',
                    transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)',
                    cursor: 'pointer',
                    minWidth: 'clamp(160px, 25vw, 200px)',
                    letterSpacing: '0.5px',
                    backdropFilter: 'blur(10px)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = 'white';
                    e.target.style.color = '#192652';
                    e.target.style.transform = 'translateY(-5px)';
                    e.target.style.boxShadow = '0 15px 30px rgba(255, 255, 255, 0.2)';
                    e.target.style.transition = 'all 0.3s ease';
                    // e.target.style.border = 'none';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = 'white';
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }}
                  onClick={()=> navigate('/services')}
                >
                  Explore Services
                    <ArrowRight
                      size={18}
                      className="ms-2"
                      style={{
                        transition: 'transform 0.3s ease'
                      }}
                    />
                </button>
              </div>

              {/* Achievement Stats - Mobile/Tablet */}
              <div className="row g-3 mt-5 d-lg-none">
                {achievements.slice(0, 2).map((item, index) => (
                  <div key={index} className="col-6">
                    <div
                      className="text-center p-3 rounded-4"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(66, 153, 225, 0.05))',
                        backdropFilter: 'blur(25px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                        animation: `premiumStatsSlide 1s ease-out ${1.8 + index * 0.2}s both`
                      }}
                    >
                      <div
                        className="mx-auto mb-2"
                        style={{
                          width: '40px',
                          height: '40px',
                          background: 'linear-gradient(135deg, #4299e1, #3182ce)',
                          borderRadius: '16px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0 8px 25px rgba(66, 153, 225, 0.4)'
                        }}
                      >
                        <item.icon size={20} color="white" />
                      </div>
                      <h4
                        className="mb-1"
                        style={{
                          color: '#ffffff',
                          fontWeight: '800',
                          fontSize: 'clamp(1.3rem, 3vw, 1.8rem)'
                        }}
                      >
                        {item.number}
                      </h4>
                      <p
                        className="mb-0"
                        style={{
                          color: '#cbd5e0',
                          fontSize: 'clamp(0.8rem, 1.5vw, 0.9rem)',
                          fontWeight: '500'
                        }}
                      >
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Premium Custom Styles */}
      <style jsx>{`
        @keyframes meshMove {
          0%, 100% { 
            transform: translateX(0%) translateY(0%); 
          }
          25% { 
            transform: translateX(5%) translateY(-2%); 
          }
          50% { 
            transform: translateX(-2%) translateY(5%); 
          }
          75% { 
            transform: translateX(-5%) translateY(-2%); 
          }
        }

        @keyframes premiumParticle {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) scale(1);
            opacity: 0.3;
          }
          25% { 
            transform: translateY(-40px) translateX(20px) scale(1.2);
            opacity: 0.8;
          }
          50% { 
            transform: translateY(-80px) translateX(-10px) scale(0.8);
            opacity: 1;
          }
          75% { 
            transform: translateY(-40px) translateX(30px) scale(1.1);
            opacity: 0.6;
          }
        }

        @keyframes premiumRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes premiumFloat {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          50% { 
            transform: translateY(-40px) rotate(180deg); 
          }
        }

        @keyframes premiumGlow {
          0%, 100% { 
            box-shadow: 0 8px 32px rgba(66, 153, 225, 0.1);
          }
          50% { 
            box-shadow: 0 8px 32px rgba(66, 153, 225, 0.2);
          }
        }

        @keyframes premiumPulse {
          0%, 100% { 
            transform: scale(1);
            opacity: 1;
          }
          50% { 
            transform: scale(1.2);
            opacity: 0.8;
          }
        }

        @keyframes premiumTextReveal {
          0% { 
            opacity: 0;
            transform: translateY(40px) rotateX(90deg);
          }
          100% { 
            opacity: 1;
            transform: translateY(0) rotateX(0deg);
          }
        }

        @keyframes premiumSubtitleSlide {
          0% { 
            opacity: 0;
            transform: translateX(50px);
          }
          100% { 
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes premiumFeatureSlide {
          0% {
            opacity: 0;
            transform: translateX(80px) scale(0.8);
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @keyframes premiumStatsSlide {
          0% {
            opacity: 0;
            transform: translateY(80px) scale(0.8);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes premiumIconRotate {
          0%, 100% { 
            transform: rotateY(0deg); 
          }
          50% { 
            transform: rotateY(180deg); 
          }
        }

        @keyframes premiumBadgeFloat {
          0%, 100% { 
            transform: translateY(0px); 
          }
          50% { 
            transform: translateY(-15px); 
          }
        }

        .btn:hover .lucide-arrow-right {
          transform: translateX(8px);
        }

        /* Mobile Optimizations */
        @media (max-width: 576px) {
          .container-fluid_banner {
            padding-top: 60px !important;
            padding-bottom: 80px !important;
            padding-left: 8px !important;
            padding-right: 8px !important;
          }
          
          .btn {
            padding: 12px 24px !important;
            min-width: 100% !important;
          }
          
          .d-flex.flex-column.flex-sm-row {
            gap: 15px !important;
          }
        }

        /* Tablet Optimizations */
        @media (min-width: 577px) and (max-width: 991px) {
          .container-fluid_banner {
            padding-top: 80px !important;
            padding-bottom: 100px !important;
          }
        }

        /* Desktop Fine-tuning */
        @media (min-width: 1200px) {
          .container-fluid_banner {
            max-width: 1400px;
            margin: 0 auto;
          }
        }

        @media (min-width: 1400px) {
          .container-fluid_banner {
            max-width: 1600px;
          }
        }
      `}</style>
    </section>
  );
};

export default ProfessionalBanner;