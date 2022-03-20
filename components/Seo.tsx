import { FunctionComponent } from "react";
import Head from "next/head";

type Props = {
  title?: string;
  description?: string;
};

const defaultTitle: string = "Shoes to fall over | Super Duper Sneaker Shop";
const defaultDescription: string =
  "The best shoes you can find are here! Enjoy top notch strawberry cheesecakes! All kinds of everything!";

const Seo: FunctionComponent<Props> = ({ title, description }) => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <title>
        {title ? `${title} | Super Duper Sneaker Shop` : defaultTitle}
      </title>
      <meta name="description" content={description ?? defaultDescription} />
    </Head>
  );
};

export default Seo;
