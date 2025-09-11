// Performance monitoring and optimization utilities
import { useEffect } from 'react';

export class PerformanceMonitor {
  private static metrics: Map<string, number> = new Map();
  private static observers: Map<string, PerformanceObserver> = new Map();

  // Core Web Vitals monitoring
  static initCoreWebVitals() {
    // Largest Contentful Paint (LCP)
    this.observeMetric('largest-contentful-paint', (entries) => {
      const lcp = entries[entries.length - 1];
      const value = lcp.startTime;
      this.recordMetric('LCP', value);
      
      if (value > 4000) {
        console.warn(`⚠️ LCP is ${value}ms (should be < 2500ms for good experience)`);
      }
    });

    // First Input Delay (FID)
    this.observeMetric('first-input', (entries) => {
      const fid = entries[0];
      const value = fid.processingStart - fid.startTime;
      this.recordMetric('FID', value);
      
      if (value > 300) {
        console.warn(`⚠️ FID is ${value}ms (should be < 100ms for good experience)`);
      }
    });

    // Cumulative Layout Shift (CLS)
    let clsValue = 0;
    this.observeMetric('layout-shift', (entries) => {
      for (const entry of entries) {
        if (!(entry as any).hadRecentInput) {
          clsValue += (entry as any).value;
        }
      }
      this.recordMetric('CLS', clsValue);
      
      if (clsValue > 0.25) {
        console.warn(`⚠️ CLS is ${clsValue} (should be < 0.1 for good experience)`);
      }
    });

    // Time to First Byte (TTFB)
    this.observeMetric('navigation', (entries) => {
      const navigation = entries[0] as PerformanceNavigationTiming;
      const ttfb = navigation.responseStart - navigation.requestStart;
      this.recordMetric('TTFB', ttfb);
      
      if (ttfb > 800) {
        console.warn(`⚠️ TTFB is ${ttfb}ms (should be < 600ms for good experience)`);
      }
    });
  }

  private static observeMetric(type: string, callback: (entries: PerformanceEntry[]) => void) {
    try {
      const observer = new PerformanceObserver((list) => {
        callback(list.getEntries());
      });
      
      observer.observe({ type, buffered: true });
      this.observers.set(type, observer);
    } catch (error) {
      console.warn(`Performance observer for ${type} not supported:`, error);
    }
  }

  private static recordMetric(name: string, value: number) {
    this.metrics.set(name, value);
    
    // Send to analytics (example)
    if (typeof gtag !== 'undefined') {
      gtag('event', 'web_vital', {
        name,
        value: Math.round(value),
        event_category: 'performance',
      });
    }
  }

  // Resource performance monitoring
  static analyzeResourcePerformance() {
    const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
    const analysis = {
      totalResources: resources.length,
      slowResources: [] as Array<{ name: string; duration: number; type: string }>,
      largeResources: [] as Array<{ name: string; size: number; type: string }>,
      cacheHitRate: 0,
      totalTransferSize: 0,
      totalEncodedSize: 0,
    };

    let cacheHits = 0;

    resources.forEach(resource => {
      const duration = resource.responseEnd - resource.startTime;
      const transferSize = resource.transferSize || 0;
      const encodedSize = resource.encodedBodySize || 0;
      const type = resource.initiatorType;

      analysis.totalTransferSize += transferSize;
      analysis.totalEncodedSize += encodedSize;

      // Check for cache hits (transfer size of 0 usually indicates cache hit)
      if (transferSize === 0 && encodedSize > 0) {
        cacheHits++;
      }

      // Flag slow resources (> 1 second)
      if (duration > 1000) {
        analysis.slowResources.push({
          name: resource.name,
          duration: Math.round(duration),
          type,
        });
      }

      // Flag large resources (> 500KB)
      if (transferSize > 500000) {
        analysis.largeResources.push({
          name: resource.name,
          size: Math.round(transferSize / 1024),
          type,
        });
      }
    });

    analysis.cacheHitRate = resources.length > 0 ? (cacheHits / resources.length) * 100 : 0;

    return analysis;
  }

  // Memory usage monitoring
  static getMemoryUsage() {
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      return {
        usedJSHeapSize: Math.round(memory.usedJSHeapSize / 1048576), // MB
        totalJSHeapSize: Math.round(memory.totalJSHeapSize / 1048576), // MB
        jsHeapSizeLimit: Math.round(memory.jsHeapSizeLimit / 1048576), // MB
        usagePercentage: Math.round((memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100),
      };
    }
    return null;
  }

