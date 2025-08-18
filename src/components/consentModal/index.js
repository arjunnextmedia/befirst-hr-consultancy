import React, { useState, useEffect } from 'react';
import { Cookie, X, Shield, CheckCircle, XCircle } from 'lucide-react';

const ConsentBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Check if consent has already been given
    const consentGiven = localStorage.getItem('cookieConsent');
    if (!consentGiven) {
      // Show banner after a small delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const consentData = {
      consent: 'accepted',
      categories: {
        necessary: true,
        analytics: true,
        marketing: true,
        functional: true
      },
      timestamp: new Date().toISOString(),
      version: '1.0'
    };
    
    localStorage.setItem('cookieConsent', JSON.stringify(consentData));
    hideBanner();
    
    // Initialize tracking/analytics here
    console.log('All cookies accepted');
  };

  const handleRejectAll = () => {
    const consentData = {
      consent: 'rejected',
      categories: {
        necessary: true,
        analytics: false,
        marketing: false,
        functional: false
      },
      timestamp: new Date().toISOString(),
      version: '1.0'
    };
    
    localStorage.setItem('cookieConsent', JSON.stringify(consentData));
    hideBanner();
    
    console.log('Non-essential cookies rejected');
  };

  const hideBanner = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <>
      <div className={`consent-banner ${isAnimating ? 'hiding' : ''}`}>
        <div className="container-fluid">
          <div className="consent-content">
            {/* Icon and Content */}
            <div className="consent-info">
              <div className="consent-icon-wrapper">
                <Cookie size={24} className="consent-icon" />
              </div>
              <div className="consent-text">
                <h6 className="consent-title">
                  <Shield size={16} className="me-2" />
                  We Value Your Privacy
                </h6>
                <p className="consent-description">
                  We use cookies to enhance your browsing experience, analyze site traffic, 
                  and provide personalized content. By clicking "Accept All", you consent 
                  to our use of cookies.
                  <a href="/privacy-policy" className="privacy-link ms-1">
                    Learn more
                  </a>
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="consent-actions">
              <button
                type="button"
                className="btn btn-outline-light btn-reject"
                onClick={handleRejectAll}
              >
                <XCircle size={16} className="me-2" />
                Reject Cookies
              </button>
              <button
                type="button"
                className="btn btn-success btn-accept"
                onClick={handleAcceptAll}
              >
                <CheckCircle size={16} className="me-2" />
                Accept All Cookies
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .consent-banner {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
          color: white;
          z-index: 1050;
          box-shadow: 0 -8px 32px rgba(0, 0, 0, 0.3);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          animation: slideUp 0.4s ease-out;
          transition: all 0.3s ease;
        }

        .consent-banner.hiding {
          animation: slideDown 0.3s ease-in;
        }

        .consent-content {
          padding: 20px 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
        }

        .consent-info {
          display: flex;
          align-items: center;
          flex: 1;
          min-width: 0;
        }

        .consent-icon-wrapper {
          background: rgba(47, 78, 230, 0.2);
          border-radius: 12px;
          padding: 12px;
          margin-right: 16px;
          flex-shrink: 0;
        }

        .consent-icon {
          color: #2F4EE6;
        }

        .consent-text {
          flex: 1;
          min-width: 0;
        }

        .consent-title {
          color: white;
          font-weight: 600;
          margin-bottom: 4px;
          font-size: 16px;
          display: flex;
          align-items: center;
        }

        .consent-description {
          color: rgba(255, 255, 255, 0.85);
          margin-bottom: 0;
          font-size: 14px;
          line-height: 1.5;
        }

        .privacy-link {
          color: #60a5fa;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s ease;
        }

        .privacy-link:hover {
          color: #93c5fd;
          text-decoration: underline;
        }

        .consent-actions {
          display: flex;
          gap: 12px;
          flex-shrink: 0;
        }

        .btn {
          font-weight: 500;
          border-radius: 8px;
          padding: 10px 20px;
          font-size: 14px;
          transition: all 0.3s ease;
          border-width: 2px;
          display: flex;
          align-items: center;
          white-space: nowrap;
        }

        .btn-reject {
          color: rgba(255, 255, 255, 0.9);
          border-color: rgba(255, 255, 255, 0.3);
          background: transparent;
        }

        .btn-reject:hover {
          background: rgba(239, 68, 68, 0.1);
          border-color: #ef4444;
          color: #fca5a5;
          transform: translateY(-1px);
        }

        .btn-accept {
          background: linear-gradient(135deg, #2F4EE6 0%, #1e40af 100%);
          border-color: #2F4EE6;
          color: white;
        }

        .btn-accept:hover {
          background: linear-gradient(135deg, #1d4ed8 0%, #1e3a8a 100%);
          border-color: #1d4ed8;
          color: white;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(47, 78, 230, 0.4);
        }

        /* Animations */
        @keyframes slideUp {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes slideDown {
          from {
            transform: translateY(0);
            opacity: 1;
          }
          to {
            transform: translateY(100%);
            opacity: 0;
          }
        }

        /* Mobile Responsiveness */
        @media (max-width: 768px) {
          .consent-content {
            flex-direction: column;
            align-items: stretch;
            text-align: center;
            padding: 16px 0;
          }

          .consent-info {
            flex-direction: column;
            text-align: center;
            margin-bottom: 16px;
          }

          .consent-icon-wrapper {
            margin: 0 auto 12px auto;
          }

          .consent-actions {
            flex-direction: column;
            gap: 8px;
          }

          .btn {
            width: 100%;
            justify-content: center;
          }

          .consent-title {
            font-size: 15px;
            justify-content: center;
          }

          .consent-description {
            font-size: 13px;
          }
        }

        @media (max-width: 576px) {
          .consent-content {
            padding: 12px 0;
          }

          .consent-title {
            font-size: 14px;
          }

          .consent-description {
            font-size: 12px;
          }

          .btn {
            font-size: 13px;
            padding: 8px 16px;
          }

          .consent-icon-wrapper {
            padding: 10px;
          }
        }

        /* Tablet adjustments */
        @media (max-width: 992px) and (min-width: 769px) {
          .consent-actions {
            flex-direction: column;
            gap: 8px;
            min-width: 200px;
          }
        }

        /* Ensure proper spacing from page content */
        @media (min-width: 769px) {
          body {
            padding-bottom: 0;
          }
        }

        /* Add bottom padding to body when banner is visible */
        .consent-banner ~ * {
          margin-bottom: 0;
        }
      `}</style>
    </>
  );
};

export default ConsentBanner;