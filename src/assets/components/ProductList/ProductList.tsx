import { useDispatch, useSelector } from 'react-redux';
import ProductItem from '../ProductItem';
import styles from './ProductList.module.scss';
import { useEffect, useState } from 'react';
import { fetchItems } from '../../store/features/itemsSlice';
import { AppDispatch, RootState } from '../../store/store';
import Loader from '../Loader';
import ProductsTable from '../ProductsTable';
import { useSearchParams } from 'react-router-dom';

const ProductList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items, loading, error } = useSelector(
    (state: RootState) => state.items
  );

  const [searchValue, setSearchValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  useEffect(() => {
    const query = searchParams.get('query') || '';
    setSearchValue(query);
  }, [searchParams]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchValue(value);
    setSearchParams({ query: value });
  };

  const showItems = items
    .filter((item) =>
      item.Name.toLowerCase().includes(searchValue.toLowerCase())
    )
    .map((item) => <ProductItem key={item.Id} item={item} />);

  return (
    <section className={styles.products}>
      <h2 className={styles.title}>Product List</h2>

      <p className={styles.text}>
        Review and manage the products available on the marketplace.
      </p>

      <div className={styles.search}>
        <input
          className={styles.input}
          value={searchValue}
          onChange={handleSearchChange}
          type="text"
          placeholder="Search"
        />
        <button className={styles.btn}>
          <span className="icon-search"></span>
        </button>
      </div>

      {loading && <Loader />}

      {!loading && error && (
        <h3 className={styles.error}>
          Error when loading data from the server...
        </h3>
      )}

      {!loading && !error && <ProductsTable items={showItems} />}

      <button className={styles.submit}>Submit</button>
    </section>
  );
};

export default ProductList;
