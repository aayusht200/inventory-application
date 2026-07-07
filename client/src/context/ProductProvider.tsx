import React, { useEffect, useState } from "react";
import { ProductContext, type ProductProps } from "./ProductContext";
import { getAllProduct } from "../helperFunctions/productService";
interface ProductProviderProps {
  children: React.ReactNode;
}

const ProductProvider = ({ children }: ProductProviderProps) => {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    getAllProduct()
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        console.log(err);
        setError("Product fetch request failed!");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [products]);

  return (
    <ProductContext.Provider value={{ products, setProducts, loading, error }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductProvider };
