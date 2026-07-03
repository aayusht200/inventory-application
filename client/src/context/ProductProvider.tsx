import React, { useState } from "react";
import { ProductContext, type ProductProps } from "./ProductContext";

interface ProductProviderProps {
  children: React.ReactNode;
}

const ProductProvider = ({ children }: ProductProviderProps) => {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  return (
    <ProductContext.Provider value={{ products, setProducts, loading }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductProvider };
