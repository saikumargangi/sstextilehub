import styles from './KitchenLinen.module.css';
import { productsData } from '../../data/productData';

const KitchenLinen = () => {
    // Note: Assuming 'description' structure for KitchenLinen needs to be added to productData if not exact match,
    // but in my productData file I only added 'items', 'title', 'subtitle', 'bannerImage'. 
    // Wait, I did NOT add 'description' text to KitchenLinen in productData.ts yet!
    // I only added it for BedLinen.
    // I should check productData.ts again.

    // START CHECK
    const { title, subtitle, bannerImage, items } = productsData.kitchenLinen;

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
                        <h2>Elevate Your Culinary Space</h2>
                        <p>
                            Experience the perfect blend of style, durability, and practicality with our premium Kitchen Linen collection.
                            From heavy-duty aprons designed for professional kitchens to elegant table linens that transform home dining,
                            SS Garments & Hometextiles delivers textiles that withstand the heat of the kitchen while looking impeccable.
                        </p>
                        <p>
                            Our kitchen textiles are crafted from high-grade cotton and sustainable blends, ensuring superior absorbency,
                            heat resistance, and color fastness. We understand that kitchen linen must be as hardworking as it is beautiful,
                            which is why every stitch is reinforced for industrial longevity.
                        </p>
                    </div>

                    {/* Industries Support */}
                    <div className={styles.highlightsSection}>
                        <div className={styles.highlightsGrid}>
                            <div className={styles.highlightItem}>
                                <h3>Restaurants & Cafes</h3>
                                <p>Durable, stain-resistant uniforms and functional linens designed for high-paced professional environments.</p>
                            </div>
                            <div className={styles.highlightItem}>
                                <h3>Home Goods Retail</h3>
                                <p>Trend-setting designs and seasonal collections packaged perfectly for shelf appeal.</p>
                            </div>
                            <div className={styles.highlightItem}>
                                <h3>Professional Catering</h3>
                                <p>Bulk solutions that maintain premium appearance wash after wash for large-scale events.</p>
                            </div>
                            <div className={styles.highlightItem}>
                                <h3>Culinary Institutions</h3>
                                <p>Standardized, protective gear and learning aids for the next generation of chefs.</p>
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

export default KitchenLinen;
