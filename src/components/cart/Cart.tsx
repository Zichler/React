import styles from './cart.module.css'

import { useCart } from "../../context/CartContext"
import MyButton from "../myButton/MyButton";

export default function Cart():JSX.Element {
const { cart, clearCart, removeFromCart  } = useCart();

const getTotalPrice = () => {
  return cart.reduce((total, item)=> total + item.price * item.quantity, 0).toFixed(2)
}
  return (
    <div className={styles.cartContainer}>
      <h2>Cart</h2>
      {cart.length === 0 ? <p> Your cart is empty... </p> : 
        <>
        <div>
      {cart.map(el => (
        <div key={el.id}>
        <span>{el.title}  x{el.quantity} </span>
        <span style={{color: "red"}}>{(el.price * el.quantity).toFixed(2)}€</span>
     <button onClick={() => removeFromCart(el.id)}>delete</button>
     </div>
      ))}
      </div>
      <div>
        <h3> Total Price: {getTotalPrice()}€</h3>
      </div>
      <MyButton func={clearCart} variant="danger" text="clear cart"/>
        </>
      } 
    </div>
  )
} 