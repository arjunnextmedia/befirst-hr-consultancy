import React, { useState, useEffect, useRef } from 'react';

const PremiumMouseEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  const moveTimeoutRef = useRef(null);
  const hoverCheckRef = useRef(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      const newPosition = { x: e.clientX, y: e.clientY };
      setMousePosition(newPosition);
      setIsMoving(true);
      
      // Clear existing timeout
      if (moveTimeoutRef.current) {
        clearTimeout(moveTimeoutRef.current);
      }
      
      // Set timeout to detect when mouse stops
      moveTimeoutRef.current = setTimeout(() => {
        setIsMoving(false);
      }, 100);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e) => {
      // Check if we're hovering over an interactive element
      const target = e.target;
      const isInteractive = target.matches('a, button, input, textarea, select, [role="button"], .btn, .clickable, .interactive');
      
      if (isInteractive && !hoverCheckRef.current) {
        setIsHovering(true);
        hoverCheckRef.current = true;
      }
    };

    const handleMouseOut = (e) => {
      // Only set hovering to false if we're leaving the window or the interactive element
      if (!e.relatedTarget || 
          !e.relatedTarget.matches('a, button, input, textarea, select, [role="button"], .btn, .clickable, .interactive')) {
        setIsHovering(false);
        hoverCheckRef.current = false;
      }
    };

    // Add event listeners
    document.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      
      if (moveTimeoutRef.current) {
        clearTimeout(moveTimeoutRef.current);
      }
    };
  }, []);

  const mainCursorStyles = {
    position: 'fixed',
    left: `${mousePosition.x}px`,
    top: `${mousePosition.y}px`,
    width: isHovering ? '50px' : '35px',
    height: isHovering ? '50px' : '35px',
    borderRadius: '50%',
    backgroundColor: isHovering ? 'rgba(74, 144, 226, 0.2)' : 'transparent',
    border: `1px solid rgba(74, 144, 226, 0.4)`,
    transform: 'translate(-50%, -50%)',
    pointerEvents: 'none',
    zIndex: 9999,
    transition: 'all 0.2s ease-out',
    opacity: 0.8,
  };

  const dotStyles = {
    position: 'fixed',
    left: `${mousePosition.x}px`,
    top: `${mousePosition.y}px`,
    width: '4px',
    height: '4px',
    borderRadius: '50%',
    backgroundColor: '#4A90E2',
    transform: 'translate(-50%, -50%)',
    pointerEvents: 'none',
    zIndex: 10000,
    opacity: 0.9,
  };

  return (
    <>
      {/* Keep default cursor visible */}
      <style>
        {`
          @media (max-width: 768px) {
            .premium-cursor, .premium-cursor-dot {
              display: none !important;
            }
          }

          /* Enhanced cursor styles for interactive elements */
          a, button, input, textarea, select, [role="button"], .btn, .clickable, .interactive {
            transition: transform 0.2s ease !important;
          }

          a:hover, button:hover, .btn:hover, .clickable:hover, .interactive:hover {
            transform: scale(1.02) !important;
          }
        `}
      </style>

      {/* Main Cursor Ring */}
      <div 
        className="premium-cursor"
        style={mainCursorStyles}
      />

      {/* Center Dot */}
      <div 
        className="premium-cursor-dot"
        style={dotStyles}
      />
    </>
  );
};

// Click Ripple Component (separate for better performance)
const ClickRipple = ({ x, y, onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 600);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      style={{
        position: 'fixed',
        left: `${x}px`,
        top: `${y}px`,
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        border: '2px solid rgba(74, 144, 226, 0.5)',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
        zIndex: 9997,
        animation: 'ripple 0.6s ease-out',
        background: 'rgba(74, 144, 226, 0.1)',
      }}
    />
  );
};


const EnhancedMouseEffect = () => {
  const [ripples, setRipples] = useState([]);

  useEffect(() => {
    const handleClick = (e) => {
      const newRipple = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      };

      setRipples(prev => [...prev, newRipple]);
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  const removeRipple = (id) => {
    setRipples(prev => prev.filter(ripple => ripple.id !== id));
  };

  return (
    <>
      <PremiumMouseEffect />
      {ripples.map(ripple => (
        <ClickRipple
          key={ripple.id}
          x={ripple.x}
          y={ripple.y}
          onComplete={() => removeRipple(ripple.id)}
        />
      ))}
      
      {/* Keyframes for animations */}
      <style>
        {`
          @keyframes ripple {
            0% {
              transform: translate(-50%, -50%) scale(0);
              opacity: 0.8;
            }
            100% {
              transform: translate(-50%, -50%) scale(1.5);
              opacity: 0;
            }
          }
        `}
      </style>
    </>
  );
};

export default EnhancedMouseEffect;