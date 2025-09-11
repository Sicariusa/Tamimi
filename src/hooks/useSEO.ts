import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SEOManager, SEOConfig, pageSEOConfigs, trackPageView } from '../utils/seo';

type PageKey = keyof typeof pageSEOConfigs;

export const useSEO = (config?: SEOConfig | PageKey) => {
  const location = useLocation();

  useEffect(() => {
    let seoConfig: SEOConfig;

    if (typeof config === 'string') {
      // Use pre-defined page config
      seoConfig = pageSEOConfigs[config];
    } else if (config) {
      // Use custom config
      seoConfig = config;
    } else {
      // Auto-detect based on pathname
      const pathname = location.pathname.slice(1) || 'home';
      const pageKey = pathname.split('/')[0] as PageKey;
      seoConfig = pageSEOConfigs[pageKey] || pageSEOConfigs.home;
    }

    // Update page SEO
    SEOManager.updatePageSEO({
      ...seoConfig,
      canonicalUrl: `${window.location.origin}${location.pathname}`,
    });

    // Track page view
    trackPageView(location.pathname, {
      page_title: seoConfig.title,
      page_path: location.pathname,
    });

    // Scroll to top on route change (optional)
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [config, location]);
};

export default useSEO;