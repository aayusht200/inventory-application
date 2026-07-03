import { createContext } from "react";

export interface ProductProps {
  active: true | false;
  category_id: string;
  created_at: string;
  created_by: string;
  description: string;
  id: string;
  price: number;
  quantity: number;
  title: string;
}

export interface ProductContextProps {
  products: ProductProps[];
  setProducts: React.Dispatch<React.SetStateAction<ProductProps[]>>;
  loading: boolean;
}

const initialProduct = {
  active: false,
  category_id: "",
  created_at: "",
  created_by: "",
  description: "",
  id: "",
  price: 0,
  quantity: 0,
  title: "",
};

const ProductContext = createContext<ProductContextProps>({
  products: [initialProduct],
  setProducts: () => {},
  loading: true,
});

export { ProductContext };
