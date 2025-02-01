import styles from './ProductItem.module.scss';

const ProductItem = () => {
  return (
    <tr className={styles.product}>
      <td>
        <span className={styles.cube}></span>
      </td>
      <td>EchoSound Wireless Earbuds</td>
      <td>Audio Devices</td>
      <td>$49.99</td>
      <td>US</td>
      <td>Pending Approval</td>
      <td>
        <button className={styles.btn}>
          <span className="icon-pen"></span>
        </button>
        <button className={styles.btn}>
          <span className="icon-delete"></span>
        </button>
      </td>
    </tr>
  );
};

export default ProductItem;
