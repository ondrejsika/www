import LectureImgMdLg from "@app/ondrej-sika.cz/components/LectureImgMdLg";
import LectureImgSm from "@app/ondrej-sika.cz/components/LectureImgSm";
import MainBar from "@app/ondrej-sika.cz/components/MainBar";

import Head from "next/head";

const Index = props => (
  <div>
    <Head>
      <title>Training - Ondřej Šika</title>
    </Head>
    <MainBar MainBarHeader="Training" />
    <div className="container">
      <LectureImgMdLg lang={props.site.lang} LectureImgHeader="My Training" />
      <LectureImgSm lang={props.site.lang} LectureImgHeader="My Training" />
    </div>
  </div>
);

export default Index;
