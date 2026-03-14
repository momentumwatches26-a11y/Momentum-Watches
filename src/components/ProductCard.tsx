import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShoppingCart, Eye, Check } from 'lucide-react';
import { getWhatsAppLink } from '../data';
import type { Watch } from '../data';

gsap.registerPlugin(ScrollTrigger);

interface ProductCardProps {
  product: Watch;
  onProductClick: (productId: number) => void;
}

export function ProductCard({ product, onProductClick }: ProductCardProps) {
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [isImageTransitioning, setIsImageTransitioning] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // GSAP entrance animation
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 90%',
          },
        }
      );
    }
  }, []);

  const handleVariantChange = (index: number) => {
    if (index === selectedVariant || isImageTransitioning) return;
    
    setIsImageTransitioning(true);
    
    // Animate image transition
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: 0.2,
        onComplete: () => {
          setSelectedVariant(index);
          gsap.to(imageRef.current, {
            opacity: 1,
            scale: 1,
            duration: 0.3,
            onComplete: () => setIsImageTransitioning(false),
          });
        },
      });
    } else {
      setSelectedVariant(index);
      setIsImageTransitioning(false);
    }
  };

  const currentVariant = product.variants[selectedVariant];
  const whatsappLink = getWhatsAppLink(product.name, product.price);

  return (
    <div ref={cardRef} className="product-card">
      {/* Discount Badge */}
      {product.discount > 0 && (
        <div className="discount-badge">
          <span>Save {product.discount}%</span>
        </div>
      )}

      {/* Bestseller Badge */}
      {product.bestseller && (
        <div className="bestseller-badge">
          <Check size={12} />
          <span>Best Seller</span>
        </div>
      )}

      {/* Image Container */}
      <div 
        className="product-image-container"
        onClick={() => onProductClick(product.id)}
      >
        <img
          ref={imageRef}
          src={currentVariant.image}
          alt={`${product.name} - ${currentVariant.color}`}
          className="product-image"
        />
        <div className="product-overlay">
          <button 
            className="overlay-btn"
            onClick={(e) => {
              e.stopPropagation();
              onProductClick(product.id);
            }}
          >
            <Eye size={16} />
            <span>Quick View</span>
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="product-info">
        <h3 className="product-name" onClick={() => onProductClick(product.id)}>
          {product.name}
        </h3>
        
        {/* Color Variants */}
        <div className="color-variants">
          {product.variants.map((variant, index) => (
            <button
              key={index}
              className={`color-dot ${selectedVariant === index ? 'active' : ''}`}
              style={{ backgroundColor: variant.colorCode }}
              onClick={() => handleVariantChange(index)}
              title={variant.color}
            />
          ))}
        </div>

        {/* Price */}
        <div className="product-price">
          <span className="current-price">PKR {product.price.toLocaleString()}</span>
          {product.originalPrice > product.price && (
            <span className="original-price">
              PKR {product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>

        {/* Selected Color */}
        <p className="selected-color">
          Color: <span>{currentVariant.color}</span>
        </p>

        {/* Action Buttons */}
        <div className="product-actions">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-buy"
            onClick={(e) => e.stopPropagation()}
          >
            <ShoppingCart size={14} />
            Buy Now
          </a>
          <button 
            className="btn-details"
            onClick={() => onProductClick(product.id)}
          >
            <Eye size={14} />
            Details
          </button>
        </div>
      </div>
    </div>
  );
}
