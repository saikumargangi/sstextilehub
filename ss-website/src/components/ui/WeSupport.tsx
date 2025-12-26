import { Package, Tag, Palette } from 'lucide-react';
import styles from './WeSupport.module.css';

const supportItems = [
    {
        icon: <Package size={32} strokeWidth={1.5} />,
        title: "Low MOQ",
        desc: "Flexible minimum order quantities to accommodate businesses of all sizes, from startups to established brands."
    },
    {
        icon: <Tag size={32} strokeWidth={1.5} />,
        title: "Private Label",
        desc: "Complete private labeling services including custom branding, packaging, and labeling to match your brand identity."
    },
    {
        icon: <Palette size={32} strokeWidth={1.5} />,
        title: "Custom Designs",
        desc: "Bring your unique designs to life with our custom development services, from concept to finished product."
    }
];

const WeSupport = () => {
    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <h2 className={styles.headline}>We Support</h2>
                <p className={styles.subheadline}>
                    Tailored solutions to meet your unique business requirements and help you succeed.
                </p>
            </div>

            <div className={styles.grid}>
                {supportItems.map((item, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.iconWrapper}>
                            {item.icon}
                        </div>
                        <h3 className={styles.title}>{item.title}</h3>
                        <p className={styles.desc}>{item.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WeSupport;
