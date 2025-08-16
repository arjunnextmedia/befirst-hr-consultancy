import React from 'react'
import { funfact } from '../data/dummyFunfact';

const FunFact = (props) => {

    const shapes = [
        {
            background: "linear-gradient(135deg, #93c5fd, #60a5fa)", // Light blue from image
            size: 80,
            top: "15%",
            left: "8%",
            delay: "0s",
            shape: "circle"
        },
        {
            background: "linear-gradient(135deg, #86efac, #10b981)", // Mint green from image
            size: 60,
            top: "75%",
            left: "85%",
            delay: "2s",
            shape: "pentagon"
        },
        {
            background: "linear-gradient(135deg, #c4b5fd, #8b5cf6)", // Light purple from image
            size: 50,
            top: "25%",
            left: "90%",
            delay: "3s",
            shape: "circle"
        },
        {
            background: "linear-gradient(135deg, #67e8f9, #06b6d4)", // Light cyan from image
            size: 70,
            top: "60%",
            left: "10%",
            delay: "1s",
            shape: "pentagon"
        },
        {
            background: "linear-gradient(135deg, #fde68a, #f59e0b)", // Yellow from image numbers
            size: 45,
            top: "5%",
            left: "50%",
            delay: "2.5s",
            shape: "circle"
        },
        {
            background: "linear-gradient(135deg, #fca5a5, #ef4444)", // Coral red from image numbers
            size: 55,
            top: "85%",
            left: "50%",
            delay: "1.5s",
            shape: "circle"
        },
        {
            background: "linear-gradient(135deg, #a7f3d0, #059669)", // Light green accent
            size: 35,
            top: "35%",
            left: "95%",
            delay: "3.5s",
            shape: "circle"
        }
    ];

    // <=== shape styles - circles and pentagons ===>
    const getShapeStyles = (shape, size) => {
        const baseStyles = {
            position: "absolute",
            width: `${size}px`,
            height: `${size}px`,
            opacity: 0.4,
            animation: `floatShape 6s ease-in-out infinite, rotateShape 8s linear infinite`,
            zIndex: 1,
            filter: "blur(0.5px)"
        };

        switch (shape.shape) {
            case 'pentagon':
                return {
                    ...baseStyles,
                    clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)"
                };
            default: // circle
                return {
                    ...baseStyles,
                    borderRadius: "50%"
                };
        }
    };

    return (
        <>
            <style>
                {`
                    @keyframes floatShape {
                        0%, 100% { 
                            transform: translateY(0) translateX(0) scale(1);
                        }
                        25% { 
                            transform: translateY(-30px) translateX(10px) scale(1.05);
                        }
                        50% { 
                            transform: translateY(-15px) translateX(-15px) scale(0.95);
                        }
                        75% { 
                            transform: translateY(-25px) translateX(20px) scale(1.1);
                        }
                    }

                    @keyframes rotateShape {
                        0% { 
                            transform: rotate(0deg);
                        }
                        100% { 
                            transform: rotate(360deg);
                        }
                    }

                    @keyframes pulseGlow {
                        0%, 100% { 
                            box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
                        }
                        50% { 
                            box-shadow: 0 0 40px rgba(59, 130, 246, 0.6);
                        }
                    }

                    /* Content animations */
                    @keyframes slideInLeft {
                        0% {
                            opacity: 0;
                            transform: translateX(-100px);
                        }
                        100% {
                            opacity: 1;
                            transform: translateX(0);
                        }
                    }

                    @keyframes slideInRight {
                        0% {
                            opacity: 0;
                            transform: translateX(100px);
                        }
                        100% {
                            opacity: 1;
                            transform: translateX(0);
                        }
                    }

                    .wpo-fun-fact-section {
                        position: relative;
                        overflow: hidden;
                    }

                    .wpo-fun-fact-grids {
                        position: relative;
                        z-index: 2;
                    }

                    .wpo-fun-fact-grids .grid {
                        animation-duration: 0.8s;
                        animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
                        animation-fill-mode: both;
                    }

                    /* Alternating animation pattern */
                    .wpo-fun-fact-grids .grid:nth-child(odd) {
                        animation-name: slideInLeft;
                    }

                    .wpo-fun-fact-grids .grid:nth-child(even) {
                        animation-name: slideInRight;
                    }

                    /* Animation delays for staggered effect */
                    .wpo-fun-fact-grids .grid:nth-child(1) {
                        animation-delay: 0.2s;
                    }

                    .wpo-fun-fact-grids .grid:nth-child(2) {
                        animation-delay: 0.4s;
                    }

                    .wpo-fun-fact-grids .grid:nth-child(3) {
                        animation-delay: 0.6s;
                    }

                    .wpo-fun-fact-grids .grid:nth-child(4) {
                        animation-delay: 0.8s;
                    }

                    .wpo-fun-fact-grids .grid:nth-child(5) {
                        animation-delay: 1.0s;
                    }

                    .wpo-fun-fact-grids .grid:nth-child(6) {
                        animation-delay: 1.2s;
                    }
                `}
            </style>

            <section className={`wpo-fun-fact-section ${props.fnClass}`} style={{ position: 'relative', overflow: 'hidden' }}>
                {/* <===Animated Background Shapes===> */}
                {shapes.map((shape, index) => (
                    <div
                        key={index}
                        style={{
                            ...getShapeStyles(shape, shape.size),
                            background: shape.background,
                            top: shape.top,
                            left: shape.left,
                            animationDelay: shape.delay,
                        }}
                    ></div>
                ))}

                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'rgba(255, 255, 255, 0.05)',
                        zIndex: 1
                    }}
                ></div>

                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="wpo-fun-fact-grids clearfix">
                                {funfact.map((funfact, fitem) => (
                                    <div className="grid" key={fitem}>
                                        <div className="info">
                                            <h3>{funfact.title}</h3>
                                            <p>{funfact.subTitle}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FunFact;