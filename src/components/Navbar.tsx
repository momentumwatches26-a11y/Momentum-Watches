import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Phone } from 'lucide-react';
import { brandInfo } from '../data';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'Men', id: 'products-men' },
    { label: 'Women', id: 'products-women' },
    { label: 'Smart', id: 'products-smart' },
    { label: 'Couples', id: 'products-couple' },
    { label: 'Best Sellers', id: 'products-bestseller' },
  ];

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          {/* Logo */}
          <div className="navbar-logo" onClick={() => scrollToSection('hero')}>
            <div className="logo-icon">
              <div className="logo-icon-inner" />
            </div>
            <div className="logo-text">
              <span className="logo-name">{brandInfo.name}</span>
              <span className="logo-tagline">{brandInfo.tagline}</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <ul className="navbar-links">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button 
                  onClick={() => scrollToSection(link.id)}
                  className="nav-link"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Right Actions */}
          <div className="navbar-actions">
            <a 
              href={brandInfo.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-action-btn"
              title="Contact on WhatsApp"
            >
              <Phone size={18} />
            </a>
            <button className="nav-action-btn" title="Cart">
              <ShoppingBag size={18} />
            </button>
            <button 
              className="mobile-menu-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button 
                onClick={() => scrollToSection(link.id)}
                className="mobile-nav-link"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
        <div className="mobile-contact">
          <a 
            href={brandInfo.social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-whatsapp-btn"
          >
            <Phone size={18} />
            Contact on WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
