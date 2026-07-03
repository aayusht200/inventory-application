import { useEffect, useState } from "react";
import { AuthContext, initialUser, type User } from "./AuthContext";
import { getUser } from "../helperFunctions/getUser.js";

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User>(initialUser);
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) return;
    getUser()
      .then((user) => setUser(user))
      .catch((error) => {
        console.error(error);
        setUser(initialUser);
      });
  }, []);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };
