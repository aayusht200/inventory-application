import type { ProductProps } from "../context/ProductContext";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
const CartCard = ({ title, price, image_url, id }: ProductProps) => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  return (
    <div className="cart-card-body text-text bg-primary grid h-50 w-300 grid-cols-[140px_1fr_200px_100px] items-center justify-center rounded-2xl px-10 text-center shadow">
      <div className="grid h-9/10 items-center rounded-3xl bg-white">
        <img
          src={`http://localhost:3000${image_url}`}
          alt={title}
          className="max-h-full max-w-full object-contain"
        />
      </div>
      <div className="cart-card-info h-fit">
        <div className="title line-clamp-2 text-xs font-light md:text-lg md:font-medium lg:text-xl lg:font-bold">
          {title}
        </div>
        <div className="price">₹{price.toLocaleString("en-IN")}</div>
      </div>
      <div className="cart-card-actions">
        <div className="add-remove flex w-fit gap-5 justify-self-center rounded-2xl bg-white p-1 pr-4 pl-4">
          <button
            onClick={() => removeFromCart(id)}
            className="bg-button hover:bg-button-hover text-button-text h-fit w-fit cursor-pointer rounded pr-2 pl-2 text-sm font-bold shadow hover:scale-105 md:text-lg"
          >
            -
          </button>
          <span className="text-primary self-center font-bold">
            {cart[id] ?? 0}
          </span>
          <button
            onClick={() => addToCart(id)}
            className="bg-button hover:bg-button-hover text-button-text w-fit cursor-pointer rounded pr-2 pl-2 text-sm font-bold shadow hover:scale-105 md:text-lg"
          >
            +
          </button>
        </div>
      </div>
      <div className="price">₹{(cart[id] * price).toFixed(2)}</div>
    </div>
  );
};

export { CartCard };
