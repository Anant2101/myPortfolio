import { useRef } from 'react';
import CosmicBackground from '../../components/CosmicBackground/CosmicBackground';
import MagicBento from '../../components/React Bits/Magic Bento/magicBento';
import ScrollReveal from '../../components/React Bits/ScrollReveal/ScrollReveal';
import './WhyHireMe.css';

const WhyHireMe = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section id="why-hire-me" className="why-hire-me" ref={sectionRef}>
      <CosmicBackground />
      
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <h2 className="section-title">Why Hire Me?</h2>
            <p className="section-subtitle">Backed by experience, driven by purpose.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="bento-container">
            <MagicBento
              textAutoHide={true}
              enableStars
              enableSpotlight
              enableBorderGlow={true}
              enableTilt={false}
              enableMagnetism={false}
              clickEffect
              spotlightRadius={410}
              particleCount={12}
              glowColor="132, 0, 255"
              disableAnimations={false}
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default WhyHireMe;
