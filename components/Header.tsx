import React, { FunctionComponent, useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { FiltersContext } from "../context/FiltersContext";

const Header: FunctionComponent = () => {
  const filtersContext = useContext(FiltersContext);
  console.log(filtersContext);
  const [query, setQuery] = useState(
    filtersContext ? filtersContext.query : ""
  );

  const onSubmit = (e: React.FormEvent) => {};
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {};

  return (
    <header className="flex justify-between items-center px-16 py-8 border-b border-gray-100 shadow-sm">
      <h1 className="font-bold text-2xl">
        <Link href={"/"}>
          <a>Shoe.</a>
        </Link>
      </h1>
      <div className="w-1/2">
        <div className="border border-gray-100 rounded-lg flex items-center shadow">
          <div className="px-3">
            <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
          </div>
          <form onSubmit={onSubmit} className="w-full">
            <input
              type="text"
              name="query"
              id="query"
              className="p-2 rounded-r-lg w-full focus:outline-none focus:ring"
              onChange={onChange}
            />
          </form>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <FontAwesomeIcon icon={faShoppingBasket} className="text-xl" />
        <div className="w-8 h-8 bg-gray bg-rose-400 flex justify-center items-center rounded-full">
          <p className="font-bold text-white text-xs">AI</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
