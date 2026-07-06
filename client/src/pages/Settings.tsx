import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { logout } from "../helperFunctions/authService";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { initialUser } from "../context/AuthContext";
const Settings = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);

  return (
    <div>
      <Button
        type="button"
        content="Logout"
        onClick={() => {
          setUser(initialUser);
          logout();
          navigate("/", { replace: true });
        }}
      />
    </div>
  );
};

export { Settings };
