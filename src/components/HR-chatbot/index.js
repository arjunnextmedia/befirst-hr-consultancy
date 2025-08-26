import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, User, Bot, RotateCcw } from 'lucide-react';
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
  const typingTimeoutRef = useRef(null);

  // Clean up timeouts on unmount
  useEffect(() => {
    return () => {
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      startConversation();
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

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
    setIsTyping(false);
  };

  const addMessage = (content, type = 'bot', delay = 0) => {
    return new Promise(resolve => {
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }
      
      typingTimeoutRef.current = setTimeout(() => {
        const message = {
          id: Date.now() + Math.random(),
          type,
          content,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, message]);
        setIsTyping(false);
        resolve();
      }, delay);
    });
  };

  const simulateTyping = (duration = 1500) => {
    setIsTyping(true);
    return new Promise(resolve => {
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }
      typingTimeoutRef.current = setTimeout(resolve, duration);
    });
  };

  const handleOptionClick = async (option) => {
    const currentStepData = chatSteps[currentStep];
    
    // Add user message immediately
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
      await addMessage(currentStepData.response.no);
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
    
    await addMessage(botResponse);

    // Move to next step
    const nextStep = currentStep + 1;
    if (nextStep < chatSteps.length && !(currentStepData.id === 'greeting' && option.value === 'no')) {
      await simulateTyping(800);
      await addMessage(chatSteps[nextStep].question);
      setCurrentStep(nextStep);
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
    await addMessage(chatSteps[currentStep].response);

    // Move to next step
    const nextStep = currentStep + 1;
    if (nextStep < chatSteps.length) {
      await simulateTyping(800);
      await addMessage(chatSteps[nextStep].question);
      setCurrentStep(nextStep);
    }
  };

  const resetChat = () => {
    // Clear any pending timeouts
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
      typingTimeoutRef.current = null;
    }
    
    // Reset all states
    setMessages([]);
    setCurrentStep(0);
    setUserResponses({});
    setIsTyping(false);
    
    // Start new conversation after a brief delay
    setTimeout(() => {
      startConversation();
    }, 50);
  };

  const closeChat = () => {
    // Clear any pending timeouts
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
      typingTimeoutRef.current = null;
    }
    
    setIsOpen(false);
    setIsTyping(false);
  };

  const toggleChat = () => {
    if (isOpen) {
      closeChat();
    } else {
      setIsOpen(true);
    }
  };

  const formatTime = (timestamp) => {
    return timestamp.toLocaleTimeString('en-US', {
      hour12: true,
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const currentStepData = chatSteps[currentStep];
  const showOptions = currentStepData && 
    !currentStepData.isForm && 
    !isTyping && 
    (currentStepData.id !== 'greeting' || 
    !userResponses.greeting || 
    userResponses.greeting === 'yes');

  return (
    <>
      {/* Chatbot Toggle Button */}
      <div className="chatbot-toggle-container">
        <button
          className={`chatbot-toggle-btn ${isOpen ? 'open' : ''}`}
          onClick={toggleChat}
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
                    aria-label="Reset conversation"
                  >
                    <RotateCcw size={16} />
                  </button>
                )}
                <button
                  className="btn btn-sm btn-link text-white p-1"
                  onClick={closeChat}
                  aria-label="Close chat"
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
                      disabled={isTyping}
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
    </>
  );
};

export default HRChatbot;