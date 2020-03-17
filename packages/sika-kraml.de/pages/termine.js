import "@app/sika-kraml.de/css";
import Header from "@app/ondrejsika-theme/components/Header";
import UpcomingSessions from "@app/ondrejsika-theme/components/UpcomingSessions";
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
    <Head>
      <title>
        Termine - Sika Kraml - IT Schulungen, Workshops und Beratung
      </title>
    </Head>
    <Header websiteHeader="Termine" />
    <div className="container">
      <UpcomingSessions
        hide_add_to_google_calendar={true}
        site_name="sika-kraml.de"
        inquiry_email="schulungen@sika-kraml.de"
        lang={site.lang}
        location={site.lang}
      />
    </div>
  </div>
);

export default Index;
