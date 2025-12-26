import styles from './Accessories.module.css';
import bannerImg from '../../assets/accessories/banner.jpg';
import access1 from '../../assets/accessories/tote_bag.jpg';
import access2 from '../../assets/accessories/crochet_bag.jpg';
import access3 from '../../assets/accessories/crochet_hat.png';
import access4 from '../../assets/accessories/crochet_scarf.jpg';
import access5 from '../../assets/accessories/crochet_shawl.jpg';

const products = [
    {
        id: 1,
        image: access1,
        title: "Cotton Bags",
        desc: "Durable, reusable canvas tote bags perfect for sustainable branding and everyday utility."
    },
    {
        id: 2,
        image: access2,
        title: "Hand-Crocheted Bags",
        desc: "Artisanal crochet bags featuring vibrant patterns and sturdy construction for a boho-chic look."
    },
    {
        id: 3,
        image: access3,
        title: "Crochet Hats",
        desc: "Trendy, handcrafted hats available in a variety of colorful geometric designs."
    },
    {
        id: 4,
        image: access4,
        title: "Seasonal Scarves",
        desc: "Soft, warm, and stylish scarves and mufflers woven for comfort and elegance."
    },
    {
        id: 5,
        image: access5,
        title: "Elegant Shawls",
        desc: "Lightweight yet cozy shawls and ponchos, adding a layer of sophistication to any outfit."
    }
];

const Accessories = () => {
    return (
        <main className={styles.pageContainer}>
            {/* Hero / Banner Section */}
            <section className={styles.banner}>
                <img
                    src={bannerImg}
                    alt="Textile Accesssories Collection"
                    className={styles.bannerImage}
                />
                <div className={styles.bannerOverlay}></div>
                <div className={styles.bannerContent}>
                    <h1 className={styles.bannerTitle}>Accessories</h1>
                    <p className={styles.bannerSubtitle}>Handcrafted Details. Sustainable Style.</p>
                </div>
            </section>

            {/* Content Section */}
            <section className={styles.contentSection}>
                <div className={styles.container}>
                    <div className={styles.descriptionBox}>
                        <h2>The Perfect Finishing Touch</h2>
                        <p>
                            SS Garments & Hometextiles extends its expertise beyond linens to a curated collection of textile accessories.
                            Our range celebrates the beauty of handmade craftsmanship and the importance of sustainable living.
                            Each piece is designed to be functional, stylish, and durable.
                        </p>
                        <p>
                            From standard canvas products designed for corporate customization to one-of-a-kind handcrafted crochet
                            items, our accessories line showcases versatility. We support skilled artisans to create unique fashion
                            statements that resonate with the modern, eco-conscious consumer.
                        </p>
                    </div>

                    {/* Industries Support */}
                    <div className={styles.highlightsSection}>
                        <div className={styles.highlightsGrid}>
                            <div className={styles.highlightItem}>
                                <h3>Boutique Fashion</h3>
                                <p>Unique, artisanal accessories that add value and character to fashion retail collections.</p>
                            </div>
                            <div className={styles.highlightItem}>
                                <h3>Corporate Gifting</h3>
                                <p>Customizable, eco-friendly tote bags and accessories for sustainable brand promotion.</p>
                            </div>
                            <div className={styles.highlightItem}>
                                <h3>Resort Wear</h3>
                                <p>Lightweight hats, bags, and wraps perfect for vacation and leisure markets.</p>
                            </div>
                            <div className={styles.highlightItem}>
                                <h3>Sustainable Living</h3>
                                <p>Reusable, plastic-free alternatives that align with environmental values.</p>
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

export default Accessories;
