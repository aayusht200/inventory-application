interface LoginCredentials {
  email: string;
  password: string;
}

const authService = async (credentials: LoginCredentials) => {
  const API = import.meta.env.VITE_API_URL;

  return fetch(`${API}/api/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
    credentials: "include",
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Login failed");
    }
    return response.json();
  });
};
const logout = () => {
  localStorage.removeItem("accessToken");
};

export { authService, logout };
