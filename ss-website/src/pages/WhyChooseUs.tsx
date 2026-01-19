import SEO from '../components/layout/SEO';
import styles from './About.module.css'; // Reusing About styles for consistency
import { Award, Leaf, ShieldCheck, Factory } from 'lucide-react';

const WhyChooseUs = () => {
    return (
        <main>
            <SEO
                title="Why Choose SS Garments | Trusted Home Textiles Manufacturer Since 1990"
                description="35+ years of export excellence. Vertically integrated manufacturing, ethical practices, and uncompromising quality for global brands."
                url="https://sstextilehub.com/why-choose-us"
            />

            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>Why Partner With Us?</h1>
                    <p className={styles.heroSubtitle}>
                        Your trusted manufacturing partner for premium home textiles.
                        Delivering reliability, quality, and innovation since 1990.
                    </p>
                </div>
            </section>

            <section className={styles.heritageSection}>
                <div className={styles.container}>
                    <div className={styles.valuesGrid}>
                        <div className={styles.valueCard}>
                            <div className={styles.iconWrapper}>
                                <Award size={40} strokeWidth={1.5} />
                            </div>
                            <h3>35+ Years Experience</h3>
                            <p>
                                Three decades of mastering the art of textile manufacturing. We have evolved with the industry
                                while keeping our core values of integrity and craftsmanship intact.
                            </p>
                        </div>
                        <div className={styles.valueCard}>
                            <div className={styles.iconWrapper}>
                                <Factory size={40} strokeWidth={1.5} />
                            </div>
                            <h3>Vertically Integrated</h3>
                            <p>
                                From yarn sourcing to final packaging, we control every step of the manufacturing process
                                to ensure consistency, quality, and timely delivery.
                            </p>
                        </div>
                        <div className={styles.valueCard}>
                            <div className={styles.iconWrapper}>
                                <ShieldCheck size={40} strokeWidth={1.5} />
                            </div>
                            <h3>Quality Control</h3>
                            <p>
                                Rigorous multi-stage quality checks ensure that every product meets international standards.
                                We have a zero-tolerance policy for defects.
                            </p>
                        </div>
                        <div className={styles.valueCard}>
                            <div className={styles.iconWrapper}>
                                <Leaf size={40} strokeWidth={1.5} />
                            </div>
                            <h3>Sustainable & Ethical</h3>
                            <p>
                                We are committed to ethical labor practices and sustainable manufacturing processes,
                                minimizing our environmental footprint.
                            </p>
                        </div>
                    </div>

                    <div className={styles.heritageContent} style={{ marginTop: '4rem' }}>
                        <h2>Client Testimonials</h2>
                        <div style={{ fontStyle: 'italic', color: '#555', marginTop: '1rem', borderLeft: '4px solid #bfa15f', paddingLeft: '1rem' }}>
                            <p>
                                "SS Garments has been our reliable partner for over 5 years. Their attention to detail and ability
                                to execute complex custom designs is unmatched in the region."
                            </p>
                            <p style={{ marginTop: '0.5rem', fontWeight: 'bold' }}>- Procurement Manager, Leading European Retail Chain</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default WhyChooseUs;
