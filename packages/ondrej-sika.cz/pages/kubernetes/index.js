import MainBar from "@app/ondrej-sika.cz/components/MainBar";
import Markdown from "@app/common/components/Markdown";

import Head from "next/head";

const Install = () => (
  <div>
    <Head>
      <title>Kubernetes - Ondřej Šika</title>
    </Head>
    <MainBar MainBarHeader="Kubernetes"></MainBar>

    <div className="container pt-4 pb-2">
      <Markdown
        source={`
- [Instalace](/kubernetes/instalace)
`}
      />
    </div>
  </div>
);

export default Install;
