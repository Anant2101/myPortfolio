const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-logo">Portfolio</h3>
            <p className="footer-tagline">
              Building digital experiences that matter.
            </p>
          </div>
          
          <div className="footer-links">
            <a href="#hero">Home</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-social">
            <a href="https://github.com/Anant2101" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/chaturvedianant/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              LinkedIn
            </a>
           
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} Anant. All rights reserved.
          </p>
          <p className="made-with">
            Made with ❤️ using React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
