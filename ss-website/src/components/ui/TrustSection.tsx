import { ShieldCheck, Users, Globe, Leaf, Award } from 'lucide-react';
import styles from './TrustSection.module.css';

const trustItems = [
    {
        icon: <Award size={32} strokeWidth={1.5} />,
        title: "40+ Years Excellence",
        desc: ""
    },
    {
        icon: <Users size={32} strokeWidth={1.5} />,
        title: "100+ Skilled Workforce",
        desc: ""
    },
    {
        icon: <Globe size={32} strokeWidth={1.5} />,
        title: "15+ Countries Exported",
        desc: ""
    },
    {
        icon: <ShieldCheck size={32} strokeWidth={1.5} />,
        title: "Government Recognized",
        desc: ""
    },
    {
        icon: <Leaf size={32} strokeWidth={1.5} />,
        title: "Sustainable Practices",
        desc: ""
    }
];

const TrustSection = () => {
    return (
        <section className={styles.section}>
            <div className={`container ${styles.grid}`}>
                {trustItems.map((item, index) => (
                    <div key={index} className={styles.item}>
                        <div className={styles.iconWrapper}>
                            {item.icon}
                        </div>
                        <div className={styles.text}>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TrustSection;
