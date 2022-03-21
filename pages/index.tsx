import type { GetServerSideProps, NextPage } from "next";
import Item from "../components/Item";
import Seo from "../components/Seo";
import Sidebar from "../components/Sidebar";
import { apiUrl } from "../utils/app";
import Layout from "../components/Layout";
import { useState, useContext, useEffect } from "react";
import { FiltersContext } from "../context/FiltersContext";

type Props = {
  items: Array<Item>;
};

const Home: NextPage<Props> = ({ items }) => {
  const { filters } = useContext(FiltersContext);
  const [filteredItems, setFilteredItems] = useState(items);

  const sortedItemsByPrice = items.sort(
    (firstItem: Item, nextItem: Item) => firstItem.price - nextItem.price
  );
  const lowestPrice = sortedItemsByPrice[0].price;
  const highestPrice = sortedItemsByPrice[sortedItemsByPrice.length - 1].price;

  useEffect(() => {
    if (filters) {
      const { query, maxPrice, categories } = filters;
      let initFilteredItems = items;

      if (query) {
        initFilteredItems = initFilteredItems.filter((item) => {
          return item.name.includes(query);
        });
      }

      if (maxPrice) {
        initFilteredItems = initFilteredItems.filter((item) => {
          return item.price <= maxPrice;
        });
      }

      if (categories.length >= 1) {
        initFilteredItems = initFilteredItems.filter((item) => {
          return categories.includes(item.categoryId);
        });
      }

      setFilteredItems(initFilteredItems);
    }
  }, [filters, items]);

  return (
    <Layout>
      <Seo />
      <Sidebar priceRange={{ lowestPrice, highestPrice }} />
      {filteredItems.length ? (
        <section
          className="grow px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20 border-l-2 
          border-gray-100 py-10"
        >
          <h1 className="text-2xl font-bold mb-10">New Arrivals</h1>
          <section
            className="grid gap-3 grid-cols-1 lg:grid-cols-2 
             xl:grid-cols-3 2xl:grid-cols-4"
          >
            {filteredItems.map((item, index) => (
              <Item key={index} item={item} />
            ))}
          </section>
        </section>
      ) : (
        <p className="text-center w-full pt-20 font-semibold text-lg">
          Please change the filters to see your desired results.
        </p>
      )}
    </Layout>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const items = await (await fetch(`${apiUrl}/items`)).json();

  return {
    props: {
      items,
    },
  };
};
