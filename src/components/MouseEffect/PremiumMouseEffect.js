import React, { useState, useEffect, useRef } from 'react';

const PremiumMouseEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  const [followerPosition, setFollowerPosition] = useState({ x: 0, y: 0 });
  const moveTimeoutRef = useRef(null);
  const animationRef = useRef(null);

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

    const handleMouseEnter = (e) => {
      const target = e.target;
      const isInteractive = target.matches('a, button, input, textarea, select, [role="button"], .btn, .clickable, .interactive');
      setIsHovering(isInteractive);
    };

    const handleMouseLeave = () => setIsHovering(false);

    // Add event listeners
    document.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
      
      if (moveTimeoutRef.current) {
        clearTimeout(moveTimeoutRef.current);
      }
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Smooth follower animation
  useEffect(() => {
    const animateFollower = () => {
      setFollowerPosition(prev => {
        const dx = mousePosition.x - prev.x;
        const dy = mousePosition.y - prev.y;
        
        // Faster following with minimal delay
        return {
          x: prev.x + dx * 0.15, // Higher value = faster following
          y: prev.y + dy * 0.15
        };
      });
      
      animationRef.current = requestAnimationFrame(animateFollower);
    };
    
    animationRef.current = requestAnimationFrame(animateFollower);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mousePosition]);

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

  const followerStyles = {
    position: 'fixed',
    left: `${followerPosition.x}px`,
    top: `${followerPosition.y}px`,
    width: isHovering ? '25px' : '20px',
    height: isHovering ? '25px' : '20px',
    borderRadius: '50%',
    backgroundColor: isHovering ? 'rgba(74, 144, 226, 0.6)' : 'rgba(74, 144, 226, 0.3)',
    border: `1px solid rgba(74, 144, 226, 0.5)`,
    transform: 'translate(-50%, -50%)',
    pointerEvents: 'none',
    zIndex: 9998,
    transition: 'all 0.2s ease-out',
    boxShadow: isHovering 
      ? '0 0 15px rgba(74, 144, 226, 0.4)' 
      : '0 0 8px rgba(74, 144, 226, 0.2)',
    opacity: 0.7,
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
            .premium-cursor, .premium-cursor-dot, .premium-cursor-follower {
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

      {/* Follower Circle */}
      <div 
        className="premium-cursor-follower"
        style={followerStyles}
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

// Enhanced Mouse Effect with Click Ripples
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