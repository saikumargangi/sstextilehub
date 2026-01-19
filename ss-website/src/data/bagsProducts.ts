
// Placeholder images - consistent with previous valid placeholders or generic ones
const placeholderTote = "https://images.pexels.com/photos/6045028/pexels-photo-6045028.jpeg?auto=compress&cs=tinysrgb&w=600";
const placeholderDrawstring = "https://images.pexels.com/photos/8470711/pexels-photo-8470711.jpeg?auto=compress&cs=tinysrgb&w=600";
const placeholderLaundry = "https://images.pexels.com/photos/4210339/pexels-photo-4210339.jpeg?auto=compress&cs=tinysrgb&w=600";
const placeholderWine = "https://images.pexels.com/photos/4967399/pexels-photo-4967399.jpeg?auto=compress&cs=tinysrgb&w=600";

export const bagsProducts = {
    cover: {
        title: "SUSTAINABLE TEXTILE BAGS",
        subtitle: "Cotton | Canvas | Jute | JUCO | Linen & Blends",
        tagline: "Sustainable. Durable. Custom-Made.",
        companyName: "SS GARMENTS & HOMETEXTILES",
    },
    companyProfile: {
        title: "SS GARMENTS & HOMETEXTILES",
        subtitle: "Manufacturer & Exporter – India",
        description: "Sustainable textile bags for retail, hospitality, promotional and private-label programs.",
        aboutTitle: "ABOUT US",
        aboutText: [
            "SS Garments & Hometextiles is an India-based manufacturer and exporter of sustainable textile bags, supplying international buyers, importers, retailers.",
            "With strong roots in textile manufacturing, we specialize in:"
        ],
        aboutBullets: [
            "Cotton & canvas bags",
            "Jute & JUCO bags",
            "Linen & linen blend bags",
            "Drawstring, tote, shopping, gift & laundry bags"
        ],
        aboutFooter: "Our focus is on export-quality production, customization, and long-term programs rather than one-off trading.",
        whyUsTitle: "WHY PARTNER WITH US",
        whyUsBullets: [
            "In-house manufacturing & quality control",
            "Export-standard sizing & specifications",
            "Low MOQs for trial orders",
            "Strong customization & branding support",
            "EU-compliant materials & processes",
            "Reliable lead times & communication"
        ],
        footerNote: "Custom designs, sizes and specifications available on request."
    },
    fabricOverview: {
        title: "FABRIC OVERVIEW – QUICK COMPARISON",
        subtitle: "Cotton vs Canvas vs Jute vs JUCO vs Linen",
        description: "This page helps buyers quickly compare fabrics and select the right material based on use, durability, look, and budget.",
        footerNote: "Fabric GSM, blends, finishes and sizes can be customized based on buyer requirements.",
        headers: ["Parameter", "Cotton", "Canvas", "Jute", "JUCO (Jute + Cotton)", "Linen / Linen Blend"],
        rows: [
            { param: "Fiber Type", cotton: "Natural cotton", canvas: "Heavy cotton / cotton blend", jute: "Natural jute fiber", juco: "Jute blended with cotton", linen: "Flax fiber (linen), often blended" },
            { param: "Typical GSM", cotton: "140–220 GSM", canvas: "270–540 GSM (8–16 oz)", jute: "250–400 GSM", juco: "280–360 GSM", linen: "180–240 GSM" },
            { param: "Durability", cotton: "Medium", canvas: "Very High", jute: "High", juco: "High", linen: "Medium" },
            { param: "Load Capacity", cotton: "Light–Medium", canvas: "Heavy duty", jute: "Medium–Heavy", juco: "Medium–Heavy", linen: "Light–Medium" },
            { param: "Look & Feel", cotton: "Soft, clean", canvas: "Structured, premium", jute: "Rustic, natural", juco: "Smooth + natural", linen: "Elegant, premium" },
            { param: "Print Quality", cotton: "Excellent", canvas: "Excellent", jute: "Moderate", juco: "Very good", linen: "Moderate" },
            { param: "Shape Retention", cotton: "Low–Medium", canvas: "Excellent", jute: "Medium", juco: "Medium", linen: "Low" },
            { param: "Eco Profile", cotton: "Reusable, eco-friendly", canvas: "Reusable, long life", jute: "100% biodegradable", juco: "Natural blend", linen: "Natural, low-impact" },
            { param: "Price Level", cotton: "Low–Medium", canvas: "Medium–High", jute: "Medium", juco: "Medium–High", linen: "High" },
            { param: "Best For", cotton: "Promotions, retail", canvas: "Retail, grocery", jute: "EU gifting, wine", juco: "Premium eco retail", linen: "Boutique, luxury" }
        ]
    },
    sizeSpecsHeader: "BAG SIZE SPECIFICATIONS",
    subHeader: "Export Standard | SS Garments & Hometextiles",
    toteBags: {
        title: "TOTE / SHOPPING BAGS",
        description: "Applicable for Cotton, Canvas, Jute, JUCO, Linen & Blends",
        footerInfo: "Handle Options: Short handle: 35–40 cm | Shoulder handle: 60–70 cm",
        image: placeholderTote,
        headers: ["Size Code", "Dimensions (W × H × G cm)", "Typical Use"],
        specs: [
            { code: "TB-01", dim: "35 × 40", use: "Promotional, light retail" },
            { code: "TB-02", dim: "38 × 42", use: "Standard retail tote" },
            { code: "TB-03", dim: "40 × 45", use: "Grocery / shopping" },
            { code: "TB-04", dim: "40 × 35 × 10", use: "Retail with base" },
            { code: "TB-05", dim: "45 × 40 × 15", use: "Large grocery / heavy use" },
            { code: "TB-06", dim: "50 × 40 × 15", use: "Bulk shopping" }
        ]
    },
    drawstringBags: {
        title: "DRAWSTRING BAGS / POUCHES",
        description: "Cotton, Canvas, Linen, Linen Blends",
        image: placeholderDrawstring,
        headers: ["Size Code", "Dimensions (W × H cm)", "Typical Use"],
        specs: [
            { code: "DS-01", dim: "10 × 15", use: "Jewelry, accessories" },
            { code: "DS-02", dim: "12 × 18", use: "Small gifts" },
            { code: "DS-03", dim: "15 × 20", use: "Cosmetics / retail" },
            { code: "DS-04", dim: "20 × 25", use: "Packaging" },
            { code: "DS-05", dim: "25 × 30", use: "Apparel" },
            { code: "DS-06", dim: "30 × 40", use: "Storage / laundry" }
        ]
    },
    laundryBags: {
        title: "LAUNDRY / STORAGE BAGS (HOTEL USE)",
        description: "Cotton, Canvas",
        footerInfo: "Closure: Drawstring / Rope | Branding: Printing / Embroidery",
        image: placeholderLaundry,
        headers: ["Size Code", "Dimensions (W × H cm)", "Use"],
        specs: [
            { code: "LB-01", dim: "40 × 50", use: "Guest laundry" },
            { code: "LB-02", dim: "50 × 60", use: "Hotel laundry" },
            { code: "LB-03", dim: "60 × 90", use: "Housekeeping / bulk" }
        ]
    },
    wineBags: {
        title: "WINE BAGS",
        description: "Jute, JUCO, Cotton Canvas",
        image: placeholderWine,
        headers: ["Size Code", "Dimensions (W × H cm)", "Capacity"],
        specs: [
            { code: "WB-01", dim: "15 × 35", cap: "Single bottle" },
            { code: "WB-02", dim: "16 × 38", cap: "Standard wine bottle" },
            { code: "WB-03", dim: "25 × 35", cap: "Two bottles" },
            { code: "WB-04", dim: "32 × 35", cap: "Three bottles" }
        ]
    },
    giftBags: {
        title: "GIFT / PROMOTIONAL BAGS",
        description: "Cotton, Jute, Linen",
        headers: ["Size Code", "Dimensions (W × H cm)", "Use"],
        specs: [
            { code: "GB-01", dim: "20 × 25", use: "Small gifts" },
            { code: "GB-02", dim: "25 × 30", use: "Retail gifting" },
            { code: "GB-03", dim: "30 × 35", use: "Seasonal promotions" }
        ]
    },
    generalNotes: [
        "All sizes are approximate (±1–2 cm tolerance)",
        "Custom sizes available on request",
        "Fabric GSM, handles, printing & accessories can be customized",
        "Suitable for export & EU compliance requirements"
    ]
};
