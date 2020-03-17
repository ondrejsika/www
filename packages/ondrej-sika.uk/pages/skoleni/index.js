import React from "react";
import LectureImg from "@app/ondrejsika-theme/components/LectureImg";
import MainBar from "@app/ondrejsika-theme/components/MainBar";
import TextWithImg from "@app/ondrejsika-theme/components/TextWithImg";
import StatisticBar from "@app/ondrejsika-theme/components/StatisticBar";
import CompaniesBar from "@app/ondrejsika-theme/components/CompaniesBar";

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
    <MainBar header="Nabídka Školení" />
    <div className="container">
      <LectureImg LectureImgHeader="Kurzy co školím" />
    </div>
  </div>
);

export default Index;
