import { useEffect, useRef, useState, type ReactNode } from 'react';
import './LazySection.css';

interface LazySectionProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
  placeholder?: ReactNode;
  minHeight?: string;
}

const LazySection = ({
  children,
  className = '',
  threshold = 0.1,
  rootMargin = '100px',
  placeholder,
  minHeight = '400px'
}: LazySectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasLoaded) {
          setIsVisible(true);
          // Small delay to ensure smooth transition
          setTimeout(() => setHasLoaded(true), 50);
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin, hasLoaded]);

  return (
    <div
      ref={sectionRef}
      className={`lazy-section ${className} ${isVisible ? 'visible' : ''}`}
      style={{ minHeight: !hasLoaded ? minHeight : 'auto' }}
    >
      {hasLoaded ? (
        <div className="lazy-section-content">{children}</div>
      ) : (
        placeholder || <div className="lazy-section-placeholder" />
      )}
    </div>
  );
};

export default LazySection;
