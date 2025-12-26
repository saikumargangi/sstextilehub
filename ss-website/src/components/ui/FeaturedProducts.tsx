import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './FeaturedProducts.module.css';

// Import local images
import bathLinenImg from '../../assets/bath/banner.jpg';
import kitchenLinenImg from '../../assets/kitchen/banner.jpg';
import bedLinenImg from '../../assets/bed/bedspreads.jpg';
import softFurnishingImg from '../../assets/soft-furnishing/cushions.jpg';
import garmentsImg from '../../assets/garments/crochet_dress.jpg';
import accessoriesImg from '../../assets/accessories/crochet_hat.png';

const categories = [
    {
        id: 'kitchen-linen',
        title: 'Kitchen and Table Linen',
        sub: 'Aprons, Oven Mitts, Cloth, Napkins, Table Runners, And Tablecloths.',
        count: '40+ Products',
        image: kitchenLinenImg,
        link: '/products/kitchen-linen'
    },
    {
        id: 'bed-linen',
        title: 'Bed Linen',
        sub: 'Flat And Fitted Sheets, Duvet Covers, Pillow Cases, And Bed Spreads',
        count: '50+ Products',
        image: bedLinenImg,
        link: '/products/bed-linen'
    },
    {
        id: 'bath-linen',
        title: 'Bath Linen',
        sub: 'Terry Towels (Hand, Face, And Bath), Bathrobes, And Anti-Skid Bath Mats.',
        count: '30+ Products',
        image: bathLinenImg,
        link: '/products/bath-linen'
    },
    {
        id: 'soft-furnishing',
        title: 'Soft Furnishing',
        sub: 'Curtains, Cushion Covers, And Throws.',
        count: '15+ Products',
        image: softFurnishingImg,
        link: '/products/soft-furnishing'
    },
    {
        id: 'garments',
        title: 'Garments',
        sub: 'Ready-Made, Knitwear Clothing',
        count: '20+ Products',
        image: garmentsImg,
        link: '/products/garments'
    },
    {
        id: 'accessories',
        title: 'Accessories',
        sub: 'Bags, Hats, Crochet Accessories.',
        count: '25+ Products',
        image: accessoriesImg,
        link: '/products/accessories'
    }
];

const FeaturedProducts = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const { current } = scrollContainerRef;
            const scrollAmount = 300;
            if (direction === 'left') {
                current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    return (
        <section className={styles.section} id="featured-categories">
            <div className={styles.header}>
                <h2 className={styles.headline}>Featured Categories</h2>
                <p className={styles.subheadline}>
                    Explore our wide range of premium textile products designed for global markets.
                </p>
            </div>

            <div className={styles.carouselContainer}>
                <button
                    className={`${styles.scrollButton} ${styles.scrollLeft}`}
                    onClick={() => scroll('left')}
                    aria-label="Scroll left"
                >
                    <ChevronLeft size={24} />
                </button>

                <div className={styles.scrollContainer} ref={scrollContainerRef}>
                    {categories.map((category) => (
                        <Link to={category.link} key={category.id} className={styles.categoryCard}>
                            <img src={category.image} alt={category.title} className={styles.cardImage} />
                            <div className={styles.overlay}>
                                <span className={styles.productCount}>{category.count}</span>
                                <h3 className={styles.categoryTitle}>{category.title}</h3>
                                <p className={styles.categorySub}>{category.sub}</p>
                            </div>
                        </Link>
                    ))}
                </div>

                <button
                    className={`${styles.scrollButton} ${styles.scrollRight}`}
                    onClick={() => scroll('right')}
                    aria-label="Scroll right"
                >
                    <ChevronRight size={24} />
                </button>
            </div>
        </section>
    );
};

export default FeaturedProducts;
