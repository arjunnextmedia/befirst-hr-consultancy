import React, { useEffect } from "react";
import { Search, Users, Filter, Calendar, CheckCircle } from "lucide-react";

const RecruitmentProcessRow = () => {
  useEffect(() => {

  }, []);

  const steps = [
    {
      title: "Needs Analysis",
      description: "We understand your specific hiring goals, job requirements, and budget constraints to deliver targeted recruitment solutions that align with your business objectives.",
      icon: <Search size={28} />,
      number: "01",
    },
    {
      title: "Talent Sourcing",
      description: "Access our extensive candidate database, premium job boards, and professional networks to identify and attract the best talent for your organization.",
      icon: <Users size={28} />,
      number: "02",
    },
    {
      title: "Screening & Shortlisting",
      description: "Rigorous filtering and comprehensive assessment process ensures only the most qualified candidates reach your interview stage, saving your valuable time.",
      icon: <Filter size={28} />,
      number: "03",
    },
    {
      title: "Interview Coordination",
      description: "Streamlined scheduling and professional management of interviews to optimize your hiring process while maintaining excellent candidate experience.",
      icon: <Calendar size={28} />,
      number: "04",
    },
    {
      title: "Selection & Onboarding",
      description: "Smooth transition process with comprehensive support to ensure your new hires integrate seamlessly into your organization and hit the ground running.",
      icon: <CheckCircle size={28} />,
      number: "05",
    },
  ];

  return (
    <section className="recruitment-process-section">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title">
            Our Recruitment Process
          </h2>
          <p className="section-subtitle">
            Hover over each step to discover our comprehensive approach
          </p>
        </div>

        <div className="process-container">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="process-card"
            >
              <div className="card-inner">
                <div className="card-front">
                  <div className="step-number">{step.number}</div>
                  <div className="card-content">
                    <div className="icon-wrapper">
                      {step.icon}
                    </div>
                    <div className="content-wrapper">
                      <h6 className="step-title">{step.title}</h6>
                    </div>
                  </div>
                </div>
                
                <div className="card-back">
                  <div className="step-number">{step.number}</div>
                  <div className="card-content">
                    <div className="icon-wrapper-small">
                      {step.icon}
                    </div>
                    <div className="content-wrapper">
                      <h6 className="step-title-expanded">{step.title}</h6>
                      <p className="step-description">{step.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .recruitment-process-section {
          padding: 80px 20px;
          background: #ffffff;
          position: relative;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          letter-spacing: -0.5px;
          color: #1f2937;
        }

        .section-subtitle {
          font-size: 17px;
          color: #6b7280;
          margin-bottom: 0;
          font-weight: 400;
        }

        .process-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 30px;
          padding: 40px 0;
        }

        .process-card {
          width: 100%;
          max-width: 600px;
          height: 200px;
          perspective: 1000px;
          cursor: pointer;
          transition: all 0.4s ease;
          z-index: 1;
        }

        .process-card:hover {
          z-index: 10;
          transform: translateY(-10px) scale(1.02);
        }

        .card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.6s ease;
          transform-style: preserve-3d;
          border-radius: 20px;
          box-shadow: 0 12px 40px rgba(78, 124, 231, 0.15);
        }

        .process-card:hover .card-inner {
          transform: rotateX(180deg);
        }

        .card-front,
        .card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 20px;
          padding: 0;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
        }

        .card-front {
          background: linear-gradient(135deg, #4E7CE7 0%, #5a87eb 100%);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .card-back {
          background: #ffffff;
          color: #374151;
          transform: rotateX(180deg);
          border: 2px solid #4E7CE7;
        }

        .card-content {
          display: flex;
          align-items: center;
          padding: 2rem;
          height: 100%;
          box-sizing: border-box;
        }

        .step-number {
          position: absolute;
          top: 20px;
          right: 20px;
          font-size: 1rem;
          font-weight: 700;
          padding: 8px 14px;
          border-radius: 20px;
          min-width: 40px;
          text-align: center;
          z-index: 2;
        }

        .card-front .step-number {
          background: rgba(255, 255, 255, 0.2);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .card-back .step-number {
          background: #4E7CE7;
          color: white;
        }

        .icon-wrapper {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 2rem;
          border: 2px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          flex-shrink: 0;
        }

        .icon-wrapper-small {
          width: 60px;
          height: 60px;
          border-radius: 12px;
          background: #4E7CE7;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 2rem;
          color: white;
          flex-shrink: 0;
        }

        .content-wrapper {
          flex: 1;
          display: flex;
          flex-direction: column;
          min-width: 0;
        }

        .step-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin: 0;
          line-height: 1.3;
          color: white;
        }

        .step-title-expanded {
          font-size: 1.3rem;
          font-weight: 700;
          margin: 0 0 1rem 0;
          color: #4E7CE7;
          line-height: 1.3;
        }

        .step-description {
          font-size: 0.95rem;
          line-height: 1.5;
          margin: 0;
          color: #6b7280;
          font-weight: 400;
          overflow-wrap: break-word;
        }

        @media (max-width: 768px) {
          .recruitment-process-section {
            padding: 60px 15px;
          }

          .process-container {
            gap: 25px;
            padding: 30px 0;
          }
          
          .process-card {
            max-width: 100%;
            height: 180px;
          }

          .process-card:hover {
            transform: translateY(-8px) scale(1.01);
          }
          
          .card-content {
            padding: 1.5rem;
          }

          .icon-wrapper {
            width: 70px;
            height: 70px;
            margin-right: 1.5rem;
          }

          .icon-wrapper-small {
            width: 55px;
            height: 55px;
            margin-right: 1.5rem;
          }
          
          .section-title {
            font-size: 2rem;
          }
          
          .section-subtitle {
            font-size: 1rem;
          }

          .step-title {
            font-size: 1.3rem;
          }

          .step-title-expanded {
            font-size: 1.2rem;
            margin-bottom: 0.8rem;
          }

          .step-description {
            font-size: 0.9rem;
            line-height: 1.4;
          }

          .step-number {
            top: 15px;
            right: 15px;
            font-size: 0.9rem;
            padding: 6px 12px;
          }
        }

        @media (max-width: 480px) {
          .recruitment-process-section {
            padding: 50px 10px;
          }

          .process-container {
            gap: 20px;
          }

          .process-card {
            height: 160px;
          }

          .card-content {
            padding: 1.2rem;
          }

          .icon-wrapper {
            width: 60px;
            height: 60px;
            margin-right: 1.2rem;
          }

          .icon-wrapper svg {
            width: 22px;
            height: 22px;
          }

          .icon-wrapper-small {
            width: 50px;
            height: 50px;
            margin-right: 1.2rem;
          }

          .icon-wrapper-small svg {
            width: 20px;
            height: 20px;
          }
          
          .step-title {
            font-size: 1.2rem;
          }
          
          .step-title-expanded {
            font-size: 1.1rem;
            margin-bottom: 0.7rem;
          }
          
          .step-description {
            font-size: 0.85rem;
            line-height: 1.4;
          }

          .step-number {
            font-size: 0.85rem;
            padding: 5px 10px;
            top: 12px;
            right: 12px;
          }

          .section-title {
            font-size: 1.8rem;
          }
        }

        @media (max-width: 360px) {
          .process-card {
            height: 150px;
          }

          .card-content {
            padding: 1rem;
          }

          .icon-wrapper {
            width: 55px;
            height: 55px;
            margin-right: 1rem;
          }

          .icon-wrapper-small {
            width: 45px;
            height: 45px;
            margin-right: 1rem;
          }

          .step-title {
            font-size: 1.1rem;
          }
          
          .step-title-expanded {
            font-size: 1rem;
          }
          
          .step-description {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </section>
  );
};

export default RecruitmentProcessRow;