import React from "react";
import { Container, Row, Col } from "reactstrap";

const PrivacyPolicy = () => {
  const sectionTitle = {
    fontWeight: "600",
    fontSize: "25px",
    marginTop: "35px",
    marginBottom: "15px",
    // color: "#0d6efd",
    color:"black"
  };

  const bulletList = {
    paddingLeft: "20px",
    marginBottom: "20px",
    listStyleType: "disc",
    fontSize: "20px",

  };

  return (
    <div style={{ backgroundColor: "#f8f9fa", padding: "60px 0" }}>
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            {/* Header */}
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <h1
                style={{
                  fontSize: "2.2rem",
                  fontWeight: "700",
                  color: "#0d6efd",
                  marginBottom: "10px",
                }}
              >
                Privacy Policy
              </h1>
              <p style={{ color: "#6c757d", fontSize: "0.95rem" }}>
                Effective Date: 01 August 2025 | Last Updated: 20 August 2025
              </p>
            </div>

            {/* Intro */}
            <p style={{ fontSize: "20px", lineHeight: "1.8", color: "#212529" }}>
              <strong>Befirst HR and Management Consultancy</strong> (“we,”
              “our,” “us”) values your privacy and is committed to protecting
              your personal information. This Privacy Policy outlines how we
              collect, use, store, and protect your data when you interact with
              our services, website, and communication channels.
            </p>

            {/* 1 */}
            <h5 style={sectionTitle}>1. Information We Collect</h5>
            <p>We may collect the following types of information:</p>
            <ul style={bulletList}>
              <li>
                <strong>Personal Information:</strong> Name, email address,
                phone number, company details, job title, CV/resume, and any
                details you provide during consultations or service inquiries.
              </li>
              <li>
                <strong>Business Information:</strong> Company size, industry
                type, HR and management needs, and other professional data
                relevant to our services.
              </li>
              <li>
                <strong>Website Usage Data:</strong> IP address, browser type,
                operating system, referral source, pages viewed, and time spent
                on the website via analytics tools.
              </li>
              <li>
                <strong>Communication Data:</strong> Records of your inquiries,
                messages, and feedback.
              </li>
            </ul>

            {/* 2 */}
            <h5 style={sectionTitle}>2. How We Use Your Information</h5>
            <p>Your information may be used to:</p>
            <ul style={bulletList}>
              <li>Provide HR and management consultancy services.</li>
              <li>Process job applications and recruitment requirements.</li>
              <li>Respond to inquiries and provide customer support.</li>
              <li>Improve website functionality and service offerings.</li>
              <li>
                Send newsletters, service updates, and promotional materials
                (with your consent).
              </li>
              <li>Comply with legal obligations.</li>
            </ul>

            {/* 3 */}
            <h5 style={sectionTitle}>3. Sharing of Information</h5>
            <p>We will never sell or rent your personal information. We may share your data:</p>
            <ul style={bulletList}>
              <li>
                With trusted partners, recruiters, or third-party service
                providers who assist in delivering our services.
              </li>
              <li>
                When required by law, court order, or government regulations.
              </li>
              <li>
                During a merger, acquisition, or business transfer (with
                safeguards in place).
              </li>
            </ul>

            {/* 4 */}
            <h5 style={sectionTitle}>4. Data Security</h5>
            <ul style={bulletList}>
              <li>
                Use of SSL encryption, secure servers, and restricted access to
                protect your personal data.
              </li>
              <li>
                Regular security reviews and updates to prevent unauthorized
                access, alteration, or disclosure.
              </li>
            </ul>

            {/* 5 */}
            <h5 style={sectionTitle}>5. Cookies and Tracking</h5>
            <ul style={bulletList}>
              <li>
                Use of cookies to enhance user experience, analyze traffic, and
                personalize content.
              </li>
              <li>
                Option to disable cookies in browser settings, though some
                features may not function properly.
              </li>
            </ul>

            {/* 6 */}
            <h5 style={sectionTitle}>6. Your Rights</h5>
            <p>You have the right to:</p>
            <ul style={bulletList}>
              <li>Request access to your data.</li>
              <li>Correct or update your information.</li>
              <li>Withdraw consent for marketing communications.</li>
              <li>Request deletion of your data (subject to legal obligations).</li>
            </ul>
            <p>
              To exercise these rights, contact us at:{" "}
              <strong>
                <a
                  href="mailto:hello@befirsthr.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "#0d6efd" }}
                >
                  hello@befirsthr.com
                </a>
              </strong>
            </p>

            {/* 7 */}
            <h5 style={sectionTitle}>7. Third-Party Links</h5>
            <ul style={bulletList}>
              <li>
                Our website may contain links to external sites. We are not
                responsible for the privacy practices of those websites.
              </li>
            </ul>

            {/* 8 */}
            <h5 style={sectionTitle}>8. Changes to This Policy</h5>
            <ul style={bulletList}>
              <li>
                We may update this Privacy Policy periodically. Changes will be
                posted with a revised “Effective Date.”
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PrivacyPolicy;
