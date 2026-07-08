interface NewUser {
  username: string;
  email: string;
  password: string;
  role: "user" | "admin";
}
const API = import.meta.env.VITE_API_URL;

const signupService = async (newUser: NewUser) => {
  if (newUser.role === "admin") return signupServiceAdmin(newUser);
  return signupServiceUser(newUser);
};

const signupServiceUser = async (newUser: NewUser) => {
  return fetch(`${API}/api/users/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
    credentials: "include",
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Signup failed");
    }
    return response.json();
  });
};

const signupServiceAdmin = async (newUser: NewUser) => {
  return fetch(`${API}/api/users/signup-admin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
    credentials: "include",
    body: JSON.stringify(newUser),
  }).then((response) => {
    if (!response.ok) throw new Error("Signup Failed!");
    return response.json();
  });
};

export { signupService };
