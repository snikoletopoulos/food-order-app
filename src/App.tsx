import "./App.css";
import { useState } from "react";
import CartProvider from './store/CartProvider'
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartIsShown, setCartIsShown] = useState<boolean>(false);

  const showCartHandler = ():void => {
    setCartIsShown(true);
  };

  const hideCartHandler = ():void => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
