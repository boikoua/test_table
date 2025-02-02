import styles from './ProductsTable.module.scss';

type Props = {
  items: React.ReactNode;
  limit: number;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const ProductsTable: React.FC<Props> = ({ items, limit, onChange }) => {
  return (
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

      <tbody className={styles.tableBody}>{items}</tbody>

      <tfoot className={styles.tableFooter}>
        <tr>
          <td colSpan={7}>
            <div className={styles.tableWrapper}>
              <div className={styles.left}>
                <span>Items per page:</span>
                <select
                  onChange={onChange}
                  value={limit}
                  className={styles.select}
                >
                  <option value="4">4</option>
                  <option value="8">8</option>
                  <option value="10">10</option>
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
  );
};

export default ProductsTable;
