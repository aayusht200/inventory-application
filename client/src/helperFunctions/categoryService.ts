async function categoryService() {
  const API = import.meta.env.VITE_API_URL;
  return fetch(`${API}/api/category/getAll`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch user");
      }
      return response.json();
    })
    .then((data) => {
      return data;
    });
}
export { categoryService };
