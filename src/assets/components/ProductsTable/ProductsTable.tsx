import styles from './ProductsTable.module.scss';

type Props = {
  items: React.ReactNode;
  limit: number;
  onLimitChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  page: number;
  onPageChange: (newPage: number) => void;
  totalItems: number;
  startIndex: number;
  endIndex: number;
};

const ProductsTable: React.FC<Props> = ({
  items,
  limit,
  onLimitChange,
  page,
  onPageChange,
  totalItems,
  startIndex,
  endIndex,
}) => {
  const totalPages = Math.ceil(totalItems / limit);

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
                  onChange={onLimitChange}
                  value={limit}
                  className={styles.select}
                >
                  <option value="4">4</option>
                  <option value="8">8</option>
                  <option value="10">10</option>
                </select>
              </div>

              <div className={styles.right}>
                <span>
                  Showing {startIndex + 1}-{Math.min(endIndex, totalItems)} of{' '}
                  {totalItems} items
                </span>

                <div className={styles.tablePages}>
                  <button
                    className={styles.leftPage}
                    onClick={() => onPageChange(page - 1)}
                    disabled={page <= 1}
                  >
                    <span className="icon-arrow"></span>
                  </button>

                  <input
                    className={styles.pageCount}
                    type="text"
                    value={page}
                    readOnly
                  />

                  <button
                    className={styles.rightPage}
                    onClick={() => onPageChange(page + 1)}
                    disabled={page >= totalPages}
                  >
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
