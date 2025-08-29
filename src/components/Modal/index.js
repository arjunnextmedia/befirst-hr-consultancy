import React, { Component } from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap'
import DatePicker from 'react-datepicker'
import { Phone, Loader2, X } from 'lucide-react'
import 'react-datepicker/dist/react-datepicker.css'
import { WhatsAppConsultMessageFormat } from '../../utils/consultingFormatter'

export default class ConsultingModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            formData: {
                name: '',
                email: '',
                phone: '',
                subject: '',
                description: '',
                scheduleDate: new Date()
            },
            isSubmitting: false,
            errors: {},
            showAlert: false,
            alertMessage: ''
        }
    }

    // <===Form validation===>
    validateForm = () => {
        const { formData } = this.state
        const errors = {}

        if (!formData.name.trim()) {
            errors.name = 'Name is required'
        } else if (formData.name.length < 2) {
            errors.name = 'Name must be at least 2 characters'
        }

        if (!formData.email.trim()) {
            errors.email = 'Email is required'
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Please enter a valid email address'
        }

        if (!formData.phone.trim()) {
            errors.phone = 'Phone number is required'
        } else if (!/^\d{10,15}$/.test(formData.phone.replace(/[\s\-\(\)]/g, ''))) {
            errors.phone = 'Please enter a valid phone number'
        }

        if (!formData.subject.trim()) {
            errors.subject = 'Subject is required'
        }

        if (!formData.scheduleDate) {
            errors.scheduleDate = 'Please select a preferred date'
        }

        return errors
    }

    handleInputChange = (e) => {
        const { name, value } = e.target
        this.setState({
            formData: {
                ...this.state.formData,
                [name]: value
            },
            errors: {
                ...this.state.errors,
                [name]: ''
            }
        })
    }

    handleDateChange = (date) => {
        this.setState({
            formData: {
                ...this.state.formData,
                scheduleDate: date
            },
            errors: {
                ...this.state.errors,
                scheduleDate: ''
            }
        })
    }

   handleFormSubmit = async (e) => {
    e.preventDefault();

    const errors = this.validateForm();
    if (Object.keys(errors).length > 0) {
        this.setState({ errors });
        return;
    }

    this.setState({ isSubmitting: true, errors: {} });

    try {
        // Directly call sendToWhatsApp without formatting here
        this.sendToWhatsApp();

        this.setState({
            showAlert: true,
            alertMessage: 'Redirecting to WhatsApp... Your consultation request is ready to send!',
            isSubmitting: false
        });

        setTimeout(() => {
            this.resetForm();
            this.props.toggle();
        }, 3000);
    } catch (error) {
        this.setState({
            showAlert: true,
            alertMessage: 'Something went wrong. Please try again later.',
            isSubmitting: false
        });
    }
}

    resetForm = () => {
        this.setState({
            formData: {
                name: '',
                email: '',
                phone: '',
                subject: '',
                description: '',
                scheduleDate: new Date()
            },
            errors: {},
            showAlert: false,
            alertMessage: '',
            isSubmitting: false
        })
    }

    // <===Message Template===>
//     formatWhatsAppMessage = (data) => {
//         const formattedDate = data.scheduleDate.toLocaleDateString('en-US', {
//             weekday: 'long',
//             year: 'numeric',
//             month: 'long',
//             day: 'numeric'
//         })

//         const message = `
// 🌟 *FREE CONSULTING REQUEST* 🌟

// 👤 *PERSONAL INFORMATION*
// ━━━━━━━━━━━━━━━━━━━━━━
// • *Name:* ${data.name}
// • *Email:* ${data.email}
// • *Phone:* ${data.phone}

// 📋 *CONSULTATION DETAILS*
// ━━━━━━━━━━━━━━━━━━━━━━━━━
// • *Subject:* ${data.subject}
// • *Preferred Date:* ${formattedDate}

// 📝 *DESCRIPTION*
// ━━━━━━━━━━━━━━━━━━━
// ${data.description || 'No additional details provided'}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// ⏰ *Submitted on:* ${new Date().toLocaleString()}

//         `.trim()

