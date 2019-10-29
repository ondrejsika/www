import MainBar from "@app/ondrej-sika.cz/components/MainBar";

import UpcomingSessions from "@app/ondrej-sika.cz/components/UpcomingSessions";

import Head from "next/head";

const Index = props => (
  <div>
    <Head>
      <title>Upcoming Sessions - Ondrej Sika</title>
    </Head>
    <MainBar MainBarHeader="Upcoming Sessions" />
    <div className="container pt-4">
      <UpcomingSessions lang={props.site.lang} />
    </div>
  </div>
);

export default Index;