  // Bundle size analysis
  static analyzeBundleSize() {
    const scripts = Array.from(document.querySelectorAll('script[src]')) as HTMLScriptElement[];
    const stylesheets = Array.from(document.querySelectorAll('link[rel="stylesheet"]')) as HTMLLinkElement[];
    
    const analysis = {
      scriptCount: scripts.length,
      stylesheetCount: stylesheets.length,
      estimatedScriptSize: 0,
      estimatedStylesheetSize: 0,
    };

    // This is a rough estimation based on resource timing
    const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
    
    resources.forEach(resource => {
      if (resource.name.includes('.js')) {
        analysis.estimatedScriptSize += resource.transferSize || 0;
      } else if (resource.name.includes('.css')) {
        analysis.estimatedStylesheetSize += resource.transferSize || 0;
      }
    });

    analysis.estimatedScriptSize = Math.round(analysis.estimatedScriptSize / 1024); // KB
    analysis.estimatedStylesheetSize = Math.round(analysis.estimatedStylesheetSize / 1024); // KB

    return analysis;
  }

  // Image optimization analysis
  static analyzeImagePerformance() {
    const images = Array.from(document.querySelectorAll('img')) as HTMLImageElement[];
    const analysis = {
      totalImages: images.length,
      unoptimizedImages: [] as Array<{ src: string; naturalWidth: number; naturalHeight: number; displayWidth: number; displayHeight: number }>,
      missingAltText: [] as string[],
      lazyLoadCandidates: [] as string[],
    };

    images.forEach(img => {
      // Check for missing alt text
      if (!img.alt && img.alt !== '') {
        analysis.missingAltText.push(img.src);
      }

      // Check for oversized images
      if (img.naturalWidth > 0 && img.naturalHeight > 0) {
        const displayWidth = img.offsetWidth;
        const displayHeight = img.offsetHeight;
        
        if (img.naturalWidth > displayWidth * 2 || img.naturalHeight > displayHeight * 2) {
          analysis.unoptimizedImages.push({
            src: img.src,
            naturalWidth: img.naturalWidth,
            naturalHeight: img.naturalHeight,
            displayWidth,
            displayHeight,
          });
        }
      }

      // Check for lazy loading candidates (images below the fold)
      const rect = img.getBoundingClientRect();
      if (rect.top > window.innerHeight && !img.loading) {
        analysis.lazyLoadCandidates.push(img.src);
      }
    });

    return analysis;
  }

  // Performance report
  static generatePerformanceReport() {
    const report = {
      timestamp: new Date().toISOString(),
      coreWebVitals: Object.fromEntries(this.metrics),
      resourceAnalysis: this.analyzeResourcePerformance(),
      memoryUsage: this.getMemoryUsage(),
      bundleAnalysis: this.analyzeBundleSize(),
      imageAnalysis: this.analyzeImagePerformance(),
      navigationTiming: this.getNavigationTiming(),
    };

    console.group('📊 Performance Report');
    console.log('Core Web Vitals:', report.coreWebVitals);
    console.log('Resource Analysis:', report.resourceAnalysis);
    console.log('Memory Usage:', report.memoryUsage);
    console.log('Bundle Analysis:', report.bundleAnalysis);
    console.log('Image Analysis:', report.imageAnalysis);
    console.groupEnd();

    return report;
  }

  private static getNavigationTiming() {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (!navigation) return null;

    return {
      dnsLookup: Math.round(navigation.domainLookupEnd - navigation.domainLookupStart),
      tcpConnection: Math.round(navigation.connectEnd - navigation.connectStart),
      serverResponse: Math.round(navigation.responseEnd - navigation.requestStart),
      domProcessing: Math.round(navigation.domContentLoadedEventEnd - navigation.responseEnd),
      totalLoadTime: Math.round(navigation.loadEventEnd - navigation.navigationStart),
    };
  }

  // Cleanup
  static cleanup() {
    this.observers.forEach(observer => observer.disconnect());
    this.observers.clear();
    this.metrics.clear();
  }
}

// React hook for performance monitoring
export const usePerformanceMonitor = (enabled: boolean = true) => {
  useEffect(() => {
    if (!enabled) return;

    PerformanceMonitor.initCoreWebVitals();

    // Generate report after page load
    const timer = setTimeout(() => {
      PerformanceMonitor.generatePerformanceReport();
    }, 3000);

    return () => {
      clearTimeout(timer);
      PerformanceMonitor.cleanup();
    };
  }, [enabled]);

  return {
    generateReport: PerformanceMonitor.generatePerformanceReport,
    getMemoryUsage: PerformanceMonitor.getMemoryUsage,
  };
};

// Performance optimization helpers
export const performanceHelpers = {
  // Lazy load images
  setupIntersectionObserver: (callback: (entries: IntersectionObserverEntry[]) => void) => {
    const observer = new IntersectionObserver(callback, {
      rootMargin: '50px 0px',
      threshold: 0.01,
    });

    return observer;
  },

  // Preload critical resources
  preloadResource: (href: string, as: 'script' | 'style' | 'font' | 'image') => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = href;
    link.as = as;
    if (as === 'font') {
      link.crossOrigin = 'anonymous';
    }
    document.head.appendChild(link);
  },

  // Prefetch next page resources
  prefetchResource: (href: string) => {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = href;
    document.head.appendChild(link);
  },

  // Critical CSS inlining helper
  inlineCriticalCSS: (css: string) => {
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);
  },
};

export default PerformanceMonitor;