import { createContext } from "react";

export interface User {
  username: string;
  email: string;
  role: "admin" | "user";
}

export interface AuthContextType {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
}

export const initialUser: User = {
  username: "",
  email: "",
  role: "user",
};

export const AuthContext = createContext<AuthContextType>({
  user: initialUser,
  setUser: () => {},
});
