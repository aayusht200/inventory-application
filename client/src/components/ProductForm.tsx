import React, { useEffect, useState } from "react";
import {
  getOneProduct,
  updateProduct,
  deleteProduct,
} from "../helperFunctions/productService";
import { Input } from "./Input";
import { Button } from "./Button";
import { InputError } from "./InputError";
interface ProductFormProps {
  productId: string;
  onBack: () => void;
}
interface formDataProps {
  id: string;
  title: string;
  description: string;
  price: number;
  quantity: number;
  active: true;
  category_id: string;
}
const initialFormData: formDataProps = {
  id: "",
  title: "",
  description: "",
  price: 0,
  quantity: 0,
  active: true,
  category_id: "",
};

const ProductForm = ({ productId, onBack }: ProductFormProps) => {
  const [formData, setData] = useState<formDataProps>(initialFormData);
  const [error, setError] = useState<boolean>(false);
  useEffect(() => {
    getOneProduct(productId).then((data) => {
      setData(data);
    });
  }, [productId]);
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setError(false);
    setData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  }
  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    updateProduct(formData)
      .then(onBack)
      .catch(() => {
        setError(true);
      });
  }
  function handleDelete() {
    deleteProduct(productId)
      .then(onBack)
      .catch(() => {
        setError(true);
      });
  }
  const errorstatement = "Update failed try aganin";
  return (
    <form
      onSubmit={handleSubmit}
      className="text-md bg-surface flex h-fit flex-col items-center gap-4 rounded-2xl p-8 shadow md:text-lg lg:text-xl"
    >
      <fieldset className="input-fields relative flex flex-col gap-4">
        <Input
          label="Title:"
          value={formData?.title || "null"}
          id="title"
          type="text"
          onChange={handleChange}
        />
        <Input
          label="Description:"
          value={formData?.description || "null"}
          id="description"
          type="text"
          onChange={handleChange}
        />
        <Input
          label="Price:"
          value={formData?.price || "null"}
          id="price"
          type="number"
          onChange={handleChange}
        />
        <Input
          label="Quantity:"
          value={formData?.quantity || "null"}
          id="quantity"
          type="number"
          onChange={handleChange}
        />
      </fieldset>
      {error && <InputError message={errorstatement} />}
      <div className="form-action form-actions flex gap-10">
        <Button content="Back" onClick={onBack} type="button" />
        <Button content="Delete Product" onClick={handleDelete} type="button" />
        <Button content="Submit" type="submit" />
      </div>
    </form>
  );
};

export { ProductForm };
