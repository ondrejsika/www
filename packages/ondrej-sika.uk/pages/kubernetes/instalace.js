import MainBar from "@app/ondrejsika-theme/components/MainBar";
import TextWithImg from "@app/ondrejsika-theme/components/TextWithImg";
import StatisticBar from "@app/ondrejsika-theme/components/StatisticBar";
import CompaniesBar from "@app/ondrejsika-theme/components/CompaniesBar";

import Markdown from "@app/common/components/Markdown";

import Head from "next/head";

let site = {
  lang: "cs"
};

let style = {
  fontSize: "1.4em",
  fontWeight: "bold"
};

const Install = () => (
  <div>
    <Head></Head>
    <MainBar header="Instalace Kubernetes pro lokalni vyvoj"></MainBar>

    <div className="container pt-4 pb-2">
      <Markdown
        source={`
Navod mam popsany v [repozitari s kurzem](https://github.com/ondrejsika/kubernetes-training-examples#install).
`}
      />
    </div>
  </div>
);

export default Install;
