import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, User, Bot, RotateCcw, Calendar, Mail, Phone, MapPin, Users, Briefcase } from 'lucide-react';
import ContactForm from '../ContactFrom';
import './HRChatbot.css';
import { chatSteps } from '../data/dummyBotData';
import { ChatbotContactForm } from './ChatbotForm';
const HRChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [userResponses, setUserResponses] = useState({});
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

 

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      startConversation();
    }
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const startConversation = () => {
    const welcomeMessage = {
      id: Date.now(),
      type: 'bot',
      content: chatSteps[0].question,
      timestamp: new Date(),
      step: 0
    };
    setMessages([welcomeMessage]);
    setCurrentStep(0);
    setUserResponses({});
  };

  const addMessage = (content, type = 'bot', delay = 0) => {
    setTimeout(() => {
      const message = {
        id: Date.now() + Math.random(),
        type,
        content,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, message]);
      setIsTyping(false);
    }, delay);
  };

  const simulateTyping = (duration = 1500) => {
    setIsTyping(true);
    return new Promise(resolve => setTimeout(resolve, duration));
  };

  const handleOptionClick = async (option) => {
    const currentStepData = chatSteps[currentStep];
    
    // Add user message
    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: option.label,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);

    // Update user responses
    const newResponses = {
      ...userResponses,
      [currentStepData.id]: option.value
    };
    setUserResponses(newResponses);

    // Handle special cases
    if (currentStepData.id === 'greeting' && option.value === 'no') {
      await simulateTyping(1000);
      addMessage(currentStepData.response.no);
      return;
    }

    // Add bot response
    await simulateTyping();
    let botResponse;
    if (typeof currentStepData.response === 'object') {
      botResponse = currentStepData.response[option.value];
    } else {
      botResponse = currentStepData.response;
    }
    addMessage(botResponse);

    // Move to next step
    const nextStep = currentStep + 1;
    if (nextStep < chatSteps.length && !(currentStepData.id === 'greeting' && option.value === 'no')) {
      setTimeout(async () => {
        await simulateTyping(800);
        addMessage(chatSteps[nextStep].question);
        setCurrentStep(nextStep);
      }, 2000);
    }
  };

  const handleFormSubmit = async (formData) => {
    // Add user message with form data
    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}`,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);

    // Update user responses
    const newResponses = {
      ...userResponses,
      contact_info: formData
    };
    setUserResponses(newResponses);

    // Add bot response
    await simulateTyping();
    addMessage(chatSteps[currentStep].response);

    // Move to next step
    setTimeout(async () => {
      await simulateTyping(800);
      const nextStep = currentStep + 1;
      if (nextStep < chatSteps.length) {
        addMessage(chatSteps[nextStep].question);
        setCurrentStep(nextStep);
      }
    }, 2000);
  };

  const resetChat = () => {
    setMessages([]);
    setCurrentStep(0);
    setUserResponses({});
    setIsTyping(false);
    setTimeout(() => {
      startConversation();
    }, 100);
  };

  const formatTime = (timestamp) => {
    return timestamp.toLocaleTimeString('en-US', {
      hour12: true,
      hour: '2-digit',
      minute: '2-digit'
    });
  };

//  Address"
//               value={formData.email}
//               onChange={(e) => setFormData({...formData, email: e.target.value})}
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <input
//               type="tel"
//               className="form-control form-control-sm"
//               placeholder="Phone Number"
//               value={formData.phone}
//               onChange={(e) => setFormData({...formData, phone: e.target.value})}
//               required
//             />
//           </div>
//           <button type="submit" className="btn btn-primary btn-sm w-100">
//             Submit Details
//           </button>
//         </form>
//       </div>
//     );
//   };

  const currentStepData = chatSteps[currentStep];
  const showOptions = currentStepData && !currentStepData.isForm && !isTyping && 
    (currentStepData.id !== 'greeting' || !userResponses.greeting || userResponses.greeting === 'yes');

  return (
    <>
      {/* Chatbot Toggle Button */}
      <div className="chatbot-toggle-container">
        <button
          className={`chatbot-toggle-btn ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Chatbot"
        >
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
          {!isOpen && (
            <div className="notification-pulse"></div>
          )}
        </button>
      </div>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="chatbot-container">
          <div className="chatbot-card">
            {/* Header */}
            <div className="chatbot-header">
              <div className="d-flex align-items-center">
                <div className="chatbot-avatar me-3">
                  <Bot size={24} />
                </div>
                <div>
                  <h6 className="mb-0 fw-bold">HR Assistant</h6>
                  <div className="d-flex align-items-center">
                    <div className="status-indicator me-1"></div>
                    <small className="opacity-75">Online • Befirst HR</small>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center">
                {messages.length > 1 && (
                  <button
                    className="btn btn-sm btn-link text-white me-2 p-1"
                    onClick={resetChat}
                    title="Reset Chat"
                  >
                    <RotateCcw size={16} />
                  </button>
                )}
                <button
                  className="btn btn-sm btn-link text-white p-1"
                  onClick={() => setIsOpen(false)}
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Messages Area */}
            <div className="chatbot-messages">
              {messages.map((message) => (
                <div key={message.id} className={`message-container ${message.type}`}>
                  <div className="d-flex align-items-start mb-3">
                    {message.type === 'bot' && (
                      <div className="message-avatar bot me-2">
                        <Bot size={18} />
                      </div>
                    )}
                    <div className={`message-bubble ${message.type}`}>
                      <div className="message-content">
                        {message.content.split('**').map((part, index) => 
                          index % 2 === 1 ? <strong key={index}>{part}</strong> : part
                        )}
                      </div>
                      <div className="message-time">
                        {formatTime(message.timestamp)}
                      </div>
                    </div>
                    {message.type === 'user' && (
                      <div className="message-avatar user ms-2">
                        <User size={18} />
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="message-container bot">
                  <div className="d-flex align-items-start mb-3">
                    <div className="message-avatar bot me-2">
                      <Bot size={18} />
                    </div>
                    <div className="typing-indicator">
                      <div className="typing-dots">
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Options */}
              {showOptions && (
                <div className="options-container">
                  {currentStepData.options.map((option) => (
                    <button
                      key={option.value}
                      className="option-btn"
                      onClick={() => handleOptionClick(option)}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}

              {/* Contact Form */}
              {currentStepData && currentStepData.isForm && !isTyping && (
                <ChatbotContactForm onSubmit={handleFormSubmit} />
              )}

              <div ref={messagesEndRef} />
            </div>
          </div>
        </div>
      )}

      {/* <style jsx>{`
        .chatbot-toggle-container {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 1050;
        }

        .chatbot-toggle-btn {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border: none;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 32px rgba(102, 126, 234, 0.4);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .chatbot-toggle-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 50%);
          border-radius: 50%;
        }

        .chatbot-toggle-btn:hover {
          transform: scale(1.05) translateY(-2px);
          box-shadow: 0 12px 40px rgba(102, 126, 234, 0.6);
        }

        .chatbot-toggle-btn.open {
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          box-shadow: 0 8px 32px rgba(245, 87, 108, 0.4);
        }

        .chatbot-toggle-btn.open:hover {
          box-shadow: 0 12px 40px rgba(245, 87, 108, 0.6);
        }

        .notification-pulse {
          position: absolute;
          top: 8px;
          right: 8px;
          width: 12px;
          height: 12px;
          background: #ff4757;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { transform: scale(0.8); opacity: 1; }
          50% { transform: scale(1.2); opacity: 0.7; }
          100% { transform: scale(0.8); opacity: 1; }
        }

        .chatbot-container {
          position: fixed;
          bottom: 100px;
          right: 24px;
          z-index: 1040;
          width: 400px;
          height: 600px;
          animation: slideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .chatbot-card {
          height: 100%;
          border-radius: 20px;
          overflow: hidden;
          background: white;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .chatbot-header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 20px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
        }

        .chatbot-header::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%);
        }

        .chatbot-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(10px);
        }

        .status-indicator {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #2ecc71;
          animation: pulse 2s infinite;
        }

        .chatbot-messages {
          height: calc(100% - 84px);
          overflow-y: auto;
          padding: 24px;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          position: relative;
        }

        .chatbot-messages::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(120, 219, 255, 0.3) 0%, transparent 50%);
          pointer-events: none;
        }

        .message-container {
          position: relative;
          z-index: 1;
        }

        .message-avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        .message-avatar.bot {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        .message-avatar.user {
          background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
          color: #8B4513;
        }

        .message-bubble {
          max-width: 85%;
          position: relative;
          backdrop-filter: blur(10px);
        }

        .message-bubble.bot {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 20px 20px 20px 6px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .message-bubble.user {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 20px 20px 6px 20px;
          color: white;
          margin-left: auto;
          box-shadow: 0 4px 20px rgba(102, 126, 234, 0.3);
        }

        .message-content {
          padding: 16px 20px 8px 20px;
          line-height: 1.5;
          font-size: 14px;
          font-weight: 400;
        }

        .message-time {
          padding: 0 20px 12px 20px;
          font-size: 11px;
          opacity: 0.6;
        }

        .typing-indicator {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 20px 20px 20px 6px;
          padding: 16px 20px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .typing-dots {
          display: flex;
          gap: 4px;
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #667eea;
          animation: typing 1.4s infinite ease-in-out;
        }

        .dot:nth-child(1) { animation-delay: 0s; }
        .dot:nth-child(2) { animation-delay: 0.2s; }
        .dot:nth-child(3) { animation-delay: 0.4s; }

        @keyframes typing {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.3; }
          30% { transform: translateY(-10px); opacity: 1; }
        }

        .options-container {
          margin-top: 20px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          position: relative;
          z-index: 1;
        }

        .option-btn {
          background: rgba(255, 255, 255, 0.95);
          border: 2px solid transparent;
          border-radius: 16px;
          padding: 16px 20px;
          text-align: left;
          font-size: 14px;
          font-weight: 500;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(10px);
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          position: relative;
          overflow: hidden;
        }

        .option-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.1), transparent);
          transition: left 0.5s;
        }

        .option-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(102, 126, 234, 0.2);
          border-color: #667eea;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        .option-btn:hover::before {
          left: 100%;
        }

        .contact-form {
          margin-top: 20px;
          background: rgba(255, 255, 255, 0.95);
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          backdrop-filter: blur(10px);
        }

        .contact-form .form-control {
          border: 1px solid rgba(102, 126, 234, 0.2);
          border-radius: 12px;
          padding: 12px 16px;
          font-size: 14px;
          transition: all 0.3s ease;
          background: rgba(255, 255, 255, 0.8);
        }

        .contact-form .form-control:focus {
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
          background: white;
        }

        .contact-form .btn-primary {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border: none;
          border-radius: 12px;
          padding: 12px;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .contact-form .btn-primary:hover {
          transform: translateY(-1px);
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
        }

        .chatbot-messages::-webkit-scrollbar {
          width: 6px;
        }

        .chatbot-messages::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
        }

        .chatbot-messages::-webkit-scrollbar-thumb {
          background: rgba(102, 126, 234, 0.3);
          border-radius: 3px;
        }

        .chatbot-messages::-webkit-scrollbar-thumb:hover {
          background: rgba(102, 126, 234, 0.5);
        }

        @media (max-width: 768px) {
          .chatbot-container {
            width: calc(100vw - 32px);
            height: 80vh;
            right: 16px;
            bottom: 90px;
          }

          .chatbot-toggle-btn {
            width: 60px;
            height: 60px;
            bottom: 20px;
            right: 20px;
          }

          .message-bubble {
            max-width: 88%;
          }

          .chatbot-messages {
            padding: 20px;
          }
        }

        .message-container {
          animation: fadeInUp 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style> */}
    </>
  );
};

export default HRChatbot;