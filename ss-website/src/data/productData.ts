
// Bed Linen Images
import bedBanner from '../assets/hero-bg.jpg';
import bed1 from '../assets/bed/fitted_sheets.jpg';
import bed2 from '../assets/bed/flat_sheets.jpg';
import bed3 from '../assets/bed/duvet_covers.jpg';
import bed4 from '../assets/bed/pillowcases.png';
import bed5 from '../assets/bed/bedspreads.jpg';

// Kitchen Linen Images
import kitchenBanner from '../assets/kitchen/banner.jpg';
import kitchen1 from '../assets/kitchen/napkins.jpg';
import kitchen2 from '../assets/kitchen/aprons.jpg';
import kitchen3 from '../assets/kitchen/towels.jpg';
import kitchen4 from '../assets/kitchen/mitts.jpg';
import kitchen5 from '../assets/kitchen/tablecloths.jpg';
import kitchen6 from '../assets/kitchen/runners.jpg';

// Bath Linen Images
import bathBanner from '../assets/bath/banner.jpg';
import bath1 from '../assets/bath/towels_stack.jpg';
import bath2 from '../assets/bath/towels_pattern.jpg';
import bath3 from '../assets/bath/bathrobes.jpg';
import bath4 from '../assets/bath/bath_mats.jpg';

// Soft Furnishing Images
import softBanner from '../assets/soft-furnishing/curtains.jpg';
import soft1 from '../assets/soft-furnishing/curtains.jpg';
import soft2 from '../assets/soft-furnishing/cushions.jpg';
import soft3 from '../assets/soft-furnishing/throws.jpg';

// Garments Images
import garmentBanner from '../assets/garments/banner.png';
import garment1 from '../assets/garments/uniforms.jpg';
import garment2 from '../assets/garments/beachwear.jpg';
import garment3 from '../assets/garments/crochet_dress.jpg';
import garment4 from '../assets/garments/knitwear_top.jpg';

// Accessories Images
import accessBanner from '../assets/accessories/banner.jpg';
import access1 from '../assets/accessories/tote_bag.jpg';
import access2 from '../assets/accessories/crochet_bag.jpg';
import access3 from '../assets/accessories/crochet_hat.png';
import access4 from '../assets/accessories/crochet_scarf.jpg';
import access5 from '../assets/accessories/crochet_shawl.jpg';

