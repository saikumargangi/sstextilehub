import { useParams, Link } from 'react-router-dom';
import { categories } from '../data/products';
import styles from './ProductCategory.module.css';

const ProductCategory = () => {
    const { categoryId } = useParams<{ categoryId: string }>();
    const category = categories.find(c => c.id === categoryId);

    if (!category) {
        return (
            <main style={{ padding: '6rem 20px', textAlign: 'center' }}>
                <h1>Category Not Found</h1>
                <p>The category you are looking for does not exist.</p>
                <Link to="/products" style={{ color: '#C4A57B', fontWeight: 'bold' }}>View All Categories</Link>
            </main>
        );
    }

    return (
        <main>
            <section className={styles.categoryHeader}>
                <h1 className={styles.categoryTitle}>{category.title}</h1>
                <p className={styles.categoryDesc}>{category.description}</p>
            </section>

            <div className={styles.container}>
                <div className={styles.productsGrid}>
                    {category.products.map(product => (
                        <div key={product.id} className={styles.productCard}>
                            <div className={styles.imageWrapper}>
                                <img src={product.image} alt={product.name} className={styles.productImage} />
                            </div>
                            <div className={styles.productInfo}>
                                <h3 className={styles.productName}>{product.name}</h3>
                                <span className={styles.productPrice}>{product.price}</span>
                                <Link to={`/contact?product=${encodeURIComponent(product.name)}`} className={styles.viewButton}>
                                    Inquire Now
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default ProductCategory;
