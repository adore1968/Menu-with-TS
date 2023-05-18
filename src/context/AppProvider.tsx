import { useState } from "react";
import { AppContext } from "../hooks/AppContext";
import menuData from "../data/menuData";
import { MenuValue } from "../shared/interfaces";

type Props = { children: JSX.Element };

const allCategories = [
  "all",
  ...new Set(menuData.map((value) => value.category)),
];

export function AppProvider({ children }: Props) {
  const [menu, setMenu] = useState<MenuValue[]>(menuData);
  const [categories, setCategories] = useState<string[]>(allCategories);

  const handleFilter = (category: string) => {
    console.log(category);
    if (category === "all") setMenu(menuData);
    else {
      const newMenu: MenuValue[] = menuData.filter(
        (value) => value.category === category
      );
      setMenu(newMenu);
    }
  };

  return (
    <AppContext.Provider value={{ menu, categories, handleFilter }}>
      {children}
    </AppContext.Provider>
  );
}
