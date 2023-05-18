export interface MenuValue {
  id: number;
  title: string;
  category: string;
  price: number;
  img: string;
  desc: string;
}

export interface AppProviderValue {
  menu: MenuValue[];
  categories: string[];
  handleFilter: (category: string) => void;
}
