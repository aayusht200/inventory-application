import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import { ProductForm } from "./ProductForm";
const ProductCrud = () => {
  const { products } = useContext(ProductContext);
  const [activeView, setActiveView] = useState<"products" | "productform">(
    "products",
  );
  const [selectedProductId, setSelectedProductId] = useState<string | null>(
    null,
  );

  if (activeView === "productform" && selectedProductId) {
    return (
      <ProductForm
        productId={selectedProductId}
        onBack={() => setActiveView("products")}
      />
    );
  }

  return (
    <div className="product-list">
      <h1 className="text-2xl font-bold">Product List:</h1>
      <ul className="ml-5 grid list-disc gap-2">
        {products.map((product) => (
          <li
            key={product.id}
            onClick={() => {
              setSelectedProductId(product.id);
              setActiveView("productform");
            }}
            className="w-fit cursor-pointer"
          >
            {product.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export { ProductCrud };
