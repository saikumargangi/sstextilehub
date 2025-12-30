import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import styles from './Header.module.css';
import logoIcon from '../../assets/ss-logo-icon.png';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);



    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>


            <div className={`container ${styles.container}`}>
                <Link to="/" className={styles.logo}>
                    <img src={logoIcon} alt="SS Garments Icon" className={styles.logoImage} />
                    <span className={styles.logoText}>SS Garments & Hometextiles</span>
                </Link>

                <nav className={styles.nav}>
                    <Link to="/" className={styles.navLink}>Home</Link>

                    {/* Products Dropdown */}
                    <div className={styles.navItem}>
                        <div className={styles.navLink} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                            Products <ChevronDown size={14} />
                        </div>
                        <div className={styles.dropdown}>
                            <Link to="/products/kitchen-linen" className={styles.dropdownLink}>Kitchen and Table Linen</Link>
                            <Link to="/products/bed-linen" className={styles.dropdownLink}>Bed Linen</Link>
                            <Link to="/products/bath-linen" className={styles.dropdownLink}>Bath Linen</Link>
                            <Link to="/products/soft-furnishing" className={styles.dropdownLink}>Soft Furnishing</Link>
                            <Link to="/products/garments" className={styles.dropdownLink}>Garments</Link>
                            <Link to="/products/accessories" className={styles.dropdownLink}>Accessories</Link>
                        </div>
                    </div>

                    <Link to="/about" className={styles.navLink}>About Us</Link>
                    <Link to="/contact" className={styles.navLink}>Contact</Link>
                </nav>

                <div className={styles.actions}>


                    <Link to="/contact" className={styles.ctaButton}>
                        Get in Touch
                    </Link>
                    <button
                        className={styles.mobileMenuBtn}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay - Simplistic Implementation for now */}
            {isMobileMenuOpen && (
                <div className={styles.mobileMenu}>
                    <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>

                    <div className={styles.mobileProductHeader}>Our Products</div>
                    <Link to="/products/kitchen-linen" className={styles.mobileProductLink} onClick={() => setIsMobileMenuOpen(false)}>Kitchen & Table Linen</Link>
                    <Link to="/products/bed-linen" className={styles.mobileProductLink} onClick={() => setIsMobileMenuOpen(false)}>Bed Linen</Link>
                    <Link to="/products/bath-linen" className={styles.mobileProductLink} onClick={() => setIsMobileMenuOpen(false)}>Bath Linen</Link>
                    <Link to="/products/soft-furnishing" className={styles.mobileProductLink} onClick={() => setIsMobileMenuOpen(false)}>Soft Furnishing</Link>
                    <Link to="/products/garments" className={styles.mobileProductLink} onClick={() => setIsMobileMenuOpen(false)}>Garments</Link>
                    <Link to="/products/accessories" className={styles.mobileProductLink} onClick={() => setIsMobileMenuOpen(false)}>Accessories</Link>

                    <div style={{ marginTop: '10px' }}></div>
                    <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
                    <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
                </div>
            )}
        </header>
    );
};

export default Header;
