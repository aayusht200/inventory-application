import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { Page } from "../components/Page";
import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { InputError } from "../components/InputError";
import { ResetButton } from "../components/ResetButton";
import { AuthContext } from "../context/AuthContext";
import { authService } from "../helperFunctions/authService";
import { HomeIcon } from "@heroicons/react/16/solid";

const initialLoginState = {
  email: "",
  password: "",
};

const errorStatement = "Incorrect Email/Password Address";
const Login = () => {
  const [login, setLogin] = useState(initialLoginState);
  const [errorState, setError] = useState("");
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    authService(login)
      .then((data) => {
        localStorage.setItem("accessToken", data.accessToken);
        setUser(data.user);
        navigate("/product");
      })
      .catch(() => {
        setError(errorStatement);
      });
  }
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setLogin((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setError("");
  }
  function handleSignUp() {
    navigate("/signup");
  }
  const headercontent = (
    <Header
      className=""
      title="Inventory App / Login"
      rightContent={
        <HomeIcon
          className="icon"
          onClick={() => {
            navigate("/products");
          }}
        />
      }
    />
  );
  return (
    <Page className="login" header={headercontent}>
      <form
        onSubmit={handleSubmit}
        className="text-md bg-surface flex flex-col items-center gap-4 rounded-2xl p-8 shadow md:text-lg lg:text-xl"
      >
        <fieldset className="input-fields relative flex flex-col gap-4">
          <ResetButton
            resetFuncion={() => {
              setLogin(initialLoginState);
            }}
          />
          <Input
            label="Email:"
            id="email"
            type="email"
            onChange={handleChange}
            value={login.email}
            placeholder="example@example.com"
            className=""
          />

          <Input
            label="Password:"
            id="password"
            type="password"
            onChange={handleChange}
            value={login.password}
            className=""
          />
        </fieldset>
        {errorState && <InputError message={errorState} />}
        <div className="form-actions flex gap-10">
          <Button type="submit" content="Submit" className="" />
          <Button
            type="button"
            content="Sign Up"
            onClick={handleSignUp}
            className=""
          />
        </div>
      </form>
    </Page>
  );
};

export { Login };
