import { useState, useEffect } from 'react';
import StaggeredMenu from '../React Bits/StaggeredMenu/StaggeredMenu';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  // Menu items for StaggeredMenu
  const menuItems = navLinks.map(link => ({
    label: link.name,
    ariaLabel: `Go to ${link.name}`,
    link: link.href,
  }));

  const socialItems = [
    { label: 'GitHub', link: 'https://github.com/Anant2101' },
    { label: 'LinkedIn', link: 'https://www.linkedin.com/in/chaturvedianant/' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <a href="#hero" className="nav-logo" onClick={(e) => handleNavClick(e, '#hero')}>
            Portfolio
          </a>

          {/* Desktop Navigation */}
          <div className="nav-links desktop-only">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="nav-link"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="btn btn-primary nav-cta"
              onClick={(e) => handleNavClick(e, '#contact')}
            >
              Hire Me
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile StaggeredMenu */}
      {isMobile && (
        <StaggeredMenu
          position="right"
          items={menuItems}
          socialItems={socialItems}
          displaySocials={true}
          displayItemNumbering={true}
          menuButtonColor="#ffffff"
          openMenuButtonColor="#000000"
          changeMenuColorOnOpen={true}
          colors={['#B19EEF', '#5227FF']}
          accentColor="#5227FF"
          isFixed={true}
        />
      )}
    </>
  );
};

export default Navbar;
