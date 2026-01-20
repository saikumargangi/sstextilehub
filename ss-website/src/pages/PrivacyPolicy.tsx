import { Helmet } from 'react-helmet-async';
import { Shield, Lock, Eye, FileText, Mail } from 'lucide-react';
import styles from './PrivacyPolicy.module.css';

const PrivacyPolicy = () => {
    const lastUpdated = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <>
            <Helmet>
                <title>Privacy Policy | SS Textile Hub</title>
                <meta
                    name="description"
                    content="Privacy Policy for SS Textile Hub. Learn how we collect, use, and protect your personal information."
                />
            </Helmet>

            <div className={styles.privacyContainer}>
                {/* Hero Section */}
                <section className={styles.hero}>
                    <div className={styles.heroContent}>
                        <h1>Privacy Policy</h1>
                        <p className={styles.heroSubtitle}>
                            Your privacy is important to us. This policy outlines how we handle your data.
                        </p>
                        <p className={styles.lastUpdated}>Last Updated: {lastUpdated}</p>
                    </div>
                </section>

                {/* Content Section */}
                <section className={styles.contentSection}>
                    <div className={styles.storyContainer}>

                        <div className={styles.valueCard}>
                            <div className={styles.iconWrapper}>
                                <Shield className={styles.valueIcon} />
                            </div>
                            <h3>1. Introduction</h3>
                            <p>
                                Welcome to SS Textile Hub. We respect your privacy and are committed to protecting your personal data.
                                This privacy policy will inform you as to how we look after your personal data when you visit our website
                                and tell you about your privacy rights and how the law protects you.
                            </p>
                        </div>

                        <div className={styles.valueCard}>
                            <div className={styles.iconWrapper}>
                                <Eye className={styles.valueIcon} />
                            </div>
                            <h3>2. Information We Collect</h3>
                            <p>
                                We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
                            </p>
                            <ul className={styles.list}>
                                <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                                <li><strong>Contact Data:</strong> includes email address and telephone numbers provided via contact forms.</li>
                                <li><strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location, and operating system.</li>
                                <li><strong>Usage Data:</strong> includes information about how you use our website, products and services.</li>
                            </ul>
                        </div>

                        <div className={styles.valueCard}>
                            <div className={styles.iconWrapper}>
                                <FileText className={styles.valueIcon} />
                            </div>
                            <h3>3. How We Use Your Data</h3>
                            <p>
                                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                            </p>
                            <ul className={styles.list}>
                                <li>To respond to your inquiries and provide customer support.</li>
                                <li>To manage our relationship with you which will include notifying you about changes to our terms or privacy policy.</li>
                            </ul>
                        </div>

                        <div className={styles.valueCard}>
                            <div className={styles.iconWrapper}>
                                <Lock className={styles.valueIcon} />
                            </div>
                            <h3>4. Data Security</h3>
                            <p>
                                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.
                                In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
                            </p>
                        </div>

                        <div className={styles.valueCard}>
                            <div className={styles.iconWrapper}>
                                <Mail className={styles.valueIcon} />
                            </div>
                            <h3>5. Contact Us</h3>
                            <p>
                                If you have any questions about this privacy policy or our privacy practices, please contact us at:
                                <br /><br />
                                <strong>Email:</strong> office@sstextilehub.com
                                <br />
                                <strong>Address:</strong> Narsapur, West Godavari, Andhra Pradesh, India.
                            </p>
                        </div>

                    </div>
                </section>
            </div>
        </>
    );
};

export default PrivacyPolicy;
