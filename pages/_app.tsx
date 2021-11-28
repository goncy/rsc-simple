import type {AppProps} from "next/app";

import {Suspense} from "react";

import Spinner from "../components/spinner";
import SystemInfo from "../components/server-info.server";
import Page from "../components/page.client";
import Footer from "../components/footer.client";

export default function App({Component, pageProps}: AppProps) {
  return (
    <Page>
      <Suspense fallback={<Spinner />}>
        <Component {...pageProps} />
      </Suspense>
      <Footer />
      <SystemInfo />
    </Page>
  );
}
