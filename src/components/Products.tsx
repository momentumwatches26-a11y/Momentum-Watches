import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ProductCard } from './ProductCard';
import { categories, getWatchesByCategory, watches } from '../data';

gsap.registerPlugin(ScrollTrigger);

interface ProductsProps {
  onProductClick: (productId: number) => void;
}

export function Products({ onProductClick }: ProductsProps) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredWatches, setFilteredWatches] = useState(watches);
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const filtered = getWatchesByCategory(activeCategory);
    setFilteredWatches(filtered);
  }, [activeCategory]);

  useEffect(() => {
    // Header animation
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 85%',
          },
        }
      );
    }
  }, []);

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    
    // Animate category change
    if (sectionRef.current) {
      const grid = sectionRef.current.querySelector('.products-grid');
      if (grid) {
        gsap.fromTo(
          grid,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
        );
      }
    }
  };

  return (
    <section id="products" className="products-section">
      <div className="products-container">
        <div ref={headerRef} className="products-header">
          <p className="section-label">Our Collection</p>
          <h2 className="section-title">Curated Timepieces</h2>
          <p className="section-subtitle">
            Discover watches that define elegance and precision
          </p>
        </div>

        {/* Category Filters */}
        <div className="category-filters">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => handleCategoryChange(category.id)}
              id={`products-${category.id}`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div ref={sectionRef} className="products-wrapper">
          {filteredWatches.length > 0 ? (
            <div className="products-grid">
              {filteredWatches.map((watch) => (
                <ProductCard
                  key={watch.id}
                  product={watch}
                  onProductClick={onProductClick}
                />
              ))}
            </div>
          ) : (
            <div className="no-products">
              <p>No watches found in this category.</p>
            </div>
          )}
        </div>

        {/* View All CTA */}
        <div className="products-cta">
          <button 
            className="btn-outline"
            onClick={() => {
              setActiveCategory('all');
              document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            View All Watches
          </button>
        </div>
      </div>
    </section>
  );
}
