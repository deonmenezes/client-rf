import { useState, useEffect } from 'react';
import { responsiveViewport } from './utils';

/**
 * Hook to get viewport settings with responsive behavior
 * This hook ensures animations are optimized for mobile devices
 */
export function useResponsiveViewport(customSettings = {}) {
  const [viewportSettings, setViewportSettings] = useState({
    once: true,
    amount: 0.05, // Start with mobile-friendly value
    margin: responsiveViewport.margin,
    ...customSettings
  });

  useEffect(() => {
    // Update based on actual screen size once mounted
    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
    
    const amount = isMobile ? responsiveViewport.amount.mobile :
                  isTablet ? responsiveViewport.amount.tablet :
                  responsiveViewport.amount.desktop;
    
    setViewportSettings(prev => ({
      ...prev,
      amount: amount
    }));

    // Also add optimization classes
    document.documentElement.classList.add('smooth-scroll');
    if (isMobile) {
      document.documentElement.classList.add('mobile-optimized');
    }

    // Add resize listener for responsive adjustments
    const handleResize = () => {
      const newIsMobile = window.innerWidth < 768;
      const newIsTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
      
      const newAmount = newIsMobile ? responsiveViewport.amount.mobile :
                      newIsTablet ? responsiveViewport.amount.tablet :
                      responsiveViewport.amount.desktop;
      
      setViewportSettings(prev => ({
        ...prev,
        amount: newAmount
      }));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [customSettings]);

  return viewportSettings;
}
