import React, { createContext } from "react";

interface CartContext {
  cart: Record<string, number>;
  setCart: React.Dispatch<React.SetStateAction<Record<string, number>>>;
}

const emptyCart: Record<string, number> = {};
const CartContext = createContext<CartContext>({
  cart: emptyCart,
  setCart: () => {},
});
export { CartContext };
