import MainBar from "@app/ondrej-sika.cz/components/MainBar";
import Markdown from "@app/common/components/Markdown";

import Head from "next/head";

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
