import type { ProductProps } from "../context/ProductContext";
const ProductCard = ({ ...product }: ProductProps) => {
  console.log(product);
  return (
    <div className="card-body h-25 border p-1 md:h-50 lg:h-75">
      <div className="image">
        <img
          src={`http://localhost:3000${product.image_url}`}
          alt={product.title}
          className="h-1/3 w-full"
        />
      </div>
      <div className="card-info">
        <div className="title">{product.title}</div>
        <div className="description">{product.description}</div>
      </div>
    </div>
  );
};

export { ProductCard };
