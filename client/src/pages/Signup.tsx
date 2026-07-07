import { Header } from "../components/Header";
import { Page } from "../components/Page";
import { HomeIcon } from "@heroicons/react/16/solid";
import { CartTracker } from "../components/CartTracker";
import { SignupForm } from "../components/SignupForm";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const headercomponent = (
    <Header
      className=""
      title="Inventory App / Signup"
      rightContent={
        <>
          <CartTracker />
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
  return (
    <Page header={headercomponent}>
      <SignupForm />
    </Page>
  );
};

export { Signup };
