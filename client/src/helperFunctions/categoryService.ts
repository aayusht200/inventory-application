async function categoryService() {
  return fetch("http://localhost:3000/api/category/getAll", {
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
