
import React from 'react';
import { Download, ArrowLeft, Mail, Phone, MapPin, Check, Layers, Instagram, Linkedin, Globe, Tag, Factory, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { bagsProducts } from '../data/bagsProducts';
import styles from './BagsCatalogue.module.css';
import logoIcon from '../assets/ss-logo-icon.png';
import toteBagsImg from '../assets/tote-bags.jpg';
import drawstringBagsImg from '../assets/drawstring-bags.jpg';
import laundryBagsImg from '../assets/laundry-bags.jpg';
import wineBagsImg from '../assets/wine-bags.jpg';
import giftBagsImg from '../assets/gift-bags.jpg';
import fabricOverviewImg from '../assets/fabric-overview.jpg';
import bagsCoverCollage from '../assets/bags-cover-collage.png';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const CatalogueFooter = () => (
    <div className={styles.catalogueFooter}>
        <div className={styles.footerInfoItem}>
            <Mail size={14} /> <span>office@sstextilehub.com</span>
        </div>
        <div className={styles.footerInfoItem}>
            <Phone size={14} /> <span>+91 7200033566</span>
        </div>
        <div className={styles.footerInfoItem}>
            <MapPin size={14} className={styles.mapPinIcon} /> <span>Narsapur, West Godavari, AP, India.</span>
        </div>
    </div>

);

const ProductPageFooter = () => (
    <div style={{ marginTop: 'auto', marginBottom: '1rem', borderTop: '2px solid #2b3a4a', paddingTop: '0.8rem' }}>
        <h4 style={{ fontSize: '11pt', fontWeight: '800', margin: '0 0 0.5rem 0', color: '#2b3a4a', textTransform: 'uppercase' }}>General Notes:</h4>
        <ul style={{ margin: 0, paddingLeft: '1.5rem', listStyleType: 'disc' }}>
            <li style={{ fontSize: '10pt', fontWeight: '700', color: '#222', marginBottom: '0.3rem' }}>All sizes are approximate (±1–2 cm tolerance)</li>
            <li style={{ fontSize: '10pt', fontWeight: '700', color: '#222', marginBottom: '0.3rem' }}>Custom sizes available on request</li>
            <li style={{ fontSize: '10pt', fontWeight: '700', color: '#222', marginBottom: '0.3rem' }}>Fabric GSM, handles, printing & accessories can be customized</li>
        </ul>
    </div>
);

// Standard Page Layout
// Standard Page Layout
const CataloguePage = ({ pageNum, children, hideLogo = false, hideFooter = false }: { pageNum: string, children: React.ReactNode, hideLogo?: boolean, hideFooter?: boolean }) => (
    <div className={styles.page}>
        {!hideLogo && <img src={logoIcon} alt="SS Logo" className={styles.pageLogo} />}
        {children}
        <div className={styles.pageNumber}>{pageNum}</div>
        {!hideFooter && <CatalogueFooter />}
    </div>
);

const generatePDF = async () => {
    const pages = document.querySelectorAll(`.${styles.page}`);
    if (!pages.length) return;

    const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
    });

    const pdfWidth = 210;
    const pdfHeight = 297;

    for (let i = 0; i < pages.length; i++) {
        const page = pages[i] as HTMLElement;
        const canvas = await html2canvas(page, {
            scale: 2,
            useCORS: true,
            logging: false,
            backgroundColor: '#ffffff'
        });
        const imgData = canvas.toDataURL('image/jpeg', 0.95);
        if (i > 0) pdf.addPage();
        pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
    }
    pdf.save('SS-Bags-Catalogue.pdf');
};

