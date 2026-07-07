interface updateProductProps {
  id: string;
  title: string;
  description: string;
  price: number;
  category_id: string;
  active: true;
  quantity: number;
}

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

const getOneProduct = async (id: string) => {
  return fetch(`http://localhost:3000/api/products/${id}`, {
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

const updateProduct = async (updateProductDetails: updateProductProps) => {
  return fetch(
    `http://localhost:3000/api/products/${updateProductDetails.id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      credentials: "include",
      body: JSON.stringify(updateProductDetails),
    },
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Update failed");
      }
      return response.json();
    })
    .then((data) => {
      return data;
    });
};

const deleteProduct = async (id: string) => {
  const response = await fetch(`http://localhost:3000/api/products/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Delete failed");
  }

  if (response.status === 204) {
    return;
  }

  return response.json();
};

export { getAllProduct, getOneProduct, updateProduct, deleteProduct };
