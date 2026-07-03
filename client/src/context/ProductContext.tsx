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
  image_url: string;
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
  image_url: "",
};
export interface ProductContextProps {
  products: ProductProps[];
  setProducts: React.Dispatch<React.SetStateAction<ProductProps[]>>;
  loading: boolean;
  error: string | null;
}

const ProductContext = createContext<ProductContextProps>({
  products: [initialProduct],
  setProducts: () => {},
  loading: true,
  error: null,
});

export { ProductContext };
