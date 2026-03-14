import { useState, useEffect } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { ImageSlider } from './components/ImageSlider';
import { Products } from './components/Products';
import { ProductDetail } from './components/ProductDetail';
import { Footer } from './components/Footer';
import { getWatchById } from './data';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);

  useEffect(() => {
    // Simulate loading time for assets
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const handleProductClick = (productId: number) => {
    setSelectedProductId(productId);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseDetail = () => {
    setSelectedProductId(null);
    document.body.style.overflow = 'auto';
  };

  const selectedProduct = selectedProductId ? getWatchById(selectedProductId) : null;

  return (
    <>
      {isLoading && <LoadingScreen />}
      <div className={`app-container ${isLoading ? 'hidden' : 'visible'}`}>
        <Navbar />
        <main>
          <ImageSlider />
          <Products onProductClick={handleProductClick} />
        </main>
        <Footer />
        {selectedProduct && (
          <ProductDetail 
            product={selectedProduct} 
            onClose={handleCloseDetail} 
          />
        )}
      </div>
    </>
  );
}

export default App;
