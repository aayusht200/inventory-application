import { createContext } from "react";

export interface User {
  username: string;
  email: string;
  role: "admin" | "user";
}

export const initialUser: User = {
  username: "",
  email: "",
  role: "user",
};

const AuthContext = createContext<User>(initialUser);

export { AuthContext };
