import MainBar from "@app/ondrejsika-theme/components/MainBar";
import UpcomingSessions from "@app/ondrejsika-theme/components/UpcomingSessions";
import Head from "next/head";

const Index = props => (
  <div>
    <Head>
      <title>Upcoming Sessions - Ondrej Sika</title>
    </Head>
    <MainBar header="Upcoming Sessions" />
    <div className="container pt-4">
      <UpcomingSessions lang={props.site.lang} />
    </div>
  </div>
);

export default Index;
