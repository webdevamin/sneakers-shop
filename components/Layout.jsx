import Header from "./Header";
import React from "react";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex grow">{children}</main>
    </>
  );
};

export default Layout;