export const productsData = {
    bedLinen: {
        title: "Bed Linen",
        subtitle: "Dream in Comfort. Wake up Inspired.",
        bannerImage: bedBanner,
        description: {
            title: "The Art of Good Sleep",
            text1: "SS Garments & Hometextiles brings you a Bed Linen collection where luxury meets longevity. We understand that the quality of your sleep is defined by the fabric against your skin. That's why we meticulously source the finest long-staple cottons to create linens that breathe, soften with every wash, and stand the test of time.",
            text2: "From crisp cool percales tailored for hot climates to silky smooth sateens for a lustrous feel, our range covers the entire spectrum of comfort. Precision stitching, quality elastic, and elegant finishing details make our bedding the choice for premium homes and hotels worldwide."
        },
        items: [
            {
                id: 1,
                image: bed2,
                title: "Flat Sheets",
                desc: "Crisp, cool, and breathable flat sheets available in varied thread counts (200TC - 1000TC)."
            },
            {
                id: 2,
                image: bed1,
                title: "Fitted Sheets",
                desc: "Perfectly tailored fitted sheets with deep pockets to ensure a snug fit on any mattress."
            },
            {
                id: 3,
                image: bed3,
                title: "Duvet Covers",
                desc: "Luxurious duvet covers in satins, percales, and textured weaves for ultimate comfort."
            },
            {
                id: 4,
                image: bed4,
                title: "Pillowcases",
                desc: "Soft, smooth pillowcases designed to be gentle on skin and hair, available in all sizes."
            },
            {
                id: 5,
                image: bed5,
                title: "Bedspreads & Quilts",
                desc: "Elegant bedspreads adding a layer of warmth and sophisticated texture to bedroom decor."
            }
        ]
    },
    kitchenLinen: {
        title: "Kitchen and Table Linen",
        subtitle: "Functionality meets Elegance. For Chefs & Homes.",
        bannerImage: kitchenBanner,
        items: [
            {
                id: 1,
                image: kitchen1,
                title: "Table Napkins",
                desc: "Elegant, highly absorbent cotton napkins available in various weaves and colors."
            },
            {
                id: 2,
                image: kitchen2,
                title: "Aprons",
                desc: "Durable, ergonomic aprons designed for commercial kitchens and style-conscious chefs."
            },
            {
                id: 3,
                image: kitchen3,
                title: "Kitchen Towel Sets",
                desc: "Multi-purpose, lint-free towels with superior absorbency for all kitchen tasks."
            },
            {
                id: 4,
                image: kitchen4,
                title: "Oven Mitts & Pot Holders",
                desc: "Heat-resistant, quilted protective gear ensuring safety without compromising style."
            },
            {
                id: 5,
                image: kitchen5,
                title: "Dining Table Cloths",
                desc: "Classic and contemporary tablecloths that set the perfect foundation for any meal."
            },
            {
                id: 6,
                image: kitchen6,
                title: "Table Runners",
                desc: "Handcrafted runners adding a layer of texture and sophistication to dining spaces."
            }
        ]
    },
    bathLinen: {
        title: "Bath Linen",
        subtitle: "Indulge in Softness. Experience Luxury.",
        bannerImage: bathBanner,
        items: [
            {
                id: 1,
                image: bath1,
                title: "Body, Hand, and Face Towels",
                desc: "Ultra-soft, high-GSM cotton terry towels available in a spectrum of sophisticated colors."
            },
            {
                id: 2,
                image: bath2,
                title: "Designer Printed Towels",
                desc: "Add a splash of style with our vibrant, fade-resistant printed towel collections."
            },
            {
                id: 3,
                image: bath3,
                title: "Bathrobes",
                desc: "Plush, spa-quality bathrobes designed for ultimate comfort and relaxation."
            },
            {
                id: 4,
                image: bath4,
                title: "Anti-Skid Bath Mats",
                desc: "Super-absorbent, quick-drying mats with secure non-slip backing for safety."
            }
        ]
    },
    softFurnishing: {
        title: "Soft Furnishings",
        subtitle: "Texture. Warmth. Style. For Every Room.",
        bannerImage: softBanner,
        items: [
            {
                id: 1,
                image: soft1,
                title: "Curtains",
                desc: "Transform your windows with our elegant range of curtains, available in sheer, blackout, and textured weaves."
            },
            {
                id: 2,
                image: soft2,
                title: "Cushion Covers",
                desc: "Add immediate style and comfort to any room with our handcrafted cushion covers and inserts."
            },
            {
                id: 3,
                image: soft3,
                title: "Throws",
                desc: "Wrap yourself in warmth with our collection of knitted, woven, and fleece throws for sofas and beds."
            }
        ]
    },
    garments: {
        title: "Garments",
        subtitle: "Ready-to-Wear Excellence. Handcrafted Artistry.",
        bannerImage: garmentBanner,
        items: [
            {
                id: 1,
                image: garment1,
                title: "Ready-Made Garments",
                desc: "High-quality apparel solutions for schools, corporate institutions, and fashion-forward retail brands."
            },
            {
                id: 2,
                image: garment3,
                title: "Handmade Crochet Dresses",
                desc: "Exquisite, handcrafted crochet dresses blending artisan skill with contemporary fashion trends."
            },
            {
                id: 3,
                image: garment2,
                title: "Swimwear",
                desc: "Stylish, breathable crochet swimwear and cover-ups perfect for resort and holiday collections."
            },
            {
                id: 4,
                image: garment4,
                title: "Crochet Tops",
                desc: "Versatile knitted tops and ensembles designed for modern, everyday elegance."
            }
        ]
    },
    accessories: {
        title: "Accessories",
        subtitle: "Handcrafted Details. Sustainable Style.",
        bannerImage: accessBanner,
        items: [
            {
                id: 1,
                image: access1,
                title: "Cotton Bags",
                desc: "Durable, reusable canvas tote bags perfect for sustainable branding and everyday utility."
            },
            {
                id: 2,
                image: access2,
                title: "Hand-Crocheted Bags",
                desc: "Artisanal crochet bags featuring vibrant patterns and sturdy construction for a boho-chic look."
            },
            {
                id: 3,
                image: access3,
                title: "Crochet Hats",
                desc: "Trendy, handcrafted hats available in a variety of colorful geometric designs."
            },
            {
                id: 4,
                image: access4,
                title: "Seasonal Scarves",
                desc: "Soft, warm, and stylish scarves and mufflers woven for comfort and elegance."
            },
            {
                id: 5,
                image: access5,
                title: "Elegant Shawls",
                desc: "Lightweight yet cozy shawls and ponchos, adding a layer of sophistication to any outfit."
            }
        ]
    }
};
