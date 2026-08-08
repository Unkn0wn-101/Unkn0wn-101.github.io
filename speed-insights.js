/**
 * Vercel Speed Insights Integration
 * This script initializes Speed Insights for the portfolio website
 */

// Import the injectSpeedInsights function from the CDN
import { injectSpeedInsights } from 'https://cdn.jsdelivr.net/npm/@vercel/speed-insights@2.0.0/dist/index.mjs';

// Initialize Speed Insights
// The script will automatically track web vitals and performance metrics
injectSpeedInsights({
  // Enable debug mode in development (shows events in console)
  debug: false,
  
  // Sample rate: 1 = 100% of events are tracked
  // You can reduce this to save costs (e.g., 0.5 = 50% of events)
  sampleRate: 1,
});

console.log('Vercel Speed Insights initialized');
