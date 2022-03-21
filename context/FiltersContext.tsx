import { createContext, FunctionComponent, useState } from "react";

export interface Filters {
  query: string;
  maxPrice: number;
  categories: Array<number>;
}

export type FiltersContextType = {
  filters: Filters;
  updateFilters: (key: any, value: any) => void;
};

const defaultValues: FiltersContextType = {
  filters: {
    query: "",
    maxPrice: 0,
    categories: [],
  },
  updateFilters: () => {},
};

export const FiltersContext = createContext<FiltersContextType>(defaultValues);

const FiltersContextProvider: FunctionComponent = ({ children }) => {
  const [filters, setFilters] = useState<Filters>(defaultValues.filters);

  const updateFilters = (key: any, value: any) => {
    setFilters({ ...filters, [key]: value });
  };

  return (
    <FiltersContext.Provider value={{ filters, updateFilters }}>
      {children}
    </FiltersContext.Provider>
  );
};

export default FiltersContextProvider;
