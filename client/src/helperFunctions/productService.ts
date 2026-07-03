const getAllProduct = async () => {
  return fetch("http://localhost:3000/api/products", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Fetching failed");
      }
      return response.json();
    })
    .then((data) => {
      return data;
    });
};

export { getAllProduct };
