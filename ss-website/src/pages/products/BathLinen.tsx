import { Link } from 'react-router-dom';
import styles from './BathLinen.module.css';
import bannerImg from '../../assets/bath/banner.jpg';
import bath1 from '../../assets/bath/towels_stack.jpg';
import bath2 from '../../assets/bath/towels_pattern.jpg';
import bath3 from '../../assets/bath/bathrobes.jpg';
import bath4 from '../../assets/bath/bath_mats.jpg';

const products = [
    {
        id: 1,
        image: bath1,
        title: "Body, Hand, and Face Towels",
        desc: "Ultra-soft, high-GSM cotton terry towels available in a spectrum of sophisticated colors."
    },
    {
        id: 2,
        image: bath2,
        title: "Designer Printed Towels",
        desc: "Add a splash of style with our vibrant, fade-resistant printed towel collections."
    },
    {
        id: 3,
        image: bath3,
        title: "Bathrobes",
        desc: "Plush, spa-quality bathrobes designed for ultimate comfort and relaxation."
    },
    {
        id: 4,
        image: bath4,
        title: "Anti-Skid Bath Mats",
        desc: "Super-absorbent, quick-drying mats with secure non-slip backing for safety."
    }
];

const BathLinen = () => {
    return (
        <main className={styles.pageContainer}>
            {/* Hero / Banner Section */}
            <section className={styles.banner}>
                <img
                    src={bannerImg}
                    alt="Luxury Bath Linen Collection"
                    className={styles.bannerImage}
                />
                <div className={styles.bannerOverlay}></div>
                <div className={styles.bannerContent}>
                    <h1 className={styles.bannerTitle}>Bath Linen</h1>
                    <p className={styles.bannerSubtitle}>Indulge in Softness. Experience Luxury.</p>
                    <Link to="/hotel-catalogue" className={styles.bannerButton}>
                        Product Catalogue - Hotel Linen
                    </Link>
                </div>
            </section>

            {/* Content Section */}
            <section className={styles.contentSection}>
                <div className={styles.container}>
                    <div className={styles.descriptionBox}>
                        <h2>Sanctuary of Comfort</h2>
                        <p>
                            Transform your bathroom into a private spa with SS Garments & Hometextiles' exquisite range of Bath Linen.
                            We believe that the touch of a towel should be a moment of pure bliss. Our collection combines
                            exceptional softness with superior absorbency to elevate your daily rituals.
                        </p>
                        <p>
                            Woven from the finest long-staple cotton and bamboo blends, our bath linens are designed to remain plush
                            wash after wash. From heavyweight luxury towels to lightweight, quick-dry options, we cater to every
                            preference and hospitality standard.
                        </p>
                    </div>

                    {/* Industries Support */}
                    <div className={styles.highlightsSection}>
                        <div className={styles.highlightsGrid}>
                            <div className={styles.highlightItem}>
                                <h3>Luxury Hotels</h3>
                                <p>Plush, bright white towel sets that define the 5-star guest experience.</p>
                            </div>
                            <div className={styles.highlightItem}>
                                <h3>Wellness Spas</h3>
                                <p>Specialized, ultra-soft linens resistant to oils and frequent laundering.</p>
                            </div>
                            <div className={styles.highlightItem}>
                                <h3>Retail Collections</h3>
                                <p>Trend-focused colors and textures packaged for maximum shelf appeal.</p>
                            </div>
                            <div className={styles.highlightItem}>
                                <h3>Healthcare</h3>
                                <p>Durable, hygienic textiles meeting rigorous sanitization standards.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Gallery Section */}
            <section className={styles.gallerySection}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>Our Collection</h2>
                    <div className={styles.productGrid}>
                        {products.map((product) => (
                            <div key={product.id} className={styles.productCard}>
                                <div className={styles.imageContainer}>
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className={styles.productImage}
                                    />
                                </div>
                                <div className={styles.productInfo}>
                                    <h3 className={styles.productTitle}>{product.title}</h3>
                                    <p className={styles.productDesc}>{product.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default BathLinen;
