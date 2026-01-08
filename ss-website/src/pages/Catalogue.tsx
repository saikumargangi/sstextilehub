import { Download, ArrowLeft, Mail, Phone, Check, Globe, ShieldCheck, Users, Scissors, Box, Layers, Instagram, Linkedin, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const CatalogueFooter = () => (
    <div className={styles.catalogueFooter}>
        <div className={styles.footerInfoItem}>
            <Mail size={14} /> office@sstextilehub.com
        </div>
        <div className={styles.footerInfoItem}>
            <Phone size={14} /> +91 7200033566
        </div>
        <div className={styles.footerInfoItem}>
            <MapPin size={14} style={{ flexShrink: 0 }} /> Narsapur, West Godavari, AP, India.
        </div>
    </div>
);
import { productsData } from '../data/productData';
import styles from './Catalogue.module.css';
import logoIcon from '../assets/ss-logo-icon.png'; // Corrected path



const Catalogue = () => {
    const handlePrint = () => {
        window.print();
    };

    return (
        <div className={styles.catalogueContainer}>
            {/* Controls */}
            <div className={styles.controls}>
                <Link to="/contact" className={styles.controlButton}>
                    <ArrowLeft size={18} />
                    Back
                </Link>
                <button onClick={handlePrint} className={styles.controlButton}>
                    <Download size={18} />
                    Save as PDF
                </button>
            </div>

            {/* PAGE 1: COVER */}
            <div className={styles.page}>
                <div className={styles.coverLayout}>
                    <div className={styles.coverHeader}>
                        <div className={styles.logoWrapper}>
                            <img src={logoIcon} alt="SS Logo" className={styles.coverLogo} />
                        </div>
                        <div className={styles.headerTextGroup}>
                            <h1 className={styles.coverTitle}>SS Garments &<br />Home Textiles</h1>
                            <p className={styles.coverTagline}>Manufacturers & Exporters</p>
                        </div>
                    </div>
                    <div className={styles.coverImageWrapper}>
                        <img
                            src={productsData.bedLinen.bannerImage}
                            alt="Cover Hero"
                            className={styles.coverImage}
                        />
                    </div>
                </div>
            </div>

            {/* PAGE 2: WHO WE ARE & CUSTOM SOLUTIONS */}
            <div className={styles.page}>
                <img src={logoIcon} alt="SS Logo" className={styles.pageLogo} />
                <div className={styles.page2Layout}>
                    {/* Top: Who We Are & Why Choose Us */}
                    <div className={styles.companySection}>
                        <div className={styles.csColumn}>
                            <h2 className={styles.sectionHeader}>WHO WE ARE</h2>
                            <p className={styles.companyDesc}>
                                With a rich legacy rooted in Narsapur, India, SS Garments & Hometextiles by Sri Sai Exports began with a
                                vision to bring the finest quality hand-crafted linens to the world. We pride ourselves
                                on maintaining the delicate balance between preserving traditional weaving techniques
                                and adopting sustainable, modern manufacturing practices for global export.
                            </p>
                            <div className={styles.iconGrid}>
                                <div className={styles.iconItem}>
                                    <Globe size={24} className={styles.iconBrand} />
                                    <span>Global Exporter</span>
                                </div>
                                <div className={styles.iconItem}>
                                    <ShieldCheck size={24} className={styles.iconBrand} />
                                    <span>Premium Quality</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.verticalDivider}></div>

                        <div className={styles.csColumn}>
                            <h2 className={styles.sectionHeader} style={{ color: 'var(--color-teal)' }}>WHY CHOOSE US?</h2>
                            <ul className={styles.benefitList}>
                                <li>
                                    <Check size={18} className={styles.checkIcon} />
                                    <span><strong>Direct Pricing:</strong> Factory-direct rates.</span>
                                </li>
                                <li>
                                    <Check size={18} className={styles.checkIcon} />
                                    <span><strong>Low MOQs:</strong> Startup-friendly minimums.</span>
                                </li>
                                <li>
                                    <Check size={18} className={styles.checkIcon} />
                                    <span><strong>Fast Turnaround:</strong> Optimized supply chain.</span>
                                </li>
                                <li>
                                    <Check size={18} className={styles.checkIcon} />
                                    <span><strong>Legacy:</strong> 40+ years of excellence.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.horizontalDivider}></div>

                    {/* Bottom: Custom Solutions */}
                    <div className={styles.solutionsSection}>
                        <h2 className={styles.sectionHeader}>CUSTOM SOLUTIONS</h2>
                        <div className={styles.solutionsGrid}>
                            <div className={styles.solutionCard}>
                                <div className={styles.solIconBg}><Scissors size={24} /></div>
                                <h3>Private Label</h3>
                                <p>Your Brand, Our Manufacturing.</p>
                            </div>
                            <div className={styles.solutionCard}>
                                <div className={styles.solIconBg}><Layers size={24} /></div>
                                <h3>Custom Sizing</h3>
                                <p>US, UK, EU & Custom Dimensions.</p>
                            </div>
                            <div className={styles.solutionCard}>
                                <div className={styles.solIconBg}><Box size={24} /></div>
                                <h3>Packaging</h3>
                                <p>Retail-ready & Eco-friendly.</p>
                            </div>
                            <div className={styles.solutionCard}>
                                <div className={styles.solIconBg}><Users size={24} /></div>
                                <h3>Fabric Sourcing</h3>
                                <p>Cotton, Bamboo, Linen, Blends.</p>
                            </div>
                        </div>
                    </div>

                </div>
                <CatalogueFooter />
            </div>

            {/* PAGE 3: COLLECTION 1 (Kitchen & Bed) */}
            <div className={styles.page}>
                <img src={logoIcon} alt="SS Logo" className={styles.pageLogo} />
                <div className={styles.collectionPage}>
                    <h2 className={styles.pageHeader}>PRODUCT CATEGORIES</h2>
                    {/* Category 1: Kitchen */}
                    <div className={styles.categorySection}>
                        <h2 className={styles.catHeader}>KITCHEN & TABLE LINEN</h2>
                        <p className={styles.catDesc}>
                            Elegant and durable linens designed for modern dining. Our kitchen collection
                            combines style with high absorbency and easy care for every occasion.
                        </p>
                        <p className={styles.subCategoryList}>
                            Includes: Table Napkins, Aprons, Kitchen Towel Sets, Oven Mitts & Pot Holders, Dining Table Cloths, Table Runners.
                        </p>
                        <div className={styles.imageRow}>
                            <div className={styles.catImgWrap}><img src={productsData.kitchenLinen.items[0].image} className={styles.catImg} alt="Kitchen 1" /></div>
                            <div className={styles.catImgWrap}><img src={productsData.kitchenLinen.items[1].image} className={styles.catImg} alt="Kitchen 2" /></div>
                            <div className={styles.catImgWrap}><img src={productsData.kitchenLinen.items[2].image} className={styles.catImg} alt="Kitchen 3" /></div>
                        </div>
                    </div>

                    <div className={styles.spacer}></div>

                    {/* Category 2: Bed */}
                    <div className={styles.categorySection}>
                        <h2 className={styles.catHeader}>BED LINEN</h2>
                        <p className={styles.catDesc}>
                            Experience the ultimate comfort with our premium bed linens.
                            Crisp sheets, soft duvet covers, and plush pillowcases tailored
                            for a restful night's sleep in various thread counts.
                        </p>
                        <p className={styles.subCategoryList}>
                            Includes: Flat Sheets, Fitted Sheets, Duvet Covers, Pillowcases, Bedspreads & Quilts.
                        </p>
                        <div className={styles.imageRow}>
                            <div className={styles.catImgWrap}><img src={productsData.bedLinen.items[0].image} className={styles.catImg} alt="Bed 1" /></div>
                            <div className={styles.catImgWrap}><img src={productsData.bedLinen.items[1].image} className={styles.catImg} alt="Bed 2" /></div>
                            <div className={styles.catImgWrap}><img src={productsData.bedLinen.items[2].image} className={styles.catImg} alt="Bed 3" /></div>
                        </div>
                    </div>

                </div>
                <CatalogueFooter />
            </div>

            {/* PAGE 4: COLLECTION 2 (Bath & Soft Furnishing) */}
            <div className={styles.page}>
                <img src={logoIcon} alt="SS Logo" className={styles.pageLogo} />
                <div className={styles.collectionPage}>
                    <h2 className={styles.pageHeader}>PRODUCT CATEGORIES</h2>
                    {/* Category 3: Bath */}
                    <div className={styles.categorySection}>
                        <h2 className={styles.catHeader}>BATH LINEN</h2>
                        <p className={styles.catDesc}>
                            Luxurious and absorbent bath textiles that elevate the spa experience.
                            Plush towels, bathrobes, and mats crafted from the finest cotton.
                        </p>
                        <p className={styles.subCategoryList}>
                            Includes: Body, Hand, and Face Towels, Designer Printed Towels, Bathrobes, Anti-Skid Bath Mats.
                        </p>
                        <div className={styles.imageRow}>
                            <div className={styles.catImgWrap}><img src={productsData.bathLinen.items[0].image} className={styles.catImg} alt="Bath 1" /></div>
                            <div className={styles.catImgWrap}><img src={productsData.bathLinen.items[1].image} className={styles.catImg} alt="Bath 2" /></div>
                            <div className={styles.catImgWrap}><img src={productsData.bathLinen.items[2].image} className={styles.catImg} alt="Bath 3" /></div>
                        </div>
                    </div>

                    <div className={styles.spacer}></div>

                    {/* Category 4: Soft Furnishing */}
                    <div className={styles.categorySection}>
                        <h2 className={styles.catHeader}>SOFT FURNISHING</h2>
                        <p className={styles.catDesc}>
                            Transform any space with our decorative soft furnishings.
                            Featuring curtains, cushions, and throws in vibrant patterns
                            and textures to add warmth and style to homes.
                        </p>
                        <p className={styles.subCategoryList}>
                            Includes: Curtains, Cushion Covers, Throws.
                        </p>
                        <div className={styles.imageRow}>
                            <div className={styles.catImgWrap}><img src={productsData.softFurnishing.items[0].image} className={styles.catImg} alt="Decor 1" /></div>
                            <div className={styles.catImgWrap}><img src={productsData.softFurnishing.items[1].image} className={styles.catImg} alt="Decor 2" /></div>
                            <div className={styles.catImgWrap}><img src={productsData.softFurnishing.items[2].image} className={styles.catImg} alt="Decor 3" /></div>
                        </div>
                    </div>

                </div>
                <CatalogueFooter />
            </div>

            {/* PAGE 5: COLLECTION 3 (Garments & Accessories) */}
            <div className={styles.page}>
                <img src={logoIcon} alt="SS Logo" className={styles.pageLogo} />
                <div className={styles.collectionPage}>
                    <h2 className={styles.pageHeader}>PRODUCT CATEGORIES</h2>
                    {/* Category 5: Garments */}
                    <div className={styles.categorySection}>
                        <h2 className={styles.catHeader}>GARMENTS</h2>
                        <p className={styles.catDesc}>
                            High-quality apparel manufacturing for global brands.
                            From casual wear to specialized knitwear and crochet, we deliver
                            precision stitching and premium fabric quality.
                        </p>
                        <p className={styles.subCategoryList}>
                            Includes: Ready-Made Garments, Handmade Crochet Dresses, Swimwear, Crochet Tops.
                        </p>
                        <div className={styles.imageRow}>
                            <div className={styles.catImgWrap}><img src={productsData.garments.items[0].image} className={styles.catImg} alt="Garment 1" /></div>
                            <div className={styles.catImgWrap}><img src={productsData.garments.items[1].image} className={styles.catImg} alt="Garment 2" /></div>
                            <div className={styles.catImgWrap}><img src={productsData.garments.items[2].image} className={styles.catImg} alt="Garment 3" /></div>
                        </div>
                    </div>

                    <div className={styles.spacer}></div>

                    {/* Category 6: Accessories */}
                    <div className={styles.categorySection}>
                        <h2 className={styles.catHeader}>ACCESSORIES</h2>
                        <p className={styles.catDesc}>
                            Function meets fashion in our textile accessories collection.
                            Sustainable bags, hats, and scarves designed for durability
                            and everyday utility, crafted with eco-friendly materials.
                        </p>
                        <p className={styles.subCategoryList}>
                            Includes: Cotton Bags, Hand-Crocheted Bags, Crochet Hats, Seasonal Scarves, Elegant Shawls.
                        </p>
                        <div className={styles.imageRow}>
                            <div className={styles.catImgWrap}><img src={productsData.accessories.items[0].image} className={styles.catImg} alt="Accessory 1" /></div>
                            <div className={styles.catImgWrap}><img src={productsData.accessories.items[1].image} className={styles.catImg} alt="Accessory 2" /></div>
                            <div className={styles.catImgWrap}><img src={productsData.accessories.items[2].image} className={styles.catImg} alt="Accessory 3" /></div>
                        </div>
                    </div>

                </div>
                <CatalogueFooter />
            </div>

            {/* PAGE 6: THE HOOK + SOCIAL */}
            <div className={styles.page} style={{ padding: 0 }}>
                <img src={logoIcon} alt="SS Logo" className={styles.pageLogo} style={{ top: '30px', right: '30px', filter: 'brightness(0) invert(1)' }} />
                <div className={styles.hookLayout}>
                    <div className={styles.hookContent}>
                        <h2 className={styles.hookHeadline}>READY TO TRANSFORM YOUR<br />TEXTILE SUPPLY CHAIN?</h2>
                        <h3 className={styles.hookSub}>Let's Talk.</h3>

                        <div className={styles.contactBox}>
                            <div className={styles.contactRow}>
                                <Mail size={24} /> office@sstextilehub.com
                            </div>
                            <div className={styles.contactRow}>
                                <Phone size={24} /> +91 7200033566
                            </div>
                        </div>


                        <div className={styles.socialSection}>
                            <div className={styles.socialItem}>
                                <div className={styles.socialIconBox}>
                                    <Instagram size={28} />
                                </div>
                                <div className={styles.socialText}>
                                    <span className={styles.socialLabel}>Follow us on Instagram</span>
                                    <span className={styles.socialHandle}>@sstextilehub</span>
                                </div>
                            </div>

                            <div className={styles.socialItem}>
                                <div className={styles.socialIconBox}>
                                    <Linkedin size={28} />
                                </div>
                                <div className={styles.socialText}>
                                    <span className={styles.socialLabel}>Connect on LinkedIn</span>
                                    <span className={styles.socialHandle}>SS Garments & Home Textiles</span>
                                </div>
                            </div>

                            <div className={styles.socialItem}>
                                <div className={styles.socialIconBox}>
                                    <Globe size={28} />
                                </div>
                                <div className={styles.socialText}>
                                    <span className={styles.socialLabel}>Visit our Website</span>
                                    <span className={styles.socialHandle}>www.sstextilehub.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Catalogue;
