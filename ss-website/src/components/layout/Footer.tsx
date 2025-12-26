import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Linkedin, ChevronRight, ArrowRight, MessageCircle } from 'lucide-react';
import styles from './Footer.module.css';
import logoIcon from '../../assets/ss-logo-icon.png';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.grid}>
                    {/* Column 1: Company Info */}
                    <div className={styles.column}>
                        <div className={styles.companyInfo}>
                            <Link to="/" className={styles.logoContainer}>
                                <img src={logoIcon} alt="SS Garments Icon" className={styles.logoImage} />
                                <span className={styles.logoText}>SS Garments & Hometextiles</span>
                            </Link>
                            <p>
                                A legacy of premium garments and home textile manufacturing.
                                Blending traditional craftsmanship with modern innovation for global markets.
                            </p>
                            <div className={styles.socialLinks}>
                                <a href="https://www.linkedin.com/in/kanthaji/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LinkedIn">
                                    <Linkedin size={20} />
                                </a>
                                <a href="https://www.instagram.com/sstextilehub/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram">
                                    <Instagram size={20} />
                                </a>
                                <a href="https://wa.me/917200033566" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="WhatsApp">
                                    <MessageCircle size={20} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className={styles.column}>
                        <h3>Quick Links</h3>
                        <ul className={styles.linkList}>
                            <li>
                                <Link to="/"><ChevronRight size={16} /> Home</Link>
                            </li>
                            <li>
                                <Link to="/about"><ChevronRight size={16} /> About Us</Link>
                            </li>
                            <li>
                                <Link to="/contact"><ChevronRight size={16} /> Contact</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Products */}
                    <div className={styles.column}>
                        <h3>Collections</h3>
                        <ul className={styles.linkList}>
                            <li>
                                <Link to="/products/kitchen-linen"><ChevronRight size={16} /> Kitchen and Table Linen</Link>
                            </li>
                            <li>
                                <Link to="/products/bed-linen"><ChevronRight size={16} /> Bed Linen</Link>
                            </li>
                            <li>
                                <Link to="/products/bath-linen"><ChevronRight size={16} /> Bath Linen</Link>
                            </li>
                            <li>
                                <Link to="/products/soft-furnishing"><ChevronRight size={16} /> Soft Furnishing</Link>
                            </li>
                            <li>
                                <Link to="/products/garments"><ChevronRight size={16} /> Garments</Link>
                            </li>
                            <li>
                                <Link to="/products/accessories"><ChevronRight size={16} /> Accessories</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Contact */}
                    <div className={styles.column}>
                        <h3>Contact Us</h3>
                        <ul className={styles.contactList}>
                            <li>
                                <MapPin className={styles.contactIcon} size={20} />
                                <span>Narsapur, West Godavari,<br />Andhra Pradesh, India.</span>
                            </li>
                            <li>
                                <Mail className={styles.contactIcon} size={20} />
                                <span>office@sstextilehub.com</span>
                            </li>
                            <li>
                                <Phone className={styles.contactIcon} size={20} />
                                <span>+91 7200033566</span>
                            </li>
                        </ul>

                        <div style={{ marginTop: '2rem' }}>
                            <h4 style={{ color: '#fff', fontSize: '0.9rem', marginBottom: '10px' }}>Subscribe to Newsletter</h4>
                            <div className={styles.newsletterForm}>
                                <input type="email" placeholder="Email Address" className={styles.newsletterInput} />
                                <button className={styles.newsletterBtn}><ArrowRight size={18} /></button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; {new Date().getFullYear()} SS Garments & HomeTextiles. All rights reserved.</p>
                    <div className={styles.bottomLinks}>
                        <Link to="#">Privacy Policy</Link>
                        <Link to="#">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
