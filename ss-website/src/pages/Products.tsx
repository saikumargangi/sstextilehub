import { Link } from 'react-router-dom';
import { categories } from '../data/products';
import styles from './ProductCategory.module.css'; // Reusing styles

const Products = () => {
    return (
        <main>
            <section className={styles.categoryHeader}>
                <h1 className={styles.categoryTitle}>Our Collections</h1>
                <p className={styles.categoryDesc}>
                    Explore our wide range of premium textile products designed for global markets.
                </p>
            </section>

            <div className={styles.container}>
                <div className={styles.productsGrid}>
                    {categories.map(category => (
                        <Link to={`/products/${category.id}`} key={category.id} className={styles.productCard} style={{ textDecoration: 'none' }}>
                            <div className={styles.imageWrapper}>
                                <img src={category.image} alt={category.title} className={styles.productImage} />
                            </div>
                            <div className={styles.productInfo}>
                                <h3 className={styles.productName}>{category.title}</h3>
                                <p style={{ color: '#777', fontSize: '0.9rem', marginBottom: '1rem' }}>{category.products.length} Products</p>
                                <span className={styles.viewButton}>
                                    View Collection
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Products;
