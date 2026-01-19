import SEO from '../components/layout/SEO';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/ui/Hero';
import TrustSection from '../components/ui/TrustSection';
import FeaturedProducts from '../components/ui/FeaturedProducts';
import WeSupport from '../components/ui/WeSupport';

const Home = () => {
    return (
        <>
            <SEO
                title="Hand-Crocheted Home Textiles Manufacturer | SS Garments India"
                description="Export-quality hand-crocheted bed linens, table linens & home textiles from India. 35+ years serving global markets. Custom designs, bulk orders, private label."
                keywords="Hand-crocheted home textiles, Export manufacturer India, Narsapur crochet textiles, Bulk home linen supplier, Private label textiles, B2B textile exporter, Custom bed linen manufacturer"
                url="https://sstextilehub.com/"
            />
            <Helmet>
                <script type="application/ld+json">
                    {`
                    {
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "SS Garments & Hometextiles",
                        "url": "https://www.sstextilehub.com",
                        "logo": "https://www.sstextilehub.com/logo.png",
                        "description": "Hand-crocheted home textiles manufacturer and exporter from Narsapur, India",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Narsapur",
                            "addressRegion": "Andhra Pradesh",
                            "addressCountry": "IN"
                        },
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "telephone": "+91-7200033566",
                            "contactType": "Sales",
                            "email": "office@sstextilehub.com"
                        },
                        "sameAs": [
                            "https://www.linkedin.com/company/sstextilehub",
                            "https://www.instagram.com/sstextilehub"
                        ]
                    }
                    `}
                </script>
            </Helmet>
            <Hero />
            <TrustSection />
            <FeaturedProducts />
            <WeSupport />
        </>
    );
};

export default Home;
