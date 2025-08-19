import React from 'react'
import { funfact } from '../data/dummyFunfact';

const FunFact = (props) => {

    // Advanced background elements with single color theme
    const shapes = [
        {
            background: "rgba(217, 234, 254, 0.4)",
            size: 200,
            top: "5%",
            left: "2%",
            delay: "0s",
        },
        {
            background: "rgba(217, 234, 254, 0.3)",
            size: 150,
            top: "60%",
            left: "88%",
            delay: "1s",
        },
        {
            background: "rgba(217, 234, 254, 0.25)",
            size: 100,
            top: "20%",
            left: "90%",
            delay: "2s",
        },
        {
            background: "rgba(147, 197, 253, 0.2)",
            size: 120,
            top: "80%",
            left: "5%",
            delay: "1.5s",
        }
    ];

    const getShapeStyles = (shape, size) => {
        return {
            position: "absolute",
            width: `${size}px`,
            height: `${size}px`,
            background: `radial-gradient(circle, ${shape.background} 0%, transparent 70%)`,
            borderRadius: "50%",
            animation: `gentleFloat 12s ease-in-out infinite`,
            zIndex: 1,
            filter: "blur(2px)"
        };
    };

    return (
        <>
            <style>
                {`
                    @keyframes gentleFloat {
                        0%, 100% { 
                            transform: translateY(0px) translateX(0px) scale(1);
                        }
                        25% { 
                            transform: translateY(-15px) translateX(5px) scale(1.05);
                        }
                        50% { 
                            transform: translateY(-25px) translateX(-10px) scale(0.95);
                        }
                        75% { 
                            transform: translateY(-10px) translateX(15px) scale(1.02);
                        }
                    }

                    @keyframes slideInUp {
                        0% {
                            opacity: 0;
                            transform: translateY(60px);
                        }
                        100% {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }

                    @keyframes countUp {
                        0% {
                            opacity: 0;
                            transform: scale(0.8);
                        }
                        100% {
                            opacity: 1;
                            transform: scale(1);
                        }
                    }

                    .wpo-fun-fact-section {
                        position: relative;
                        overflow: hidden;
                        background: linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #f1f5f9 100%);
                        padding: 100px 0;
                        min-height: 400px;
                    }

                    .wpo-fun-fact-section::before {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background: radial-gradient(ellipse at center, rgba(217, 234, 254, 0.1) 0%, transparent 70%);
                        pointer-events: none;
                        z-index: 1;
                    }

                    .fun-fact-card {
                        background: rgba(255, 255, 255, 0.7);
                        backdrop-filter: blur(8px);
                        border-radius: 24px;
                        padding: 50px 30px;
                        text-align: center;
                        box-shadow: 
                            0 2px 8px rgba(0, 0, 0, 0.04),
                            0 1px 4px rgba(0, 0, 0, 0.02),
                            inset 0 1px 0 rgba(255, 255, 255, 0.6);
                        border: 1px solid rgba(217, 234, 254, 0.2);
                        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                        animation: slideInUp 0.8s ease-out;
                        animation-fill-mode: both;
                        position: relative;
                        overflow: hidden;
                        height: 100%;
                        min-height: 280px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    }

                    .fun-fact-card::before {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        height: 3px;
                        background: linear-gradient(90deg, #D9EAFE 0%, #93C5FD 50%, #60A5FA 100%);
                        border-radius: 24px 24px 0 0;
                        opacity: 0.7;
                    }

                    .fun-fact-card::after {
                        content: '';
                        position: absolute;
                        top: -50%;
                        left: -50%;
                        width: 200%;
                        height: 200%;
                        background: radial-gradient(circle, rgba(217, 234, 254, 0.1) 0%, transparent 50%);
                        opacity: 0;
                        transition: all 0.4s ease;
                        pointer-events: none;
                        z-index: 0;
                    }

                    .fun-fact-card:hover {
                        transform: translateY(-8px) scale(1.01);
                        box-shadow: 
                            0 8px 16px rgba(0, 0, 0, 0.06),
                            0 4px 8px rgba(0, 0, 0, 0.04),
                            inset 0 1px 0 rgba(255, 255, 255, 0.8);
                        border-color: rgba(147, 197, 253, 0.3);
                        background: rgba(255, 255, 255, 0.85);
                    }

                    .fun-fact-card:hover::after {
                        opacity: 1;
                        animation: pulse 2s infinite;
                    }

                    @keyframes pulse {
                        0%, 100% { transform: scale(1) rotate(0deg); }
                        50% { transform: scale(1.05) rotate(180deg); }
                    }

                    .fun-fact-icon {
                        width: 80px;
                        height: 80px;
                        background: linear-gradient(135deg, #D9EAFE 0%, #93C5FD 100%);
                        border-radius: 20px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin: 0 auto 25px;
                        box-shadow: 0 2px 8px rgba(147, 197, 253, 0.15);
                        position: relative;
                        z-index: 1;
                    }

                    .fun-fact-number {
                        font-size: 3.5rem;
                        font-weight: 800;
                        background: linear-gradient(135deg, #1e293b 0%, #475569 100%);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        background-clip: text;
                        margin-bottom: 20px;
                        line-height: 1.1;
                        display: block;
                        animation: countUp 1s ease-out;
                        animation-fill-mode: both;
                        position: relative;
                        z-index: 1;
                    }

                    .fun-fact-title {
                        font-size: 1rem;
                        color: #64748b;
                        margin: 0;
                        font-weight: 600;
                        text-transform: uppercase;
                        letter-spacing: 1px;
                        line-height: 1.5;
                        word-wrap: break-word;
                        position: relative;
                        z-index: 1;
                        max-width: 200px;
                    }

                    .fun-fact-subtitle {
                        font-size: 0.85rem;
                        color: #94a3b8;
                        margin-top: 8px;
                        font-weight: 400;
                        font-style: italic;
                        position: relative;
                        z-index: 1;
                    }

                    /* Enhanced staggered animations */
                    .fun-fact-card:nth-child(1) {
                        animation-delay: 0.1s;
                    }

                    .fun-fact-card:nth-child(1) .fun-fact-number {
                        animation-delay: 0.3s;
                    }

                    .fun-fact-card:nth-child(2) {
                        animation-delay: 0.2s;
                    }

                    .fun-fact-card:nth-child(2) .fun-fact-number {
                        animation-delay: 0.4s;
                    }

                    .fun-fact-card:nth-child(3) {
                        animation-delay: 0.3s;
                    }

                    .fun-fact-card:nth-child(3) .fun-fact-number {
                        animation-delay: 0.5s;
                    }

                    .fun-fact-card:nth-child(4) {
                        animation-delay: 0.4s;
                    }

                    .fun-fact-card:nth-child(4) .fun-fact-number {
                        animation-delay: 0.6s;
                    }

                    /* Bootstrap column adjustments */
                    .fun-fact-col {
                        margin-bottom: 40px;
                        display: flex;
                    }

                    .section-title {
                        text-align: center;
                        margin-bottom: 60px;
                        position: relative;
                        z-index: 2;
                    }

                    .section-title h2 {
                        font-size: 2.5rem;
                        font-weight: 700;
                        color: #1e293b;
                        margin-bottom: 15px;
                    }

                    .section-title p {
                        font-size: 1.1rem;
                        color: #64748b;
                        max-width: 600px;
                        margin: 0 auto;
                    }

                    /* Responsive adjustments */
                    @media (max-width: 1200px) {
                        .fun-fact-card {
                            padding: 40px 25px;
                            min-height: 260px;
                        }
                        
                        .fun-fact-number {
                            font-size: 3rem;
                        }
                    }

                    @media (max-width: 768px) {
                        .wpo-fun-fact-section {
                            padding: 80px 0;
                        }

                        .fun-fact-card {
                            padding: 35px 20px;
                            min-height: 240px;
                        }

                        .fun-fact-number {
                            font-size: 2.8rem;
                        }

                        .fun-fact-title {
                            font-size: 0.9rem;
                        }

                        .section-title h2 {
                            font-size: 2rem;
                        }
                    }

                    @media (max-width: 576px) {
                        .fun-fact-card {
                            padding: 30px 15px;
                            min-height: 220px;
                        }

                        .fun-fact-number {
                            font-size: 2.5rem;
                            margin-bottom: 15px;
                        }

                        .fun-fact-title {
                            font-size: 0.85rem;
                        }

                        .fun-fact-icon {
                            width: 60px;
                            height: 60px;
                            margin-bottom: 20px;
                        }
                    }
                `}
            </style>

            <section className={`wpo-fun-fact-section ${props.fnClass}`}>
                {/* Advanced Background Elements */}
                {shapes.map((shape, index) => (
                    <div
                        key={index}
                        style={{
                            ...getShapeStyles(shape, shape.size),
                            top: shape.top,
                            left: shape.left,
                            animationDelay: shape.delay,
                        }}
                    ></div>
                ))}

                <div className="container">
                    <div className="row g-4 justify-content-center">
                        {funfact.map((funfactItem, fitem) => (
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 fun-fact-col" key={fitem}>
                                <div className="fun-fact-card">
                                    <div className="fun-fact-icon">
                                        <div style={{
                                            width: '24px',
                                            height: '24px',
                                            background: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)',
                                            borderRadius: '6px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}>
                                            <div style={{
                                                width: '8px',
                                                height: '8px',
                                                background: 'white',
                                                borderRadius: '50%'
                                            }}></div>
                                        </div>
                                    </div>
                                    <div className="fun-fact-number">
                                        {funfactItem.title}
                                    </div>
                                    <div className="fun-fact-title">
                                        {funfactItem.subTitle}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default FunFact;