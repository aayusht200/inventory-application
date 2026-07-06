import React, { createContext } from "react";

interface CartContext {
  cart: Record<string, number>;
  addToCart: (id: string) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
}

const emptyCart: Record<string, number> = {};
const CartContext = createContext<CartContext>({
  cart: emptyCart,
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
});
export { CartContext };
