import LectureImg from "@app/ondrejsika-theme/components/LectureImg";
import MainBar from "@app/ondrejsika-theme/components/MainBar";

import Head from "next/head";

const Index = () => (
  <div>
    <Head>
      <title>Školení - Ondřej Šika</title>
    </Head>
    <MainBar header="Nabídka Školení" />
    <div className="container">
      <LectureImg LectureImgHeader="Kurzy co školím" />
    </div>
  </div>
);

export default Index;
