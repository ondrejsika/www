import LectureImg from "@app/ondrej-sika.cz/components/LectureImg";
import MainBar from "@app/ondrej-sika.cz/components/MainBar";

import Head from "next/head";

const Index = props => (
  <div>
    <Head>
      <title>Training - Ondřej Šika</title>
    </Head>
    <MainBar MainBarHeader="Training" />
    <div className="container">
      <LectureImg lang={props.site.lang} LectureImgHeader="My Training" />
    </div>
  </div>
);

export default Index;
