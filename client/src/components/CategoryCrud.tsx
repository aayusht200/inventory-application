import { useEffect, useState } from "react";
import { categoryService } from "../helperFunctions/categoryService";
interface categoriesProp {
  id: string;
  name: string;
  description: string;
}

const CategoryCrud = () => {
  const [categories, setCategory] = useState<categoriesProp[]>([]);
  const [error, setError] = useState<boolean>(false);
  useEffect(() => {
    categoryService()
      .then((data) => setCategory(data))
      .catch(() => {
        setError(true);
      });
  }, []);
  console.log(error);
  return (
    <div>
      <h1 className="text-2xl font-bold">Category List:</h1>
      <ul className="list-disc">
        {Object.entries(categories).map(([, category]) => {
          return (
            <li
              key={category.id}
              className="ml-7"
              typeof="circle"
            >{`${category.name[0].toUpperCase()}${category.name.slice(1)}`}</li>
          );
        })}
      </ul>
    </div>
  );
};

export { CategoryCrud };
