import styles from "./Cart.module.css";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";

const Cart = props => {
  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartContext.items.map(item => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
  const hasItems = cartContext.items.length > 0;

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={styles.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
