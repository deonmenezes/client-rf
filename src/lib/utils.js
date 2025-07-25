import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// Responsive viewport settings for animations
// Lower 'amount' values make animations trigger earlier with less scrolling
export const responsiveViewport = {
  once: true,
  amount: { 
    mobile: 0.02,    // Ultra-sensitive trigger on mobile for immediate response
    tablet: 0.05,    // Very sensitive on tablets
    desktop: 0.1     // Sensitive on desktop
  },
  margin: "-150px 0px" // Larger negative margin to trigger much earlier
};

// Helper to get viewport settings based on device or override with custom values
export function getViewportSettings(customSettings = {}) {
  // Since we can't reliably detect device type during SSR,
  // we'll set a very conservative default for immediate triggers
  return {
    once: true,
    amount: 0.01, // Ultra-sensitive default for all devices
    margin: "-150px 0px", // Trigger animations well before element is visible
    ...customSettings
  };
}

// Optimized animation variants for 60fps performance
export const optimizedVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.95,
    // Force GPU acceleration
    transform: "translateZ(0)"
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transform: "translateZ(0)",
    transition: { 
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94], // Custom cubic-bezier for smoothness
      opacity: { duration: 0.3 },
      y: { duration: 0.4 },
      scale: { duration: 0.4 }
    }
  }
};

// Mobile-optimized variants for better performance
export const mobileOptimizedVariants = {
  hidden: { 
    opacity: 0, 
    y: 15, // Smaller movement on mobile
    transform: "translateZ(0)"
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transform: "translateZ(0)",
    transition: { 
      duration: 0.25, // Faster on mobile
      ease: [0.25, 0.46, 0.45, 0.94],
      opacity: { duration: 0.2 },
      y: { duration: 0.25 }
    }
  }
};