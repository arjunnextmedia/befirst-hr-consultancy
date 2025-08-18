import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const VisionMission = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const sectionStyle = {
    background: "#ffffff",
    padding: "80px 0",
    position: "relative",
    overflow: "hidden",
  };

  const headingStyle = {
    fontWeight: "700",
    fontSize: "2.5rem",
    color: "#1f2937",
    zIndex: 2,
    position: "relative",
  };

  const highlightTextStyle = {
    background: "linear-gradient(90deg, #3b82f6, #2744D5)",
    color:"#2744D5",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  const cardBaseStyle = {
    borderRadius: "12px",
    padding: "32px",
    height: "100%",
    color: "#1f2937",
    transition: "all 0.4s ease",
    border: "none",
    backgroundSize: "200% 200%",
    backgroundPosition: "center",
    boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
  };

  const cardStyle = (isHovered) => ({
    ...cardBaseStyle,
    background: isHovered
      ? "linear-gradient(135deg, #91CAF2, #BFDBFE)"
      : "linear-gradient(135deg, #BFDBFE, #91CAF2)",
    transform: isHovered
      ? "translateY(-8px) scale(1.02)"
      : "translateY(0) scale(1)",
    boxShadow: isHovered
      ? "0 15px 30px rgba(59, 130, 246, 0.15)"
      : "0 8px 25px rgba(59, 130, 246, 0.08)",
  });

  const iconStyle = {
    fontSize: "2.8rem",
    marginBottom: "16px",
    color: "#1e40af",
  };

  const paragraphStyle = {
    color: "#374151",
    lineHeight: "1.6",
    marginTop: "12px",
    fontSize: "1rem",
  };

  // Reduced and more subtle background shapes
  const shapes = [
    { background: "#D9EAFE", size: 60, top: "20%", left: "8%", delay: "0s" },
    { background: "#E0E7FF", size: 45, top: "70%", left: "88%", delay: "2s" },
    { background: "#DBEAFE", size: 35, top: "45%", left: "5%", delay: "3s" },
    { background: "#D9EAFE", size: 50, top: "15%", left: "90%", delay: "1s" },
  ];

  return (
    <section style={sectionStyle}>
      {/* Subtle floating shapes */}
      {shapes.map((shape, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            background: shape.background,
            borderRadius: "50%",
            top: shape.top,
            left: shape.left,
            opacity: 0.4,
            animation: `floatShape 8s ease-in-out infinite`,
            animationDelay: shape.delay,
            zIndex: 1,
          }}
        ></div>
      ))}

      {/* Keyframes */}
      <style>
        {`
          @keyframes floatShape {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
          }

          @keyframes dropBounce {
            0% { transform: translateY(-200px); opacity: 0; }
            60% { transform: translateY(30px); opacity: 1; }
            80% { transform: translateY(-10px); }
            100% { transform: translateY(0); }
          }

          .drop-bounce {
            animation: dropBounce 1s ease-out;
          }
        `}
      </style>

      <div className="container position-relative" style={{ zIndex: 2 }}>
        {/* Title */}
        <div
          className="row justify-content-center text-center mb-5"
          data-aos="fade-down"
        >
          <div className="col-lg-8 drop-bounce">
            <h2 style={headingStyle}>
              Our <span style={highlightTextStyle}>Vision</span> &{" "}
              <span style={highlightTextStyle}>Mission</span>
            </h2>
            <p
              style={{ color: "#6b7280", marginTop: "12px" }}
            >
              Guiding principles that shape our journey and commitment to
              excellence.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="row g-4">
          {/* Vision */}
          <div
            className="col-md-6 drop-bounce"
            data-aos="fade-up"
            data-aos-delay="200"
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div style={cardStyle(hoveredCard === 1)}>
              <i className="bi bi-eye" style={iconStyle}></i>
              <h4 style={{ fontWeight: "700", color: "#1f2937" }}>Our Vision</h4>
              <p style={paragraphStyle}>
                To become Kerala's most trusted partner in human capital
                development and management transformation, setting new
                standards in professional excellence and business empowerment.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div
            className="col-md-6 drop-bounce"
            data-aos="fade-up"
            data-aos-delay="300"
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div style={cardStyle(hoveredCard === 2)}>
              <i className="bi bi-flag" style={iconStyle}></i>
              <h4 style={{ fontWeight: "700", color: "#1f2937" }}>Our Mission</h4>
              <p style={paragraphStyle}>
                To deliver innovative, ethical, and customized HR and
                management solutions that enable businesses, institutions, and
                communities to thrive through people-centric practices and
                strategic support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;