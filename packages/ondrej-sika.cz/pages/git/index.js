import MainBar from "@app/ondrej-sika.cz/components/MainBar";
import TextWithImg from "@app/ondrej-sika.cz/components/TextWithImg";
import StatisticBar from "@app/ondrej-sika.cz/components/StatisticBar";
import CompaniesBar from "@app/ondrej-sika.cz/components/CompaniesBar";
import CompaniesBar1 from "@app/ondrej-sika.cz/static/webglobe-yegon-sq.png";
import Markdown from "@app/common/components/Markdown";

import Head from "next/head";

const Install = () => (
  <div>
    <Head>
      <title>Git - Ondřej Šika</title>
    </Head>
    <MainBar MainBarHeader="Git"></MainBar>

    <div className="container pt-4 pb-2">
      <Markdown
        source={`
- [Instalace](/git/instalace)
- [Rebase](/git/rebase)
- [Hooks](/git/hooks)
`}
      />
    </div>
  </div>
);

export default Install;
