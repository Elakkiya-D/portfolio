import React, { useEffect, useRef, useState } from 'react';

const ScrollAnimation = ({ children, animation = 'fadeInUp', delay = 0, threshold = 0.1 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  const getAnimationClass = () => {
    if (!isVisible) return '';
    
    const baseClass = 'animate-on-scroll';
    const animationClass = `animate-${animation}`;
    const delayClass = delay > 0 ? `delay-${delay}` : '';
    
    return `${baseClass} ${animationClass} ${delayClass}`.trim();
  };

  return (
    <div ref={ref} className={getAnimationClass()}>
      {children}
    </div>
  );
};

export default ScrollAnimation;
