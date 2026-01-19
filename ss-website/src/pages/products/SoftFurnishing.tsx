import SEO from '../../components/layout/SEO';
import styles from './SoftFurnishing.module.css';
import bannerImg from '../../assets/soft-furnishing/curtains.jpg'; // Using curtains as hero background
import soft1 from '../../assets/soft-furnishing/curtains.jpg';
import soft2 from '../../assets/soft-furnishing/cushions.jpg';
import soft3 from '../../assets/soft-furnishing/throws.jpg';

const products = [
    {
        id: 1,
        image: soft1,
        title: "Curtains",
        desc: "Transform your windows with our elegant range of curtains, available in sheer, blackout, and textured weaves."
    },
    {
        id: 2,
        image: soft2,
        title: "Cushion Covers",
        desc: "Add immediate style and comfort to any room with our handcrafted cushion covers and inserts."
    },
    {
        id: 3,
        image: soft3,
        title: "Throws",
        desc: "Wrap yourself in warmth with our collection of knitted, woven, and fleece throws for sofas and beds."
    }
];

const SoftFurnishing = () => {
    return (
        <main className={styles.pageContainer}>
            <SEO
                title="Hand-Crocheted Cushion Covers Manufacturer | Export Quality | SS Garments"
                description="Premium cushion covers, throws, and soft furnishings. Hand-crocheted by skilled artisans. Custom designs, bulk orders. Serving USA, UK, EU markets for 35+ years."
                url="https://sstextilehub.com/products/soft-furnishing"
            />
            {/* Hero / Banner Section */}
            <section className={styles.banner}>
                <img
                    src={bannerImg}
                    alt="Soft Furnishing Collection"
                    className={styles.bannerImage}
                />
                <div className={styles.bannerOverlay}></div>
                <div className={styles.bannerContent}>
                    <h1 className={styles.bannerTitle}>Soft Furnishings</h1>
                    <p className={styles.bannerSubtitle}>Texture. Warmth. Style. For Every Room.</p>
                </div>
            </section>

            {/* Content Section */}
            <section className={styles.contentSection}>
                <div className={styles.container}>
                    <div className={styles.descriptionBox}>
                        <h2>Finishing Touches that Matter</h2>
                        <p>
                            SS Garments & Hometextiles presents a curated collection of Soft Furnishings designed to breathe life
                            into interior spaces. We understand that it's the textures and layers that turn a house into a home.
                            Our range combines trend-setting designs with the timeless comfort of natural fibers.
                        </p>
                        <p>
                            From the drape of a heavy curtain to the tactile delight of a knitted throw, every piece is crafted
                            with attention to detail. We collaborate with designers to create patterns and textures that complement
                            modern living while maintaining the durability required for everyday family life.
                        </p>
                    </div>

                    {/* Industries Support - Adapted for Soft Furnishing */}
                    <div className={styles.highlightsSection}>
                        <div className={styles.highlightsGrid}>
                            <div className={styles.highlightItem}>
                                <h3>Interior Designers</h3>
                                <p>Custom fabrication and exclusive fabric libraries for residential projects.</p>
                            </div>
                            <div className={styles.highlightItem}>
                                <h3>Hospitality Projects</h3>
                                <p>Fire-retardant curtains and durable upholstery fabrics for hotels and lounges.</p>
                            </div>
                            <div className={styles.highlightItem}>
                                <h3>Home Decor Retail</h3>
                                <p>Seasonal collections of cushions and throws that drive impulse purchases.</p>
                            </div>
                            <div className={styles.highlightItem}>
                                <h3>Corporate Office</h3>
                                <p>Functional window treatments and acoustic soft furnishings for workspaces.</p>
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

export default SoftFurnishing;
