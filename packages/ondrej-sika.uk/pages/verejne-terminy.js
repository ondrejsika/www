import CourseBar from "@app/ondrejsika-theme/components/CourseBar";
import React from "react";
import MainBar from "@app/ondrejsika-theme/components/MainBar";
import TextWithImg from "@app/ondrejsika-theme/components/TextWithImg";
import StatisticBar from "@app/ondrejsika-theme/components/StatisticBar";
import CompaniesBar from "@app/ondrejsika-theme/components/CompaniesBar";

import UpcomingSessions from "@app/ondrejsika-theme/components/UpcomingSessions";

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
    <MainBar header="Veřejné termíny školení" />
    <div className="container">
      <UpcomingSessions lang={site.lang} />
    </div>
  </div>
);

export default Index;
