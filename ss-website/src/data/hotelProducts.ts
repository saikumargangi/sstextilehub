import plainBedsheetImg from '../assets/catalogue/plain_bedsheet.jpg';
import satinStripeImg from '../assets/catalogue/satin_stripe_bedsheet.jpg';
import fittedBedsheetImg from '../assets/catalogue/fitted_bedsheet.jpg';
import pillowCover1 from '../assets/catalogue/pillow_cover_0.jpg';
import pillowCover2 from '../assets/catalogue/pillow_cover_1.jpg';
import pillowCover3 from '../assets/catalogue/pillow_cover_2.jpg';
import duvet1 from '../assets/catalogue/duvet_0.jpg';
import duvet2 from '../assets/catalogue/duvet_1.jpg';
import duvetCover1 from '../assets/catalogue/duvet_cover_0.jpg';
import duvetCover2 from '../assets/catalogue/duvet_cover_1.jpg';
import filler1 from '../assets/catalogue/filler_0.jpg';
import filler2 from '../assets/catalogue/filler_1.jpg';
import bath1 from '../assets/catalogue/bath_0.jpg';
import bath2 from '../assets/catalogue/bath_1.jpg';
import bath3 from '../assets/catalogue/bath_2.jpg';
import bath4 from '../assets/catalogue/bath_3.jpg';
import bath5 from '../assets/catalogue/bath_4.jpg';
import bedRunner1 from '../assets/catalogue/bed_runner_0.jpg';
import bedRunner2 from '../assets/catalogue/bed_runner_1.jpg';
import protector1 from '../assets/catalogue/protector_1.jpg';
import protector2 from '../assets/catalogue/protector_2.jpg';
import protector3 from '../assets/catalogue/protector_3.jpg';
import mattressProtector1 from '../assets/catalogue/mattress_protector_1.jpg';
import mattressProtector2 from '../assets/catalogue/mattress_protector_2.jpg';
import mattressProtector3 from '../assets/catalogue/mattress_protector_3.png';
import blanket1 from '../assets/catalogue/blanket_1.jpg';
import blanket2 from '../assets/catalogue/blanket_2.jpg';
import blanket3 from '../assets/catalogue/blanket_3.jpg';

