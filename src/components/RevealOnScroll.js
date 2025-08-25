import React, { useEffect, useRef, useState } from 'react';
import './RevealOnScroll.css';

const RevealOnScroll = ({ children, direction = 'up', delay = 0, duration = 0.8 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const getTransform = () => {
    switch (direction) {
      case 'left': return 'translateX(-50px)';
      case 'right': return 'translateX(50px)';
      case 'up': return 'translateY(50px)';
      case 'down': return 'translateY(-50px)';
      case 'scale': return 'scale(0.8)';
      case 'rotate': return 'rotate(-5deg)';
      default: return 'translateY(50px)';
    }
  };

  const getFinalTransform = () => {
    switch (direction) {
      case 'scale': return 'scale(1)';
      case 'rotate': return 'rotate(0deg)';
      default: return 'translateX(0) translateY(0)';
    }
  };

  return (
    <div
      ref={ref}
      className={`reveal-on-scroll ${isVisible ? 'revealed' : ''}`}
      style={{
        '--initial-transform': getTransform(),
        '--final-transform': getFinalTransform(),
        '--delay': `${delay}s`,
        '--duration': `${duration}s`
      }}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;
