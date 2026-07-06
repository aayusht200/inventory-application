import type React from "react";
import { CartContext } from "./CartContext";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { ProductContext } from "./ProductContext";
interface CartProviderProps {
  children: React.ReactNode;
}

const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<Record<string, number>>({});
  const { user } = useContext(AuthContext);
  const [isDirty, setDirty] = useState<boolean>(false);
  const { products } = useContext(ProductContext);

  useEffect(() => {
    if (!user.username) return;
    else localStorage.setItem(`cart:${user.username}`, JSON.stringify(cart));
  }, [cart]);
  useEffect(() => {
    if (!user.username) {
      setCart({});
      return;
    }
    const localCart = localStorage.getItem(`cart:${user.username}`);
    if (localCart) {
      setCart(JSON.parse(localCart));
    } else {
      setCart({});
    }
  }, [user]);

  function addToCart(id: string) {
    setCart((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
    setDirty(true);
  }
  function removeFromCart(id: string) {
    if (cart[id] === 1) {
      setCart((prev) => {
        const { [id]: _, ...rest } = prev;
        return rest;
      });
      // const newCart = Object.entries(cart).filter((items) => items[0] !== id);
      // setCart(Object.fromEntries(newCart));
    } else setCart((prev) => ({ ...prev, [id]: (prev[id] ?? 0) - 1 }));
    setDirty(true);
  }
  function getCartValue() {
    return products
      .filter((items) => cart[items.id])
      .map((product) => product.price * cart[product.id])
      .reduce((acc, curr) => acc + curr, 0);
  }
  function clearCart() {
    setCart({});
    setDirty(true);
  }

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, getCartValue }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider };
