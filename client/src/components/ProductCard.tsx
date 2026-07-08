import type { ProductProps } from "../context/ProductContext";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
const ProductCard = ({ title, price, image_url, id }: ProductProps) => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  const API = import.meta.env.VITE_API_URL;
  return (
    <div className="card-body text-text bg-primary flex h-75 w-30 flex-col gap-3 rounded-2xl p-1 text-center shadow md:h-100 md:w-60 lg:h-125 lg:w-75">
      <div className="image h-3/4 rounded-2xl bg-white">
        <img
          src={`${API}${image_url}`}
          alt={title}
          className="h-full w-full object-contain mix-blend-multiply"
        />
      </div>
      <div className="card-info h-fit">
        <div className="title line-clamp-2 text-xs font-light md:text-lg md:font-medium lg:text-xl lg:font-bold">
          {title}
        </div>
        <div className="price">₹{price.toLocaleString("en-IN")}</div>
      </div>
      <div className="card-actions">
        {!cart[id] ? (
          <button
            onClick={() => addToCart(id)}
            className="bg-button hover:bg-button-hover text-button-text w-fit cursor-pointer rounded p-1 pr-4 pl-4 text-sm font-bold shadow hover:scale-105 md:text-lg"
          >
            Add to cart!
          </button>
        ) : (
          <div className="add-remove flex w-fit gap-5 justify-self-center rounded-2xl bg-white p-1 pr-4 pl-4">
            <button
              onClick={() => removeFromCart(id)}
              className="bg-button hover:bg-button-hover text-button-text h-fit w-fit cursor-pointer rounded pr-2 pl-2 text-sm font-bold shadow hover:scale-105 md:text-lg"
            >
              -
            </button>
            <span className="text-primary self-center font-bold">
              {cart[id]}
            </span>
            <button
              onClick={() => addToCart(id)}
              className="bg-button hover:bg-button-hover text-button-text w-fit cursor-pointer rounded pr-2 pl-2 text-sm font-bold shadow hover:scale-105 md:text-lg"
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export { ProductCard };
