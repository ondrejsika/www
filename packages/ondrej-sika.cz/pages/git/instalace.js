import MainBar from "@app/ondrej-sika.cz/components/MainBar";
import Markdown from "@app/common/components/Markdown";

import Head from "next/head";

const Install = () => (
  <div>
    <Head>
      <title>Instalace Git- Ondřej Šika</title>
    </Head>
    <MainBar MainBarHeader="Instalace Gitu"></MainBar>

    <div className="container pt-4 pb-2">
      <Markdown
        source={`
### Linux

Prikazem

    apt install git

### macOS

Prikazem

    brew install git

Pokud nemate __brew__, muzete ho naistalovat z oficialniho webu [brew.sh](https://brew.sh)


### Windows

Stahnout installer z oficialnich stranek [git-scm.com](https://git-scm.com)

nebo pouzit package manager [Chocolatey](https://chocolatey.org/)

    choco install git

`}
      />
    </div>
  </div>
);

export default Install;
