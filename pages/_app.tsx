import type { AppProps } from "next/app";
import Script from "next/script";
import Head from "next/head";

// Import css files

import "../styles/globals.scss";
import { Provider } from "jotai";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Script src="vendor/jquery/jquery.min.js" />
      <Script src="vendor/bootstrap/js/bootstrap.bundle.min.js" />
      <Provider>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
