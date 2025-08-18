import React from 'react';
import { icons, values } from '../data/dummyCoreValues';

const CoreValues = () => {
    // Reduced and more professional background shapes
    const shapes = [
        { 
            background: "#D9EAFE", 
            size: 70, 
            top: "10%", 
            left: "5%", 
            delay: "0s",
            shape: "circle"
        },
        { 
            background: "#E0E7FF", 
            size: 50, 
            top: "80%", 
            left: "90%", 
            delay: "2s",
            shape: "circle"
        },
        { 
            background: "#DBEAFE", 
            size: 35, 
            top: "25%", 
            left: "95%", 
            delay: "1.5s",
            shape: "circle"
        },
        { 
            background: "#D9EAFE", 
            size: 55, 
            top: "85%", 
            left: "8%", 
            delay: "3s",
            shape: "circle"
        },
        { 
            background: "#E0E7FF", 
            size: 25, 
            top: "5%", 
            left: "50%", 
            delay: "1s",
            shape: "circle"
        },
        { 
            background: "#DBEAFE", 
            size: 40, 
            top: "45%", 
            left: "2%", 
            delay: "2.5s",
            shape: "circle"
        }
    ];

    // Function to get shape styles
    const getShapeStyles = (shape, size) => {
        const baseStyles = {
            position: "absolute",
            width: `${size}px`,
            height: `${size}px`,
            opacity: 0.3,
            animation: `floatShape 8s ease-in-out infinite`,
            zIndex: 1,
            borderRadius: "50%"
        };

        return baseStyles;
    };

    return (
        <>
            <section className="core-values-section" style={{position: 'relative', overflow: 'hidden'}}>
                {/* Animated Background Shapes */}
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

                <div className="container" style={{position: 'relative', zIndex: 2}}>
                    {/* Header */}
                    <div className="row justify-content-center mb-5">
                        <div className="col-lg-10 col-xl-8">
                            <div className="text-center">
                                <div className="mb-4">
                                    <span className="badge-title">Our Foundation</span>
                                </div>
                                <h2 className="core-title">Core Values</h2>
                                <p className="core-desc">
                                    Our fundamental principles that drive excellence in HR consulting and define our commitment to your success.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Cards */}
                    <div className="row g-4 justify-content-center">
                        {values.map((value, idx) => (
                            <div
                                key={value.title}
                                className="col-lg-4 col-md-6 col-12 d-flex"
                                style={{ minHeight: 0 }}
                            >
                                <div
                                    className="core-card w-100"
                                    tabIndex={0}
                                    style={{ animationDelay: `${idx * 0.08 + 0.1}s` }}
                                >
                                    <div className="icon-wrap">{icons[value.icon]}</div>
                                    <h4 className="core-card-title">{value.title}</h4>
                                    <p className="core-card-desc">{value.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Styles */}
                <style jsx>{`
          /* Animation keyframes for shapes - Subtle movement only */
          @keyframes floatShape {
            0%, 100% { 
              transform: translateY(0) translateX(0) scale(1);
            }
            25% { 
              transform: translateY(-20px) translateX(10px) scale(1.02);
            }
            50% { 
              transform: translateY(-30px) translateX(-15px) scale(0.98);
            }
            75% { 
              transform: translateY(-15px) translateX(18px) scale(1.01);
            }
          }

          .core-values-section {
            background: #fff;
            padding: 64px 0 48px 0;
            position: relative;
            overflow: hidden;
          }
          .badge-title {
            background: rgba(59, 130, 246, 0.08);
            color: #1e40af;
            font-size: 0.8rem;
            font-weight: 600;
            letter-spacing: 1px;
            border-radius: 999px;
            padding: 0.5em 1.5em;
            text-transform: uppercase;
            display: inline-block;
          }
          .core-title {
            color: #1e293b;
            font-weight: 700;
            font-size: 2.5rem;
            margin-bottom: 1rem;
            letter-spacing: -1px;
          }
          .core-desc {
            color: #64748b;
            font-size: 1.15rem;
            max-width: 650px;
            margin: 0 auto;
            line-height: 1.7;
          }
          .core-card {
            background: #fff;
            border-radius: 1.25rem;
            box-shadow: 0 4px 32px rgba(59, 130, 246, 0.07), 0 1.5px 6px rgba(0,0,0,0.03);
            padding: 2.5rem 2rem 2rem 2rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
            transition: 
              box-shadow 0.3s cubic-bezier(0.4,0,0.2,1),
              transform 0.3s cubic-bezier(0.4,0,0.2,1),
              background 0.3s;
            outline: none;
            cursor: pointer;
            min-height: 340px;
            animation: fadeUp 0.7s cubic-bezier(0.4,0,0.2,1) both;
            z-index: 2;
          }
          .core-card:focus,
          .core-card:hover {
            box-shadow: 0 12px 48px rgba(59, 130, 246, 0.13), 0 2px 8px rgba(0,0,0,0.06);
            transform: translateY(-8px) scale(1.025);
            background: linear-gradient(120deg, #f8fafc 0%, #f1f5f9 100%);
          }
          .icon-wrap {
            margin-bottom: 1.5rem;
            background: linear-gradient(135deg, rgba(59,130,246,0.08) 0%, rgba(59,130,246,0.14) 100%);
            border-radius: 1rem;
            width: 72px;
            height: 72px;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 2px 12px rgba(59,130,246,0.08);
            transition: background 0.3s;
          }
          .core-card:hover .icon-wrap,
          .core-card:focus .icon-wrap {
            background: linear-gradient(135deg, rgba(59,130,246,0.14) 0%, rgba(59,130,246,0.20) 100%);
          }
          .core-card-title {
            color: #1e293b;
            font-weight: 700;
            font-size: 1.35rem;
            margin-bottom: 0.75rem;
            letter-spacing: -0.5px;
          }
          .core-card-desc {
            color: #64748b;
            font-size: 1.05rem;
            line-height: 1.7;
            margin-bottom: 0;
          }
          @media (max-width: 991px) {
            .core-title { font-size: 2rem; }
            .core-card { padding: 2rem 1.25rem 1.5rem 1.25rem; min-height: 300px; }
            .icon-wrap { width: 60px; height: 60px; }
          }
          @media (max-width: 767px) {
            .core-title { font-size: 1.6rem; }
            .core-card { padding: 1.5rem 1rem 1.25rem 1rem; min-height: 220px; }
            .icon-wrap { width: 48px; height: 48px; }
          }
          @media (max-width: 575px) {
            .core-title { font-size: 1.25rem; }
            .core-card { padding: 1.25rem 0.75rem 1rem 0.75rem; }
          }
          @keyframes fadeUp {
            0% { opacity: 0; transform: translateY(40px);}
            100% { opacity: 1; transform: translateY(0);}
          }
        `}</style>
            </section>
        </>
    );
};

export default CoreValues;