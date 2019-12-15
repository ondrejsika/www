import LectureImg from "@app/ondrej-sika.cz/components/LectureImg";
import MainBar from "@app/ondrej-sika.cz/components/MainBar";
import TextWithImg from "@app/ondrej-sika.cz/components/TextWithImg";
import StatisticBar from "@app/ondrej-sika.cz/components/StatisticBar";
import CompaniesBar from "@app/ondrej-sika.cz/components/CompaniesBar";

import UpcomingSessions from "@app/ondrej-sika.cz/components/UpcomingSessions";

import Head from "next/head";

let site = {
  lang: "cs"
};

let style = {
  fontSize: "1.4em",
  fontWeight: "bold"
};

const Index = () => (
  <div>
    <Head></Head>
    <MainBar MainBarHeader="Veřejné termíny školení" />
    <div className="container">
      <UpcomingSessions lang={site.lang} />
    </div>
  </div>
);

export default Index;
