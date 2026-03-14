import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { X, ShoppingCart, Check, Star, Shield, Truck, RotateCcw } from 'lucide-react';
import { getWhatsAppLink } from '../data';
import type { Watch, WatchVariant } from '../data';

interface ProductDetailProps {
  product: Watch;
  onClose: () => void;
}

export function ProductDetail({ product, onClose }: ProductDetailProps) {
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [isImageZoomed, setIsImageZoomed] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate modal entrance
    if (modalRef.current && contentRef.current) {
      gsap.fromTo(
        modalRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3 }
      );
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, scale: 0.95, y: 30 },
        { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: 'power3.out', delay: 0.1 }
      );
    }

    // Prevent body scroll
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleClose = () => {
    if (modalRef.current && contentRef.current) {
      gsap.to(contentRef.current, {
        opacity: 0,
        scale: 0.95,
        y: 30,
        duration: 0.3,
        ease: 'power2.in',
      });
      gsap.to(modalRef.current, {
        opacity: 0,
        duration: 0.3,
        delay: 0.1,
        onComplete: onClose,
      });
    } else {
      onClose();
    }
  };

  const handleVariantChange = (index: number) => {
    setSelectedVariant(index);
  };

  const currentVariant = product.variants[selectedVariant];
  const whatsappLink = getWhatsAppLink(
    `${product.name} (${currentVariant.color})`,
    product.price
  );

  return (
    <div ref={modalRef} className="product-modal" onClick={handleClose}>
      <div 
        ref={contentRef} 
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button className="modal-close" onClick={handleClose}>
          <X size={20} />
        </button>

        <div className="modal-grid">
          {/* Image Section */}
          <div className="modal-image-section">
            <div 
              className={`modal-image-container ${isImageZoomed ? 'zoomed' : ''}`}
              onClick={() => setIsImageZoomed(!isImageZoomed)}
            >
              <img
                src={currentVariant.image}
                alt={`${product.name} - ${currentVariant.color}`}
                className="modal-image"
              />
              <div className="zoom-hint">
                <span>{isImageZoomed ? 'Click to zoom out' : 'Click to zoom'}</span>
              </div>
            </div>
            
            {/* Thumbnail Gallery */}
            <div className="thumbnail-gallery">
              {product.variants.map((variant: WatchVariant, index: number) => (
                <button
                  key={index}
                  className={`thumbnail ${selectedVariant === index ? 'active' : ''}`}
                  onClick={() => handleVariantChange(index)}
                >
                  <img src={variant.image} alt={variant.color} />
                </button>
              ))}
            </div>
          </div>

          {/* Info Section */}
          <div className="modal-info-section">
            {/* Badges */}
            <div className="modal-badges">
              {product.bestseller && (
                <span className="badge bestseller">
                  <Star size={12} fill="currentColor" />
                  Best Seller
                </span>
              )}
              {product.discount > 0 && (
                <span className="badge discount">Save {product.discount}%</span>
              )}
            </div>

            {/* Title */}
            <h2 className="modal-title">{product.name}</h2>

            {/* Rating */}
            <div className="modal-rating">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#c9a962" color="#c9a962" />
                ))}
              </div>
              <span className="rating-text">4.9 (128 reviews)</span>
            </div>

            {/* Price */}
            <div className="modal-price">
              <span className="current-price">
                PKR {product.price.toLocaleString()}
              </span>
              {product.originalPrice > product.price && (
                <span className="original-price">
                  PKR {product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="modal-description">{product.description}</p>

            {/* Color Selection */}
            <div className="color-selection">
              <label>Select Color:</label>
              <div className="color-options">
                {product.variants.map((variant: WatchVariant, index: number) => (
                  <button
                    key={index}
                    className={`color-option ${selectedVariant === index ? 'active' : ''}`}
                    onClick={() => handleVariantChange(index)}
                  >
                    <span 
                      className="color-swatch"
                      style={{ backgroundColor: variant.colorCode }}
                    />
                    <span className="color-name">{variant.color}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="modal-features">
              <h4>Key Features:</h4>
              <ul>
                {product.features.map((feature: string, index: number) => (
                  <li key={index}>
                    <Check size={14} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Trust Badges */}
            <div className="trust-badges">
              <div className="trust-badge">
                <Shield size={18} />
                <span>2 Year Warranty</span>
              </div>
              <div className="trust-badge">
                <Truck size={18} />
                <span>Free Shipping</span>
              </div>
              <div className="trust-badge">
                <RotateCcw size={18} />
                <span>7 Day Returns</span>
              </div>
            </div>

            {/* Actions */}
            <div className="modal-actions">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-buy-large"
              >
                <ShoppingCart size={18} />
                Buy Now on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
