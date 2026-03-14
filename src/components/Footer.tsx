import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Instagram, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Heart,
  ExternalLink
} from 'lucide-react';
import { brandInfo } from '../data';

gsap.registerPlugin(ScrollTrigger);

export function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (footerRef.current) {
      gsap.fromTo(
        footerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 90%',
          },
        }
      );
    }
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer ref={footerRef} className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-icon">
                <div className="footer-logo-icon-inner" />
              </div>
              <div className="footer-logo-text">
                <span className="footer-logo-name">{brandInfo.name}</span>
                <span className="footer-logo-tagline">{brandInfo.tagline}</span>
              </div>
            </div>
            <p className="footer-description">
              Crafting timeless elegance since 1987. Our commitment to quality 
              and precision has made us a trusted name in luxury timepieces across Pakistan.
            </p>
            <div className="footer-social">
              <a 
                href={brandInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title="Follow us on Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href={brandInfo.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title="Follow us on TikTok"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a 
                href={brandInfo.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title="Contact us on WhatsApp"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h4 className="footer-title">Quick Links</h4>
            <ul>
              <li>
                <button onClick={() => scrollToSection('hero')} className="footer-link">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('products')} className="footer-link">
                  All Watches
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('products-men')} className="footer-link">
                  Men&apos;s Collection
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('products-women')} className="footer-link">
                  Women&apos;s Collection
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('products-couple')} className="footer-link">
                  Couple Sets
                </button>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="footer-links">
            <h4 className="footer-title">Customer Service</h4>
            <ul>
              <li>
                <a href={brandInfo.social.whatsapp} target="_blank" rel="noopener noreferrer" className="footer-link">
                  Contact Us
                </a>
              </li>
              <li>
                <span className="footer-link">Shipping Info</span>
              </li>
              <li>
                <span className="footer-link">Returns & Exchanges</span>
              </li>
              <li>
                <span className="footer-link">Warranty</span>
              </li>
              <li>
                <span className="footer-link">FAQ</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-contact">
            <h4 className="footer-title">Contact Us</h4>
            <ul>
              <li>
                <MapPin size={16} />
                <span>{brandInfo.address}</span>
              </li>
              <li>
                <Phone size={16} />
                <a href={`tel:${brandInfo.phone}`}>{brandInfo.phone}</a>
              </li>
              <li>
                <Mail size={16} />
                <a href={`mailto:${brandInfo.email}`}>{brandInfo.email}</a>
              </li>
              <li>
                <Clock size={16} />
                <span>Mon - Sat: 10AM - 8PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* WhatsApp CTA */}
        <div className="footer-cta">
          <a 
            href={brandInfo.social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-cta"
          >
            <Phone size={22} />
            <div className="cta-text">
              <span className="cta-title">Order on WhatsApp</span>
              <span className="cta-subtitle">Quick response • Easy ordering</span>
            </div>
            <ExternalLink size={18} />
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="copyright">
            © {new Date().getFullYear()} {brandInfo.name}. All rights reserved.
          </p>
          <p className="made-with">
            Made with <Heart size={12} fill="#c9a962" color="#c9a962" /> in Pakistan
          </p>
        </div>
      </div>
    </footer>
  );
}
