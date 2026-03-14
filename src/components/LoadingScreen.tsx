import { useEffect, useState } from 'react';
import { brandInfo } from '../data';

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="loading-logo">
          <div className="loading-logo-inner" />
        </div>
        <h1 className="loading-brand">{brandInfo.name}</h1>
        <p className="loading-tagline">{brandInfo.tagline}</p>
        <div className="loading-line" style={{ opacity: progress / 100 }} />
      </div>
    </div>
  );
}
