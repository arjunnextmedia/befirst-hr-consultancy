import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { featres } from '../data/dummyFeatureCard';

const Features = (props) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-out-cubic',
            once: true,
            offset: 100
        });
    }, []);

    // Brand Colors (Custom Blue Theme)
    const brandColors = {
        primary: '#3F95DE', // Your specified primary blue
        secondary: '#2F4EE6', // Lighter supporting blue
        accent: '#5B75F2', // Even lighter accent blue
        tertiary: '#2A44DC', // Darker supporting blue
        dark: '#1E1B3A', // Dark navy from your design
        light: '#F8FAFC',
        text: '#374151',
        textLight: '#2F4EE6'
    };

    // Base card styles
    const cardStyle = {
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '16px',
        transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
        cursor: 'pointer',
        background: 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
        border: `1px solid ${brandColors.primary}1A`,
        boxShadow: `0 4px 20px ${brandColors.primary}15`,
        padding: '2rem',
        height: '100%',
        zIndex: 1,
    };

    // Enhanced hover styles
    const getCardHoverStyle = (isHovered) => ({
        ...cardStyle,
        transform: isHovered ? 'translateY(-12px) scale(1.03)' : 'translateY(0) scale(1)',
        boxShadow: isHovered 
            ? `0 25px 50px ${brandColors.primary}40, 0 0 0 1px ${brandColors.primary}20` 
            : `0 4px 20px ${brandColors.primary}15`,
        background: isHovered 
            ? 'linear-gradient(145deg, #ffffff 0%, #f1f5f9 100%)' 
            : 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
    });

    // Premium overlay effect
    const overlayStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `linear-gradient(135deg, 
            ${brandColors.primary}18 0%, 
            ${brandColors.secondary}22 25%,
            ${brandColors.accent}18 50%,
            ${brandColors.tertiary}15 100%)`,
        opacity: 0,
        transition: 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
        zIndex: 2,
        pointerEvents: 'none',
        borderRadius: '16px',
    };

    const getOverlayHoverStyle = (isHovered) => ({
        ...overlayStyle,
        opacity: isHovered ? 1 : 0,
    });

    // Sophisticated ripple effect
    const rippleContainerStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: 0,
        height: 0,
        background: `radial-gradient(circle, 
            ${brandColors.primary}30 0%, 
            ${brandColors.secondary}20 30%,
            ${brandColors.accent}10 60%,
            transparent 100%)`,
        borderRadius: '50%',
        transform: 'translate(-50%, -50%)',
        transition: 'all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        zIndex: 2,
        pointerEvents: 'none',
    };

    const getRippleHoverStyle = (isHovered) => ({
        ...rippleContainerStyle,
        width: isHovered ? '400px' : 0,
        height: isHovered ? '400px' : 0,
        opacity: isHovered ? 1 : 0,
    });

    // Icon container with premium styling
    const iconContainerStyle = {
        position: 'relative',
        zIndex: 3,
        transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
        marginBottom: '1.5rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const getIconHoverStyle = (isHovered) => ({
        ...iconContainerStyle,
        transform: isHovered ? 'scale(1.15) rotate(3deg)' : 'scale(1) rotate(0deg)',
    });

    const iconWrapperStyle = {
        width: '80px',
        height: '80px',
        borderRadius: '20px',
        background: `linear-gradient(135deg, ${brandColors.primary} 0%, ${brandColors.secondary} 100%)`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'all 0.4s ease',
        boxShadow: `0 8px 25px ${brandColors.primary}50`,
    };

    const getIconWrapperHoverStyle = (isHovered) => ({
        ...iconWrapperStyle,
        background: isHovered 
            ? `linear-gradient(135deg, ${brandColors.secondary} 0%, ${brandColors.accent} 100%)`
            : `linear-gradient(135deg, ${brandColors.primary} 0%, ${brandColors.secondary} 100%)`,
        boxShadow: isHovered 
            ? `0 15px 40px ${brandColors.primary}70, 0 0 0 8px ${brandColors.primary}20`
            : `0 8px 25px ${brandColors.primary}50`,
        transform: isHovered ? 'scale(1.1)' : 'scale(1)',
    });

    const iconImageStyle = {
        width: '40px',
        height: '40px',
        filter: 'brightness(0) invert(1)',
        transition: 'all 0.3s ease',
    };

    // Text styling
    const textContainerStyle = {
        position: 'relative',
        zIndex: 3,
        textAlign: 'center',
    };

    const titleStyle = {
        fontSize: '1.5rem',
        fontWeight: '700',
        color: brandColors.dark,
        marginBottom: '1rem',
        transition: 'all 0.4s ease',
        lineHeight: '1.3',
    };

    const getTitleHoverStyle = (isHovered) => ({
        ...titleStyle,
        color: isHovered ? brandColors.primary : brandColors.dark,
        transform: isHovered ? 'translateY(-3px)' : 'translateY(0)',
    });

    const descriptionStyle = {
        fontSize: '1rem',
        color: brandColors.textLight,
        lineHeight: '1.6',
        transition: 'all 0.4s ease 0.1s',
        margin: 0,
    };

    const getDescriptionHoverStyle = (isHovered) => ({
        ...descriptionStyle,
        color: isHovered ? brandColors.text : brandColors.textLight,
        transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
    });

    // Premium glow effect
    const glowEffectStyle = {
        position: 'absolute',
        top: '-3px',
        left: '-3px',
        right: '-3px',
        bottom: '-3px',
        background: `linear-gradient(45deg, 
            ${brandColors.primary}, 
            ${brandColors.secondary}, 
            ${brandColors.accent}, 
            ${brandColors.tertiary})`,
        backgroundSize: '400% 400%',
        borderRadius: '19px',
        opacity: 0,
        zIndex: -1,
        transition: 'opacity 0.5s ease',
        animation: 'gradientFlow 4s ease infinite',
    };

    const getGlowHoverStyle = (isHovered) => ({
        ...glowEffectStyle,
        opacity: isHovered ? 0.15 : 0,
    });

    // Floating particles effect
    const particlesStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'none',
        zIndex: 2,
        opacity: 0,
        transition: 'opacity 0.5s ease',
    };

    const getParticlesHoverStyle = (isHovered) => ({
        ...particlesStyle,
        opacity: isHovered ? 1 : 0,
    });

    // Enhanced keyframe animations
    const keyframeStyles = (
        <style>
            {`
                @keyframes iconPulse {
                    0% { 
                        box-shadow: 0 0 0 0 ${brandColors.primary}70;
                        transform: scale(1);
                    }
                    50% { 
                        box-shadow: 0 0 0 20px ${brandColors.primary}25;
                        transform: scale(1.05);
                    }
                    100% { 
                        box-shadow: 0 0 0 0 ${brandColors.primary}00;
                        transform: scale(1);
                    }
                }
                
                @keyframes gradientFlow {
                    0% { background-position: 0% 50%; }
                    25% { background-position: 100% 50%; }
                    50% { background-position: 100% 100%; }
                    75% { background-position: 0% 100%; }
                    100% { background-position: 0% 50%; }
                }
                
                @keyframes floatParticle {
                    0% { 
                        transform: translateY(0px) rotate(0deg); 
                        opacity: 0;
                    }
                    50% { 
                        opacity: 1;
                    }
                    100% { 
                        transform: translateY(-20px) rotate(180deg); 
                        opacity: 0;
                    }
                }
                
                .floating-particle {
                    position: absolute;
                    width: 4px;
                    height: 4px;
                    background: ${brandColors.primary};
                    border-radius: 50%;
                    animation: floatParticle 3s ease-in-out infinite;
                }
                
                .particle-1 {
                    top: 20%;
                    left: 10%;
                    animation-delay: 0s;
                    background: ${brandColors.primary};
                }
                
                .particle-2 {
                    top: 60%;
                    right: 15%;
                    animation-delay: 1s;
                    background: ${brandColors.secondary};
                }
                
                .particle-3 {
                    bottom: 30%;
                    left: 20%;
                    animation-delay: 2s;
                    background: ${brandColors.accent};
                }
                
                .icon-pulse-hover {
                    animation: iconPulse 2s infinite;
                    border-radius: 20px;
                }
            `}
        </style>
    );

    return (
        <>
            {keyframeStyles}
            <section className={`wpo-features-section section-padding ${props.featuresClass}`}>
                <div className="container">
                    <div className="row">
                        {featres.map((feature, fitem) => {
                            const isHovered = hoveredIndex === fitem;
                            
                            return (
                                <div 
                                    className="col-lg-4 col-md-6 col-12" 
                                    key={fitem}
                                    data-aos="fade-up"
                                    data-aos-delay={fitem * 150}
                                    style={{ marginBottom: '2rem' }}
                                >
                                    <div 
                                        className="wpo-features-item"
                                        style={getCardHoverStyle(isHovered)}
                                        onMouseEnter={() => setHoveredIndex(fitem)}
                                        onMouseLeave={() => setHoveredIndex(null)}
                                    >
                                        {/* Premium Overlay */}
                                        <div style={getOverlayHoverStyle(isHovered)}></div>
                                        
                                        {/* Ripple Effect */}
                                        <div style={getRippleHoverStyle(isHovered)}></div>
                                        
                                        {/* Glow Effect */}
                                        <div style={getGlowHoverStyle(isHovered)}></div>
                                        
                                        {/* Floating Particles */}
                                        <div style={getParticlesHoverStyle(isHovered)}>
                                            <div className="floating-particle particle-1"></div>
                                            <div className="floating-particle particle-2"></div>
                                            <div className="floating-particle particle-3"></div>
                                        </div>
                                        
                                        {/* Icon Section */}
                                        <div className="wpo-features-icon" style={getIconHoverStyle(isHovered)}>
                                            <div 
                                                className={`icon ${isHovered ? 'icon-pulse-hover' : ''}`}
                                                style={getIconWrapperHoverStyle(isHovered)}
                                            >
                                                <img 
                                                    src={feature.fIcon} 
                                                    alt={feature.title}
                                                    style={iconImageStyle}
                                                />
                                            </div>
                                        </div>
                                        
                                        {/* Text Section */}
                                        <div className="wpo-features-text" style={textContainerStyle}>
                                            <h2 style={getTitleHoverStyle(isHovered)}>{feature.title}</h2>
                                            <p style={getDescriptionHoverStyle(isHovered)}>{feature.des}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Features;