import { useState, useEffect, useCallback } from 'react';
import { gsap } from 'gsap';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: '/images/slides/slide-1.jpg',
    badge: 'New Collection',
    title: 'Timeless \nElegance',
    description: 'Discover our exquisite collection of premium timepieces crafted with precision and passion.',
    cta: 'Explore Collection',
    ctaLink: '#products'
  },
  {
    id: 2,
    image: '/images/slides/slide-2.jpg',
    badge: 'For Couples',
    title: 'Perfect \nTogether',
    description: 'Celebrate your love with our matching couple watch sets, elegantly packaged for gifting.',
    cta: 'View Couple Sets',
    ctaLink: '#products-couple'
  },
  {
    id: 3,
    image: '/images/slides/slide-3.jpg',
    badge: 'Smart Technology',
    title: 'Modern \nInnovation',
    description: 'Stay connected with our premium smartwatches featuring advanced health tracking.',
    cta: 'Shop Smart Watches',
    ctaLink: '#products-smart'
  }
];

export function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback((index: number) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 1000);
  }, [currentSlide, isAnimating]);

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % slides.length);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  }, [currentSlide, goToSlide]);

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  // Animate content on slide change
  useEffect(() => {
    const content = document.querySelectorAll('.slide-content');
    content.forEach((el, index) => {
      if (index === currentSlide) {
        gsap.fromTo(el.querySelector('.slide-badge'),
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, delay: 0.3 }
        );
        gsap.fromTo(el.querySelector('.slide-title'),
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, delay: 0.5 }
        );
        gsap.fromTo(el.querySelector('.slide-description'),
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, delay: 0.7 }
        );
        gsap.fromTo(el.querySelector('.slide-cta'),
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, delay: 0.9 }
        );
      }
    });
  }, [currentSlide]);

  const scrollToSection = (link: string) => {
    const element = document.querySelector(link);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="image-slider">
      <div className="slider-container">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="slide-image"
            />
            <div className="slide-overlay" />
            <div className="slide-content">
              <span className="slide-badge">{slide.badge}</span>
              <h2 className="slide-title">
                {slide.title.split('\n').map((line, i) => (
                  <span key={i}>
                    {i === 0 ? line : <span>{line}</span>}
                    {i === 0 && <br />}
                  </span>
                ))}
              </h2>
              <p className="slide-description">{slide.description}</p>
              <button
                className="slide-cta"
                onClick={() => scrollToSection(slide.ctaLink)}
              >
                {slide.cta}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="slider-nav">
        <div className="slider-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <div className="slider-arrows">
          <button
            className="slider-arrow"
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            className="slider-arrow"
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </button>
        </div>
        <div className="slider-counter">
          <span>{String(currentSlide + 1).padStart(2, '0')}</span>
          {' / '}
          {String(slides.length).padStart(2, '0')}
        </div>
      </div>
    </section>
  );
}
