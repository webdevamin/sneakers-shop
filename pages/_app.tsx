import type { AppProps } from "next/app";
import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import FiltersContextProvider from "../context/FiltersContext";

config.autoAddCss = false;

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <FiltersContextProvider>
      <Component {...pageProps} />
    </FiltersContextProvider>
  );
}
