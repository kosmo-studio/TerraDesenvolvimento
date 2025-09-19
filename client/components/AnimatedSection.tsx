import { useInView } from 'react-intersection-observer';
import React from 'react';


interface AnimatedSectionProps {
  children: React.ReactNode;
  delay?: number; 
  variant?: 'fade' | 'slideUp'; 
}

export default function AnimatedSection({ children, delay = 0, variant = 'slideUp' }: AnimatedSectionProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,   
  });

  const transitionDelay = delay ? { transitionDelay: `${delay}ms` } : {};

 
  const initialStateClass = variant === 'slideUp' ? 'opacity-0 translate-y-10' : 'opacity-0';
  const finalStateClass = 'opacity-100 translate-y-0'; 

  return (
    <div
      ref={ref}
      
      className={`transition-all duration-700 ease-out ${
        inView ? finalStateClass : initialStateClass
      }`}
      style={transitionDelay}
    >
      {children}
    </div>
  );
}

