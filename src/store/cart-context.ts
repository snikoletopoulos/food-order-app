import React, { createContext } from "react";

const CartContext = createContext<IContext>({
  items: [],
  totalAmount: 0,
  addItem: item => {},
  removeItem: id => {},
  clearCart: () => {}
});

export default CartContext;

export interface IContext {
  items: IMeals[];
  totalAmount: number;
  addItem: React.Dispatch<(item: IMeals) => void>;
  removeItem: React.Dispatch<(id: string) => void>;
  clearCart: React.Dispatch<() => void>;
}

export interface IMeals {
  id: string;
  name: string;
  description?: string;
  price: number;
  amount: number;
}