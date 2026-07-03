import { Page } from "../components/Page";
import { Header } from "../components/Header";
import { UserIcon } from "@heroicons/react/16/solid";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ProductContext } from "../context/ProductContext";
import { ProductCard } from "../components/ProductCard";
import type { ProductProps } from "../context/ProductContext";
interface ErrorProps {
  error: string | null;
}
interface RenderGridProps {
  products: ProductProps[];
}
const ProductGrid = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { products, loading, error } = useContext(ProductContext);
  const headercontent = (
    <Header
      title="Inventory App"
      rightContent={
        <UserIcon
          className="icon"
          onClick={() => {
            if (user.role != "admin") navigate("/login");
            else navigate("/signup");
          }}
        />
      }
    />
  );
  return (
    <Page header={headercontent}>
      {loading ? (
        <LoadingState />
      ) : error ? (
        <ErrorState error={error} />
      ) : products.length === 0 ? (
        <EmptyState />
      ) : (
        <RenderGrid products={products} />
      )}
    </Page>
  );
};

const LoadingState = () => {
  return <>Loading...</>;
};

const ErrorState = ({ error }: ErrorProps) => {
  return <>{error}</>;
};

const EmptyState = () => {
  return <></>;
};
const RenderGrid = ({ products }: RenderGridProps) => {
  return (
    <div className="product-grid grid grid-cols-4 gap-5">
      {products.map((product) => {
        if (product.active === false) return;
        return <ProductCard key={product.id} {...product} />;
      })}
    </div>
  );
};

export { ProductGrid };
