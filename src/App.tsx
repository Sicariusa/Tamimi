import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import LoadingSpinner from './components/ui/LoadingSpinner';

// Lazy load pages for better performance
const HomePage = React.lazy(() => import('./pages/HomePage'));
const AboutPage = React.lazy(() => import('./pages/about/AboutPage'));
const DivisionsPage = React.lazy(() => import('./pages/divisions/DivisionsPage'));
const DivisionDetailPage = React.lazy(() => import('./pages/divisions/DivisionDetailPage'));
const MarketsPage = React.lazy(() => import('./pages/markets/MarketsPage'));
const CSRPage = React.lazy(() => import('./pages/csr/CSRPage'));
const NewsPage = React.lazy(() => import('./pages/news/NewsPage'));
const CareersPage = React.lazy(() => import('./pages/CareersPage'));
const ContactPage = React.lazy(() => import('./pages/contact/ContactPage'));

// Error Boundary Component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): { hasError: boolean } {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('App Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-ink text-ivory flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gold mb-4">Something went wrong</h1>
            <p className="text-steel mb-8">We apologize for the inconvenience. Please refresh the page to try again.</p>
            <button 
              onClick={() => window.location.reload()}
              className="bg-gold text-ink px-6 py-3 rounded-lg font-semibold hover:bg-gold-hover transition-colors duration-300"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route 
            index 
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <HomePage />
              </Suspense>
            } 
          />
          <Route 
            path="about" 
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <AboutPage />
              </Suspense>
            } 
          />
          <Route 
            path="divisions" 
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <DivisionsPage />
              </Suspense>
            } 
          />
          <Route 
            path="divisions/:slug" 
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <DivisionDetailPage />
              </Suspense>
            } 
          />
          <Route 
            path="markets" 
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <MarketsPage />
              </Suspense>
            } 
          />
          <Route 
            path="csr" 
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <CSRPage />
              </Suspense>
            } 
          />
          <Route 
            path="news" 
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <NewsPage />
              </Suspense>
            } 
          />
          <Route 
            path="careers" 
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <CareersPage />
              </Suspense>
            } 
          />
          <Route 
            path="contact" 
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <ContactPage />
              </Suspense>
            } 
          />
          
          {/* 404 Page */}
          <Route 
            path="*" 
            element={
              <div className="min-h-screen bg-ink text-ivory flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-6xl font-bold text-gold mb-4">404</h1>
                  <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
                  <p className="text-steel mb-8">The page you're looking for doesn't exist.</p>
                  <a 
                    href="/"
                    className="bg-gold text-ink px-6 py-3 rounded-lg font-semibold hover:bg-gold-hover transition-colors duration-300 inline-block"
                  >
                    Return Home
                  </a>
                </div>
              </div>
            } 
          />
        </Route>
      </Routes>
    </ErrorBoundary>
  );
}

export default App;