import React from "react";
import CourseBar from "@app/ondrejsika-theme/components/CourseBar";
import MainBar from "@app/ondrejsika-theme/components/MainBar";

import Head from "next/head";

const Index = (props) => (
  <div>
    <Head>
      <title>Training - Ondřej Šika</title>
    </Head>
    <MainBar header="Training" />
    <div className="container">
      <CourseBar lang={props.site.lang} LectureImgHeader="My Training" />
    </div>
  </div>
);

export default Index;
