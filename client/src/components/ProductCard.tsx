import type { ProductProps } from "../context/ProductContext";
const ProductCard = ({
  title,
  price,
  image_url,
  quantity,
  description,
}: ProductProps) => {
  return (
    <div className="card-body text-text bg-primary flex h-75 w-30 flex-col gap-3 rounded-2xl p-1 text-center shadow md:h-100 md:w-60 lg:h-125 lg:w-75">
      <div className="image h-3/4 rounded-2xl bg-white">
        <img
          src={`http://localhost:3000${image_url}`}
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
        <button className="bg-button hover:bg-button-hover text-button-text w-fit cursor-pointer rounded pr-2 pl-2 text-sm font-bold shadow hover:scale-105 md:text-lg">
          Add to cart!
        </button>
      </div>
    </div>
  );
};

export { ProductCard };
