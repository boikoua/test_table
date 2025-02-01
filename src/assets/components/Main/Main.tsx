import ProductList from '../ProductList';
import Sidebar from '../Sidebar';
import styles from './Main.module.scss';

const Main = () => {
  return (
    <main className={styles.main}>
      <Sidebar />
      <ProductList />
    </main>
  );
};

export default Main;
