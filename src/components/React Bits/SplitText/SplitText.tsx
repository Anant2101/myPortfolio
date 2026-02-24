import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string;
  splitType?: 'chars' | 'words';
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  threshold?: number;
  rootMargin?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  textAlign?: React.CSSProperties['textAlign'];
  onLetterAnimationComplete?: () => void;
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = '',
  delay = 50,
  duration = 1.25,
  ease = 'power3.out',
  splitType = 'chars',
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = '-100px',
  textAlign = 'center',
  tag = 'p',
  onLetterAnimationComplete
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!containerRef.current || hasAnimated) return;

    const elements = containerRef.current.querySelectorAll('.split-item');
    if (elements.length === 0) return;

    // Calculate scroll trigger start position
    const startPct = (1 - threshold) * 100;
    const marginMatch = /^(-?\d+(?:\.\d+)?)(px|em|rem|%)?$/.exec(rootMargin);
    const marginValue = marginMatch ? parseFloat(marginMatch[1]) : 0;
    const marginUnit = marginMatch ? marginMatch[2] || 'px' : 'px';
    const sign = marginValue === 0 ? '' : marginValue < 0 
      ? `-=${Math.abs(marginValue)}${marginUnit}` 
      : `+=${marginValue}${marginUnit}`;
    const start = `top ${startPct}%${sign}`;

    const tl = gsap.fromTo(
      elements,
      { ...from },
      {
        ...to,
        duration,
        ease,
        stagger: delay / 1000,
        scrollTrigger: {
          trigger: containerRef.current,
          start,
          once: true,
        },
        onComplete: () => {
          setHasAnimated(true);
          onLetterAnimationComplete?.();
        },
      }
    );

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(st => {
        if (st.trigger === containerRef.current) st.kill();
      });
    };
  }, [text, delay, duration, ease, from, to, threshold, rootMargin, hasAnimated, onLetterAnimationComplete]);

  // Split text into chars or words
  const splitItems = splitType === 'chars' 
    ? text.split('').map((char, i) => (
        <span 
          key={i} 
          className="split-item" 
          style={{ display: 'inline-block', whiteSpace: char === ' ' ? 'pre' : 'normal' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))
    : text.split(' ').map((word, i, arr) => (
        <span key={i} className="split-item" style={{ display: 'inline-block' }}>
          {word}{i < arr.length - 1 ? '\u00A0' : ''}
        </span>
      ));

  const Tag = tag as React.ElementType;

  return (
    <Tag
      ref={containerRef}
      className={`split-text-container ${className}`}
      style={{
        textAlign,
        overflow: 'hidden',
        display: 'block',
      }}
    >
      {splitItems}
    </Tag>
  );
};

export default SplitText;