const BagsCatalogue = () => {
    return (
        <div className={styles.catalogueContainer}>
            {/* Controls */}
            <div className={styles.controls}>
                <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', background: '#333', color: 'white', textDecoration: 'none', borderRadius: '4px', marginBottom: '1rem', marginRight: '1rem' }}>
                    <ArrowLeft size={18} /> Home
                </Link>
                <button onClick={generatePDF} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', background: '#2b3a4a', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                    <Download size={18} /> Download PDF
                </button>
            </div>

            {/* PAGE 1: COVER PAGE - REDESIGNED */}
            <CataloguePage pageNum="01" hideLogo={true} hideFooter={true}>
                <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>

                    {/* Top Part: Branding & Text (40%) */}
                    <div style={{ flex: '0 0 40%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
                        <img src={logoIcon} alt="SS Logo" style={{ width: '120px', marginBottom: '1.5rem' }} />
                        <h1 style={{ fontSize: '24pt', fontWeight: '800', fontFamily: 'var(--font-head)', color: '#2b3a4a', marginBottom: '0.5rem', textAlign: 'center' }}>
                            SS Garments & Hometextiles
                        </h1>
                        <h2 style={{ fontSize: '14pt', fontWeight: '600', color: '#10b981', marginBottom: '1rem', letterSpacing: '0.05em', textAlign: 'center' }}>
                            Sustainable. Durable. Custom-Made Bags
                        </h2>
                        <div style={{ fontSize: '12pt', fontWeight: '500', color: '#555', borderTop: '2px solid #eee', paddingTop: '1rem', width: '80%', textAlign: 'center' }}>
                            Cotton | Canvas | Jute | JUCO | Linen & Blends
                        </div>
                    </div>

                    {/* Bottom Part: Image (60%) */}
                    <div style={{ flex: '1', width: 'calc(100% + 1in)', marginLeft: '-0.5in', marginRight: '-0.5in', marginBottom: '-0.5in', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img src={bagsCoverCollage} alt="Bags Collection" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>

                </div>
            </CataloguePage>

            {/* PAGE 2: COMPANY PROFILE */}
            <CataloguePage pageNum="02">
                <div className={styles.page2Layout}>
                    {/* Top: Header Section & Why Choose Us */}
                    {/* Top: Header Section & Why Choose Us */}
                    <div className={styles.companySection}>
                        <div className={styles.csColumn}>
                            <h2 className={styles.sectionHeader}>{bagsProducts.companyProfile.aboutTitle}</h2>
                            <p className={styles.companyDesc}>
                                {bagsProducts.companyProfile.aboutText[0]}
                            </p>
                            <p className={styles.companyDesc} style={{ marginBottom: '0.5rem' }}>
                                {bagsProducts.companyProfile.aboutText[1]}
                            </p>
                            <ul className={styles.benefitList} style={{ marginBottom: '1rem', marginLeft: '0.5rem' }}>
                                {bagsProducts.companyProfile.aboutBullets.map((item, i) => (
                                    <li key={i}>
                                        <Check size={16} className={styles.checkIcon} style={{ color: '#2b3a4a' }} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className={styles.companyDesc} style={{ fontWeight: '600', color: '#2b3a4a' }}>
                                {bagsProducts.companyProfile.aboutFooter}
                            </p>
                        </div>

                        {/* Right Column: Why Partner With Us - Added Container */}
                        <div className={styles.csColumn}>
                            <div className={styles.whyUsContainer}>
                                <h2 className={styles.sectionHeader} style={{ color: '#2b3a4a', borderBottom: 'none', whiteSpace: 'nowrap', fontSize: '13pt' }}>{bagsProducts.companyProfile.whyUsTitle}</h2>
                                <ul className={styles.benefitList}>
                                    {bagsProducts.companyProfile.whyUsBullets.map((item, i) => (
                                        <li key={i}>
                                            <Check size={18} className={styles.checkIcon} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>



                    {/* Bottom: Specialization (Grid Cards) */}
                    <div>
                        <h2 className={styles.sectionHeader} style={{ marginBottom: '1.5rem' }}>OUR SPECIALIZATION</h2>
                        <div className={styles.solutionsGrid}>
                            <div className={styles.solutionCard}>
                                <div className={styles.solIconBg}><Tag size={24} /></div>
                                <h3>Custom Branding & Private Labeling</h3>
                            </div>
                            <div className={styles.solutionCard}>
                                <div className={styles.solIconBg}><Layers size={24} /></div>
                                <h3>Fabric & Construction Expertise</h3>
                            </div>
                            <div className={styles.solutionCard}>
                                <div className={styles.solIconBg}><Factory size={24} /></div>
                                <h3>Flexible Manufacturing & MOQs</h3>
                            </div>
                            <div className={styles.solutionCard}>
                                <div className={styles.solIconBg}><ShieldCheck size={24} /></div>
                                <h3>Export-Focused Quality & Compliance</h3>
                            </div>
                        </div>
                        <p style={{ fontStyle: 'italic', fontSize: '9pt', marginTop: '1rem', color: '#555', textAlign: 'center' }}>
                            {bagsProducts.companyProfile.footerNote}
                        </p>
                    </div>
                </div>
            </CataloguePage>

            {/* PAGE 3: FABRIC OVERVIEW */}
            <CataloguePage pageNum="03">
                <div className={styles.greyHeaderBar}>{bagsProducts.fabricOverview.title}</div>
                <div className={styles.subHeader}>{bagsProducts.fabricOverview.subtitle}</div>
                <p className={styles.sectionDescription}>{bagsProducts.fabricOverview.description}</p>

                <table className={styles.darkTable}>
                    <thead>
                        <tr>
                            {bagsProducts.fabricOverview.headers.map((h, i) => <th key={i}>{h}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {bagsProducts.fabricOverview.rows.map((row: any, i) => (
                            <tr key={i}>
                                <th>{row.param}</th>
                                <td>{row.cotton}</td>
                                <td>{row.canvas}</td>
                                <td>{row.jute}</td>
                                <td>{row.juco}</td>
                                <td>{row.linen}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <p style={{ fontStyle: 'italic', fontSize: '9pt', marginTop: '1rem', color: '#555' }}>
                    {bagsProducts.fabricOverview.footerNote}
                </p>
                {/* Added Fabric Overview Image */}
                <div style={{ marginTop: '2rem', marginBottom: '2rem', display: 'flex', justifyContent: 'center' }}>
                    <img src={fabricOverviewImg} alt="Fabric Overview" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', maxHeight: '350px', objectFit: 'cover' }} />
                </div>
            </CataloguePage>

            {/* PAGE 4: TOTE & DRAWSTRING (Vertical Stack) */}
            <CataloguePage pageNum="04">
                <div className={styles.greyHeaderBar}>{bagsProducts.sizeSpecsHeader}</div>
                <div className={styles.subHeader}>{bagsProducts.subHeader}</div>

                {/* Product 1: Tote Bags */}
                <div className={styles.productRow} style={{ marginTop: '2rem', alignItems: 'center' }}>
                    <div className={styles.productInfo}>
                        <h3 className={styles.productTitle}>{bagsProducts.toteBags.title}</h3>
                        <p className={styles.sectionDescription}>
                            {bagsProducts.toteBags.description}<br />
                            <em style={{ fontSize: '8pt', color: '#555' }}>{bagsProducts.toteBags.footerInfo}</em>
                        </p>
                        <table className={styles.darkTable}>
                            <thead><tr>{bagsProducts.toteBags.headers.map((h, i) => <th key={i}>{h}</th>)}</tr></thead>
                            <tbody>
                                {bagsProducts.toteBags.specs.map((item, i) => (
                                    <tr key={i}><th>{item.code}</th><td>{item.dim}</td><td>{item.use}</td></tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className={styles.imagePlaceholder} style={{ background: 'none', border: 'none', padding: 0 }}>
                        <img src={toteBagsImg} alt="Tote Bags" className={styles.catImg} style={{ borderRadius: '6px' }} />
                    </div>
                </div>

                {/* Product 2: Drawstring Bags */}
                <div className={styles.productRow} style={{ marginTop: '5rem', alignItems: 'center' }}>
                    <div className={styles.productInfo}>
                        <h3 className={styles.productTitle}>{bagsProducts.drawstringBags.title}</h3>
                        <p className={styles.sectionDescription}>
                            {bagsProducts.drawstringBags.description}
                        </p>
                        <table className={styles.darkTable}>
                            <thead><tr>{bagsProducts.drawstringBags.headers.map((h, i) => <th key={i}>{h}</th>)}</tr></thead>
                            <tbody>
                                {bagsProducts.drawstringBags.specs.map((item, i) => (
                                    <tr key={i}><th>{item.code}</th><td>{item.dim}</td><td>{item.use}</td></tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className={styles.imagePlaceholder} style={{ background: 'none', border: 'none', padding: 0 }}>
                        <img src={drawstringBagsImg} alt="Drawstring Bags" className={styles.catImg} style={{ borderRadius: '6px' }} />
                    </div>
                </div>

                <ProductPageFooter />
            </CataloguePage>

            {/* PAGE 5: LAUNDRY, WINE & GIFT (Consolidated) */}
            <CataloguePage pageNum="05">
                <div className={styles.greyHeaderBar}>{bagsProducts.sizeSpecsHeader}</div>
                <div className={styles.subHeader}>{bagsProducts.subHeader}</div>

                {/* Product 1: Laundry Bags */}
                <div className={styles.productRow} style={{ marginBottom: '4rem', paddingBottom: '0', alignItems: 'flex-start' }}>
                    <div className={styles.productInfo}>
                        <h3 className={styles.productTitle} style={{ fontSize: '11pt' }}>{bagsProducts.laundryBags.title}</h3>
                        <p className={styles.sectionDescription} style={{ fontSize: '9pt', marginBottom: '1rem' }}>
                            {bagsProducts.laundryBags.description}
                        </p>
                        <table className={styles.darkTable} style={{ marginBottom: 0 }}>
                            <thead><tr>{bagsProducts.laundryBags.headers.map((h, i) => <th key={i}>{h}</th>)}</tr></thead>
                            <tbody>
                                {bagsProducts.laundryBags.specs.map((item, i) => (
                                    <tr key={i}><th>{item.code}</th><td>{item.dim}</td><td>{item.use}</td></tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className={styles.imagePlaceholder} style={{ background: 'none', border: 'none', padding: 0, marginTop: '2.5rem' }}>
                        <img src={laundryBagsImg} alt="Laundry Bags" className={styles.catImg} style={{ borderRadius: '6px', maxWidth: '220px' }} />
                    </div>
                </div>

                {/* Product 2: Wine Bags */}
                <div className={styles.productRow} style={{ marginBottom: '4rem', paddingBottom: '0', alignItems: 'flex-start' }}>
                    <div className={styles.productInfo}>
                        <h3 className={styles.productTitle} style={{ fontSize: '11pt' }}>{bagsProducts.wineBags.title}</h3>
                        <p className={styles.sectionDescription} style={{ fontSize: '9pt', marginBottom: '1rem' }}>
                            {bagsProducts.wineBags.description}
                        </p>
                        <table className={styles.darkTable} style={{ marginBottom: 0 }}>
                            <thead><tr>{bagsProducts.wineBags.headers.map((h, i) => <th key={i}>{h}</th>)}</tr></thead>
                            <tbody>
                                {bagsProducts.wineBags.specs.map((item, i) => (
                                    <tr key={i}><th>{item.code}</th><td>{item.dim}</td><td>{item.cap}</td></tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className={styles.imagePlaceholder} style={{ background: 'none', border: 'none', padding: 0, marginTop: '2.5rem' }}>
                        <img src={wineBagsImg} alt="Wine Bags" className={styles.catImg} style={{ borderRadius: '6px', maxWidth: '220px' }} />
                    </div>
                </div>

                {/* Product 3: Gift Bags */}
                <div className={styles.productRow} style={{ borderBottom: 'none', marginBottom: '0', paddingBottom: '0', alignItems: 'flex-start' }}>
                    <div className={styles.productInfo}>
                        <h3 className={styles.productTitle} style={{ fontSize: '11pt' }}>{bagsProducts.giftBags.title}</h3>
                        <p className={styles.sectionDescription} style={{ fontSize: '9pt', marginBottom: '1rem' }}>
                            {bagsProducts.giftBags.description}
                        </p>
                        <table className={styles.darkTable} style={{ marginBottom: 0 }}>
                            <thead><tr>{bagsProducts.giftBags.headers.map((h, i) => <th key={i}>{h}</th>)}</tr></thead>
                            <tbody>
                                {bagsProducts.giftBags.specs.map((item, i) => (
                                    <tr key={i}><th>{item.code}</th><td>{item.dim}</td><td>{item.use}</td></tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className={styles.imagePlaceholder} style={{ background: 'none', border: 'none', padding: 0, marginTop: '2.5rem' }}>
                        <img src={giftBagsImg} alt="Gift Bags" className={styles.catImg} style={{ borderRadius: '6px', maxWidth: '220px' }} />
                    </div>
                </div>

                <ProductPageFooter />
            </CataloguePage>

            {/* PAGE 6: BACK COVER */}
            <CataloguePage pageNum="06" hideFooter={true}>
                <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', position: 'relative' }}>

                    {/* Main CTA Section */}
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', paddingBottom: '2rem' }}>
                        <h1 style={{ fontSize: '28pt', fontWeight: '900', fontFamily: 'var(--font-head)', color: '#0F2E3D', marginBottom: '1rem', lineHeight: '1.2', maxWidth: '80%' }}>
                            READY TO TRANSFORM YOUR<br />TEXTILE SUPPLY CHAIN?
                        </h1>
                        <h2 style={{ fontSize: '24pt', fontFamily: 'serif', color: '#10B981', marginBottom: '2.5rem', fontStyle: 'italic' }}>
                            Let's Talk.
                        </h2>

                        {/* Yellow Contact Box */}
                        <div style={{
                            backgroundColor: '#E1B12C',
                            border: '2px solid #0F2E3D',
                            borderRadius: '12px',
                            padding: '1.5rem 3rem',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem',
                            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '12pt', fontWeight: '700', color: '#0F2E3D' }}>
                                <Mail size={20} /> office@sstextilehub.com
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '12pt', fontWeight: '700', color: '#0F2E3D' }}>
                                <Phone size={20} /> +91 7200033566
                            </div>
                        </div>
                    </div>

                    {/* Bottom Social Section */}
                    <div style={{
                        width: 'calc(100% + 1in)',
                        marginLeft: '-0.5in',
                        marginRight: '-0.5in',
                        marginBottom: '-3rem', /* Overlap footer space */
                        padding: '3rem 0 5rem 0',
                        backgroundColor: '#0F2E3D',
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        <div style={{
                            backgroundColor: 'white',
                            borderRadius: '16px',
                            padding: '2rem 4rem',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1.5rem',
                            width: '60%'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', textAlign: 'left' }}>
                                <div style={{ background: '#eee', padding: '0.5rem', borderRadius: '50%' }}>
                                    <Instagram size={24} color="#0F2E3D" />
                                </div>
                                <div>
                                    <div style={{ fontSize: '8pt', color: '#888', fontWeight: 'bold' }}>FOLLOW US ON INSTAGRAM</div>
                                    <div style={{ fontSize: '11pt', color: '#0F2E3D', fontWeight: '700' }}>@sstextilehub</div>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', textAlign: 'left' }}>
                                <div style={{ background: '#eee', padding: '0.5rem', borderRadius: '50%' }}>
                                    <Linkedin size={24} color="#0F2E3D" />
                                </div>
                                <div>
                                    <div style={{ fontSize: '8pt', color: '#888', fontWeight: 'bold' }}>CONNECT ON LINKEDIN</div>
                                    <div style={{ fontSize: '11pt', color: '#0F2E3D', fontWeight: '700' }}>SS Garments & Home Textiles</div>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', textAlign: 'left' }}>
                                <div style={{ background: '#eee', padding: '0.5rem', borderRadius: '50%' }}>
                                    <Globe size={24} color="#0F2E3D" />
                                </div>
                                <div>
                                    <div style={{ fontSize: '8pt', color: '#888', fontWeight: 'bold' }}>VISIT OUR WEBSITE</div>
                                    <div style={{ fontSize: '11pt', color: '#0F2E3D', fontWeight: '700' }}>www.sstextilehub.com</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* No Footer for this page as it has its own bottom section logic, or we hide it */}
            </CataloguePage>

        </div>
    );
};

export default BagsCatalogue;
