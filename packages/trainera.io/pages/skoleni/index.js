import React from "react";
import LectureTraineraBar from "@app/ondrejsika-theme/components/LectureTraineraBar";
import MainBar from "@app/ondrejsika-theme/components/MainBar";

import Head from "next/head";

const Index = () => (
  <div>
    <Head>
      <title>Školení - Ondřej Šika</title>
    </Head>
    <MainBar header="Nabídka Školení" />
    <div className="container">
      <LectureTraineraBar LectureImgHeader="Kurzy co školímeeeee" />
    </div>
  </div>
);

export default Index;
