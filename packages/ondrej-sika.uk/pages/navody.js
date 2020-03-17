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
    <MainBar header="Návody"></MainBar>

    <div className="container pt-4 pb-2">
      <Markdown
        source={`
### Docker

- [Instalace](/docker/instalace)

### Kubernetes

- [Instalace](/kubernetes/instalace)

### Git

- [Instalace](/git/instalace)
- [Rebase](/git/rebase)
`}
      />
    </div>
  </div>
);

export default Install;
