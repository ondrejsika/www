import MainBar from "@app/ondrej-sika.cz/components/MainBar";
import TextWithImg from "@app/ondrej-sika.cz/components/TextWithImg";
import StatisticBar from "@app/ondrej-sika.cz/components/StatisticBar";
import CompaniesBar from "@app/ondrej-sika.cz/components/CompaniesBar";
import CompaniesBar1 from "@app/ondrej-sika.cz/static/webglobe-yegon-sq.png";
import Markdown from "@app/common/components/Markdown";

import Head from "next/head";

import site from "@app/ondrej-sika.cz/config";

let style = {
  fontSize: "1.4em",
  fontWeight: "bold"
};

const Install = () => (
  <div>
    <Head>
      <title>Docker - Ondřej Šika</title>
    </Head>
    <MainBar MainBarHeader="Docker"></MainBar>

    <div className="container pt-4 pb-2">
      <Markdown
        source={`
- [Instalace](/docker/instalace)
`}
      />
    </div>
  </div>
);

export default Install;
