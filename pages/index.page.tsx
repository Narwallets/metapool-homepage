import type { NextPage } from "next";
import Head from "next/head";

import Home from "./Home/index.page";

const App: NextPage = () => {
  return (
    <>
      <Head>
        <title>Meta Pool - liquid staking on NEAR blockchain - stNEAR</title>
      </Head>
      <Home />
    </>
  );
};

export default App;
