import "@app/sika-kraml.de/css";
import Header from "@app/ondrej-sika.cz/components/Header";
import UpcomingSessions from "@app/sika-kraml.de/components/UpcomingSessions";
import Head from "next/head";

let site = {
  lang: "de"
};

let style = {
  fontSize: "1.4em",
  fontWeight: "bold"
};

const Index = () => (
  <div>
    <Head></Head>
    <Header websiteHeader="Termine" />
    <div className="container">
      <UpcomingSessions lang={site.lang} />
    </div>
  </div>
);

export default Index;
