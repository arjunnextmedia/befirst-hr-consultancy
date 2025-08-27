import React, { useState, useEffect, useRef } from 'react';

const PremiumMouseEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  const [trail, setTrail] = useState([]);
  const cursorRef = useRef(null);
  const trailRef = useRef([]);
  const moveTimeoutRef = useRef(null);

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
      }, 80);
      
      // Update trail with only 3 positions for smooth following with delay
      setTimeout(() => {
        trailRef.current = [...trailRef.current, newPosition].slice(-3);
        setTrail([...trailRef.current]);
      }, 50); // Small delay for natural following
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
    
    // Add hover detection for interactive elements
    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
      
      // Clear timeout on cleanup
      if (moveTimeoutRef.current) {
        clearTimeout(moveTimeoutRef.current);
      }
    };
  }, []);

  const cursorStyles = {
    position: 'fixed',
    left: `${mousePosition.x}px`,
    top: `${mousePosition.y}px`,
    width: isHovering ? '85px' : isClicking ? '40px' : '55px',
    height: isHovering ? '85px' : isClicking ? '40px' : '55px',
    borderRadius: '50%',
    backgroundColor: !isMoving 
      ? 'rgba(74, 144, 226, 0.25)' 
      : isHovering 
      ? 'rgba(74, 144, 226, 0.12)' 
      : 'rgba(74, 144, 226, 0.08)',
    border: `2px solid ${isHovering ? 'rgba(74, 144, 226, 0.6)' : isClicking ? 'rgba(46, 134, 171, 0.8)' : 'rgba(74, 144, 226, 0.5)'}`,
    transform: 'translate(-50%, -50%)',
    pointerEvents: 'none',
    zIndex: 10001,
    transition: isMoving 
      ? 'all 0.02s ease-out' 
      : 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    backdropFilter: isHovering ? 'blur(3px)' : 'blur(1px)',
    boxShadow: !isMoving
      ? '0 0 45px rgba(74, 144, 226, 0.4), inset 0 0 35px rgba(74, 144, 226, 0.15)'
      : isHovering 
      ? '0 0 35px rgba(74, 144, 226, 0.3), inset 0 0 25px rgba(74, 144, 226, 0.08)' 
      : isClicking 
      ? '0 0 30px rgba(46, 134, 171, 0.5)' 
      : '0 0 20px rgba(74, 144, 226, 0.2)',
    opacity: !isMoving ? 0.9 : (isClicking ? 0.8 : 0.7),
  };

  const dotStyles = {
    position: 'fixed',
    left: `${mousePosition.x}px`,
    top: `${mousePosition.y}px`,
    width: isHovering ? '10px' : !isMoving ? '8px' : '5px',
    height: isHovering ? '10px' : !isMoving ? '8px' : '5px',
    borderRadius: '50%',
    backgroundColor: !isMoving 
      ? '#4A90E2' 
      : isHovering 
      ? '#4A90E2' 
      : 'rgba(74, 144, 226, 0.9)',
    transform: 'translate(-50%, -50%)',
    pointerEvents: 'none',
    zIndex: 10002, // Above everything else
    transition: 'all 0.2s ease-out',
    boxShadow: !isMoving 
      ? '0 0 18px rgba(74, 144, 226, 0.8), 0 0 35px rgba(74, 144, 226, 0.4)' 
      : '0 0 12px rgba(74, 144, 226, 0.6)',
    opacity: isClicking ? 0.6 : 1,
  };

  return (
    <>
      {/* Keep default cursor visible */}
      <style>
        {`
          @media (max-width: 768px) {
            .premium-cursor, .premium-cursor-dot, .premium-cursor-trail {
              display: none !important;
            }
          }

          /* Enhanced cursor styles for interactive elements */
          a, button, input, textarea, select, [role="button"], .btn, .clickable, .interactive {
            transition: transform 0.2s ease !important;
          }

          a:hover, button:hover, .btn:hover, .clickable:hover, .interactive:hover {
            transform: scale(1.05) !important;
          }
        `}
      </style>

      {/* Main Cursor */}
      <div 
        className="premium-cursor"
        style={cursorStyles}
        ref={cursorRef}
      >
        {isHovering && (
          <>
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '24px',
                height: '24px',
                backgroundColor: 'rgba(74, 144, 226, 0.4)',
                borderRadius: '50%',
                opacity: 0.7,
                animation: 'pulse 1.8s infinite',
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '35px',
                height: '35px',
                border: '2px solid rgba(74, 144, 226, 0.5)',
                borderRadius: '50%',
                opacity: 0.8,
                animation: 'pulse 2.2s infinite reverse',
              }}
            />
          </>
        )}
        
        {!isMoving && !isHovering && (
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '30px',
              height: '30px',
              backgroundColor: 'rgba(74, 144, 226, 0.3)',
              borderRadius: '50%',
              opacity: 0.8,
              animation: 'breathe 2.5s infinite',
            }}
          />
        )}
      </div>

      {/* Center Dot */}
      <div 
        className="premium-cursor-dot"
        style={dotStyles}
      />

      {/* Trail Effect - 3 Circles with decreasing sizes and proper layering */}
      {trail.map((point, index) => {
        const isLargest = index === trail.length - 1; // Most recent position (largest)
        const isMedium = index === trail.length - 2; // Second most recent
        const isSmallest = index === trail.length - 3; // Oldest position (smallest)
        
        let size, opacity, zIndex;
        
        if (isLargest) {
          size = 38; // Largest trailing circle (smaller than main cursor)
          opacity = isMoving ? 0.7 : 0.25;
          zIndex = 10000; // Below main cursor
        } else if (isMedium) {
          size = 28; // Medium circle
          opacity = isMoving ? 0.55 : 0.18;
          zIndex = 9999; // Below largest trail
        } else if (isSmallest) {
          size = 20; // Smallest circle
          opacity = isMoving ? 0.35 : 0.12;
          zIndex = 9998; // Below medium trail
        }
        
        return (
          <div
            key={index}
            className="premium-cursor-trail"
            style={{
              position: 'fixed',
              left: `${point.x}px`,
              top: `${point.y}px`,
              width: `${size}px`,
              height: `${size}px`,
              borderRadius: '50%',
              backgroundColor: 'rgba(74, 144, 226, 0.6)',
              border: `1px solid rgba(74, 144, 226, 0.3)`,
              transform: 'translate(-50%, -50%)',
              pointerEvents: 'none',
              zIndex: zIndex,
              opacity: opacity,
              transition: 'all 0.15s cubic-bezier(0.4, 0, 0.2, 1)',
              boxShadow: `0 0 ${size/3}px rgba(74, 144, 226, 0.3)`,
              backdropFilter: 'blur(0.5px)',
            }}
          />
        );
      })}

      {/* Keyframes for animations */}
      <style>
        {`
          @keyframes pulse {
            0% {
              transform: translate(-50%, -50%) scale(1);
              opacity: 0.7;
            }
            50% {
              transform: translate(-50%, -50%) scale(1.3);
              opacity: 0.4;
            }
            100% {
              transform: translate(-50%, -50%) scale(1);
              opacity: 0.7;
            }
          }

          @keyframes breathe {
            0% {
              transform: translate(-50%, -50%) scale(1);
              opacity: 0.8;
            }
            50% {
              transform: translate(-50%, -50%) scale(1.1);
              opacity: 0.5;
            }
            100% {
              transform: translate(-50%, -50%) scale(1);
              opacity: 0.8;
            }
          }

          @keyframes ripple {
            0% {
              transform: translate(-50%, -50%) scale(0);
              opacity: 0.8;
            }
            100% {
              transform: translate(-50%, -50%) scale(2);
              opacity: 0;
            }
          }

          .cursor-ripple {
            position: fixed;
            border: 2px solid rgba(74, 144, 226, 0.6);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9997;
            animation: ripple 0.8s ease-out;
            background: rgba(74, 144, 226, 0.1);
          }
        `}
      </style>
    </>
  );
};

// Click Ripple Component (separate for better performance)
const ClickRipple = ({ x, y, onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 800);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className="cursor-ripple"
      style={{
        left: `${x}px`,
        top: `${y}px`,
        width: '80px',
        height: '80px',
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
    </>
  );
};

export default EnhancedMouseEffect;