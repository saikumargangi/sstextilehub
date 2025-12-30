import styles from './BedLinen.module.css';
import { productsData } from '../../data/productData';

const BedLinen = () => {
    const { title, subtitle, bannerImage, description, items } = productsData.bedLinen;

    return (
        <main className={styles.pageContainer}>
            {/* Hero / Banner Section */}
            <section className={styles.banner}>
                <img
                    src={bannerImage}
                    alt={`${title} Collection`}
                    className={styles.bannerImage}
                />
                <div className={styles.bannerOverlay}></div>
                <div className={styles.bannerContent}>
                    <h1 className={styles.bannerTitle}>{title}</h1>
                    <p className={styles.bannerSubtitle}>{subtitle}</p>
                </div>
            </section>

            {/* Content Section */}
            <section className={styles.contentSection}>
                <div className={styles.container}>
                    <div className={styles.descriptionBox}>
                        <h2>{description.title}</h2>
                        <p>{description.text1}</p>
                        <p>{description.text2}</p>
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
                        {items.map((product) => (
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
