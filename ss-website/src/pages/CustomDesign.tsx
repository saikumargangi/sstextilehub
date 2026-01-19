import SEO from '../components/layout/SEO';
import styles from './About.module.css';
import { PenTool, Layers, Clock, CheckSquare } from 'lucide-react';

const CustomDesign = () => {
    return (
        <main>
            <SEO
                title="Custom Design & Private Label Home Textiles | SS Garments India"
                description="Comprehensive private label services. Custom design, rapid sampling (2-week turnaround), and flexible MOQs. Partner with us for your exclusive collections."
                url="https://sstextilehub.com/custom-design"
            />

            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>Custom Design & Private Label</h1>
                    <p className={styles.heroSubtitle}>
                        Bring your brand's vision to life with our comprehensive private label manufacturing services.
                        From concept to shelf, we handle it all.
                    </p>
                </div>
            </section>

            <section className={styles.heritageSection}>
                <div className={styles.container}>
                    <div className={styles.heritageContent} style={{ marginBottom: '3rem' }}>
                        <h2>Our Process</h2>
                        <p>
                            We understand that every brand has a unique identity. Our custom design process is collaborative
                            and transparent, ensuring the final product perfectly aligns with your market requirements.
                        </p>
                    </div>

                    <div className={styles.valuesGrid}>
                        <div className={styles.valueCard}>
                            <div className={styles.iconWrapper}>
                                <PenTool size={40} strokeWidth={1.5} />
                            </div>
                            <h3>Concept & Design</h3>
                            <p>
                                Share your mood boards or sketches. Our in-house design team will help refining specs,
                                selecting materials, and finalizing technical details.
                            </p>
                        </div>
                        <div className={styles.valueCard}>
                            <div className={styles.iconWrapper}>
                                <Clock size={40} strokeWidth={1.5} />
                            </div>
                            <h3>Rapid Sampling</h3>
                            <p>
                                We know speed matters. Our dedicated sampling unit ensures a **2-week turnaround time**
                                for most prototype developments.
                            </p>
                        </div>
                        <div className={styles.valueCard}>
                            <div className={styles.iconWrapper}>
                                <Layers size={40} strokeWidth={1.5} />
                            </div>
                            <h3>Flexible Production</h3>
                            <p>
                                Whether you are testing a new line or scaling up a bestseller, our flexible MOQ policy
                                supports businesses at every stage.
                            </p>
                        </div>
                        <div className={styles.valueCard}>
                            <div className={styles.iconWrapper}>
                                <CheckSquare size={40} strokeWidth={1.5} />
                            </div>
                            <h3>Packaging & Labeling</h3>
                            <p>
                                Complete retail-ready packaging solutions. Custom hangtags, labels, and eco-friendly packaging
                                options to match your brand guidelines.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default CustomDesign;
