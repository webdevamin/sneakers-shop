import type { GetServerSideProps, NextPage } from "next";
import Item from "../components/Item";
import Seo from "../components/Seo";
import Sidebar from "../components/Sidebar";
import { apiUrl } from "../utils/app";
import Layout from "../components/Layout";

type Props = {
  items: Array<Item>;
};

const Home: NextPage<Props> = ({ items }) => {
  return (
    <Layout>
      <Seo />
      <Sidebar />
      <section
        className="grow px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20 border-l-2 
      border-gray-100 py-10"
      >
        <h1 className="text-2xl font-bold mb-10">New Arrivals</h1>
        <section
          className="grid gap-3 grid-cols-1 lg:grid-cols-2 
         xl:grid-cols-3 2xl:grid-cols-4"
        >
          {items.map((item, index) => (
            <Item key={index} item={item} />
          ))}
        </section>
      </section>
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
