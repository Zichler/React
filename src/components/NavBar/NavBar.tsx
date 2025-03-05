import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

export default function NavBar(): JSX.Element {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.list}>
        <li className={styles.listElement}>
          <NavLink to="/coctail" className={styles.link}>
            Coctail
          </NavLink>
        </li>
        <li className={styles.listElement}>
          <NavLink to="/counter" className={styles.link}>
            Counter
          </NavLink>
        </li>
        <li className={styles.listElement}>
          <NavLink to="/bitcoin" className={styles.link}>
            Bitcoin
          </NavLink>
        </li>
        <li className={styles.listElement}>
          <NavLink to="/playground" className={styles.link}>
            Playground
          </NavLink>
        </li>
        <li className={styles.listElement}>
          <NavLink to="/userspage" className={styles.link}>
            Userspage
          </NavLink>
        </li>
        <li className={styles.listElement}>
          <NavLink to="/products" className={styles.link}>
            Products
          </NavLink>
        </li>
        <li className={styles.sandwich}>
          <NavLink to="/sandwich" className={styles.link}>
          Sandwich
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
