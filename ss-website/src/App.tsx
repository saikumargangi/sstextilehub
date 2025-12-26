import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductCategory from './pages/ProductCategory';
import BathLinen from './pages/products/BathLinen';
import KitchenLinen from './pages/products/KitchenLinen';
import About from './pages/About';
import Contact from './pages/Contact';

import BedLinen from './pages/products/BedLinen'; // Assuming BedLinen component exists or will be created
import SoftFurnishing from './pages/products/SoftFurnishing';
import Garments from './pages/products/Garments';
import Accessories from './pages/products/Accessories';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/bed-linen" element={<BedLinen />} />
        <Route path="/products/bath-linen" element={<BathLinen />} />
        <Route path="/products/kitchen-linen" element={<KitchenLinen />} />
        <Route path="/products/soft-furnishing" element={<SoftFurnishing />} />
        <Route path="/products/garments" element={<Garments />} />
        <Route path="/products/accessories" element={<Accessories />} />
        <Route path="/products/:categoryId" element={<ProductCategory />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
