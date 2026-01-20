import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { X } from 'lucide-react';
import { initGA } from './lib/googleAnalytics';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductCategory from './pages/ProductCategory';
import BathLinen from './pages/products/BathLinen';
import KitchenLinen from './pages/products/KitchenLinen';
import BedLinen from './pages/products/BedLinen';
import About from './pages/About';
import Contact from './pages/Contact';
import Catalogue from './pages/Catalogue';
import HotelCatalogue from './pages/HotelCatalogue';
import BagsCatalogue from './pages/BagsCatalogue';

import SoftFurnishing from './pages/products/SoftFurnishing';
import Garments from './pages/products/Garments';
import Accessories from './pages/products/Accessories';
import WhyChooseUs from './pages/WhyChooseUs';
import CustomDesign from './pages/CustomDesign';
import ExportMarkets from './pages/ExportMarkets';
import PrivacyPolicy from './pages/PrivacyPolicy';

const MEASUREMENT_ID = 'G-SRF74Q5FCL';

function App() {
  const [showLangBanner, setShowLangBanner] = useState(false);
  const [detectedLang, setDetectedLang] = useState('');

  useEffect(() => {
    // Initialize Google Analytics when app loads
    initGA(MEASUREMENT_ID);

    // Language detection
    const lang = navigator.language || (navigator.languages && navigator.languages[0]);
    if (lang && !lang.startsWith('en')) {
      setDetectedLang(lang);
      setShowLangBanner(true);
    }
  }, []);

  const location = useLocation();
  const isCataloguePage = location.pathname === '/catalogue';

  return (
    <>
      {!isCataloguePage && showLangBanner && (
        <div className="no-print" style={{
          backgroundColor: '#f8f9fa',
          padding: '10px',
          textAlign: 'center',
          fontSize: '0.9rem',
          borderBottom: '1px solid #e9ecef',
          position: 'relative',
          zIndex: 1100,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px',
          color: '#333'
        }}>
          <span>We noticed your browser language is <strong>{detectedLang}</strong>. Use the language selector in the menu to translate this site.</span>
          <button
            onClick={() => setShowLangBanner(false)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              padding: '4px'
            }}
          >
            <X size={16} color="#666" />
          </button>
        </div>
      )}
      {!isCataloguePage && <div className="no-print"><Header /></div>}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/bed-linen" element={<BedLinen />} />
        <Route path="/products/bath-linen" element={<BathLinen />} />
        <Route path="/products/kitchen-linen" element={<KitchenLinen />} />
        <Route path="/products/soft-furnishing" element={<SoftFurnishing />} />
        <Route path="/products/garments" element={<Garments />} />
        <Route path="/products/accessories" element={<Accessories />} />
        <Route path="/why-choose-us" element={<WhyChooseUs />} />
        <Route path="/custom-design" element={<CustomDesign />} />
        <Route path="/export-markets" element={<ExportMarkets />} />
        <Route path="/products/:categoryId" element={<ProductCategory />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/hotel-catalogue" element={<HotelCatalogue />} />
        <Route path="/bags-catalogue" element={<BagsCatalogue />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      {!isCataloguePage && <div className="no-print"><Footer /></div>}
    </>
  );
}

export default App;
