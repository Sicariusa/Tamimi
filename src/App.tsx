import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import CareersPage from './pages/CareersPage';
import TamimiMore from './pages/TamimiMore';

function App() {
  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/about/tamimi" element={<TamimiMore />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;