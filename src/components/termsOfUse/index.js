import React from "react";
import { Container, Row, Col, Card } from "reactstrap";

const TermsOfUse = () => {
  const sectionTitle = {
    fontWeight: "600",
    fontSize: "1.1rem",
    marginTop: "25px",
    marginBottom: "10px",
  };

  const bulletList = {
    paddingLeft: "20px",
    marginBottom: "15px",
    listStyleType: "disc",
  };

  return (
    <div style={{ backgroundColor: "#f8f9fa", padding: "60px 0" }}>
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            <Card
              className=" border-0 p-5"
              style={{
                borderRadius: "12px",
                backgroundColor: "#fff",
                fontSize: "16px",
                lineHeight: "1.8",
              }}
            >
              {/* Header */}
              <h1
                style={{
                  fontSize: "2rem",
                  fontWeight: "700",
                  color: "#0d6efd",
                  textAlign: "center",
                  marginBottom: "10px",
                }}
              >
                Terms of Use
              </h1>
              <p
                style={{
                  textAlign: "center",
                  color: "#6c757d",
                  marginBottom: "30px",
                }}
              >
                Effective Date: 01 August 2025
              </p>

              {/* Intro */}
              <p>
                These Terms of Use govern your access to and use of the website
                and services provided by{" "}
                <strong>Befirst HR and Management Consultancy</strong>. By using
                our site, you agree to comply with these terms.
              </p>

              {/* 1 */}
              <h5 style={sectionTitle}>1. Acceptance of Terms</h5>
              <ul >
                <li>
                  By accessing this website, you agree to these Terms of Use and
                  our Privacy Policy.
                </li>
                <li>
                  If you do not agree, please discontinue use immediately.
                </li>
              </ul>

              {/* 2 */}
              <h5 style={sectionTitle}>2. Services Offered</h5>
              <ul style={bulletList}>
                <li>Recruitment and staffing solutions.</li>
                <li>HR compliance and training services.</li>
                <li>Business and management consultancy.</li>
                <li>Strategic people management advisory.</li>
              </ul>

              {/* 3 */}
              <h5 style={sectionTitle}>3. Use of Website</h5>
              <ul style={bulletList}>
                <li>Use the website for lawful purposes only.</li>
                <li>
                  Do not engage in activities that damage or impair the
                  website’s functionality.
                </li>
                <li>
                  Do not attempt unauthorized access to our systems or data.
                </li>
              </ul>

              {/* 4 */}
              <h5 style={sectionTitle}>4. Intellectual Property Rights</h5>
              <ul >
                <li>
                  All content, graphics, text, and trademarks on this site are
                  the property of Befirst HR and Management Consultancy.
                </li>
                <li>Unauthorized use is strictly prohibited.</li>
              </ul>

              {/* 5 */}
              <h5 style={sectionTitle}>5. Limitation of Liability</h5>
              <ul style={bulletList}>
                <li>
                  We are not liable for any direct, indirect, or incidental
                  damages resulting from the use of our services or website.
                </li>
                <li>
                  We are not responsible for errors, inaccuracies, or delays in
                  the information provided.
                </li>
              </ul>

              {/* 6 */}
              <h5 style={sectionTitle}>6. Third-Party Services</h5>
              <ul >
                <li>
                  Our site may include services from third-party vendors.
                </li>
                <li>
                  We are not responsible for their actions, products, or
                  services.
                </li>
              </ul>

              {/* 7 */}
              <h5 style={sectionTitle}>7. Indemnification</h5>
              <ul >
                <li>
                  You agree to indemnify and hold harmless Befirst HR and
                  Management Consultancy, its employees, and partners from
                  claims, damages, and expenses arising from your use of our
                  services or violation of these terms.
                </li>
              </ul>

              {/* 8 */}
              <h5 style={sectionTitle}>8. Modifications to Terms</h5>
              <ul >
                <li>
                  We reserve the right to modify these terms without prior
                  notice.
                </li>
                <li>
                  Continued use of the site implies acceptance of updated terms.
                </li>
              </ul>

              {/* 9 */}
              <h5 style={sectionTitle}>9. Governing Law</h5>
              <ul >
                <li>
                  These terms are governed by the laws of India.
                </li>
                <li>
                  Disputes will be subject to the jurisdiction of courts in
                  Calicut, Kerala.
                </li>
              </ul>

              {/* 10 */}
              <h5 style={sectionTitle}>10. Contact Information</h5>
              <ul >
                <li>
                  📧 Email:{" "}
                  <a
                    href="mailto:info@befirsthr.com"
                    style={{ textDecoration: "none" }}
                  >
                    info@befirsthr.com
                  </a>
                </li>
                <li>📞 Phone:<a 
                  href="tel:+919400905954" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        style={{ textDecoration: 'none',  }}

                > +91 94009 05954</a> </li>
                <li>
                  🏢 Address: Innovation Tower, Thondayad Junction, near
                  Kannankandy E-store, Calicut, Kerala, India
                </li>
              </ul>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TermsOfUse;
