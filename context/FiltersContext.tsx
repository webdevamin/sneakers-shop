import { createContext, FunctionComponent, useState } from "react";

interface Filters {
  query: string;
  priceRange: string;
  categories: Array<number>;
}

const initFilters: Filters = {
  query: "",
  priceRange: "",
  categories: [],
};

const FiltersContext = createContext<Filters | null>(initFilters);

const FiltersContextProvider: FunctionComponent = ({ children }) => {
  const [filters, setFilters] = useState(initFilters);

  const updateFilters = (prop: any) => {
    setFilters()
  }

  return (
    <FiltersContext.Provider value={filters}>
      {children}
    </FiltersContext.Provider>
  );
};

export { FiltersContext, FiltersContextProvider };