export const hotelProducts = {
    bedLinen: {
        title: "HOTEL BEDSHEET",
        description: "Our collection of Hotel Bed Linens is 5-Star Hotel approved and has stood the test of stringent quality measures. Available in Plain Percale, Plain Satin, and Satin Stripes fabrics, these come in various shades and designs suitable to adorn a variety of hospitality decors. We provide both FLAT and FITTED bedsheets.",
        fabricTypes: [
            "100% Cotton Satin Stripes [210 T.C to 400 T.C]",
            "100% Cotton Plain Satin [180 T.C to 400 T.C]",
            "100% Cotton Plain Percale [150 T.C to 400 T.C]"
        ],
        flatSheetSizes: {
            single: [
                { cm: "137x228", inch: "54x90" },
                { cm: "150x228", inch: "58x90" },
                { cm: "180x274", inch: "70x108" }
            ],
            doubleStandard: [
                { cm: "225x255", inch: "90x100" },
                { cm: "225x274", inch: "90x108" }
            ],
            doubleKing: [
                { cm: "255x274", inch: "100x108" },
                { cm: "274x274", inch: "108x108" },
                { cm: "274x300", inch: "108x118" }
            ]
        },
        fittedSheetSizes: {
            single: [
                { cm: "90x180+20", inch: "36x72+8\"" },
                { cm: "120x180+20", inch: "48x72+8\"" }
            ],
            doubleStandard: [
                { cm: "150x180+30", inch: "60x72+12\"" },
                { cm: "167x180+30", inch: "66x72+12\"" }
            ],
            doubleKing: [
                { cm: "180x180+30", inch: "72x72+12\"" },
                { cm: "180x200+30", inch: "72x78+12\"" }
            ]
        },
        images: [
            { url: plainBedsheetImg, caption: "Plain Bedsheet" },
            { url: satinStripeImg, caption: "Satin Stripe Bedsheet" },
            { url: fittedBedsheetImg, caption: "Fitted Bedsheet" }
        ],
        notes: [
            "*Polycotton/Cottonpoly combination can be provided as per client request.",
            "*Sizes of bed sheets can be customized as per client request.",
            "*Logo Printing or Labelling of Hotel name can be provided as per clients request."
        ]
    },
    pillowCovers: {
        title: "PILLOW/CUSHION COVERS",
        description: "Our collection of Hotel Bed Linens is 5-Star Hotel approved and has stood the test of stringent quality measures. Available in Plain Percale, Plain Satin, and Satin Stripes fabrics, these come in various shades and designs suitable to adorn a variety of hospitality decors.",
        fabricTypes: [
            "100% Cotton Satin Stripes [210 T.C to 400 T.C]",
            "100% Cotton Plain Satin [180 T.C to 400 T.C]",
            "100% Cotton Plain Percale [150 T.C to 400 T.C]"
        ],
        // Transcribed from screenshot: Plain Cushion Covers
        cushionSizes: [
            { cm: "30x30", inch: "12\"x12\"" },
            { cm: "30x45", inch: "12\"x18\"" },
            { cm: "40x40", inch: "16\"x16\"" },
            { cm: "45x45", inch: "18\"x18\"" },
            { cm: "50x50", inch: "20\"x20\"" },
            { cm: "60x60", inch: "24\"x24\"" }
        ],
        // Transcribed from screenshot: Plain Pillow Covers
        pillowSizes: [
            { cm: "36x59", inch: "14\"x23\"" },
            { cm: "38x61", inch: "15\"x24\"" },
            { cm: "41x63", inch: "16\"x25\"" },
            { cm: "43x66", inch: "17\"x26\"" },
            { cm: "46x69", inch: "18\"x27\"" },
            { cm: "50x75", inch: "20\"x30\"" },
            { cm: "50x91", inch: "20\"x36\"" }
        ],
        images: [
            { url: pillowCover1, caption: "" },
            { url: pillowCover2, caption: "" },
            { url: pillowCover3, caption: "" }
        ],
        notes: [
            "*Customized Logo Printing, Dyeing & Sizes can be provided as per clients requirement"
        ]
    },
    quiltedComforters: {
        title: "COMFORTERS / QUILTS",
        description: "Experience the perfect balance of warmth and weight with our Quilted Comforters. Designed for all-season comfort, they feature a box-stitched pattern to keep the filling evenly distributed.",
        fabricTypes: [
            "100% Cotton 250TC Outer Shell",
            "Box quilted design for durability",
            "Hypoallergenic Microfiber Filling"
        ],
        sizes: [
            { type: "Single", sizeCm: "152x228", sizeInch: "60x90" },
            { type: "Double", sizeCm: "228x274", sizeInch: "90x108" },
            { type: "Super King", sizeCm: "254x274", sizeInch: "100x108" }
        ],
        images: [
            { url: "https://images.unsplash.com/photo-1579621970560-f033aee5f66d?q=80&w=2070&auto=format&fit=crop", caption: "Box Quilted White" },
            { url: "https://images.unsplash.com/photo-1512918580421-32c29925bd8f?q=80&w=2067&auto=format&fit=crop", caption: "Soft Microfiber Feel" },
            { url: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=2057&auto=format&fit=crop", caption: "Premium Fill" }
        ],
        notes: [
            "*Available in various GSM options (100 to 350 GSM).",
            "*Reversible colors available on request."
        ]
    },
    duvets: {
        title: "COMFORTERS/QUILTS/DUVETS",
        description: "A duvet, also known as a Comforter or Quilt, is only as good as its filling. Our premium duvets come in a variety of sizes and are crafted from high-quality synthetic polyfiber and micropoly fillings. They offer the durability and natural breathability needed for a cozy sleep experience. Designed to mimic the feel of natural down, our synthetic fiber duvets combine soft textures with weightless warmth and are strictly hypoallergenic.",
        fabricTypes: [
            ">Heavy Peached Micro Fabrics",
            ">Micro Satin Stripes",
            ">100% Cotton Plain Weave [120 T.C to 200 T.C]",
            ">Disposable Nonwoven Fabric [20 gsm to 100 gsm]"
        ],
        fillingTypes: [
            ">Micro Poly Fiber [100GSM to 300GSM]",
            ">Synthetic Poly Fiber [100GSM to 400GSM]"
        ],
        sizes: {
            single: { cm: "147x225", inch: "58x90" },
            double: { cm: "225x250", inch: "90x100" },
            king: { cm: "225x270", inch: "90x108" }
        },
        images: [
            { url: duvet1, caption: "" },
            { url: duvet2, caption: "" }
        ],
        notes: [
            "*Customization as per Gsm Filing Fiber, Fabric & Size can be done as per client requirements."
        ]
    },
    duvetCovers: {
        title: "DUVET COVERS",
        description: "Our collection of Hotel Duvet Covers is 5-Star Hotel approved and has stood the test of stringent quality measures. Available in Plain Percale, Plain Satin, and Satin Stripes fabrics, these come in various shades and designs suitable to adorn a variety of hospitality decors. We provide covers with Zipper, Flap, or Velcro closures.",
        fabricTypes: [
            "100% Cotton Satin Stripes [210 T.C to 400 T.C]",
            "100% Cotton Plain Satin [180 T.C to 400 T.C]",
            "100% Cotton Plain Percale [150 T.C to 400 T.C]"
        ],
        sizes: {
            single: { cm: "152x232", inch: "60x92" },
            double: { cm: "232x260", inch: "92x102" },
            king: { cm: "232x280", inch: "92x110" }
        },
        images: [
            { url: duvetCover1, caption: "" },
            { url: duvetCover2, caption: "" }
        ],
        notes: [
            "*Polycotton/Cottonpoly combination can be provided as per client request",
            "*Sizes of duvet covers can be customized as per client request.",
            "*Logo Printing or Labelling of Hotel name can be provided as per client request."
        ]
    },
    fillers: {
        title: "PILLOW & CUSHION FILLERS",
        description: "Our range of pillow and cushion fillers are feather-soft, fluffy, and designed for the ultimate guest experience. Expertly crafted for maximum comfort and peaceful sleep, our fillers feature improved filling materials that retain their loft. We offer a wide selection of sizes and densities to cater to the versatile needs of 5-star luxury hotels, resorts, and healthcare institutions.",
        cushionSizes: [
            { cm: "30x30", inch: "12\"x12\"" },
            { cm: "30x45", inch: "12\"x18\"" },
            { cm: "40x40", inch: "16\"x16\"" },
            { cm: "45x45", inch: "18\"x18\"" },
            { cm: "50x50", inch: "20\"x20\"" },
            { cm: "60x60", inch: "24\"x24\"" }
        ],
        pillowSizes: [
            { cm: "40x60", inch: "16\"x24\"" },
            { cm: "43x69", inch: "17\"x27\"" },
            { cm: "46x71", inch: "18\"x28\"" },
            { cm: "50x75", inch: "20\"x30\"" },
            { cm: "50x91", inch: "20\"x36\"" },
            { cm: "56x81", inch: "22\"x32\"" }
        ],
        images: [
            { url: filler1, caption: "" },
            { url: filler2, caption: "" }
        ]
    },
    bathLinen: {
        title: "BATH LINEN",
        description: "We've dedicated hours to create beautiful bathroom textiles that stay soft even after rigorous washes. Meets human-ecological requirements for direct contact to skin.",
        items: [
            "Bath Towels", "Hand Towels", "Face Towels",
            "Bath Sheets", "Pool Towels", "Beach Towels",
            "Bath Robes", "Bath Mats"
        ],
        images: [
            { url: bath1, caption: "" },
            { url: bath2, caption: "" },
            { url: bath3, caption: "" }
        ],
        bottomImages: [
            { url: bath4, caption: "" },
            { url: bath5, caption: "" }
        ],
        notes: [
            "*GSM ranges from 450 to 700 available.",
            "*Custom logo embroidery or dobby weaving."
        ]
    },
    bedRunners: {
        title: "BED RUNNER SET",
        description: "Our Luxury Bed Runner Sets are produced using diverse fabrics from our exclusive collection, featuring over 40 heavy-duty designs and colorways. These are purpose-woven to offer a soft, high-quality handle while adding significant visual impact to the room. We provide full customization of size, color, and pattern for Bed Runners and Cushion Covers to match your property's unique decor.",
        runnerSizes: [
            { cm: "38x150", inch: "15\"x60\"" },
            { cm: "45x180", inch: "18\"x72\"" },
            { cm: "45x225", inch: "18\"x90\"" },
            { cm: "50x250", inch: "20\"x100\"" }
        ],
        cushionSizes: [
            { cm: "30x30", inch: "12\"x12\"" },
            { cm: "38x38", inch: "15\"x15\"" },
            { cm: "45x45", inch: "18\"x18\"" }
        ],
        images: [
            { url: bedRunner1, caption: "" },
            { url: bedRunner2, caption: "" }
        ],
        notes: []
    },
    protectors: {
        title: "WATERPROOF PILLOW PROTECTOR",
        description: "This family-friendly Waterproof Pillow Protector features a soft, absorbent Terry Towelling upper layer and a non-crinkle waterproof TPU-Membrane lamination. It effectively protects your valuable pillows from spills and stains, significantly extending their lifespan. Our protectors act as a barrier against dust mites, allergens, liquids, sweat, and bed bugs, ensuring a hygienic sleep environment.",
        pillowSizes: [
            { cm: "40x63", inch: "16\"x25\"" },
            { cm: "43x68", inch: "17\"x27\"" },
            { cm: "45x71", inch: "18\"x28\"" },
            { cm: "50x75", inch: "20\"x30\"" }
        ],
        images: [
            { url: protector1, caption: "" },
            { url: protector2, caption: "" },
            { url: protector3, caption: "" }
        ],
        notes: []
    },
    mattressProtectors: {
        title: "WATERPROOF MATTRESS PROTECTOR",
        description: "This family-friendly Waterproof Mattress Protector features a soft, absorbent Terry Towelling upper layer and a non-crinkle waterproof TPU-Membrane lamination. It protects your valuable mattresses from spills and stains, extending their lifespan and maintaining hygiene. Our protectors serve as an effective barrier against dust mites, allergens, liquids, sweat, and bed bugs.",
        sizes: [
            { cm: "90x180", inch: "36\"x72\"" },
            { cm: "120x180", inch: "48\"x72\"" },
            { cm: "150x180", inch: "60\"x72\"" },
            { cm: "180x200", inch: "72\"x78\"" }
        ],
        images: [
            { url: mattressProtector1, caption: "" },
            { url: mattressProtector2, caption: "" },
            { url: mattressProtector3, caption: "" }
        ],
        notes: []
    },
    blankets: {
        title: "POLAR FLEECE BLANKET",
        description: "Our Polar Fleece Blankets are manufactured using 100% microfiber polyester yarns, known for being extremely soft, warm, and skin-friendly. This exquisite fabric offers a cost-effective yet superior alternative to heavy wool blankets. Known for exceptional warmth, attractive appearance, and moisture-wicking properties, our fleece blankets are durable and easy to maintain. Lightweight and portable (starting at 500g), they are ideal for hotels, hospitals, hostels, and guest houses.",
        specs: [
            { inch: "60x90", weight: "800gm" },
            { inch: "60x90", weight: "1000gm" },
            { inch: "90x100", weight: "1200gm" },
            { inch: "90x100", weight: "1500gm" }
        ],
        images: [
            { url: blanket1, caption: "" },
            { url: blanket2, caption: "" },
            { url: blanket3, caption: "" }
        ],
        notes: []
    }
};
