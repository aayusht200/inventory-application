import { ShoppingCartIcon } from "@heroicons/react/16/solid";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const CartTracker = () => {
  const { cart } = useContext(CartContext);
  const count = Object.entries(cart).reduce((total, [, qty]) => total + qty, 0);
  const navigate = useNavigate();
  return (
    <div className="cart relative">
      <ShoppingCartIcon className="icon" onClick={() => navigate("/cart")} />
      {count > 0 && (
        <span className="bg-primary absolute -top-1 -right-1 flex h-5 w-5 animate-bounce items-center justify-center rounded-full text-xs text-white">
          {count}
        </span>
      )}
    </div>
  );
};

export { CartTracker };
