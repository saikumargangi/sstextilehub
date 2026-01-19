import { Download, ArrowLeft, Mail, Phone, MapPin, Globe, ShieldCheck, Check, Users, Scissors, Box, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import { hotelProducts } from '../data/hotelProducts';
import styles from './HotelCatalogue.module.css';
import logoIcon from '../assets/ss-logo-icon.png';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const CatalogueFooter = () => (
    <div className={styles.catalogueFooter}>
        <div className={styles.footerInfoItem}>
            <Mail size={14} /> office@sstextilehub.com
        </div>
        <div className={styles.footerInfoItem}>
            <Phone size={14} /> +91 7200033566
        </div>
        <div className={styles.footerInfoItem}>
            <MapPin size={14} className={styles.mapPinIcon} /> Narsapur, West Godavari, AP, India.
        </div>
    </div>
);

// Internal helper component to enforce the standard 2-column internal layout
// This ensures every page (Comforters, Duvets, etc.) looks EXACTLY like the Bed Sheet page
const CataloguePage = ({
    pageNum,
    data,
    customContent
}: {
    pageNum: string,
    data: any,
    customContent?: React.ReactNode
}) => {
    return (
        <div className={styles.page}>
            <img src={logoIcon} alt="SS Logo" className={styles.pageLogo} />
            <div className={styles.collectionPage}>
                <div className={styles.greyHeaderBar}>
                    {data.title}
                </div>

                <div className={styles.layoutTwoCol}>
                    {/* LEFT: Images Sidebar (Conditionally Rendered) */}
                    {data.images && data.images.length > 0 && (
                        <div className={styles.imgSidebar}>
                            {data.images.map((img: any, idx: number) => (
                                <div key={idx} className={styles.sidebarImgWrapper}>
                                    <img
                                        src={img.url}
                                        alt={img.caption}
                                        className={styles.sidebarImg}
                                    />
                                    {img.caption && <span className={styles.imgCaption}>{img.caption}</span>}
                                </div>
                            ))}
                        </div>
                    )}

                    {/* RIGHT: Content */}
                    <div className={styles.contentCol}>
                        <p className={styles.productDescription}>
                            <span className={styles.subHeading}>Our Collection</span><br />
                            {data.description}
                        </p>

                        {/* Standard Fabric Types List if it exists and has items */}
                        {data.fabricTypes && data.fabricTypes.length > 0 && (
                            <>
                                <div className={styles.subHeading} style={{ marginBottom: '0.5rem' }}>Fabric Types :</div>
                                <ul className={styles.fabricList}>
                                    {data.fabricTypes.map((fabric: string, idx: number) => (
                                        <li key={idx}>{fabric}</li>
                                    ))}
                                </ul>
                            </>
                        )}

                        {/* Custom Tables/Content passed from parent */}
                        {customContent}

                        {/* Standard Notes if they exist */}
                        {data.notes && (
                            <div className={styles.notesList}>
                                {data.notes.map((note: string, idx: number) => (
                                    <p key={idx}>{note}</p>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className={styles.pageNumber}>{pageNum}</div>
            <CatalogueFooter />
        </div>
    );
};



const generatePDF = async () => {
    // Get all page elements
    const pages = document.querySelectorAll(`.${styles.page}`);
    if (!pages.length) {
        console.error('No pages found to convert to PDF');
        return;
    }

    // Create PDF in A4 landscape format
    // A4 landscape dimensions in mm: 297 x 210
    const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: 'a4'
    });

    // A4 landscape dimensions in pixels at 96 DPI
    const pdfWidth = 297;
    const pdfHeight = 210;

    for (let i = 0; i < pages.length; i++) {
        const page = pages[i] as HTMLElement;

        // Capture the page as canvas
        const canvas = await html2canvas(page, {
            scale: 2, // Higher quality
            useCORS: true,
            logging: false,
            backgroundColor: '#ffffff'
        });

        // Convert canvas to image
        const imgData = canvas.toDataURL('image/jpeg', 0.95);

        // Calculate dimensions to fit within A4 bounds
        // FORCE FILL: Use exact A4 dimensions to prevent white space
        // This relies on the source CSS 297mm/210mm being correct
        const imgWidth = pdfWidth;
        const imgHeight = pdfHeight;

        // Add image to PDF
        if (i > 0) {
            pdf.addPage();
        }
        pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight);
    }

    // Download the PDF
    pdf.save('SS-Hotel-Catalogue.pdf');
};

const HotelCatalogue = () => {
    return (
        <div className={styles.catalogueContainer}>
            {/* Controls */}
            <div className={styles.controls}>
                <Link to="/" className={styles.controlButton}>
                    <ArrowLeft size={18} />
                    Home
                </Link>
                <button className={styles.controlButton} onClick={generatePDF}>
                    <Download size={18} />
                    Print / Save PDF
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
                            <p className={styles.coverTagline}>For Hotels, Resorts & Spas</p>
                        </div>
                    </div>
                    {/* Cover Image */}
                    <div className={styles.coverImageWrapper}>
                        <img
                            src={hotelProducts.bedLinen.images[0].url}
                            alt="Hotel Collection Cover"
                            className={styles.coverImage}
                        />
                    </div>
                </div>
            </div>

            {/* PAGE 2: INTRODUCTION */}
            <div className={styles.page}>
                <img src={logoIcon} alt="SS Logo" className={styles.pageLogo} />
                <div className={styles.page2Layout} style={{ paddingTop: '1in' }}>
                    {/* Top: Hotel & Hospitality + Why Choose Us */}
                    <div className={styles.companySection}>
                        <div className={styles.csColumn}>
                            <h2 className={styles.sectionHeader}>HOTEL & HOSPITALITY</h2>
                            <p className={styles.companyDesc}>
                                Our collection is specifically engineered for the hospitality industry.
                                5-Star Hotel approved, our linens stand the test of stringent quality measures
                                to deliver exceptional comfort and durability.
                            </p>
                            <div className={styles.iconGrid}>
                                <div className={styles.iconItem}>
                                    <Globe size={24} className={styles.iconBrand} />
                                    <span>Global Standards</span>
                                </div>
                                <div className={styles.iconItem}>
                                    <ShieldCheck size={24} className={styles.iconBrand} />
                                    <span>Industrial Durable</span>
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

                    {/* Bottom: Custom Solutions / Customization */}
                    <div className={styles.solutionsSection}>
                        <h2 className={styles.sectionHeader}>CUSTOMIZATION</h2>
                        <div className={styles.solutionsGrid}>
                            <div className={styles.solutionCard}>
                                <div className={styles.solIconBg}><Layers size={24} /></div>
                                <h3>Logo Weaving</h3>
                                <p>Custom Jacquard woven logos.</p>
                            </div>
                            <div className={styles.solutionCard}>
                                <div className={styles.solIconBg}><Scissors size={24} /></div>
                                <h3>Embroidery</h3>
                                <p>Precise logo embroidery services.</p>
                            </div>
                            <div className={styles.solutionCard}>
                                <div className={styles.solIconBg}><Box size={24} /></div>
                                <h3>Custom Sizes</h3>
                                <p>Any international tailored size.</p>
                            </div>
                            <div className={styles.solutionCard}>
                                <div className={styles.solIconBg}><Users size={24} /></div>
                                <h3>Fabric Blends</h3>
                                <p>Cotton, Poly-Cotton, CVC available.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.pageNumber}>01</div>
                <CatalogueFooter />
            </div>


            {/* PAGE 3: BED LINEN (Custom Tables) */}
            <CataloguePage
                pageNum="02"
                data={hotelProducts.bedLinen}
                customContent={
                    <>
                        <div className={styles.subHeading} style={{ marginTop: '1rem', marginBottom: '0.25rem', fontSize: '10pt' }}>Standard Sizes For <span style={{ textDecoration: 'underline' }}>FLAT</span> Bed Sheets :</div>
                        <table className={styles.darkTable}>
                            <thead>
                                <tr>
                                    <th style={{ width: '20%' }}>TYPE</th>
                                    <th colSpan={3}>SINGLE BED</th>
                                    <th colSpan={2}>DOUBLE BED<br /><span>STANDARD+QUEEN</span></th>
                                    <th colSpan={3}>DOUBLE BED KING</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>SIZE:CM</th>
                                    {hotelProducts.bedLinen.flatSheetSizes.single.map((s, i) => <td key={i}>{s.cm}</td>)}
                                    {hotelProducts.bedLinen.flatSheetSizes.doubleStandard.map((s, i) => <td key={i}>{s.cm}</td>)}
                                    {hotelProducts.bedLinen.flatSheetSizes.doubleKing.map((s, i) => <td key={i}>{s.cm}</td>)}
                                </tr>
                                <tr>
                                    <th>SIZE:INCH</th>
                                    {hotelProducts.bedLinen.flatSheetSizes.single.map((s, i) => <td key={i}>{s.inch}</td>)}
                                    {hotelProducts.bedLinen.flatSheetSizes.doubleStandard.map((s, i) => <td key={i}>{s.inch}</td>)}
                                    {hotelProducts.bedLinen.flatSheetSizes.doubleKing.map((s, i) => <td key={i}>{s.inch}</td>)}
                                </tr>
                            </tbody>
                        </table>

                        <div className={styles.subHeading} style={{ marginTop: '1rem', marginBottom: '0.25rem', fontSize: '10pt' }}>Standard Sizes For <span style={{ textDecoration: 'underline' }}>FITTED</span> Bed Sheets :</div>
                        <table className={styles.darkTable}>
                            <thead>
                                <tr>
                                    <th style={{ width: '20%' }}>TYPE</th>
                                    <th colSpan={2}>SINGLE BED</th>
                                    <th colSpan={2}>DOUBLE BED<br /><span>STANDARD+QUEEN</span></th>
                                    <th colSpan={2}>DOUBLE BED KING</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>SIZE:CM</th>
                                    {hotelProducts.bedLinen.fittedSheetSizes.single.map((s, i) => <td key={i}>{s.cm}</td>)}
                                    {hotelProducts.bedLinen.fittedSheetSizes.doubleStandard.map((s, i) => <td key={i}>{s.cm}</td>)}
                                    {hotelProducts.bedLinen.fittedSheetSizes.doubleKing.map((s, i) => <td key={i}>{s.cm}</td>)}
                                </tr>
                                <tr>
                                    <th>SIZE:INCH</th>
                                    {hotelProducts.bedLinen.fittedSheetSizes.single.map((s, i) => <td key={i}>{s.inch}</td>)}
                                    {hotelProducts.bedLinen.fittedSheetSizes.doubleStandard.map((s, i) => <td key={i}>{s.inch}</td>)}
                                    {hotelProducts.bedLinen.fittedSheetSizes.doubleKing.map((s, i) => <td key={i}>{s.inch}</td>)}
                                </tr>
                            </tbody>
                        </table>
                    </>
                }
            />

            {/* PAGE 4: PILLOW & CUSHION COVERS */}
            <CataloguePage
                pageNum="03"
                data={hotelProducts.pillowCovers}
                customContent={
                    <>
                        <div className={styles.subHeading} style={{ marginBottom: '0.25rem', marginTop: '1rem' }}>Standard Sizes For <span style={{ textDecoration: 'underline' }}>PLAIN CUSHION COVERS</span>:</div>
                        <table className={styles.darkTable}>
                            <thead>
                                <tr>
                                    <th style={{ width: '20%' }}>TYPE</th>
                                    <th colSpan={hotelProducts.pillowCovers.cushionSizes.length}>PLAIN CUSHION COVERS</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>SIZE:CM</th>
                                    {hotelProducts.pillowCovers.cushionSizes.map((s, i) => <td key={i}>{s.cm}</td>)}
                                </tr>
                                <tr>
                                    <th>SIZE:INCH</th>
                                    {hotelProducts.pillowCovers.cushionSizes.map((s, i) => <td key={i}>{s.inch}</td>)}
                                </tr>
                            </tbody>
                        </table>

                        <div className={styles.subHeading} style={{ marginBottom: '0.25rem', marginTop: '1.5rem' }}>Standard Sizes For <span style={{ textDecoration: 'underline' }}>PLAIN PILLOW COVERS</span> :</div>
                        <table className={styles.darkTable}>
                            <thead>
                                <tr>
                                    <th style={{ width: '20%' }}>TYPE</th>
                                    <th colSpan={hotelProducts.pillowCovers.pillowSizes.length}>PLAIN PILLOW COVERS</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>SIZE:CM</th>
                                    {hotelProducts.pillowCovers.pillowSizes.map((s, i) => <td key={i}>{s.cm}</td>)}
                                </tr>
                                <tr>
                                    <th>SIZE:INCH</th>
                                    {hotelProducts.pillowCovers.pillowSizes.map((s, i) => <td key={i}>{s.inch}</td>)}
                                </tr>
                            </tbody>
                        </table>
                    </>
                }
            />



            {/* PAGE 5: DUVET INSERTS */}
            <CataloguePage
                pageNum="04"
                data={{ ...hotelProducts.duvets, images: [], fabricTypes: [] }}
                customContent={
                    <>
                        {/* Side-by-Side Lists: Fabric Types & Filling Types */}
                        <div style={{ display: 'flex', gap: '2rem', marginBottom: '1rem', marginTop: '0.5rem' }}>
                            {/* Left: Fabric Types */}
                            <div style={{ flex: 1 }}>
                                <div className={styles.subHeading} style={{ marginBottom: '0.25rem' }}>Fabric Types :</div>
                                <ul className={styles.fabricList}>
                                    {hotelProducts.duvets.fabricTypes.map((t, i) => (
                                        <li key={i}>{t}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* Right: Filling Types */}
                            <div style={{ flex: 1 }}>
                                <div className={styles.subHeading} style={{ marginBottom: '0.25rem' }}>Fiber Filling Types & GSM:</div>
                                <ul className={styles.fabricList}>
                                    {hotelProducts.duvets.fillingTypes.map((t, i) => (
                                        <li key={i}>{t}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className={styles.subHeading} style={{ marginTop: '0.5rem', marginBottom: '0.25rem' }}>Standard Sizes for <span style={{ textDecoration: 'underline' }}>DUVETS/COMFORTERS/QUILTS</span> :</div>
                        <table className={styles.darkTable}>
                            <thead>
                                <tr>
                                    <th style={{ width: '25%' }}>TYPE</th>
                                    <th style={{ width: '25%' }}>SINGLE</th>
                                    <th style={{ width: '25%' }}>DOUBLE</th>
                                    <th style={{ width: '25%' }}>KING</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>SIZE:CM</th>
                                    <td>{hotelProducts.duvets.sizes.single.cm}</td>
                                    <td>{hotelProducts.duvets.sizes.double.cm}</td>
                                    <td>{hotelProducts.duvets.sizes.king.cm}</td>
                                </tr>
                                <tr>
                                    <th>SIZE:INCH</th>
                                    <td>{hotelProducts.duvets.sizes.single.inch}</td>
                                    <td>{hotelProducts.duvets.sizes.double.inch}</td>
                                    <td>{hotelProducts.duvets.sizes.king.inch}</td>
                                </tr>
                            </tbody>
                        </table>

                        {/* Large Bottom Images */}
                        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                            {hotelProducts.duvets.images.map((img, i) => (
                                <div key={i} style={{ flex: 1 }}>
                                    <img
                                        src={img.url}
                                        alt={img.caption}
                                        style={{ width: '100%', height: '240px', objectFit: 'cover', borderRadius: '4px', border: '1px solid #eee' }}
                                    />
                                </div>
                            ))}
                        </div>
                    </>
                }
            />

            {/* PAGE 6: DUVET COVERS */}
            {/* PAGE 6: DUVET COVERS */}
            <CataloguePage
                pageNum="05"
                data={{ ...hotelProducts.duvetCovers, images: [], fabricTypes: [] }}
                customContent={
                    <>
                        {/* Fabric Types List */}
                        <div style={{ marginBottom: '1rem', marginTop: '0.5rem' }}>
                            <div className={styles.subHeading} style={{ marginBottom: '0.25rem' }}>Fabric Types :</div>
                            <ul className={styles.fabricList}>
                                {hotelProducts.duvetCovers.fabricTypes.map((t, i) => (
                                    <li key={i}>{t}</li>
                                ))}
                            </ul>
                        </div>

                        <div className={styles.subHeading} style={{ marginBottom: '0.25rem' }}>Standard Sizes For <span style={{ textDecoration: 'underline' }}>DUVET COVERS</span> :</div>
                        <table className={styles.darkTable}>
                            <thead>
                                <tr>
                                    <th style={{ width: '25%' }}>TYPE</th>
                                    <th style={{ width: '25%' }}>SINGLE</th>
                                    <th style={{ width: '25%' }}>DOUBLE</th>
                                    <th style={{ width: '25%' }}>KING</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>SIZE:CM</th>
                                    <td>{hotelProducts.duvetCovers.sizes.single.cm}</td>
                                    <td>{hotelProducts.duvetCovers.sizes.double.cm}</td>
                                    <td>{hotelProducts.duvetCovers.sizes.king.cm}</td>
                                </tr>
                                <tr>
                                    <th>SIZE:INCH</th>
                                    <td>{hotelProducts.duvetCovers.sizes.single.inch}</td>
                                    <td>{hotelProducts.duvetCovers.sizes.double.inch}</td>
                                    <td>{hotelProducts.duvetCovers.sizes.king.inch}</td>
                                </tr>
                            </tbody>
                        </table>

                        {/* Large Bottom Images */}
                        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                            {hotelProducts.duvetCovers.images.map((img, i) => (
                                <div key={i} style={{ flex: 1 }}>
                                    <img
                                        src={img.url}
                                        alt={img.caption}
                                        style={{ width: '100%', height: '240px', objectFit: 'cover', borderRadius: '4px', border: '1px solid #eee' }}
                                    />
                                </div>
                            ))}
                        </div>
                    </>
                }
            />

            {/* PAGE 7: PILLOW & CUSHION FILLERS */}
            <CataloguePage
                pageNum="06"
                data={{ ...hotelProducts.fillers, images: [] }}
                customContent={
                    <>
                        <div className={styles.subHeading} style={{ marginBottom: '0.25rem', marginTop: '1rem' }}>Standard Sizes For <span style={{ textDecoration: 'underline' }}>CUSHION FILLERS</span> :</div>
                        <table className={styles.darkTable}>
                            <thead>
                                <tr>
                                    <th style={{ width: '20%' }}>TYPE</th>
                                    <th colSpan={hotelProducts.fillers.cushionSizes.length}>PLAIN CUSHIONS</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>SIZE:CM</th>
                                    {hotelProducts.fillers.cushionSizes.map((s, i) => <td key={i}>{s.cm}</td>)}
                                </tr>
                                <tr>
                                    <th>SIZE:INCH</th>
                                    {hotelProducts.fillers.cushionSizes.map((s, i) => <td key={i}>{s.inch}</td>)}
                                </tr>
                            </tbody>
                        </table>

                        <div className={styles.subHeading} style={{ marginBottom: '0.25rem', marginTop: '1.5rem' }}>Standard Sizes For <span style={{ textDecoration: 'underline' }}>PILLOW FILLERS</span> :</div>
                        <table className={styles.darkTable}>
                            <thead>
                                <tr>
                                    <th style={{ width: '20%' }}>TYPE</th>
                                    <th colSpan={hotelProducts.fillers.pillowSizes.length}>PLAIN PILLOWS</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>SIZE:CM</th>
                                    {hotelProducts.fillers.pillowSizes.map((s, i) => <td key={i}>{s.cm}</td>)}
                                </tr>
                                <tr>
                                    <th>SIZE:INCH</th>
                                    {hotelProducts.fillers.pillowSizes.map((s, i) => <td key={i}>{s.inch}</td>)}
                                </tr>
                            </tbody>
                        </table>

                        {/* Large Bottom Images */}
                        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                            {hotelProducts.fillers.images.map((img, i) => (
                                <div key={i} style={{ flex: 1 }}>
                                    <img
                                        src={img.url}
                                        alt={img.caption}
                                        style={{ width: '100%', height: '240px', objectFit: 'cover', borderRadius: '4px', border: '1px solid #eee' }}
                                    />
                                </div>
                            ))}
                        </div>
                    </>
                }
            />

            {/* PAGE 8: BATH LINEN */}
            <CataloguePage
                pageNum="07"
                data={hotelProducts.bathLinen}
                customContent={
                    <>
                        <div className={styles.subHeading} style={{ marginBottom: '0.25rem' }}>Product List :</div>
                        <table className={styles.darkTable}>
                            <thead>
                                <tr>
                                    <th colSpan={2}>Available Items</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Array.from({ length: Math.ceil(hotelProducts.bathLinen.items.length / 2) }).map((_, i) => (
                                    <tr key={i}>
                                        <td style={{ width: '50%', textAlign: 'left', paddingLeft: '1rem' }}>• {hotelProducts.bathLinen.items[2 * i]}</td>
                                        <td style={{ width: '50%', textAlign: 'left', paddingLeft: '1rem' }}>
                                            {hotelProducts.bathLinen.items[2 * i + 1] ? `• ${hotelProducts.bathLinen.items[2 * i + 1]}` : ''}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {/* Large Bottom Images (Extra 2 images) */}
                        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                            {hotelProducts.bathLinen.bottomImages && hotelProducts.bathLinen.bottomImages.map((img: any, i: number) => (
                                <div key={i} style={{ flex: 1 }}>
                                    <img
                                        src={img.url}
                                        alt={img.caption}
                                        style={{ width: '100%', height: '350px', objectFit: 'fill', borderRadius: '4px', border: '1px solid #eee' }}
                                    />
                                </div>
                            ))}
                        </div>
                    </>
                }
            />

            {/* PAGE 9: BED RUNNER SETS */}
            <CataloguePage
                pageNum="08"
                data={{ ...hotelProducts.bedRunners, images: [] }}
                customContent={
                    <>
                        <div style={{ display: 'flex', gap: '2%', marginTop: '1rem', flexWrap: 'wrap' }}>
                            {/* Table 1: Bed Runners */}
                            <div style={{ flex: '1.2', minWidth: '300px' }}>
                                <table className={styles.darkTable} style={{ width: '100%' }}>
                                    <thead>
                                        <tr>
                                            <th style={{ width: '25%' }}>TYPE</th>
                                            <th colSpan={hotelProducts.bedRunners.runnerSizes.length}>STANDARD SIZES FOR <span style={{ fontWeight: 'bold' }}>BED RUNNER</span></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>SIZE:CM</th>
                                            {hotelProducts.bedRunners.runnerSizes.map((s, i) => <td key={i}>{s.cm}</td>)}
                                        </tr>
                                        <tr>
                                            <th>SIZE:INCH</th>
                                            {hotelProducts.bedRunners.runnerSizes.map((s, i) => <td key={i}>{s.inch}</td>)}
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            {/* Table 2: Cushion Cases */}
                            <div style={{ flex: '0.8', minWidth: '250px' }}>
                                <table className={styles.darkTable} style={{ width: '100%' }}>
                                    <thead>
                                        <tr>
                                            <th style={{ width: '30%' }}>TYPE</th>
                                            <th colSpan={hotelProducts.bedRunners.cushionSizes.length}>STANDARD SIZES FOR <span style={{ fontWeight: 'bold' }}>CUSHION CASES</span></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>SIZE:CM</th>
                                            {hotelProducts.bedRunners.cushionSizes.map((s, i) => <td key={i}>{s.cm}</td>)}
                                        </tr>
                                        <tr>
                                            <th>SIZE:INCH</th>
                                            {hotelProducts.bedRunners.cushionSizes.map((s, i) => <td key={i}>{s.inch}</td>)}
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Large Bottom Images */}
                        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                            {hotelProducts.bedRunners.images.map((img, i) => (
                                <div key={i} style={{ flex: 1 }}>
                                    <img
                                        src={img.url}
                                        alt={img.caption}
                                        style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px', border: '1px solid #eee' }}
                                    />
                                </div>
                            ))}
                        </div>
                    </>
                }
            />

            {/* PAGE 10: PROTECTORS */}
            <CataloguePage
                pageNum="09"
                data={{ ...hotelProducts.protectors, images: [] }}
                customContent={
                    <>
                        {/* Table */}
                        <table className={styles.darkTable} style={{ width: '100%' }}>
                            <thead>
                                <tr>
                                    <th style={{ width: '30%' }}>TYPE</th>
                                    <th colSpan={hotelProducts.protectors.pillowSizes.length}>STANDARD SIZES FOR <span style={{ fontWeight: 'bold' }}>PILLOW PROTECTORS</span></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>SIZE:CM</th>
                                    {hotelProducts.protectors.pillowSizes.map((s, i) => <td key={i}>{s.cm}</td>)}
                                </tr>
                                <tr>
                                    <th>SIZE:INCH</th>
                                    {hotelProducts.protectors.pillowSizes.map((s, i) => <td key={i}>{s.inch}</td>)}
                                </tr>
                            </tbody>
                        </table>

                        {/* Large Bottom Images */}
                        <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                            {hotelProducts.protectors.images.map((img, i) => (
                                <div key={i} style={{ flex: 1 }}>
                                    <img
                                        src={img.url}
                                        alt={img.caption}
                                        style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px', border: '1px solid #eee' }}
                                    />
                                </div>
                            ))}
                        </div>
                    </>
                }
            />

            {/* PAGE 10: MATTRESS PROTECTORS */}
            <CataloguePage
                pageNum="10"
                data={{ ...hotelProducts.mattressProtectors, images: [] }}
                customContent={
                    <>
                        {/* Table */}
                        <table className={styles.darkTable} style={{ width: '100%' }}>
                            <thead>
                                <tr>
                                    <th style={{ width: '30%' }}>TYPE</th>
                                    <th colSpan={hotelProducts.mattressProtectors.sizes.length}>STANDARD SIZES FOR <span style={{ fontWeight: 'bold' }}>MATTRESS PROTECTOR</span></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>SIZE:CM</th>
                                    {hotelProducts.mattressProtectors.sizes.map((s, i) => <td key={i}>{s.cm}</td>)}
                                </tr>
                                <tr>
                                    <th>SIZE:INCH</th>
                                    {hotelProducts.mattressProtectors.sizes.map((s, i) => <td key={i}>{s.inch}</td>)}
                                </tr>
                            </tbody>
                        </table>

                        {/* Large Bottom Images */}
                        <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                            {hotelProducts.mattressProtectors.images.map((img, i) => (
                                <div key={i} style={{ flex: 1 }}>
                                    <img
                                        src={img.url}
                                        alt={img.caption}
                                        style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px', border: '1px solid #eee' }}
                                    />
                                </div>
                            ))}
                        </div>
                    </>
                }
            />

            {/* PAGE 11: BLANKETS */}
            <CataloguePage
                pageNum="11"
                data={{ ...hotelProducts.blankets, images: [] }}
                customContent={
                    <>
                        {/* Table */}
                        <table className={styles.darkTable} style={{ width: '100%' }}>
                            <thead>
                                <tr>
                                    <th style={{ width: '30%' }}>TYPE</th>
                                    <th colSpan={hotelProducts.blankets.specs.length}>STANDARD SIZES FOR <span style={{ fontWeight: 'bold' }}>POLAR FLEECE BLANKET</span></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>SIZE:INCH</th>
                                    {hotelProducts.blankets.specs.map((s, i) => <td key={i}>{s.inch}</td>)}
                                </tr>
                                <tr>
                                    <th>WEIGHT:GMs</th>
                                    {hotelProducts.blankets.specs.map((s, i) => <td key={i}>{s.weight}</td>)}
                                </tr>
                            </tbody>
                        </table>

                        {/* Large Bottom Images */}
                        <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                            {hotelProducts.blankets.images.map((img, i) => (
                                <div key={i} style={{ flex: 1 }}>
                                    <img
                                        src={img.url}
                                        alt={img.caption}
                                        style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px', border: '1px solid #eee' }}
                                    />
                                </div>
                            ))}
                        </div>
                    </>
                }
            />

            {/* PAGE 13: HOOK / CONTACT */}
            <div className={styles.page} style={{ padding: 0 }}>
                <img src={logoIcon} alt="SS Logo" className={`${styles.pageLogo} ${styles.pageLogoInverted}`} />
                <div className={styles.hookLayout}>
                    <div className={styles.hookContent}>
                        <h2 className={styles.hookHeadline}>READY TO UPGRADE YOUR<br />GUEST EXPERIENCE?</h2>
                        <h3 className={styles.hookSub}>Request a Quote.</h3>

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
                                <div className={styles.socialText}>
                                    <span className={styles.socialLabel}>Manufactured by</span>
                                    <span className={styles.socialHandle}>SS Garments & Home Textiles</span>
                                </div>
                            </div>

                            <div className={styles.socialItem}>
                                <div className={styles.socialText}>
                                    <span className={styles.socialLabel}>Visit our Website</span>
                                    <span className={styles.socialHandle}>www.sstextilehub.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.pageNumber}>11</div>
            </div>

        </div >
    );
};

export default HotelCatalogue;
