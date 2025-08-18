import React, { Component } from "react";
import { formatWhatsAppMessage } from "../../utils/EnquiryFormatter";
import toast from "react-hot-toast";
import { axiosInstance } from "../../api/axios";

class ContactForm extends Component {
  state = {
    name: "",
    email: "",
    subject: "",
    lastname: "",
    events: "",
    notes: "",
    error: {},
    isSubmitting: false,
  };

  changeHandler = (e) => {
    const error = this.state.error;
    error[e.target.name] = "";
    this.setState({
      [e.target.name]: e.target.value,
      error,
    });
  };

  validateForm = () => {
    const { name, email, subject, lastname, notes } = this.state;
    const error = {};
    let isValid = true;

    if (!name.trim()) {
      error.name = "Please enter your name";
      isValid = false;
    }
    if (!lastname.trim()) {
      error.lastname = "Please enter your lastname";
      isValid = false;
    }
    if (!email.trim()) {
      error.email = "Please enter your email";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      error.email = "Please enter a valid email";
      isValid = false;
    }
    if (!subject.trim()) {
      error.subject = "Please enter your subject";
      isValid = false;
    }
    if (!notes.trim()) {
      error.notes = "Please enter your message";
      isValid = false;
    }

    this.setState({ error });
    return isValid;
  };

  submitHandler = async (e) => {
    e.preventDefault();

    if (!this.validateForm()) {
      return;
    }

    this.setState({ isSubmitting: true });

    const { name, lastname, email, subject, notes } = this.state;

    try {
      await axiosInstance.post("/enquiry", {
        name,
        lastname,
        email,
        subject,
        notes,
      });

      const whatsappNumber = "9847634709";
      const message = formatWhatsAppMessage({
        name,
        lastname,
        email,
        subject,
        notes,
      });
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
      window.open(whatsappUrl, "_blank");

      toast.success("Enquiry sent successfully!");

      this.setState({
        name: "",
        email: "",
        subject: "",
        lastname: "",
        events: "",
        notes: "",
        error: {},
        isSubmitting: false,
      });
    } catch (error) {
      console.error(error);
      toast.error("Failed to send enquiry. Please try again.");
      this.setState({ isSubmitting: false });
    }
  };

  render() {
    const { name, email, subject, lastname, notes, error, isSubmitting } =
      this.state;

    return (
      <form onSubmit={this.submitHandler} className="form">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-6 col-12">
            <div className="form-field">
              <input
                value={name}
                onChange={this.changeHandler}
                type="text"
                name="name"
                placeholder="Name"
                className={error.name ? "error-input" : ""}
              />
              {error.name && <p className="error-message">{error.name}</p>}
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <div className="form-field">
              <input
                value={lastname}
                onChange={this.changeHandler}
                type="text"
                name="lastname"
                placeholder="Lastname"
                className={error.lastname ? "error-input" : ""}
              />
              {error.lastname && (
                <p className="error-message">{error.lastname}</p>
              )}
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <div className="form-field">
              <input
                onChange={this.changeHandler}
                value={email}
                type="email"
                name="email"
                placeholder="Email"
                className={error.email ? "error-input" : ""}
              />
              {error.email && <p className="error-message">{error.email}</p>}
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <div className="form-field">
              <input
                onChange={this.changeHandler}
                value={subject}
                type="text"
                name="subject"
                placeholder="Subject"
                className={error.subject ? "error-input" : ""}
              />
              {error.subject && (
                <p className="error-message">{error.subject}</p>
              )}
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-field">
              <textarea
                name="notes"
                value={notes}
                onChange={this.changeHandler}
                placeholder="Message"
                className={error.notes ? "error-input" : ""}
              ></textarea>
              {error.notes && <p className="error-message">{error.notes}</p>}
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-submit">
              <button type="submit" className="theme-btn" disabled={isSubmitting}>
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <div className="d-flex align-items-center justify-content-center">
                    <div
                      className="me-2 d-flex align-items-center justify-content-center"
                      style={{
                        width: "20px",
                        height: "20px",
                        backgroundColor: "rgba(255,255,255,0.2)",
                        borderRadius: "50%",
                      }}
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                      </svg>
                    </div>
                    Send Enquiry
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default ContactForm;
