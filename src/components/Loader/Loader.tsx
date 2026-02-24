import { useEffect, useState } from 'react';
import './Loader.css';

interface LoaderProps {
  onLoadingComplete?: () => void;
}

const Loader = ({ onLoadingComplete }: LoaderProps) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade out after 2.5 seconds
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2500);

    // Complete loading after fade animation (3 seconds total)
    const completeTimer = setTimeout(() => {
      onLoadingComplete?.();
    }, 2500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onLoadingComplete]);

  return (
    <div className={`loader-container ${fadeOut ? 'fade-out' : ''}`}>
      <div className="loader-content">
        <p className="loader-top-text">ANANT CHATURVEDI</p>
        
        <div className="loader-main-text-wrapper">
          <h1 className="loader-main-text">Portfolio</h1>
          <div className="loader-glow"></div>
        </div>
        
        <p className="loader-bottom-text">FULLSTACK DEVELOPER</p>
      </div>
    </div>
  );
};

export default Loader;
