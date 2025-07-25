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
    mobile: 0.05,    // Very sensitive trigger on mobile
    tablet: 0.1,     // More sensitive on tablets
    desktop: 0.2     // Standard on desktop
  },
  margin: "-100px 0px" // Negative margin to trigger earlier
};

// Helper to get viewport settings based on device or override with custom values
export function getViewportSettings(customSettings = {}) {
  // Since we can't reliably detect device type during SSR,
  // we'll set a conservative default and let it be updated client-side
  return {
    once: true,
    amount: 0.05, // Default to mobile-friendly value
    margin: responsiveViewport.margin,
    ...customSettings
  };
}