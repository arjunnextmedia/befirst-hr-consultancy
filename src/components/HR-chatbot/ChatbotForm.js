import React, { useState } from 'react';
import { Send, User, Mail, Phone, MessageCircle } from 'lucide-react';
import toast from 'react-hot-toast';

 export const ChatbotContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const generateWhatsAppMessage = () => {
    const { name, email, phone } = formData;
    
    // Premium formatted WhatsApp message
    return `🌟 *NEW CHATBOT ENQUIRY* 🌟
    
👤 *Contact Details:*
   • *Name:* ${name}
   • *Email:* ${email}
   • *Phone:* ${phone}

🏢 *Enquiry Source:* Website Chatbot

📋 *Service Interest:* Premium HR Solutions

---
*This enquiry was generated from our premium website chatbot.*`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error('Please fill all fields');
      setIsSubmitting(false);
      return;
    }
    
    // Format the WhatsApp message
    const message = generateWhatsAppMessage();
    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = "919400905954"; 
    
    // Open WhatsApp with the pre-filled message
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
    
    toast.success('Opening WhatsApp with your enquiry details');
    
    // Reset form after a short delay
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="premium-chatbot-form">
      <div className="form-header">
        <h3>Get Premium Assistance</h3>
        <p>Share your details and we'll contact you immediately</p>
      </div>
      
      <form onSubmit={handleSubmit} className="premium-contact-form">
        <div className="form-group">
          <div className="input-icon">
            <User size={18} />
          </div>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="premium-input"
            required
          />
        </div>
        
        <div className="form-group">
          <div className="input-icon">
            <Mail size={18} />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="premium-input"
            required
          />
        </div>
        
        <div className="form-group">
          <div className="input-icon">
            <Phone size={18} />
          </div>
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="premium-input"
            required
          />
        </div>
        
        <button 
          type="submit" 
          className="submit-btn"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <div className="loading-spinner"></div>
          ) : (
            <>
              <Send size={16} />
              Send via WhatsApp
            </>
          )}
        </button>
      </form>
      
      <div className="form-footer">
        <div className="whatsapp-info">
          <MessageCircle size={14} />
          <span>Your details will be shared via WhatsApp</span>
        </div>
      </div>
      
      <style jsx>{`
        .premium-chatbot-form {
          background: #FDFEFE;
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.1);
          max-width: 400px;
          margin: 0 auto;
          color: white;
        }
        
        .form-header {
          text-align: center;
          margin-bottom: 24px;
        }
        
        .form-header h3 {
          margin: 0 0 8px 0;
          font-weight: 600;
          font-size: 1.25rem;
          background: linear-gradient(135deg, #4299e1 0%, #4299e1 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .form-header p {
          margin: 0;
          color: #cbd5e0;
          font-size: 0.875rem;
        }
        
        .premium-contact-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        
        .form-group {
          position: relative;
        }
        
        .input-icon {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          color: #4299e1;
          z-index: 1;
        }
        
        .premium-input {
          width: 100%;
          padding: 12px 12px 12px 40px;
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.05);
          color: white;
          font-size: 0.95rem;
          transition: all 0.3s ease;
        }
        
        .premium-input:focus {
          outline: none;
          border-color: #4299e1;
          box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.2);
          background: rgba(255, 255, 255, 0.08);
        }
        
        .premium-input::placeholder {
          color: #a0aec0;
        }
        
        .submit-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px 20px;
          border-radius: 8px;
          border: none;
          background: linear-gradient(135deg, #3656F4 0%, #3182ce 100%);
          color: white;
          font-weight: 600;
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 8px;
        }
        
        .submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(66, 153, 225, 0.4);
        }
        
        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        
        .loading-spinner {
          width: 18px;
          height: 18px;
          border: 2px solid transparent;
          border-top: 2px solid white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        
        .form-footer {
          margin-top: 16px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 16px;
        }
        
        .whatsapp-info {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #a0aec0;
          font-size: 0.75rem;
          justify-content: center;
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

