import Header from "./Header";
import React from "react";
import { FiltersContextProvider } from "../context/FiltersContext";

const Layout = ({ children }) => {
  return (
    <FiltersContextProvider>
      <Header />
      <main className="flex grow">{children}</main>
    </FiltersContextProvider>
  );
};

export default Layout;
