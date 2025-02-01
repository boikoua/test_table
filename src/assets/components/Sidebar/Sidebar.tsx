import styles from './Sidebar.module.scss';

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <nav className={styles.nav}>
        <ul className={styles.items}>
          <li className={styles.item}>
            <a href="#" className={`${styles.link} ${styles.active}`}>
              <span>Product List</span>
              <span className="icon-arrow"></span>
            </a>
          </li>
          <li className={styles.item}>
            <a href="#" className={styles.link}>
              <span>My Account</span>
              <span className="icon-arrow"></span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
