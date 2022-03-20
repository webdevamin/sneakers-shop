import React, {
  FunctionComponent,
  useState,
  MouseEvent,
  ChangeEvent,
} from "react";
import useSWR from "swr";
import Loader from "./Loader";

interface Category {
  id: number;
  name: string;
}

const fetcher = async (
  input: RequestInfo,
  init: RequestInit,
  ...args: any[]
) => {
  const res = await fetch(input, init);
  return res.json();
};

const Sidebar: FunctionComponent = () => {
  const [price, setPrice] = useState(250);

  const handleMouseUp = (e: MouseEvent) => {
    // e.preventDefault();
    console.log(price);
    // setPrice(value);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(parseInt(e.currentTarget.value));
    setPrice(parseInt(e.currentTarget.value));
  };

  const { data: categories, error } = useSWR("/api/categories", fetcher);

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
                  <input type="checkbox" id={name} />
                  <label className="inline-block text-gray-500" htmlFor={name}>
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
        <small className="block font-semibold pb-1">€{price}</small>
        <div className="relative pt-1 w-3/4">
          <input
            type="range"
            className="w-full"
            min={250}
            max={979}
            value={price}
            id="price_range"
            onChange={handleChange}
            onMouseUp={handleMouseUp}
          />
          <div className="flex justify-between">
            <small>€250</small>
            <small>€979</small>
          </div>
        </div>
      </section>
    </aside>
  );
};

export default Sidebar;
