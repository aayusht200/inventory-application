import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { HomeIcon } from "@heroicons/react/16/solid";
import { Page } from "../components/Page";
import { Button } from "../components/Button";
import { CartContext } from "../context/CartContext";
import { ProductContext } from "../context/ProductContext";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { UserIcon } from "@heroicons/react/16/solid";
import { CartCard } from "../components/CartCard";

const Cart = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { products } = useContext(ProductContext);
  const { cart, getCartValue, clearCart } = useContext(CartContext);
  const total = getCartValue();
  const headercontent = (
    <Header
      className=""
      title="Inventory App / Login"
      rightContent={
        <>
          <UserIcon
            className="icon"
            onClick={() => {
              if (user.username) navigate("/setting");
              else navigate("/login");
            }}
          />
          <HomeIcon
            className="icon"
            onClick={() => {
              navigate("/products");
            }}
          />
        </>
      }
    />
  );
  if (Object.entries(cart).reduce((total, [, qty]) => total + qty, 0) < 1)
    return (
      <Page className="Cart h-dvh" header={headercontent}>
        <h1 className="text-heading text-4xl font-bold">Cart is empty!</h1>
      </Page>
    );
  return (
    <Page className="Cart" header={headercontent}>
      <div className="cart-view flex flex-col gap-5">
        {products
          .filter((items) => cart[items.id])
          .map((product) => (
            <CartCard key={product.id} {...product} />
          ))}
        <div className="cart-control flex items-center">
          <div className="clear-cart">
            <Button content="Clear Cart" onClick={() => clearCart()} />
          </div>
          <div className="total ml-auto">
            ₹
            {total.toLocaleString("en-IN", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </div>
        </div>
      </div>
    </Page>
  );
};

export { Cart };
