import React, { useState } from 'react';
import { Upload, Phone, Mail, MapPin, User, Calendar, Briefcase, FileText, Send, CheckCircle } from 'lucide-react';
import Logo from '../../images/Befirst-Logos-4.png'
import { toast } from 'react-toastify';
import styled from 'styled-components';
const CareersFormPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    dateOfBirth: '',
    gender: '',
    position: '',
    experience: '',
    currentSalary: '',
    expectedSalary: '',
    noticePeriod: '',
    qualification: '',
    skills: '',
    linkedinProfile: '',
    portfolioUrl: '',
    workExperience: '',
    achievements: '',
    coverLetter: '',
    preferredLocation: '',
    availableToRelocate: '',
    references: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const generateWhatsAppMessage = () => {
    const message = `
🎯 *NEW CAREER APPLICATION - BeFirst HR*

👤 *PERSONAL DETAILS*
• Name: ${formData.firstName} ${formData.lastName}
• Email: ${formData.email}
• Phone: ${formData.phone}
• Location: ${formData.location}
• DOB: ${formData.dateOfBirth}
• Gender: ${formData.gender}

💼 *PROFESSIONAL DETAILS*
• Position Applied: ${formData.position}
• Experience: ${formData.experience}
• Current Salary: ₹${formData.currentSalary}
• Expected Salary: ₹${formData.expectedSalary}
• Notice Period: ${formData.noticePeriod}

🎓 *QUALIFICATIONS & SKILLS*
• Education: ${formData.qualification}
• Key Skills: ${formData.skills}

🔗 *PROFILES*
• LinkedIn: ${formData.linkedinProfile}
• Portfolio: ${formData.portfolioUrl}

📄 *EXPERIENCE & ACHIEVEMENTS*
• Work Experience: ${formData.workExperience}
• Key Achievements: ${formData.achievements}

📍 *LOCATION PREFERENCES*
• Preferred Location: ${formData.preferredLocation}
• Available to Relocate: ${formData.availableToRelocate}

💬 *COVER LETTER*
${formData.coverLetter}

👥 *REFERENCES*
${formData.references}

---
📧 *CV will be sent to: careers@befirsthr.com*
🌐 *Applied via BeFirst HR Careers Portal*
    `;
    return encodeURIComponent(message.trim());
  };

  const handleSubmit = async () => {
    // Validate required fields
    if (!formData.firstName || !formData.lastName || !formData.email || 
        !formData.phone || !formData.location || !formData.position || 
        !formData.experience || !formData.expectedSalary || !formData.noticePeriod || 
        !formData.qualification || !formData.skills) {
      toast.error('Please fill in all required fields marked with ');
      return;
    }

    setIsSubmitting(true);

    // Simulate form processing
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Generate WhatsApp message
    const whatsappMessage = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/919400905954?text=${whatsappMessage}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');

    // Show email instruction
    const emailSubject = `CV Submission - ${formData.firstName} ${formData.lastName} - ${formData.position}`;
    const emailBody = `Dear BeFirst HR Team,

Please find attached my CV for the ${formData.position} position.

Application details have been shared via WhatsApp for your reference.

Best regards,
${formData.firstName} ${formData.lastName}
${formData.email}
${formData.phone}`;

    const emailUrl = `mailto:careers@befirsthr.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    setTimeout(() => {
      window.open(emailUrl, '_blank');
    }, 1000);

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-vh-100 d-flex align-items-center justify-content-center" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="card border-0 shadow-lg text-center p-5" style={{ borderRadius: '20px' }}>
                <CheckCircle size={80} className="text-success mx-auto mb-4" />
                <h2 className="mb-3" style={{ color: '#2c3e50', fontWeight: '700' }}>Application Submitted Successfully!</h2>
                <p className="lead mb-4" style={{ color: '#6c757d' }}>
                  Your application has been processed. Please check your messaging app and email client to complete the submission.
                </p>
                <div className="alert alert-info" role="alert">
                  <strong>Next Steps:</strong>
                  <ul className="list-unstyled mt-2 mb-0">
                    <li>✅ WhatsApp message generated</li>
                    <li>✅ Email template prepared</li>
                    <li>📧 Send your CV to: <strong>careers@befirsthr.com</strong></li>
                  </ul>
                </div>
                <button 
                  className="btn btn-primary btn-lg px-5"
                  onClick={() => setIsSubmitted(false)}
                  style={{ 
                    background: 'linear-gradient(45deg, #4f46e5, #7c3aed)',
                    border: 'none',
                    borderRadius: '50px'
                  }}
                >
                  Submit Another Application
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }


  const CardAlertHeading = styled.h5`
  font-size: 25px !important;
  @media (max-width: 768px) {
    font-size: 17px !important;
  }`;
  const CardAlertDescription = styled.h5`
  font-size: 20px !important;
  @media (max-width: 768px) {
    font-size: 14px !important;
  }`;
  return (
    <>
    <div className="min-vh-100" style={{ background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' }}>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            {/* Header */}
            <div className="text-center mb-5">
              <div className="d-block align-items-center justify-content-center mb-3">
                <div 
                  className="d-flex align-items-center justify-content-center me-3"
                 
                >
                  <img src={Logo} alt="BeFirst HR Logo"  />
                </div>
                <h1 className="mb-0" style={{ color: '#2c3e50', fontWeight: '700' }}>
                  BeFirst HR Consultancy
                </h1>
              </div>
              <h2 className="mb-3" style={{ color: '#3251EC', fontWeight: '600' }}>Career Application Form</h2>
              <p className="lead" style={{ color: '#6c757d' }}>
                Take the first step towards your dream career. Fill out the form below and we'll get back to you soon.
              </p>
            </div>

            {/* Form */}
            <div>
              <div className="card border-0 " style={{ borderRadius: '20px' }}>
                <div className="card-body p-5">
                  {/* Personal Information */}
                  <div className="mb-5">
                    <h4 className="mb-4 d-flex align-items-center" style={{ color: '#2c3e50', fontWeight: '600' }}>
                      <User className="me-2" size={24} />
                      Personal Information
                    </h4>
                    <div className="row g-4">
                      <div className="col-md-6">
                        <label className="form-label fw-semibold">First Name *</label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="form-control form-control-lg"
                          style={{ borderRadius: '12px', border: '2px solid #e9ecef' }}
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label fw-semibold">Last Name *</label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="form-control form-control-lg"
                          style={{ borderRadius: '12px', border: '2px solid #e9ecef' }}
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label fw-semibold">Email Address *</label>
                        <div className="input-group input-group-lg">
                          <span className="input-group-text bg-light" style={{ borderRadius: '12px 0 0 12px', border: '2px solid #e9ecef' }}>
                            <Mail size={20} />
                          </span>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="form-control"
                            style={{ borderRadius: '0 12px 12px 0', border: '2px solid #e9ecef', borderLeft: 'none' }}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <label className="form-label fw-semibold">Phone Number *</label>
                        <div className="input-group input-group-lg">
                          <span className="input-group-text bg-light" style={{ borderRadius: '12px 0 0 12px', border: '2px solid #e9ecef' }}>
                            <Phone size={20} />
                          </span>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="form-control"
                            style={{ borderRadius: '0 12px 12px 0', border: '2px solid #e9ecef', borderLeft: 'none' }}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <label className="form-label fw-semibold">Current Location *</label>
                        <div className="input-group input-group-lg">
                          <span className="input-group-text bg-light" style={{ borderRadius: '12px 0 0 12px', border: '2px solid #e9ecef' }}>
                            <MapPin size={20} />
                          </span>
                          <input
                            type="text"
                            name="location"
                            value={formData.location}
                            onChange={handleInputChange}
                            className="form-control"
                            style={{ borderRadius: '0 12px 12px 0', border: '2px solid #e9ecef', borderLeft: 'none' }}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-3">
                        <label className="form-label fw-semibold">Date of Birth</label>
                        <input
                          type="date"
                          name="dateOfBirth"
                          value={formData.dateOfBirth}
                          onChange={handleInputChange}
                          className="form-control form-control-lg"
                          style={{ borderRadius: '12px', border: '2px solid #e9ecef' }}
                        />
                      </div>
                      <div className="col-md-3">
                        <label className="form-label fw-semibold">Gender</label>
                        <select
                          name="gender"
                          value={formData.gender}
                          onChange={handleInputChange}
                          className="form-select form-select-lg"
                          style={{ borderRadius: '12px', border: '2px solid #e9ecef' }}
                        >
                          <option value="">Select Gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                          <option value="Prefer not to say">Prefer not to say</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Professional Information */}
                  <div className="mb-5">
                    <h4 className="mb-4 d-flex align-items-center" style={{ color: '#2c3e50', fontWeight: '600' }}>
                      <Briefcase className="me-2" size={24} />
                      Professional Information
                    </h4>
                    <div className="row g-4">
                      <div className="col-md-6">
                        <label className="form-label fw-semibold">Position Applied For *</label>
                        <select
                          name="position"
                          value={formData.position}
                          onChange={handleInputChange}
                          className="form-select form-select-lg"
                          style={{ borderRadius: '12px', border: '2px solid #e9ecef' }}
                          required
                        >
                          <option value="">Select Position</option>
                          <option value="HR Executive">HR Executive</option>
                          <option value="Business Development Manager">Business Development Manager</option>
                          <option value="Sales Manager">Sales Manager</option>
                          <option value="Other">Other Position</option>
                        </select>
                      </div>
                      <div className="col-md-6">
                        <label className="form-label fw-semibold">Total Experience *</label>
                        <select
                          name="experience"
                          value={formData.experience}
                          onChange={handleInputChange}
                          className="form-select form-select-lg"
                          style={{ borderRadius: '12px', border: '2px solid #e9ecef' }}
                          required
                        >
                          <option value="">Select Experience</option>
                          <option value="Fresher">Fresher (0 years)</option>
                          <option value="1-2 years">1-2 years</option>
                          <option value="2-4 years">2-4 years</option>
                          <option value="4-6 years">4-6 years</option>
                          <option value="6-10 years">6-10 years</option>
                          <option value="10+ years">10+ years</option>
                        </select>
                      </div>
                      <div className="col-md-4">
                        <label className="form-label fw-semibold">Current Salary (LPA)</label>
                        <input
                          type="text"
                          name="currentSalary"
                          value={formData.currentSalary}
                          onChange={handleInputChange}
                          className="form-control form-control-lg"
                          style={{ borderRadius: '12px', border: '2px solid #e9ecef' }}
                          placeholder="e.g., 5.5"
                        />
                      </div>
                      <div className="col-md-4">
                        <label className="form-label fw-semibold">Expected Salary (LPA) *</label>
                        <input
                          type="text"
                          name="expectedSalary"
                          value={formData.expectedSalary}
                          onChange={handleInputChange}
                          className="form-control form-control-lg"
                          style={{ borderRadius: '12px', border: '2px solid #e9ecef' }}
                          placeholder="e.g., 7.5"
                          required
                        />
                      </div>
                      <div className="col-md-4">
                        <label className="form-label fw-semibold">Notice Period *</label>
                        <select
                          name="noticePeriod"
                          value={formData.noticePeriod}
                          onChange={handleInputChange}
                          className="form-select form-select-lg"
                          style={{ borderRadius: '12px', border: '2px solid #e9ecef' }}
                          required
                        >
                          <option value="">Select Notice Period</option>
                          <option value="Immediate">Immediate</option>
                          <option value="15 days">15 days</option>
                          <option value="30 days">30 days</option>
                          <option value="45 days">45 days</option>
                          <option value="60 days">60 days</option>
                          <option value="90 days">90 days</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Education & Skills */}
                  <div className="mb-5">
                    <h4 className="mb-4 d-flex align-items-center" style={{ color: '#2c3e50', fontWeight: '600' }}>
                      <FileText className="me-2" size={24} />
                      Education & Skills
                    </h4>
                    <div className="row g-4">
                      <div className="col-12">
                        <label className="form-label fw-semibold">Highest Qualification *</label>
                        <input
                          type="text"
                          name="qualification"
                          value={formData.qualification}
                          onChange={handleInputChange}
                          className="form-control form-control-lg"
                          style={{ borderRadius: '12px', border: '2px solid #e9ecef' }}
                          placeholder="e.g., MBA in HR, B.Tech in Computer Science"
                          required
                        />
                      </div>
                      <div className="col-12">
                        <label className="form-label fw-semibold">Key Skills *</label>
                        <textarea
                          name="skills"
                          value={formData.skills}
                          onChange={handleInputChange}
                          className="form-control"
                          rows="3"
                          style={{ borderRadius: '12px', border: '2px solid #e9ecef' }}
                          placeholder="List your key skills separated by commas (e.g., Team Management, Strategic Planning, Communication)"
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label fw-semibold">LinkedIn Profile</label>
                        <input
                          type="url"
                          name="linkedinProfile"
                          value={formData.linkedinProfile}
                          onChange={handleInputChange}
                          className="form-control form-control-lg"
                          style={{ borderRadius: '12px', border: '2px solid #e9ecef' }}
                          placeholder="https://linkedin.com/in/yourprofile"
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label fw-semibold">Portfolio/Website URL</label>
                        <input
                          type="url"
                          name="portfolioUrl"
                          value={formData.portfolioUrl}
                          onChange={handleInputChange}
                          className="form-control form-control-lg"
                          style={{ borderRadius: '12px', border: '2px solid #e9ecef' }}
                          placeholder="https://yourportfolio.com"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div className="mb-5">
                    <h4 className="mb-4 d-flex align-items-center" style={{ color: '#2c3e50', fontWeight: '600' }}>
                      <FileText className="me-2" size={24} />
                      Additional Information
                    </h4>
                    <div className="row g-4">
                      <div className="col-12">
                        <label className="form-label fw-semibold">Brief Work Experience Summary</label>
                        <textarea
                          name="workExperience"
                          value={formData.workExperience}
                          onChange={handleInputChange}
                          className="form-control"
                          rows="4"
                          style={{ borderRadius: '12px', border: '2px solid #e9ecef' }}
                          placeholder="Briefly describe your work experience, key roles, and responsibilities"
                        />
                      </div>
                      <div className="col-12">
                        <label className="form-label fw-semibold">Key Achievements</label>
                        <textarea
                          name="achievements"
                          value={formData.achievements}
                          onChange={handleInputChange}
                          className="form-control"
                          rows="3"
                          style={{ borderRadius: '12px', border: '2px solid #e9ecef' }}
                          placeholder="List your key professional achievements and accomplishments"
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label fw-semibold">Preferred Work Location</label>
                        <input
                          type="text"
                          name="preferredLocation"
                          value={formData.preferredLocation}
                          onChange={handleInputChange}
                          className="form-control form-control-lg"
                          style={{ borderRadius: '12px', border: '2px solid #e9ecef' }}
                          placeholder="e.g., Calicut, Kochi, Remote"
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label fw-semibold">Available to Relocate?</label>
                        <select
                          name="availableToRelocate"
                          value={formData.availableToRelocate}
                          onChange={handleInputChange}
                          className="form-select form-select-lg"
                          style={{ borderRadius: '12px', border: '2px solid #e9ecef' }}
                        >
                          <option value="">Select Option</option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                          <option value="Depends on location">Depends on location</option>
                        </select>
                      </div>
                      <div className="col-12">
                        <label className="form-label fw-semibold">Cover Letter / Why do you want to join us?</label>
                        <textarea
                          name="coverLetter"
                          value={formData.coverLetter}
                          onChange={handleInputChange}
                          className="form-control"
                          rows="4"
                          style={{ borderRadius: '12px', border: '2px solid #e9ecef' }}
                          placeholder="Tell us why you're interested in this position and what you can bring to our team"
                        />
                      </div>
                      <div className="col-12">
                        <label className="form-label fw-semibold">References</label>
                        <textarea
                          name="references"
                          value={formData.references}
                          onChange={handleInputChange}
                          className="form-control"
                          rows="3"
                          style={{ borderRadius: '12px', border: '2px solid #e9ecef' }}
                          placeholder="Professional references (Name, Designation, Company, Contact)"
                        />
                      </div>
                    </div>
                  </div>

                  {/* CV Upload Instructions */}
                  <div className="alert alert-info mb-4" role="alert" style={{ borderRadius: '12px', border: 'none' }}>
                    <div className="d-flex align-items-center">
                      <Upload className="me-3" size={24} />
                      <div>
                        <CardAlertHeading className="alert-heading mb-2">

                        {/* <h5 className="alert-heading mb-2"> */}
                            CV Submission Instructions
                            {/* </h5> */}
                        </CardAlertHeading>
                        {/* <p className="mb-0"> */}
                            <CardAlertDescription className='mb-0'>
                          After submitting this form, you'll be redirected to send your CV via email to: 

                          <strong> 
                            <a href='mailto: careers@befirsthr.com' 
                            style={{ color:'black', textDecoration: 'none' }} 
                            target='_blank' 
                            rel="noopener noreferrer" 
                            > careers@befirsthr.com
                            </a>

                            </strong>
                            </CardAlertDescription>
                        {/* </p> */}
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="text-center">
                    <button
                      type="button"
                      disabled={isSubmitting}
                      onClick={handleSubmit}
                      className="btn btn-lg px-5 py-3"
                      style={{ 
                        background: isSubmitting ? 'black' : 'linear-gradient(45deg, #3251EC, #508DF8)',
                        border: 'none',
                        borderRadius: '50px',
                        color: 'white',
                        fontWeight: '600',
                        fontSize: '18px',
                        minWidth: '200px'
                      }}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="spinner-border spinner-border-sm me-2" role="status">
                            <span className="visually-hidden">Loading...</span>
                          </div>
                          Processing...
                        </>
                      ) : (
                        <>
                          <Send className="me-2" size={20} />
                          Submit Application
                        </>
                      )}
                    </button>
                  </div>

                  <div className="text-center mt-3">
                    <small className="text-muted">
                      By submitting this form, you agree to our terms and conditions and privacy policy.
                    </small>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>

    </>

  );
};

export default CareersFormPage;