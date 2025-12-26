import type { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css';

interface ProductProps {
    id: string;
    name: string;
    category: string;
    price: string;
    image: string;
}

const ProductCard: FC<ProductProps> = ({ id, name, category, price, image }) => {
    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <img src={image} alt={name} className={styles.image} />
            </div>
            <div className={styles.content}>
                <span className={styles.category}>{category}</span>
                <h3 className={styles.title}>{name}</h3>
                <p className={styles.price}>{price}</p>
                <div className={styles.footer}>
                    <Link to={`/products/${id}`} className={styles.detailsLink}>View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
