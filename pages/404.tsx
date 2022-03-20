import type { NextPage } from "next";
import Link from "next/link";
import Seo from "../components/Seo";

const ClientError: NextPage = () => {
  return (
    <>
      <Seo />
      <div
        className="w-screen self-center h-screen flex justify-center 
      items-center px-8 flex-col"
      >
        <section className="flex justify-center items-center flex-col gap-8">
          <div className="flex justify-center items-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-indigo-600">
              404
            </h1>
            <div className="border-l ml-5 pl-5">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-left pb-2">
                Page not found
              </h2>
              <p className="text-gray-600 font-light text-sm md:text-base">
                Please check the URL in the address bar and try again.
              </p>
            </div>
          </div>
          <Link href={"/"}>
            <a
              className="self-start border border-transparent w-full md:w-auto
            p-3 px-8 rounded-lg bg-indigo-600 text-white font-bold text-sm md:text-base 
            transition ease-in-out hover:bg-white hover:text-indigo-600 hover:border-indigo-600"
            >
              Back to home
            </a>
          </Link>
        </section>
      </div>
    </>
  );
};

export default ClientError;
