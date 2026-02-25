import { useEffect, useState } from 'react';
import LiquidEther from '../../components/React Bits/Liquid Ether/LiquidEther';
import './Hero.css';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="liquid-ether-bg">
        <LiquidEther
          colors={['#5227FF', '#FF9FFC', '#B19EEF']}
          mouseForce={20}
          cursorSize={100}
          isViscous
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>
      <div className="hero-container">
        <div className={`hero-content ${isVisible ? 'fade-in' : ''}`}>
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Anant</span>
          </h1>
          <h2 className="hero-subtitle">  React Developer  | MERN Stack Developer</h2>
          <p className="hero-description">
            I build modern, responsive web applications with clean code and great user experiences.
            Passionate about creating innovative solutions that make a difference.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="/AnantChaturvedi_resume.pdf" className="hero-btn-hire" download>
              Resume
            </a>
          </div>
        </div>
        <div className={`hero-image-container ${isVisible ? 'slide-in' : ''}`}>
          <div className="hero-image-wrapper">
            <img 
              src="/cartoon image.png" 
              alt="Anant" 
              className="hero-image"
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Hero;
