import styles from './ProductList.module.scss';

const ProductList = () => {
  return (
    <section className={styles.products}>
      <h2 className={styles.title}>Product List</h2>

      <p className={styles.text}>
        Review and manage the products available on the marketplace.
      </p>
    </section>
  );
};

export default ProductList;
