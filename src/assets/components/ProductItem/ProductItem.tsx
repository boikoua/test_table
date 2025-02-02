import { Iitem } from '../../types/Iitem';
import styles from './ProductItem.module.scss';

type Props = {
  item: Iitem;
};

const ProductItem: React.FC<Props> = ({ item }) => {
  const { Image, Name, Category, ProductPrice, Country, Status } = item;

  const countryArray = JSON.parse(Country);

  const showCountry = countryArray
    .map((country: string) => country + '\n')
    .join(', ');

  console.log(showCountry);

  return (
    <tr className={styles.product}>
      <td>
        {Image ? (
          <img className={styles.img} src={Image} alt={Name} />
        ) : (
          <span className={styles.cube}></span>
        )}
      </td>
      <td>{Name ? Name : '-'}</td>
      <td>{Category ? Category : '-'}</td>
      <td>${ProductPrice}</td>
      <td>{Country ? showCountry : '-'}</td>
      <td>{Status ? Status : '-'}</td>
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
