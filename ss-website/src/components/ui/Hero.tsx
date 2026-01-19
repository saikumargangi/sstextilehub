import { Link } from 'react-router-dom';
import styles from './Hero.module.css';
import heroBg from '../../assets/hero-bg.jpg';

const Hero = () => {
    return (
        <section className={styles.hero}>
            {/* Luxury Bedroom Image from User */}
            <img
                src={heroBg}
                alt="Luxury Bedroom"
                className={styles.backgroundImage}
            />

            <div className={styles.overlay}></div>

            <div className={styles.content}>
                <div className={styles.textContainer}>
                    <h1 className={styles.headline}>
                        Crafting Premium <br />
                        <span className={styles.highlight}>Home Textiles</span> for Global Markets
                    </h1>

                    <p className={styles.subheadline}>
                        From our state-of-the-art facility in India, we manufacture and export
                        bed, bath, and kitchen linens, garments across 15+ countries.
                    </p>

                    <div className={styles.ctaGroup}>
                        <a href="#featured-categories" className={styles.primaryButton}>
                            Explore Collections
                        </a>
                        <Link to="/contact" className={styles.secondaryButton}>
                            Request Quote
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
