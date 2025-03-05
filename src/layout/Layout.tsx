/* eslint-disable @typescript-eslint/no-unused-vars */
import { NavLink, Outlet } from "react-router-dom";
import styles from "./layout.module.css";
import NavBar from "../components/NavBar/NavBar";
import { useCart } from "../context/CartContext";

export default function Layout(): JSX.Element {
const { cart } = useCart();

const getTotalPrice = () => {
  return cart.reduce((total, item)=> total + item.price * item.quantity, 0).toFixed(2)
};

  return (
    <>
      <header className={styles.header}>
       <nav>
       <NavLink
          className={({ isActive }) => (isActive ? styles.linkActive : "")}
          to={"/"}
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? styles.linkActive : "")}
          to={"form-gender"}
        >
          Gender form
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? styles.linkActive : "")}
          to={"register-form"}
        >
          Registration
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? styles.linkActive : "")}
          to={"login-form"}
        >
          Login
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? styles.linkActive : "")}
          to={"products"}
        >
          Products
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? styles.linkActive : "")}
          to={"cart"}
        >
          Cart
        </NavLink>
       </nav>
       <span>Cart: {getTotalPrice()}€</span>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer className={styles.footer}>
        <NavBar />
      </footer>
    </>
  );
}
