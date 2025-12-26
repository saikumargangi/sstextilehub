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

                    <Link to="/about" className={styles.navLink}>About</Link>
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
                <div style={{
                    position: 'absolute', top: '80px', left: 0, width: '100%', background: '#fff',
                    padding: '20px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', gap: '15px'
                }}>
                    <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                    <Link to="/products/bed-linen" onClick={() => setIsMobileMenuOpen(false)}>Bed Linen</Link>
                    <Link to="/products/bath-linen" onClick={() => setIsMobileMenuOpen(false)}>Bath Linen</Link>
                    <Link to="/products/kitchen-linen" onClick={() => setIsMobileMenuOpen(false)}>Kitchen Linen</Link>
                    <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
                    <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
                </div>
            )}
        </header>
    );
};

export default Header;
