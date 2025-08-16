import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, User, Bot, Mail, Phone, ExternalLink, RotateCcw } from 'lucide-react';
import { initialQuestions } from '../data/dummyBotData';

const HRChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [availableQuestions, setAvailableQuestions] = useState([]);
  const [showFinalMessage, setShowFinalMessage] = useState(false);
  const messagesEndRef = useRef(null);



  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage = {
        id: Date.now(),
        type: 'bot',
        content: 'Hello! Welcome to Befirst HR and Management Consultancy. I\'m here to help answer your questions about our services. Please select a question below to get started.',
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
      setAvailableQuestions(initialQuestions);
      setShowFinalMessage(false);
    }
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleQuestionClick = (questionObj) => {
    // Add user question to messages
    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: questionObj.question,
      timestamp: new Date()
    };

    // Add bot answer to messages
    const botMessage = {
      id: Date.now() + 1,
      type: 'bot',
      content: questionObj.answer,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage, botMessage]);

    const remainingQuestions = availableQuestions.filter(q => q.id !== questionObj.id);
    setAvailableQuestions(remainingQuestions);

    if (remainingQuestions.length === 0) {
      setTimeout(() => {
        const finalMessage = {
          id: Date.now() + 2,
          type: 'bot',
          content: 'Thank you for your interest in our services! For more detailed enquiries or personalized consultation, please contact our support team.',
          timestamp: new Date()
        };
        setMessages(prev => [...prev, finalMessage]);
        setShowFinalMessage(true);
      }, 1000);
    }
  };

  const resetChat = () => {
    setMessages([]);
    setAvailableQuestions(initialQuestions);
    setShowFinalMessage(false);
    setTimeout(() => {
      const welcomeMessage = {
        id: Date.now(),
        type: 'bot',
        content: 'Hello! Welcome to Befirst HR and Management Consultancy. I\'m here to help answer your questions about our services. Please select a question below to get started.',
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
    }, 100);
  };

  const formatTime = (timestamp) => {
    return timestamp.toLocaleTimeString('en-US', {
      hour12: true,
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <div className="chatbot-toggle-container">
        <button
          className={`btn chatbot-toggle-btn ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Chatbot"
        >
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </button>
      </div>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="chatbot-container">
          <div className="card chatbot-card shadow-lg border-0">
            {/* Header */}
            <div className="chatbot-header">
              <div className="d-flex align-items-center">
                <div className="chatbot-avatar me-3">
                  <Bot size={24} className="text-white" />
                </div>
                <div>
                  <h6 className="mb-0 text-white fw-bold">HR Assistant</h6>
                  <small className="text-white-50">Befirst HR Consultancy</small>
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
                      <div className="message-avatar me-2">
                        <Bot size={20} className="text-primary" />
                      </div>
                    )}
                    <div className={`message-bubble ${message.type}`}>
                      <div className="message-content">
                        {message.content}
                      </div>
                      <div className="message-time">
                        {formatTime(message.timestamp)}
                      </div>
                    </div>
                    {message.type === 'user' && (
                      <div className="message-avatar ms-2">
                        <User size={20} className="text-secondary" />
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* Quick Question Buttons */}
              {availableQuestions.length > 0 && !showFinalMessage && (
                <div className="quick-questions">
                  <div className="quick-questions-header">
                    <small className="text-muted fw-semibold">Select a question:</small>
                  </div>
                  {availableQuestions.map((q) => (
                    <button
                      key={q.id}
                      className="btn quick-question-btn"
                      onClick={() => handleQuestionClick(q)}
                    >
                      {q.question}
                    </button>
                  ))}
                </div>
              )}

              {/* Final Contact Information */}
              {showFinalMessage && (
                <div className="contact-section">
                  <div className="contact-header">
                    {/* <h6 className="fw-bold text-primary mb-3">Get in Touch</h6> */}
                  </div>
                  <p className="text-muted" style={{ fontSize: '14px', lineHeight: '1.5' }}>
                    For more information or inquiries, feel free to email us at{' '}
                    <a href="mailto:info@befirsthr.com" className="text-primary fw-semibold">
                      info@befirsthr.com
                    </a>.
                    We’ll get back to you as soon as possible.
                  </p>
                </div>


              )}

              <div ref={messagesEndRef} />
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .chatbot-toggle-container {
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 1050;
        }

        .chatbot-toggle-btn {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
          border: none;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 20px rgba(79, 70, 229, 0.4);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .chatbot-toggle-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 6px 25px rgba(79, 70, 229, 0.6);
          background: linear-gradient(135deg, #4338ca 0%, #6d28d9 100%);
        }

        .chatbot-toggle-btn.open {
          background: #dc3545;
        }

        .chatbot-toggle-btn.open:hover {
          background: #c82333;
          box-shadow: 0 6px 25px rgba(220, 53, 69, 0.4);
        }

        .chatbot-container {
          position: fixed;
          bottom: 90px;
          right: 20px;
          z-index: 1040;
          width: 380px;
          height: 500px;
        }

        .chatbot-card {
          height: 100%;
          border-radius: 16px !important;
          overflow: hidden;
          background: white;
        }

        .chatbot-header {
          background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
          color: white;
          padding: 16px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .chatbot-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .chatbot-messages {
          height: calc(100% - 80px);
          overflow-y: auto;
          padding: 20px;
          background: #f8f9fa;
        }

        .message-container.bot {
          margin-bottom: 12px;
        }

        .message-container.user {
          margin-bottom: 12px;
          justify-content: flex-end;
        }

        .message-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          flex-shrink: 0;
        }

        .message-bubble {
          max-width: 85%;
          position: relative;
        }

        .message-bubble.bot {
          background: white;
          border-radius: 18px 18px 18px 4px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.1);
          border: 1px solid #e9ecef;
        }

        .message-bubble.user {
          background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
          border-radius: 18px 18px 4px 18px;
          color: white;
          margin-left: auto;
        }

        .message-content {
          padding: 12px 16px 8px 16px;
          line-height: 1.4;
          font-size: 14px;
        }

        .message-time {
          padding: 0 16px 8px 16px;
          font-size: 11px;
          opacity: 0.7;
        }

        .quick-questions {
          margin-top: 16px;
          padding-top: 16px;
          border-top: 1px solid #e9ecef;
        }

        .quick-questions-header {
          margin-bottom: 12px;
        }

        .quick-question-btn {
          background: white;
          border: 2px solid #4f46e5;
          color: #4f46e5;
          border-radius: 12px;
          padding: 10px 16px;
          margin-bottom: 8px;
          width: 100%;
          text-align: left;
          font-size: 13px;
          font-weight: 500;
          transition: all 0.3s ease;
          line-height: 1.4;
        }

        .quick-question-btn:hover {
          background: #4f46e5;
          color: white;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(79, 70, 229, 0.2);
        }

        .contact-section {
          margin-top: 20px;
          padding: 20px;
          background: white;
          border-radius: 12px;
          border: 1px solid #e9ecef;
          box-shadow: 0 2px 12px rgba(0,0,0,0.1);
        }

        .contact-header {
          text-align: center;
          margin-bottom: 16px;
        }

        .contact-btn {
          background: #f8f9fa;
          border: 1px solid #dee2e6;
          color: #495057;
          border-radius: 8px;
          padding: 12px 16px;
          font-size: 14px;
          font-weight: 500;
          transition: all 0.3s ease;
          text-decoration: none;
          margin-bottom: 8px;
        }

        .contact-btn:hover {
          background: #4f46e5;
          border-color: #4f46e5;
          color: white;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(79, 70, 229, 0.2);
          text-decoration: none;
        }

        /* Scrollbar Styling */
        .chatbot-messages::-webkit-scrollbar {
          width: 6px;
        }

        .chatbot-messages::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        .chatbot-messages::-webkit-scrollbar-thumb {
          background: #c1c1c1;
          border-radius: 3px;
        }

        .chatbot-messages::-webkit-scrollbar-thumb:hover {
          background: #a8a8a8;
        }

        /* Mobile Responsiveness */
        @media (max-width: 768px) {
          .chatbot-container {
            width: calc(100vw - 40px);
            right: 20px;
            left: 20px;
            height: 70vh;
          }

          .chatbot-toggle-btn {
            width: 56px;
            height: 56px;
          }

          .message-bubble {
            max-width: 90%;
          }
        }

        /* Animation for opening */
        .chatbot-container {
          animation: slideUp 0.3s ease-out;
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

        /* Pulsing effect for new messages */
        .message-container {
          animation: fadeIn 0.4s ease-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default HRChatbot;