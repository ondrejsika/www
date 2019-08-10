import Article from "@app/ondrej-sika.cz/layouts/Article";

export default () => (
  <Article
    title="Instalace Gitu"
    markdown={`
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
);
