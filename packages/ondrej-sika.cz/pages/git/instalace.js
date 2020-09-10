import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";

const Page = () => (
  <Article
    title="Instalace Gitu"
    ad="git"
    markdown={`
### Linux

Příkazem

    apt install git

### macOS

Příkazem

    brew install git

Pokud nemáte __brew__, můžete ho naistalovat z oficiálního webu [brew.sh](https://brew.sh)


### Windows

Stáhnout installer z oficiálních stránek [git-scm.com](https://git-scm.com)

nebo použít package manager [Chocolatey](https://chocolatey.org/)

    choco install git

`}
  />
);

export default Page;
