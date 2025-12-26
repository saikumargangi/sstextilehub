import styles from './KitchenLinen.module.css';
import bannerImg from '../../assets/kitchen/banner.jpg';
import kitchen1 from '../../assets/kitchen/napkins.jpg';
import kitchen2 from '../../assets/kitchen/aprons.jpg';
import kitchen3 from '../../assets/kitchen/towels.jpg';
import kitchen4 from '../../assets/kitchen/mitts.jpg';
import kitchen5 from '../../assets/kitchen/tablecloths.jpg';
import kitchen6 from '../../assets/kitchen/runners.jpg';

const products = [
    {
        id: 1,
        image: kitchen1,
        title: "Table Napkins",
        desc: "Elegant, highly absorbent cotton napkins available in various weaves and colors."
    },
    {
        id: 2,
        image: kitchen2,
        title: "Aprons",
        desc: "Durable, ergonomic aprons designed for commercial kitchens and style-conscious chefs."
    },
    {
        id: 3,
        image: kitchen3,
        title: "Kitchen Towel Sets",
        desc: "Multi-purpose, lint-free towels with superior absorbency for all kitchen tasks."
    },
    {
        id: 4,
        image: kitchen4,
        title: "Oven Mitts & Pot Holders",
        desc: "Heat-resistant, quilted protective gear ensuring safety without compromising style."
    },
    {
        id: 5,
        image: kitchen5,
        title: "Dining Table Cloths",
        desc: "Classic and contemporary tablecloths that set the perfect foundation for any meal."
    },
    {
        id: 6,
        image: kitchen6,
        title: "Table Runners",
        desc: "Handcrafted runners adding a layer of texture and sophistication to dining spaces."
    }
];

const KitchenLinen = () => {
    return (
        <main className={styles.pageContainer}>
            {/* Hero / Banner Section */}
            <section className={styles.banner}>
                <img
                    src={bannerImg}
                    alt="Premium Kitchen Linen Collection"
                    className={styles.bannerImage}
                />
                <div className={styles.bannerOverlay}></div>
                <div className={styles.bannerContent}>
                    <h1 className={styles.bannerTitle}>Kitchen and Table Linen</h1>
                    <p className={styles.bannerSubtitle}>Functionality meets Elegance. For Chefs & Homes.</p>
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

export default KitchenLinen;
