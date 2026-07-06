import { createContext } from "react";

interface CartContext {
  cart: Record<string, number>;
  addToCart: (id: string) => void;
  removeFromCart: (id: string) => void;
  getCartValue: () => number;
  clearCart: () => void;
}

const emptyCart: Record<string, number> = {};
const CartContext = createContext<CartContext>({
  cart: emptyCart,
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  getCartValue: () => 0,
});
export { CartContext };
