import { useEffect, useRef, type ReactNode, type RefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './ScrollReveal.css';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: ReactNode;
  scrollContainerRef?: RefObject<HTMLElement>;
  className?: string;
  animationDuration?: number;
  ease?: string;
  scrollStart?: string;
  scrollEnd?: string;
  yOffset?: number;
  delay?: number;
}

// Batch ScrollTrigger updates for better performance
let batchTimeout: ReturnType<typeof setTimeout> | null = null;
const pendingTriggers: (() => void)[] = [];

const batchScrollTriggerUpdate = (callback: () => void) => {
  pendingTriggers.push(callback);
  if (batchTimeout) return;
  batchTimeout = setTimeout(() => {
    pendingTriggers.forEach(cb => cb());
    pendingTriggers.length = 0;
    ScrollTrigger.refresh();
    batchTimeout = null;
  }, 100);
};

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  scrollContainerRef,
  className = '',
  animationDuration = 1.2,
  ease = 'power3.out',
  scrollStart = 'top 85%',
  scrollEnd = 'top 35%',
  yOffset = 80,
  delay = 0
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller = scrollContainerRef?.current || window;

    // Use requestAnimationFrame to prevent forced reflow
    const initAnimation = () => {
      gsap.fromTo(
        el,
        {
          willChange: 'transform',
          opacity: 0,
          y: yOffset,
        },
        {
          duration: animationDuration,
          ease: ease,
          opacity: 1,
          y: 0,
          delay: delay,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: scrollStart,
            end: scrollEnd,
            scrub: 0.5, // Reduced scrub for better performance
            invalidateOnRefresh: false,
            fastScrollEnd: true, // Optimize for fast scrolling
          }
        }
      );
    };

    // Batch the initialization
    batchScrollTriggerUpdate(initAnimation);

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === el) {
          trigger.kill();
        }
      });
    };
  }, [scrollContainerRef, animationDuration, ease, scrollStart, scrollEnd, yOffset, delay]);

  return (
    <div ref={containerRef} className={`scroll-reveal ${className}`}>
      {children}
    </div>
  );
};

export default ScrollReveal;
