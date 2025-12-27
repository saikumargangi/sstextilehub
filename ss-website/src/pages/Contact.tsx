import { useState, useRef } from 'react';
import { Phone, Mail, Linkedin, Calendar, Instagram, Send, CheckCircle } from 'lucide-react';
import { trackEvent } from '../lib/googleAnalytics';
import styles from './Contact.module.css';
import contactBg from '../assets/contact-bg.jpg';

const Contact = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);

    const handleSuccessClose = () => {
        setIsSubmitted(false);
        if (formRef.current) formRef.current.reset();
    };

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const formElement = e.currentTarget;
            
            // MANUALLY GET ALL FIELD VALUES
            const companyName = (formElement.querySelector('input[name="entry.98431382"]') as HTMLInputElement).value;
            const contactName = (formElement.querySelector('input[name="entry.2138707235"]') as HTMLInputElement).value;
            const email = (formElement.querySelector('input[name="entry.360969980"]') as HTMLInputElement).value;
            const phone = (formElement.querySelector('input[name="entry.2133336110"]') as HTMLInputElement).value;
            const country = (formElement.querySelector('input[name="entry.1777081057"]') as HTMLInputElement).value;
            const productCategory = (formElement.querySelector('input[name="entry.1166514373"]') as HTMLInputElement).value;
            const message = (formElement.querySelector('textarea[name="entry.914265994"]') as HTMLTextAreaElement).value;
            
            console.log('Submitting form with message:', message);

            // Create an iframe to submit the form
            const iframe = document.createElement('iframe');
            iframe.style.display = 'none';
            iframe.name = 'hidden_iframe_' + Date.now();
            document.body.appendChild(iframe);

            // Create a hidden form that submits to Google Forms - CORRECT URL
            const hiddenForm = document.createElement('form');
            hiddenForm.method = 'POST';
            hiddenForm.action = 'https://docs.google.com/forms/d/1tPt6m4oL2ojWbl3jzBoB47i7E4flG8z7xIJpFiFok5k/formResponse';
            hiddenForm.target = iframe.name;
            hiddenForm.style.display = 'none';

            // ADD ALL FIELDS MANUALLY
            const fields = [
                { name: 'entry.98431382', value: companyName },
                { name: 'entry.2138707235', value: contactName },
                { name: 'entry.360969980', value: email },
                { name: 'entry.2133336110', value: phone },
                { name: 'entry.1777081057', value: country },
                { name: 'entry.1166514373', value: productCategory },
                { name: 'entry.914265994', value: message },
            ];

            fields.forEach(field => {
                const input = document.createElement('input');
                input.type = 'hidden';
                input.name = field.name;
                input.value = field.value;
                hiddenForm.appendChild(input);
            });

            document.body.appendChild(hiddenForm);
            hiddenForm.submit();

            // Clean up
            setTimeout(() => {
                document.body.removeChild(hiddenForm);
                document.body.removeChild(iframe);
            }, 1000);

            // Track form submission
            trackEvent('contact_form_submission', {
                form_name: 'contact_inquiry',
                timestamp: new Date().toISOString(),
            });

            setIsSubmitted(true);
            setIsLoading(false);

            setTimeout(() => {
                if (formRef.current) formRef.current.reset();
            }, 500);
        } catch (error) {
            console.error('Form submission error:', error);
            setIsLoading(false);
            alert('There was an error submitting the form. Please try again.');
        }
    };

    return (
        <main>
            <section className={styles.hero}>
                <img src={contactBg} alt="Contact Support" className={styles.heroBackground} />
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>Get in Touch</h1>
                    <p className={styles.heroSubtitle}>
                        Have a project in mind or need details?
                        Connect with us through any of our channels below.
                    </p>
                </div>
            </section>

            <section className={styles.contactSection}>
                <div className={styles.container}>
                    <div className={styles.channelGrid}>
                        <a href="https://wa.me/917200033566" target="_blank" rel="noopener noreferrer" className={styles.channelCard}>
                            <div className={styles.iconWrapper}>
                                <Phone size={24} />
                            </div>
                            <h3 className={styles.channelTitle}>WhatsApp</h3>
                            <span className={styles.channelLink}>+91 7200033566</span>
                        </a>

                        <a href="mailto:office@sstextilehub.com" className={styles.channelCard}>
                            <div className={styles.iconWrapper}>
                                <Mail size={24} />
                            </div>
                            <h3 className={styles.channelTitle}>Email</h3>
                            <span className={styles.channelLink}>office@sstextilehub.com</span>
                        </a>

                        <a href="https://www.linkedin.com/in/kanthaji/" target="_blank" rel="noopener noreferrer" className={styles.channelCard}>
                            <div className={styles.iconWrapper}>
                                <Linkedin size={24} />
                            </div>
                            <h3 className={styles.channelTitle}>LinkedIn</h3>
                            <span className={styles.channelLink}>Connect</span>
                        </a>

                        <a href="https://cal.com/ss-textilehub/30min" target="_blank" rel="noopener noreferrer" className={styles.channelCard}>
                            <div className={styles.iconWrapper}>
                                <Calendar size={24} />
                            </div>
                            <h3 className={styles.channelTitle}>Meeting</h3>
                            <span className={styles.channelLink}>Book 30min</span>
                        </a>

                        <a href="https://www.instagram.com/sstextilehub/" target="_blank" rel="noopener noreferrer" className={styles.channelCard}>
                            <div className={styles.iconWrapper}>
                                <Instagram size={24} />
                            </div>
                            <h3 className={styles.channelTitle}>Instagram</h3>
                            <span className={styles.channelLink}>Follow Us</span>
                        </a>
                    </div>

                    <div className={styles.formContainer}>
                        <div className={styles.formHeader}>
                            <h2>We are happy to get in touch</h2>
                            <p>Complete the form below and receiving a customized pricing proposal within 24 hours.</p>
                        </div>

                        {isSubmitted ? (
                            <div className={styles.successMessage} style={{ textAlign: 'center', padding: '4rem 2rem' }}>
                                <div style={{ display: 'inline-flex', padding: 20, borderRadius: '50%', backgroundColor: '#f0fdf4', marginBottom: 20 }}>
                                    <CheckCircle size={64} color="#16a34a" />
                                </div>
                                <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: '#166534' }}>Thank You!</h3>
                                <p style={{ fontSize: '1.1rem', color: '#4b5563', marginBottom: '2rem' }}>
                                    Your inquiry has been sent successfully.<br />
                                    We will get back to you within 24 hours.
                                </p>
                                <button
                                    onClick={handleSuccessClose}
                                    style={{
                                        padding: '12px 24px',
                                        backgroundColor: '#166534',
                                        color: '#fff',
                                        border: 'none',
                                        borderRadius: '8px',
                                        cursor: 'pointer',
                                        fontSize: '1rem',
                                        fontWeight: 600
                                    }}
                                >
                                    Send Another Response
                                </button>
                            </div>
                        ) : (
                            <>
                                <form
                                    ref={formRef}
                                    className={styles.formLayout}
                                    onSubmit={handleFormSubmit}
                                >
                                    <div className={styles.formGroup}>
                                        <label className={styles.label}>Company Name *</label>
                                        <input type="text" name="entry.98431382" className={styles.input} placeholder="Your Company" required disabled={isLoading} />
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label className={styles.label}>Your Name *</label>
                                        <input type="text" name="entry.2138707235" className={styles.input} placeholder="Full Name" required disabled={isLoading} />
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label className={styles.label}>Email Address *</label>
                                        <input type="email" name="entry.360969980" className={styles.input} placeholder="name@company.com" required disabled={isLoading} />
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label className={styles.label}>WhatsApp / Phone *</label>
                                        <input type="tel" name="entry.2133336110" className={styles.input} placeholder="+91 ..." required disabled={isLoading} />
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label className={styles.label}>Country *</label>
                                        <input type="text" name="entry.1777081057" className={styles.input} placeholder="Your Country" required disabled={isLoading} />
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label className={styles.label}>Product Category *</label>
                                        <input type="text" name="entry.1166514373" className={styles.input} placeholder="Your answer" required disabled={isLoading} />
                                    </div>

                                    <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                                        <label className={styles.label}>Message (Optional)</label>
                                        <textarea 
                                            name="entry.914265994" 
                                            className={styles.textarea} 
                                            rows={5} 
                                            placeholder="Tell us about your requirements, estimated volume, and specifications..." 
                                            disabled={isLoading}
                                        />
                                    </div>

                                    <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                                        <button type="submit" className={styles.submitButton} disabled={isLoading}>
                                            <span style={{ marginRight: '10px' }}>
                                                {isLoading ? 'Submitting...' : 'Submit Inquiry'}
                                            </span>
                                            <Send size={18} style={{ display: 'inline', verticalAlign: 'middle' }} />
                                        </button>
                                        <p style={{ fontSize: '0.85rem', color: '#888', marginTop: '1rem', textAlign: 'center' }}>
                                            Your data is processed securely. Queries sent to <a href="mailto:office@sstextilehub.com" style={{ color: '#666', textDecoration: 'underline' }}>office@sstextilehub.com</a>.
                                        </p>
                                    </div>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Contact;
