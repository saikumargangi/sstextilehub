import SEO from '../components/layout/SEO';
import styles from './About.module.css';
import { Globe, Map, CreditCard, CheckCircle } from 'lucide-react';

const ExportMarkets = () => {
    return (
        <main>
            <SEO
                title="Global Export Markets | USA, UK, Europe, Australia | SS Garments"
                description="Exporting premium textiles to 15+ countries. Strong presence in USA, UK, Europe, and Australia. Compliant with international standards and flexible payment terms."
                url="https://sstextilehub.com/export-markets"
            />

            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>Global Export Markets</h1>
                    <p className={styles.heroSubtitle}>
                        Connecting Narsapur's finest craftsmanship with the world.
                        Trusted by retailers and importers across 4 continents.
                    </p>
                </div>
            </section>

            <section className={styles.heritageSection}>
                <div className={styles.container}>
                    <div className={styles.valuesGrid}>
                        <div className={styles.valueCard}>
                            <div className={styles.iconWrapper}>
                                <Globe size={40} strokeWidth={1.5} />
                            </div>
                            <h3>Export Destinations</h3>
                            <p>
                                We have a strong established presence in:
                                <ul>
                                    <li><strong>North America:</strong> USA, Canada</li>
                                    <li><strong>Europe:</strong> UK, France, Germany, Italy</li>
                                    <li><strong>Asia Pacific:</strong> Australia, New Zealand</li>
                                </ul>
                            </p>
                        </div>
                        <div className={styles.valueCard}>
                            <div className={styles.iconWrapper}>
                                <CheckCircle size={40} strokeWidth={1.5} />
                            </div>
                            <h3>Compliance & Standards</h3>
                            <p>
                                Our products meet rigorous international standards for color fastness, shrinkage, and durability.
                                We are compliant with REACH (EU) and other regional safety regulations.
                            </p>
                        </div>
                        <div className={styles.valueCard}>
                            <div className={styles.iconWrapper}>
                                <CreditCard size={40} strokeWidth={1.5} />
                            </div>
                            <h3>Payment Terms</h3>
                            <p>
                                We offer competitive and flexible payment terms to our long-standing partners, including
                                LC (Letter of Credit) and TT (Telegraphic Transfer), ensuring smooth trade operations.
                            </p>
                        </div>
                        <div className={styles.valueCard}>
                            <div className={styles.iconWrapper}>
                                <Map size={40} strokeWidth={1.5} />
                            </div>
                            <h3>Logistics Support</h3>
                            <p>
                                Whether FOB, CIF, or DDP, our logistics team assists in handling documentation and shipping
                                to ensure your goods arrive safely and on time.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ExportMarkets;
