import MainBar from "@app/ondrej-sika.cz/components/MainBar";
import Markdown from "@app/common/components/Markdown";

import Head from "next/head";

const Install = () => (
  <div>
    <Head>
      <title>Návody - Ondrej Sika</title>
    </Head>
    <MainBar MainBarHeader="Návody"></MainBar>

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
- [Hooks](/git/hooks)

### Ostatní

- [Brew (Homebrew)](/navody/brew) - Package manager pro Mac
- [Chocolatey](/navody/chocolatey) - Package manager pro Windows
`}
      />
    </div>
  </div>
);

export default Install;
