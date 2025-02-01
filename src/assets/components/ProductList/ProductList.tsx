import ProductItem from '../ProductItem';
import styles from './ProductList.module.scss';

const ProductList = () => {
  return (
    <section className={styles.products}>
      <h2 className={styles.title}>Product List</h2>

      <p className={styles.text}>
        Review and manage the products available on the marketplace.
      </p>

      <div className={styles.search}>
        <input className={styles.input} type="text" placeholder="Search" />
        <button className={styles.btn}>
          <span className="icon-search"></span>
        </button>
      </div>

      <table className={styles.table}>
        <thead className={styles.tableHeader}>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Country</th>
            <th>Marketplace Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody className={styles.tableBody}>
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </tbody>

        <tfoot className={styles.tableFooter}>
          <tr>
            <td colSpan={7}>
              <div className={styles.tableWrapper}>
                <div className={styles.left}>
                  <span>Items per page:</span>
                  <select defaultValue="10" className={styles.select}>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="all">All</option>
                  </select>
                </div>

                <div className={styles.right}>
                  <span>Showing 1-10 of 87 items</span>

                  <div className={styles.tablePages}>
                    <button className={styles.leftPage}>
                      <span className="icon-arrow"></span>
                    </button>
                    <input
                      className={styles.pageCount}
                      type="text"
                      defaultValue={1}
                    />
                    <button className={styles.rightPage}>
                      <span className="icon-arrow"></span>
                    </button>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </tfoot>
      </table>

      <button className={styles.submit}>Submit</button>
    </section>
  );
};

export default ProductList;
