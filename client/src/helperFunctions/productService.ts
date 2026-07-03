const getAllProduct = async () => {
  return fetch("http://localhost:3000/api/products", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
};

export { getAllProduct };
