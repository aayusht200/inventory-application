import { Page } from "../components/Page";
import { Header } from "../components/Header";
import { UserIcon } from "@heroicons/react/16/solid";
import { getAllProduct } from "../helperFunctions/productService";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Products = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
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
  return <Page header={headercontent}>Test</Page>;
};

export { Products };
