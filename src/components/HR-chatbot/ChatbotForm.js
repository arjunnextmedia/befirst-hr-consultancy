import React, { useState } from 'react';

export const ChatbotContactForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ name: '', email: '', phone: '' });
  };

  return (
    <div className="contact-form p-3">
      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <div className="mb-3">
          <input
            type="text"
            className="form-control form-control-sm"
            placeholder="Full Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>

        {/* Email Field */}
        <div className="mb-3">
          <input
            type="email"
            className="form-control form-control-sm"
            placeholder="Email Address"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>

        {/* Phone Field */}
        <div className="mb-3">
          <input
            type="tel"
            className="form-control form-control-sm"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary btn-sm w-100">
          Submit Details
        </button>
      </form>
    </div>
  );
};