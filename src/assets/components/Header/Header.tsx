import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <a className={styles.logo} href="#">
          Company <span>Logo</span>
        </a>
      </div>

      <div className={styles.right}>
        <a href="mailto:mike-dawson@gmail.com">
          <span className="icon-account"></span>
          <span>mike-dawson@gmail.com</span>
        </a>

        <a href="#">
          <span className="icon-sign-out"></span>
          <span>Sign Out</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
