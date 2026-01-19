import SEO from '../components/layout/SEO';
import styles from './About.module.css';
import { Target, Eye, Heart, Shield, Award, Users, Globe } from 'lucide-react';
import manufacturing1 from '../assets/manufacturing_1.jpg';
import manufacturing2 from '../assets/manufacturing_2.jpg';

const About = () => {
    return (
        <main>
            <SEO
                title="About SS Garments | 35+ Years Hand-Crocheted Textiles Manufacturing"
                description="Family-owned textile manufacturer since 1990. 100+ skilled artisans in Narsapur, India. Vertically integrated facility serving global B2B buyers with export-quality products."
                url="https://sstextilehub.com/about"
            />
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>About Us</h1>
                    <p className={styles.heroSubtitle}>
                        Crafting premium home textiles with a legacy of excellence spanning generations.
                        Merging traditional craftsmanship with modern innovation.
                    </p>
                </div>
            </section>

            {/* Top Images Section - Moved to Top */}
            <section className={styles.imageShowcaseSection}>
                <div className={styles.container}>
                    <div className={styles.imageGrid}>
                        <img
                            src={manufacturing1}
                            alt="State-of-the-art Manufacturing Facility - Weaving"
                            className={styles.showcaseImage}
                        />
                        <img
                            src={manufacturing2}
                            alt="State-of-the-art Manufacturing Facility - Quality Control"
                            className={styles.showcaseImage}
                        />
                    </div>
                </div>
            </section>

            {/* Heritage Section */}
            <section className={styles.heritageSection}>
                <div className={styles.container}>
                    <div className={styles.heritageContent}>
                        <h2>Our Heritage</h2>
                        <p>
                            With a rich legacy rooted in Narsapur, India, SS Garments & Hometextiles by Sri Sai Exports
                            began with a vision to bring the finest quality hand-crafted lace and linens to the world.
                            What started as a workshop honoring traditional artistry has grown into a
                            state-of-the-art manufacturing facility, exporting to premium markets globally.
                        </p>
                        <p>
                            We pride ourselves on maintaining the delicate balance between preserving traditional
                            weaving techniques and adopting sustainable, modern manufacturing practices.
                            Our commitment to quality is unwavering, ensuring that every piece of textile
                            that leaves our facility meets international luxury standards.
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats Row - Separate Full Width Section */}
            <section className={styles.statsSection}>
                <div className={styles.container}>
                    <div className={styles.statsRow}>
                        <div className={styles.statItem}>
                            <Award className={styles.statIcon} size={32} />
                            <span className={styles.statNumber}>35+</span>
                            <span className={styles.statLabel}>Years of Excellence</span>
                        </div>
                        <div className={styles.statItem}>
                            <Users className={styles.statIcon} size={32} />
                            <span className={styles.statNumber}>100+</span>
                            <span className={styles.statLabel}>Skilled Artisans</span>
                        </div>
                        <div className={styles.statItem}>
                            <Globe className={styles.statIcon} size={32} />
                            <span className={styles.statNumber}>15+</span>
                            <span className={styles.statLabel}>Countries Exported</span>
                        </div>
                        <div className={styles.statItem}>
                            <Shield className={styles.statIcon} size={32} />
                            <span className={styles.statNumber}>100%</span>
                            <span className={styles.statLabel}>Premium Quality</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission, Vision & Values - Replaced Image with Code */}
            <section className={styles.valuesSection}>
                <div className={styles.container}>
                    <div className={styles.valuesGrid}>
                        <div className={styles.valueCard}>
                            <div className={styles.iconWrapper}>
                                <Target size={40} strokeWidth={1.5} />
                            </div>
                            <h3>Our Mission</h3>
                            <p>
                                To provide global markets with premium, sustainable home textiles that
                                seamlessly blend traditional Indian craftsmanship with modern design excellence.
                            </p>
                        </div>
                        <div className={styles.valueCard}>
                            <div className={styles.iconWrapper}>
                                <Eye size={40} strokeWidth={1.5} />
                            </div>
                            <h3>Our Vision</h3>
                            <p>
                                To be the world's most trusted partner for home textiles,
                                recognized for our uncompromising quality, ethical manufacturing, and innovation.
                            </p>
                        </div>
                        <div className={styles.valueCard}>
                            <div className={styles.iconWrapper}>
                                <Heart size={40} strokeWidth={1.5} />
                            </div>
                            <h3>Core Values</h3>
                            <p>
                                We believe in integrity, sustainability, and customer-centricity.
                                Every product we create reflects our passion for textiles and our respect for the artisans who create them.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;
