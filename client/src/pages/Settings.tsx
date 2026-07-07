import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { logout } from "../helperFunctions/authService";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { initialUser } from "../context/AuthContext";
import { Header } from "../components/Header";
import { CartTracker } from "../components/CartTracker";
import { HomeIcon } from "@heroicons/react/16/solid";
import { Page } from "../components/Page";
import { Profile } from "../components/Profile";
import { Signup } from "./Signup";
import { CategoryCrud } from "../components/CategoryCrud";
import { ProductCrud } from "../components/ProductCrud";
type SettingsView = "profile" | "users" | "categories" | "products";
const Settings = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(AuthContext);
  const [activeView, setActiveView] = useState<SettingsView>("profile");

  function renderContent() {
    switch (activeView) {
      case "profile":
        return <Profile />;
      case "users":
        return <Signup />;
      case "categories":
        return <CategoryCrud />;
      case "products":
        return <ProductCrud />;
    }
  }
  const headercomponent = (
    <Header
      className=""
      title="Inventory App / Settings"
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
    <Page className="" header={headercomponent}>
      <div className="settings grid h-full w-full flex-1 grid-cols-[10rem_1fr] border">
        <div className="navbar flex flex-col border-r p-4">
          <Button content="Profile" onClick={() => setActiveView("profile")} />
          {user.role === "admin" && (
            <>
              <Button content="Users" onClick={() => setActiveView("users")} />
              <Button
                content="Categories"
                onClick={() => setActiveView("categories")}
              />
              <Button
                content="Products"
                onClick={() => setActiveView("products")}
              />
            </>
          )}

          <div className="mt-auto">
            <Button
              content="Logout"
              onClick={() => {
                setUser(initialUser);
                logout();
                navigate("/", { replace: true });
              }}
            />
          </div>
        </div>
        <div className="content">{renderContent()}</div>
      </div>
    </Page>
  );
};

export { Settings };
