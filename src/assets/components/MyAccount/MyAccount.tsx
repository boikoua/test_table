import styles from './MyAccount.module.scss';
import image from './../../img/my-account-bg.png';

const MyAccount = () => {
  return (
    <section className={styles.page}>
      <img src={image} alt="Development image" />
    </section>
  );
};

export default MyAccount;
