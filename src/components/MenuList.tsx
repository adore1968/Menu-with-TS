import { useAppContext } from "../hooks/AppContext";
import MenuItem from "./MenuItem";

function MenuList() {
  const { menu } = useAppContext();
  return (
    <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
      {menu.map((value) => (
        <MenuItem key={value.id} value={value} />
      ))}
    </div>
  );
}

export default MenuList;
