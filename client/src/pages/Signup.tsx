import { AuthContext } from "../context/AuthContext";
import React, { useContext, useState } from "react";
import { Header } from "../components/Header";
import { Card } from "../components/Card";
import { Input } from "../components/Input";
import { ResetButton } from "../components/ResetButton";
import { Button } from "../components/Button";
import { InputError } from "../components/InputError";
import { signupService } from "../helperFunctions/signupService";
import { useNavigate } from "react-router-dom";

interface NewUser {
  username: string;
  email: string;
  password: string;
  role: "admin" | "user";
}

const initialNewUser: NewUser = {
  username: "",
  email: "",
  password: "",
  role: "user",
};

const Signup = () => {
  const { user } = useContext(AuthContext);
  const [newUser, setNewUser] = useState<NewUser>(initialNewUser);
  const [error, setErrorMessage] = useState(false);
  const navigate = useNavigate();
  const signup = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    signupService(newUser).then(() => {
      if (user.role !== "admin") {
        navigate(`/login`);
      } else navigate("/products");
    });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrorMessage(false);
    setNewUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const errorstatement = "Username / Email already in use.";
  const headercomponent = <Header title="Inventory App / Signup" />;
  return (
    <Card header={headercomponent}>
      <form
        onSubmit={signup}
        className="text-md bg-surface flex flex-col items-center gap-4 rounded-2xl p-8 shadow md:text-lg lg:text-xl"
      >
        <fieldset className="input-fields relative flex flex-col gap-4">
          <ResetButton resetFuncion={() => setNewUser(initialNewUser)} />
          <Input
            label="User Name:"
            id="username"
            type="text"
            onChange={handleChange}
            value={newUser.username}
          />
          <Input
            label="Email:"
            id="email"
            type="email"
            onChange={handleChange}
            value={newUser.email}
          />
          <Input
            label="Password:"
            id="password"
            type="password"
            onChange={handleChange}
            value={newUser.password}
          />
          {user.role === "admin" && (
            <fieldset className="border-divider flex gap-4 border p-1 pl-2">
              <legend className="ml-2 pr-2 pl-2">Role</legend>
              <div className="flex gap-1">
                <input
                  type="radio"
                  id="admin"
                  name="role"
                  value="admin"
                  onChange={handleChange}
                />
                <label htmlFor="admin">Admin</label>
              </div>
              <div className="flex gap-1">
                <input
                  type="radio"
                  id="user"
                  name="role"
                  value="user"
                  onChange={handleChange}
                  defaultChecked
                />
                <label htmlFor="user">User</label>
              </div>
            </fieldset>
          )}
        </fieldset>
        {error && <InputError message={errorstatement} />}
        <div className="form-actions flex gap-10">
          <Button type="submit" content="Signup" className="" />
        </div>
      </form>
    </Card>
  );
};

export { Signup };
