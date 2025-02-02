import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.scss';
import cn from 'classnames';

const Sidebar = () => {
  const handleIsActive = ({ isActive }: { isActive: boolean }) =>
    cn(styles.link, { [styles.active]: isActive });

  return (
    <aside className={styles.sidebar}>
      <nav className={styles.nav}>
        <ul className={styles.items}>
          <li className={styles.item}>
            <NavLink to="/" className={handleIsActive}>
              <span>Product List</span>
              <span className="icon-arrow"></span>
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink to="/account" className={handleIsActive}>
              <span>My Account</span>
              <span className="icon-arrow"></span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
