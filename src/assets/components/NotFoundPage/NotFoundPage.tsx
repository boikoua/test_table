import styles from './NotFoundPage.module.scss';
import image from './../../img/not-found.png';

const NotFoundPage = () => {
  return (
    <section className={styles.page}>
      <img src={image} alt="Not Found image" />
    </section>
  );
};

export default NotFoundPage;
