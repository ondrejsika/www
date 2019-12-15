import LectureImg from "@app/ondrej-sika.cz/components/LectureImg";
import MainBar from "@app/ondrej-sika.cz/components/MainBar";

import Head from "next/head";

const Index = () => (
  <div>
    <Head>
      <title>Školení - Ondřej Šika</title>
    </Head>
    <MainBar MainBarHeader="Nabídka Školení" />
    <div className="container">
      <LectureImg LectureImgHeader="Kurzy co školím" />
    </div>
  </div>
);

export default Index;
