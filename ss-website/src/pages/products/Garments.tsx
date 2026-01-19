import SEO from '../../components/layout/SEO';
import styles from './Garments.module.css';
import bannerImg from '../../assets/garments/banner.png';
import garment1 from '../../assets/garments/uniforms.jpg';
import garment2 from '../../assets/garments/beachwear.jpg';
import garment3 from '../../assets/garments/crochet_dress.jpg';
import garment4 from '../../assets/garments/knitwear_top.jpg';
import access3 from '../../assets/accessories/crochet_hat.png';
import access4 from '../../assets/accessories/crochet_scarf.jpg';
import access5 from '../../assets/accessories/crochet_shawl.jpg';

const products = [
    {
        id: 1,
        image: garment1,
        title: "Ready-Made Garments",
        desc: "High-quality apparel solutions for schools, corporate institutions, and fashion-forward retail brands."
    },
    {
        id: 2,
        image: garment3,
        title: "Handmade Crochet Dresses",
        desc: "Exquisite, handcrafted crochet dresses blending artisan skill with contemporary fashion trends."
    },
    {
        id: 3,
        image: garment2,
        title: "Swimwear",
        desc: "Stylish, breathable crochet swimwear and cover-ups perfect for resort and holiday collections."
    },
    {
        id: 4,
        image: garment4,
        title: "Crochet Tops",
        desc: "Versatile knitted tops and ensembles designed for modern, everyday elegance."
    },
    {
        id: 5,
        image: access3,
        title: "Crochet Hats",
        desc: "Trendy, handcrafted hats available in a variety of colorful geometric designs."
    },
    {
        id: 6,
        image: access4,
        title: "Seasonal Scarves",
        desc: "Soft, warm, and stylish scarves and mufflers woven for comfort and elegance."
    },
    {
        id: 7,
        image: access5,
        title: "Elegant Shawls",
        desc: "Lightweight yet cozy shawls and ponchos, adding a layer of sophistication to any outfit."
    }
];

const Garments = () => {
    return (
        <main className={styles.pageContainer}>
            <SEO
                title="Ready-Made Garments & Crochet Wear Manufacturer | Export Quality"
                description="High-quality ready-made garments and hand-crocheted wear. Uniforms, beachwear, and fashion apparel. Ethical manufacturing for global brands."
                url="https://sstextilehub.com/products/garments"
            />
            {/* Hero / Banner Section */}
            <section className={styles.banner}>
                <img
                    src={bannerImg}
                    alt="Garments Collection"
                    className={styles.bannerImage}
                />
                <div className={styles.bannerOverlay}></div>
                <div className={styles.bannerContent}>
                    <h1 className={styles.bannerTitle}>Garments</h1>
                    <p className={styles.bannerSubtitle}>Ready-to-Wear Excellence. Handcrafted Artistry.</p>
                </div>
            </section>

            {/* Content Section */}
            <section className={styles.contentSection}>
                <div className={styles.container}>
                    <div className={styles.descriptionBox}>
                        <h2>Fashion Meets Function</h2>
                        <p>
                            SS Garments & Hometextiles bridges the gap between industrial precision and artisanal craft.
                            Our Garments division provides comprehensive ready-made solutions that cater to diverse sectors,
                            ranging from institutional staples to trend-setting fashion pieces.
                        </p>
                        <p>
                            Whether dressing a workforce or defining a summer fashion collection, quality is our thread.
                            We use premium yarns and fabrics, ensuring that every garment not only looks exceptional but
                            offers superior comfort and durability for the wearer.
                        </p>
                    </div>

                    {/* Industries Support */}
                    <div className={styles.highlightsSection}>
                        <div className={styles.highlightsGrid}>
                            <div className={styles.highlightItem}>
                                <h3>Educational & Corporate</h3>
                                <p>Unified apparel solutions for schools and corporate offices that enhance identity and comfort.</p>
                            </div>
                            <div className={styles.highlightItem}>
                                <h3>Fashion Retail & D2C</h3>
                                <p>On-trend manufacturing for global fashion labels, boutiques, and direct-to-consumer brands.</p>
                            </div>
                            <div className={styles.highlightItem}>
                                <h3>Resort & Boutique</h3>
                                <p>Exclusive, handcrafted resort wear collections tailored for the luxury traveler market.</p>
                            </div>
                            <div className={styles.highlightItem}>
                                <h3>Private Label</h3>
                                <p>End-to-end custom manufacturing services enabling brands to launch unique apparel lines.</p>
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

export default Garments;
