import React from "react";
import TraineraCourseBar from "@app/ondrejsika-theme/components/TraineraCourseBar";
import MainBar from "@app/ondrejsika-theme/components/MainBar";

import Head from "next/head";

const Index = () => (
  <div>
    <Head>
      <title>Školení - Ondřej Šika</title>
    </Head>
    <MainBar header="Nabídka Školení" />
    <div className="container">
      <TraineraCourseBar LectureImgHeader="Kurzy co školímeeeee" />
    </div>
  </div>
);

export default Index;
