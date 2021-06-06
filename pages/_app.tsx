import type { AppProps } from "next/app";
import Head from "next/head";
import GlobalStyle from "../styles/global";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Github Search</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />{" "}
    </>
  );
}
export default MyApp;
