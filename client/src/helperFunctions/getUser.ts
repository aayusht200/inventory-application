const getUser = async () => {
  const API = import.meta.env.VITE_API_URL;

  return fetch(`${API}/api/users/getuser`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
    credentials: "include",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch user");
      }
      return response.json();
    })
    .then((data) => {
      return data.user;
    });
};

export { getUser };
