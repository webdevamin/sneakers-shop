import React, {
  FunctionComponent,
  useState,
  ChangeEvent,
  useContext,
  useEffect,
} from "react";
import useSWR from "swr";
import Loader from "./Loader";
import { FiltersContext } from "../context/FiltersContext";

interface Category {
  id: number;
  name: string;
}

type Props = {
  priceRange: {
    lowestPrice: number;
    highestPrice: number;
  };
};

const fetcher = async (
  input: RequestInfo,
  init: RequestInit,
  ...args: any[]
) => {
  const res = await fetch(input, init);
  return res.json();
};

const Sidebar: FunctionComponent<Props> = ({ priceRange }) => {
  const { updateFilters } = useContext(FiltersContext);
  const { lowestPrice, highestPrice } = priceRange;
  const [maxPrice, setMaxPrice] = useState(highestPrice);
  const [categoryIds, setCategoryIds] = useState<Array<number>>([]);

  const handleMouseUp = () => updateFilters("maxPrice", maxPrice);

  const handlePriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(parseInt(e.currentTarget.value));
  };

  const handleCatChange = (e: ChangeEvent<HTMLInputElement>) => {
    const id = parseInt(e.currentTarget.id);
    let updatedCategoryIds;

    if (categoryIds.includes(id)) {
      updatedCategoryIds = categoryIds.filter(
        (categoryId) => categoryId !== id
      );
      setCategoryIds(updatedCategoryIds);
    } else {
      updatedCategoryIds = [...categoryIds, id];
      setCategoryIds(updatedCategoryIds);
    }

    updateFilters("categories", updatedCategoryIds);
  };

  const { data: categories, error } = useSWR("/api/categories", fetcher);

  useEffect(() => {
    if (categories) {
      setCategoryIds(categories.map((category: any) => category.id));
    }
  }, [categories]);

  if (error) {
    return (
      <p className="w-1/5">
        Cannot get categories at this moment. Please try again later.
      </p>
    );
  }

  if (!categories) return <Loader />;

  return (
    <aside className="flex flex-col w-4/12 md:max-w-sm">
      <section className="border-b-2 border-gray-100 pl-16 py-8">
        <h1 className="font-semibold pb-5 text-lg">Categories</h1>
        <div className="flex flex-col gap-1.5">
          {categories.map((category: Category) => {
            const { id, name } = category;

            return (
              <div key={id}>
                <div className="form-check">
                  <input
                    type="checkbox"
                    id={id.toString()}
                    defaultChecked
                    onChange={handleCatChange}
                  />
                  <label
                    className="inline-block text-gray-500"
                    htmlFor={id.toString()}
                  >
                    {name}
                  </label>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className="pl-16 py-8">
        <h1 className="font-semibold pb-5">Price range</h1>
        <small className="block font-semibold pb-1">€{maxPrice}</small>
        <div className="relative pt-1 w-3/4">
          <input
            type="range"
            className="w-full"
            min={lowestPrice}
            max={highestPrice}
            value={maxPrice}
            id="price_range"
            onChange={handlePriceChange}
            onMouseUp={handleMouseUp}
          />
          <div className="flex justify-between">
            <small>€{lowestPrice}</small>
            <small>€{highestPrice}</small>
          </div>
        </div>
      </section>
    </aside>
  );
};

export default Sidebar;
