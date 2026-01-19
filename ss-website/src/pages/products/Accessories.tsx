import { Link } from 'react-router-dom';
import SEO from '../../components/layout/SEO';
import styles from './Accessories.module.css';
import { bagsProducts } from '../../data/bagsProducts';

// Images
import bannerImg from '../../assets/accessories/banner.jpg';
import toteBagsImg from '../../assets/tote-bags.jpg';
import drawstringBagsImg from '../../assets/drawstring-bags.jpg';
import laundryBagsImg from '../../assets/laundry-bags.jpg';
import wineBagsImg from '../../assets/wine-bags.jpg';
import giftBagsImg from '../../assets/gift-bags.jpg';

const products = [
    {
        id: 'tote',
        image: toteBagsImg,
        title: bagsProducts.toteBags.title,
        desc: bagsProducts.toteBags.description
    },
    {
        id: 'drawstring',
        image: drawstringBagsImg,
        title: bagsProducts.drawstringBags.title,
        desc: bagsProducts.drawstringBags.description
    },
    {
        id: 'laundry',
        image: laundryBagsImg,
        title: bagsProducts.laundryBags.title,
        desc: bagsProducts.laundryBags.description
    },
    {
        id: 'wine',
        image: wineBagsImg,
        title: bagsProducts.wineBags.title,
        desc: bagsProducts.wineBags.description
    },
    {
        id: 'gift',
        image: giftBagsImg,
        title: bagsProducts.giftBags.title,
        desc: bagsProducts.giftBags.description
    }
];

const Accessories = () => {
    return (
        <main className={styles.pageContainer}>
            <SEO
                title="Sustainable Textile Bags & Accessories | Cotton, Jute, Canvas"
                description="Export-quality sustainable bags: Grocery totes, drawstring pouches, laundry bags, and wine bags. Customizable branding for retail and hospitality."
                url="https://sstextilehub.com/products/accessories"
            />
            {/* Hero / Banner Section */}
            <section className={styles.banner}>
                <img
                    src={bannerImg}
                    alt="Sustainable Bags Collection"
                    className={styles.bannerImage}
                />
                <div className={styles.bannerOverlay}></div>
                <div className={styles.bannerContent}>
                    <h1 className={styles.bannerTitle}>Accessories - Bags</h1>
                    <p className={styles.bannerSubtitle}>{bagsProducts.cover.tagline}</p>
                    <Link to="/bags-catalogue" className={styles.bannerButton}>
                        Open Bags Catalogue
                    </Link>
                </div>
            </section>

            {/* Content Section */}
            <section className={styles.contentSection}>
                <div className={styles.container}>
                    <div className={styles.descriptionBox}>
                        <h2>{bagsProducts.cover.title}</h2>
                        <p>
                            {bagsProducts.companyProfile.description}
                        </p>
                        <p>
                            We specialize in manufacturing high-quality, eco-friendly bags using Cotton, Canvas, Jute, JUCO, and Linen.
                            Our products are designed for durability, style, and sustainability, suitable for global retail brands,
                            hospitality chains, and corporate promotions.
                        </p>
                    </div>

                    {/* Industries Support */}
                    <div className={styles.highlightsSection}>
                        <div className={styles.highlightsGrid}>
                            <div className={styles.highlightItem}>
                                <h3>Retail & Grocery</h3>
                                <p>Durable shopping totes and grocery bags designed for daily use and brand visibility.</p>
                            </div>
                            <div className={styles.highlightItem}>
                                <h3>Hospitality</h3>
                                <p>Premium laundry and storage bags for hotels, ensuring guest convenience and hygiene.</p>
                            </div>
                            <div className={styles.highlightItem}>
                                <h3>Corporate Gifting</h3>
                                <p>Customizable wine and gift bags that elevate your corporate branding and events.</p>
                            </div>
                            <div className={styles.highlightItem}>
                                <h3>Eco-Friendly Packaging</h3>
                                <p>Sustainable drawstring pouches for jewelry, cosmetics, and small goods packaging.</p>
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
