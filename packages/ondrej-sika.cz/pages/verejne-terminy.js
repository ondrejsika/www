import MainBar from "@app/ondrej-sika.cz/components/MainBar";

import UpcomingSessions from "@app/ondrej-sika.cz/components/UpcomingSessions";

import Head from "next/head";

import site from "@app/ondrej-sika.cz/config";

let style = {
  fontSize: "1.4em",
  fontWeight: "bold"
};

const Index = () => (
  <div>
    <Head>
      <title>Veřejné termíny - Ondrej Sika</title>
    </Head>
    <MainBar MainBarHeader="Veřejné termíny školení" />
    <div className="container pt-4">
      <UpcomingSessions lang={site.lang} />
    </div>
  </div>
);

export default Index;
