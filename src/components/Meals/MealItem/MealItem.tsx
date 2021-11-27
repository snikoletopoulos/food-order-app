import styles from "./MealItem.module.css";
import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import MealItemForm from "./MealItemForm";

const MealItem = ( props: Props ) => {
  const cartContext = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount: number):void => {
    cartContext.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount,
    });
  };

  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;

interface Props {
  id: string;
  name: string;
  description: string;
  price: number;
}