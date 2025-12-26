import styles from './BedLinen.module.css';
import bannerImg from '../../assets/hero-bg.jpg'; // Using distinct main banner or hero-bg
import bed1 from '../../assets/bed/fitted_sheets.jpg';
import bed2 from '../../assets/bed/flat_sheets.jpg';
import bed3 from '../../assets/bed/duvet_covers.jpg';
import bed4 from '../../assets/bed/pillowcases.png';
import bed5 from '../../assets/bed/bedspreads.jpg';

const products = [
    {
        id: 1,
        image: bed2,
        title: "Flat Sheets",
        desc: "Crisp, cool, and breathable flat sheets available in varied thread counts (200TC - 1000TC)."
    },
    {
        id: 2,
        image: bed1,
        title: "Fitted Sheets",
        desc: "Perfectly tailored fitted sheets with deep pockets to ensure a snug fit on any mattress."
    },
    {
        id: 3,
        image: bed3,
        title: "Duvet Covers",
        desc: "Luxurious duvet covers in satins, percales, and textured weaves for ultimate comfort."
    },
    {
        id: 4,
        image: bed4,
        title: "Pillowcases",
        desc: "Soft, smooth pillowcases designed to be gentle on skin and hair, available in all sizes."
    },
    {
        id: 5,
        image: bed5,
        title: "Bedspreads & Quilts",
        desc: "Elegant bedspreads adding a layer of warmth and sophisticated texture to bedroom decor."
    }
];

const BedLinen = () => {
    return (
        <main className={styles.pageContainer}>
            {/* Hero / Banner Section */}
            <section className={styles.banner}>
                <img
                    src={bannerImg}
                    alt="Premium Bed Linen Collection"
                    className={styles.bannerImage}
                />
                <div className={styles.bannerOverlay}></div>
                <div className={styles.bannerContent}>
                    <h1 className={styles.bannerTitle}>Bed Linen</h1>
                    <p className={styles.bannerSubtitle}>Dream in Comfort. Wake up Inspired.</p>
                </div>
            </section>

            {/* Content Section */}
            <section className={styles.contentSection}>
                <div className={styles.container}>
                    <div className={styles.descriptionBox}>
                        <h2>The Art of Good Sleep</h2>
                        <p>
                            SS Garments & Hometextiles brings you a Bed Linen collection where luxury meets longevity.
                            We understand that the quality of your sleep is defined by the fabric against your skin.
                            That's why we meticulously source the finest long-staple cottons to create linens that breathe,
                            soften with every wash, and stand the test of time.
                        </p>
                        <p>
                            From crisp cool percales tailored for hot climates to silky smooth sateens for a lustrous feel,
                            our range covers the entire spectrum of comfort. Precision stitching, quality elastic, and
                            elegant finishing details make our bedding the choice for premium homes and hotels worldwide.
                        </p>
                    </div>

                    {/* Industries Support */}
                    <div className={styles.highlightsSection}>
                        <div className={styles.highlightsGrid}>
                            <div className={styles.highlightItem}>
                                <h3>Luxury Hotels</h3>
                                <p>High thread-count, industrial-wash durable linens for the ultimate guest experience.</p>
                            </div>
                            <div className={styles.highlightItem}>
                                <h3>Boutique Stays</h3>
                                <p>Custom designs and textures that enhance the unique character of boutique properties.</p>
                            </div>
                            <div className={styles.highlightItem}>
                                <h3>Retail Chains</h3>
                                <p>Comprehensive bedding sets packaged beautifully for high-volume retail environments.</p>
                            </div>
                            <div className={styles.highlightItem}>
                                <h3>Hospitals</h3>
                                <p>Specialized healthcare linens prioritizing hygiene, durability, and patient comfort.</p>
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

export default BedLinen;
