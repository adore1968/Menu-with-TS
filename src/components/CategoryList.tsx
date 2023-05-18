import { useAppContext } from "../hooks/AppContext";
import CategoryItem from "./CategoryItem";

function CategoryList() {
  const { categories } = useAppContext();
  return (
    <div className="flex justify-center mb-12">
      <div className="flex gap-5 items-center">
        {categories.map((value, index) => (
          <CategoryItem key={index} value={value} />
        ))}
      </div>
    </div>
  );
}

export default CategoryList;
