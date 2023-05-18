import { useAppContext } from "../hooks/AppContext";
type Props = { value: string };

function CategoryItem({ value }: Props) {
  const { handleFilter } = useAppContext();
  return (
    <button
      onClick={() => handleFilter(value)}
      className="text-xl sm:text-2xl text-amber-600 hover:text-amber-500 transition-colors"
    >
      {value}
    </button>
  );
}

export default CategoryItem;
