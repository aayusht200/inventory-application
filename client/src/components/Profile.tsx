import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Input } from "./Input";
const Profile = () => {
  const { user } = useContext(AuthContext);
  function handleChange() {}
  return (
    <form className="text-md bg-surface flex h-fit flex-col items-center gap-4 rounded-2xl p-8 shadow md:text-lg lg:text-xl">
      <fieldset className="input-fields relative flex flex-col gap-4">
        <Input
          label="User Name:"
          type="text"
          id="username"
          value={user.username}
          onChange={handleChange}
        />
        <Input
          label="Email:"
          id="email"
          type="email"
          onChange={handleChange}
          value={user.email}
        />
        <Input
          label="Role:"
          id="role"
          type="text"
          onChange={handleChange}
          value={user.role}
          className="select-none"
        />
      </fieldset>
    </form>
  );
};

export { Profile };