//         return encodeURIComponent(message)
//     }


  sendToWhatsApp = () => {
    const whatsappNumber = "919400905954"; 
    const message = WhatsAppConsultMessageFormat(this.state.formData);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
}

    render() {
        const { isOpen, toggle } = this.props
        const { formData, isSubmitting, errors, showAlert, alertMessage } = this.state

        return (
            <Modal
                isOpen={isOpen}
                toggle={toggle}
                size="lg"
                className="consulting-modal"
                centered
                backdrop="static"
                keyboard={false}

            >
                <ModalHeader
                    // toggle={!isSubmitting ? toggle : null} 
                    className="border-0 pb-0 text-center position-relative"
                    style={{
                        background: 'linear-gradient(135deg, #304FE9 0%, #1a3bb8 100%)',
                        color: 'white',
                        borderRadius: '0.5rem 0.5rem 0 0',
                        overflow: 'hidden',
                        padding: '1.5rem 1rem'
                    }}
                >
                    {/* Background Pattern - Add z-index: 0 */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
                        opacity: 0.2, // Reduced opacity
                        zIndex: 0 // Add this
                    }}></div>

                    {/* Content Container - Add z-index: 1 */}
                    <div className="d-flex flex-column align-items-center justify-content-center w-100 position-relative"
                        style={{
                            padding: '1.5rem 1rem',
                            zIndex: 1 // Add this
                        }}>
                        {/* Title and Subtitle */}
                        <div className="text-center">
                            <h3 className="mb-2 fw-bold text-white" style={{
                                fontSize: '1.5rem',
                                textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                                letterSpacing: '0.5px'
                            }}>
                                Free Consulting Request
                            </h3>
                            <p className="mb-0 opacity-90" style={{
                                color: 'white',
                                fontSize: '0.9rem',
                                fontWeight: '400',
                                maxWidth: '400px',
                                lineHeight: '1.4'
                            }}>
                                Get expert advice tailored to your needs - completely free consultation
                            </p>
                        </div>
                    </div>

                    {/* Custom Close Button - Add this element */}
                    {!isSubmitting && (
                        <button
                            onClick={toggle}
                            className="position-absolute"
                            style={{
                                top: '1rem',
                                right: '1rem',
                                zIndex: 2,
                                background: 'transparent',
                                border: 'none',
                                color: 'white',
                                opacity: 0.8,
                                fontSize: '1.5rem',
                                cursor: 'pointer'
                            }}
                        >
                            <X size={24} />
                        </button>
                    )}
                </ModalHeader>

                <ModalBody className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                    {showAlert && (
                        <Alert
                            color={alertMessage.includes('successfully') ? 'success' : 'danger'}
                            className="mb-4 shadow-sm border-0"
                        >
                            <div className="d-flex align-items-center">
                                <span className="me-2">
                                    {alertMessage.includes('successfully') ? '✅' : '❌'}
                                </span>
                                {alertMessage}
                            </div>
                        </Alert>
                    )}

                    {!showAlert && (
                        <div className="bg-white rounded p-4 shadow-sm border-start border-4" style={{ borderColor: '#304FE9' }}>
                            <div className="d-flex align-items-center" style={{ color: '#304FE9' }}>
                                <span className="me-2">💡</span>
                                <small className="fw-medium">
                                    Fill out the form below and we'll get back to you within 24 hours with a customized consultation plan.
                                </small>
                            </div>
                        </div>
                    )}

                    <div className="bg-white rounded p-4 shadow-sm">
                        <Form onSubmit={this.handleFormSubmit}>
                            {/* <===Personal Information Section===> */}
                            <div className="mb-4">
                                <h6 className="fw-bold mb-3 d-flex align-items-center" style={{ color: '#304FE9' }}>
                                    <span className="me-2">👤</span>
                                    Personal Information
                                </h6>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <FormGroup>
                                            <Label for="name" className="fw-semibold text-dark">
                                                Full Name <span className="text-danger">*</span>
                                            </Label>
                                            <Input
                                                type="text"
                                                name="name"
                                                id="name"
                                                value={formData.name}
                                                onChange={this.handleInputChange}
                                                placeholder="Enter your full name"
                                                className={`form-control-lg shadow-sm border-0 ${errors.name ? 'is-invalid' : ''}`}
                                                style={{ backgroundColor: '#f8f9fa' }}
                                                disabled={isSubmitting}
                                                required
                                            />
                                            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                                        </FormGroup>
                                    </div>
                                    <div className="col-md-6">
                                        <FormGroup>
                                            <Label for="email" className="fw-semibold text-dark">
                                                Email Address <span className="text-danger">*</span>
                                            </Label>
                                            <Input
                                                type="email"
                                                name="email"
                                                id="email"
                                                value={formData.email}
                                                onChange={this.handleInputChange}
                                                placeholder="your@email.com"
                                                className={`form-control-lg shadow-sm border-0 ${errors.email ? 'is-invalid' : ''}`}
                                                style={{ backgroundColor: '#f8f9fa' }}
                                                disabled={isSubmitting}
                                                required
                                            />
                                            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                                        </FormGroup>
                                    </div>
                                </div>

                                <div className="row g-3 mt-1">
                                    <div className="col-md-6">
                                        <FormGroup>
                                            <Label for="phone" className="fw-semibold text-dark">
                                                Phone Number <span className="text-danger">*</span>
                                            </Label>
                                            <Input
                                                type="tel"
                                                name="phone"
                                                id="phone"
                                                value={formData.phone}
                                                onChange={this.handleInputChange}
                                                placeholder="+1 (555) 123-4567"
                                                className={`form-control-lg shadow-sm border-0 ${errors.phone ? 'is-invalid' : ''}`}
                                                style={{ backgroundColor: '#f8f9fa' }}
                                                disabled={isSubmitting}
                                                required
                                            />
                                            {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                                        </FormGroup>
                                    </div>
                                    <div className="col-md-6">
                                        <FormGroup>
                                            <Label for="scheduleDate" className="fw-semibold text-dark">
                                                Preferred Date <span className="text-danger">*</span>
                                            </Label>
                                            <div>
                                                <DatePicker
                                                    selected={formData.scheduleDate}
                                                    onChange={this.handleDateChange}
                                                    minDate={new Date()}
                                                    maxDate={new Date(Date.now() + 90 * 24 * 60 * 60 * 1000)} // 90 days from now
                                                    dateFormat="EEEE, MMMM d, yyyy"
                                                    className={`form-control form-control-lg shadow-sm border-0 ${errors.scheduleDate ? 'is-invalid' : ''}`}
                                                    style={{ backgroundColor: '#f8f9fa' }}
                                                    placeholderText="Select your preferred date"
                                                    showPopperArrow={false}
                                                    disabled={isSubmitting}
                                                    required
                                                />
                                                {errors.scheduleDate && <div className="text-danger small mt-1">{errors.scheduleDate}</div>}
                                            </div>
                                        </FormGroup>
                                    </div>
                                </div>
                            </div>

                            {/*<===Consultation Details Section===> */}
                            <div className="mb-4">
                                <h6 className="fw-bold mb-3 d-flex align-items-center" style={{ color: '#304FE9' }}>
                                    <span className="me-2">📝</span>
                                    Consultation Details
                                </h6>

                                <FormGroup className="mb-3">
                                    <Label for="subject" className="fw-semibold text-dark">
                                        Subject/Topic <span className="text-danger">*</span>
                                    </Label>
                                    <Input
                                        type="text"
                                        name="subject"
                                        id="subject"
                                        value={formData.subject}
                                        onChange={this.handleInputChange}
                                        placeholder="e.g., Business Strategy, Digital Marketing, Process Optimization"
                                        className={`form-control-lg shadow-sm border-0 ${errors.subject ? 'is-invalid' : ''}`}
                                        style={{ backgroundColor: '#f8f9fa' }}
                                        disabled={isSubmitting}
                                        required
                                    />
                                    {errors.subject && <div className="invalid-feedback">{errors.subject}</div>}
                                </FormGroup>

                                <FormGroup>
                                    <Label for="description" className="fw-semibold text-dark">
                                        Description & Requirements
                                    </Label>
                                    <Input
                                        type="textarea"
                                        name="description"
                                        id="description"
                                        rows="4"
                                        value={formData.description}
                                        onChange={this.handleInputChange}
                                        placeholder="Please describe your current situation, challenges you're facing, goals you want to achieve, and any specific areas where you need guidance..."
                                        className="form-control-lg shadow-sm border-0"
                                        style={{ backgroundColor: '#f8f9fa', resize: 'none' }}
                                        disabled={isSubmitting}
                                    />
                                </FormGroup>
                            </div>
                        </Form>
                    </div>
                </ModalBody>

                <ModalFooter className="border-0 bg-light d-flex justify-content-between align-items-center p-4">
                    {/* <div className="text-muted d-flex align-items-center">
                        <span className="me-2">🔒</span>
                        <small>
                            <strong>100% Confidential</strong> - Your information is secure and will never be shared
                        </small>
                    </div> */}
                    <div className="d-flex gap-2">
                        <Button
                            color="danger"
                            onClick={toggle}
                            className="px-4 py-2 border-0"
                            disabled={isSubmitting}
                        >
                            <X size={16} className="me-2" />
                            Cancel
                        </Button>
                        <Button
                            color="primary"
                            onClick={this.handleFormSubmit}
                            className="px-4 py-2 fw-semibold shadow border-0 d-flex align-items-center"
                            style={{
                                background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                                borderRadius: '25px'
                            }}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 size={18} className="me-2" style={{ animation: 'spin 1s linear infinite' }} />
                                    Sending...
                                </>
                            ) : (
                                <>
                                    <div className="me-2 d-flex align-items-center justify-content-center"
                                        style={{
                                            width: '20px',
                                            height: '20px',
                                            backgroundColor: 'rgba(255,255,255,0.2)',
                                            borderRadius: '50%'
                                        }}>
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                                        </svg>
                                    </div>
                                    Send via WhatsApp
                                </>
                            )}
                        </Button>
                    </div>
                </ModalFooter>
            </Modal>
        )
    }
}